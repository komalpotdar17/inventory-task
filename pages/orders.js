import { useState, useEffect } from 'react';
import Link from 'next/link';
import ordersData from '../data/orders.json';
import OrderItem from '../components/OrderItem';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [filter, setFilter] = useState('All');
  const [sortKey, setSortKey] = useState('customer');

  useEffect(() => {
    setOrders(ordersData.orders);
  }, []);

  const filteredOrders = orders.filter(order =>
    filter === 'All' || order.status === filter
  );

  const sortedOrders = [...filteredOrders].sort((a, b) => {
    if (sortKey === 'customer') {
      return a.customer.localeCompare(b.customer);
    } else if (sortKey === 'itemCount') {
      return a.items.length - b.items.length;
    }
    return 0;
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl">
        <h1 className="text-2xl font-bold mb-4 text-center text-blue-500">Orders</h1>
        
        <div className="mb-4 flex items-center justify-center">
          <label className="mr-2">Filter by Status:</label>
          <select value={filter} onChange={(e) => setFilter(e.target.value)} className="border p-2 rounded">
            <option value="All">All</option>
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        <div className="mb-4 flex items-center justify-center">
          <label className="mr-2">Sort by:</label>
          <select value={sortKey} onChange={(e) => setSortKey(e.target.value)} className="border p-2 rounded">
            <option value="customer">Customer Name</option>
            <option value="itemCount">Item Count</option>
          </select>
        </div>

        <ul>
          {sortedOrders.map(order => (
            <OrderItem key={order.id} order={order} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Orders;
