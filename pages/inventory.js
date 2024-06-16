import { useState, useEffect } from 'react';
import Link from 'next/link';
import inventoryData from '../data/orders.json'; // Assuming your data file is orders.json

const Inventory = () => {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState('All');
  const [newItem, setNewItem] = useState({ name: '', stock: 0 });

  useEffect(() => {
    setItems(inventoryData.items);
  }, []);

  const filteredItems = items.filter(item =>
    filter === 'All' || (filter === 'In Stock' && item.stock > 0) || (filter === 'Out of Stock' && item.stock === 0)
  );

  const addItem = () => {
    const newItemData = { ...newItem, id: items.length + 1 };
    setItems([...items, newItemData]);
    setNewItem({ name: '', stock: 0 });
  };

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewItem(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Inventory</h1>
      <div className="mb-4 flex items-center">
        {/* Correct usage of Link with passHref */}
        <Link href="/orders" passHref>
          <div className="text-blue-500 mr-2 cursor-pointer">View Orders</div>
        </Link>
        <label className="mr-2">Filter by Stock:</label>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="All">All</option>
          <option value="In Stock">In Stock</option>
          <option value="Out of Stock">Out of Stock</option>
        </select>
      </div>
      <ul>
        {filteredItems.map(item => (
          <li key={item.id} className="border p-4 mb-2 flex justify-between items-center">
            <div>
              <p className="font-bold">{item.name}</p>
              <p className="text-sm">Stock: {item.stock}</p>
            </div>
            <button
              onClick={() => deleteItem(item.id)}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <h2 className="text-xl font-bold mb-2">Add New Item</h2>
        <div className="flex gap-2">
          <input
            type="text"
            name="name"
            value={newItem.name}
            onChange={handleChange}
            placeholder="Item Name"
            className="border p-2 rounded"
          />
          <input
            type="number"
            name="stock"
            value={newItem.stock}
            onChange={handleChange}
            placeholder="Stock"
            className="border p-2 rounded"
          />
          <button
            onClick={addItem}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Add Item
          </button>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
