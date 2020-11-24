import React, { useState, useEffect } from 'react';
import socketIo from 'socket.io-client';

import api from '../../services/api';

import { Container, Card } from './styles';

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const socket = socketIo('http://localhost:3333', {
      transports: ['websocket'],
    });
    socket.on('newOrder', (order) => {
      setOrders((prevStatus) => [order, ...prevStatus]);
    });

    socket.on('statusChange', (updateOrder) => {
      setOrders((prevStatus) =>
        prevStatus.map((order) =>
          order._id === updateOrder._id ? updateOrder : order
        )
      );
    });
  }, []);

  useEffect(() => {
    api.get('/orders').then((response) => {
      setOrders(response.data);
    });
  }, []);

  function handleStatusChange(status, order) {
    fetch(`http://localhost:3333/orders/${order._id}/status`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status }),
    });
  }

  return (
    <Container>
      {orders.map((order) => (
        <Card key={order._id} status={order.status}>
          <header>
            <h3>
              Pedido <strong>#{order._id.substr(0, 13)}</strong>
            </h3>
            <small>Mesa #{order.table}</small>
          </header>
          <p>{order.description}</p>
          <select
            value={order.status}
            onChange={({ target: { value } }) =>
              handleStatusChange(value, order)
            }
          >
            <option value="PENDING">Pendente</option>
            <option value="PREPARING">Preparando</option>
            <option value="DONE">Finalizado</option>
          </select>
        </Card>
      ))}
    </Container>
  );
}
