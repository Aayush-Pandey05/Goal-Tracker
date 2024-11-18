import React, { useState } from 'react';

const Checklist = () => {
  const [items, setItems] = useState([
    { id: 1, text: 'Set up React project', completed: true },
    { id: 2, text: 'Create components', completed: false },
    { id: 3, text: 'Style application', completed: false },
  ]);
  const [newItemText, setNewItemText] = useState('');

  const addItem = (e) => {
    e.preventDefault();
    if (newItemText.trim()) {
      setItems([
        ...items,
        {
          id: Date.now(),
          text: newItemText.trim(),
          completed: false,
        },
      ]);
      setNewItemText('');
    }
  };

  const toggleItem = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">My Checklist</h2>
      
      <form onSubmit={addItem} className="flex gap-2 mb-4">
        <input
          type="text"
          value={newItemText}
          onChange={(e) => setNewItemText(e.target.value)}
          placeholder="Add new item..."
          className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
        >
          Add
        </button>
      </form>

      <div className="space-y-2">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg group border"
          >
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => toggleItem(item.id)}
              className="w-5 h-5 cursor-pointer accent-blue-500"
            />
            <span
              className={`flex-1 ${
                item.completed ? 'line-through text-gray-500' : ''
              }`}
            >
              {item.text}
            </span>
            <button
              onClick={() => deleteItem(item.id)}
              className="px-2 py-1 text-red-500 rounded hover:bg-red-50"
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      <div className="mt-4 text-sm text-gray-600">
        {items.filter((item) => item.completed).length} of {items.length} tasks
        completed
      </div>
    </div>
  );
};

export default Checklist;