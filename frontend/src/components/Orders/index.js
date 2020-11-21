/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import { Container, Card } from './styles';

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function LoadMenus() {
      const response = await api.get('/orders');

      setOrders(response.data);
    }
    LoadMenus();
  }, []);
  return (
    <Container>
      {orders.map((order) => (
        <Card key={order._id} status={order.status}>
          <header>
            <h3>
              Pedido <strong>#{order._id.substr(0, 10)}</strong>
            </h3>
            <small>Mesa #{order.table}</small>
          </header>
          <p>{order.description}</p>
          <select value={order.status}>
            <option value="PENDING">Pendente</option>
            <option value="PREPARING">Preparando</option>
            <option value="DONE">Finalizado</option>
          </select>
        </Card>
      ))}
    </Container>
  );
}
