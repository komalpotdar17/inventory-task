import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import ordersData from '../../data/orders.json';

const OrderDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [order, setOrder] = useState(null);

  useEffect(() => {
    if (id) {
      const foundOrder = ordersData.orders.find(order => order.id === parseInt(id));
      setOrder(foundOrder);
    }
  }, [id]);

  if (!order) return <div>Loading...</div>;

  const markAsCompleted = () => {
    setOrder({ ...order, status: 'Completed' });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl">
        <h1 className="text-2xl font-bold mb-4 text-center text-blue-500">Order Details</h1>
        
        <div className="border p-4 mb-4">
          <h2 className="text-xl font-bold">{order.customer}</h2>
          <p>Status: {order.status}</p>
          <ul>
            {order.items.map(item => (
              <li key={item.id}>{item.name} - Quantity: {item.quantity}</li>
            ))}
          </ul>
          {order.status === 'Pending' && (
            <button onClick={markAsCompleted} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Mark as Completed
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
