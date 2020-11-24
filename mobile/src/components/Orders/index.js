import React, { useState, useEffect } from 'react';
import socketIo from 'socket.io-client';
import { View } from 'react-native';

import api from '../../services/api';

import { List, Card, Status, TableNumber, Description } from './styles';

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const socket = socketIo('http://192.168.100.4:3333', {
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

  return (
    <List
      showsVerticalScrollIndicator={false}
      data={orders}
      keyExtractor={(order) => order._id}
      renderItem={({ item: order }) => (
        <Card status={order.status}>
          <Description status={order.status}>{order.description}</Description>
          <View style={{ alignItems: 'center' }}>
            <Status status={order.status}>{order.status}</Status>
            <TableNumber status={order.status}>#{order.table}</TableNumber>
          </View>
        </Card>
      )}
    />
  );
}
