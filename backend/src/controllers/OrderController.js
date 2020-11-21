/* eslint-disable class-methods-use-this */
const Order = require('../models/Order');

class OrderController {
  async index(request, response) {
    const orders = await Order.find();

    response.json(orders);
  }

  async store(request, response) {
    const { table, description } = request.body;

    if (!table || !description) {
      return response.status(400).json({ message: 'Validation fails' });
    }

    const order = await Order.create({
      table,
      description,
    });
    request.io.emit('newOrder', order);

    response.json(order);
  }

  async update(request, response) {
    const { id } = request.params;
    const { status } = request.body;

    if (!status) {
      return response.status(400).json({ message: 'Validation fails' });
    }

    const order = await Order.findByIdAndUpdate(
      { _id: id },
      { status },
      { new: true }
    );
    request.io.emit('statusChange', order);

    response.json(order);
  }

  async delete(request, response) {
    const { id } = request.params;

    await Order.deleteOne({ _id: id });

    return response.status(200).json({ message: 'Deleted Sucess' });
  }
}

module.exports = new OrderController();
