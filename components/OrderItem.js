import Link from 'next/link';

const OrderItem = ({ order }) => {
  return (
    <li className="border p-4 mb-2">
      <Link href={`/orders/${order.id}`}>
        <div>
          <h2 className="text-xl font-bold">{order.customer}</h2>
          <p>Status: {order.status}</p>
          <p>Items: {order.items.length}</p>
        </div>
      </Link>
    </li>
  );
};

export default OrderItem;
