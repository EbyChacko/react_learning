import { useState } from "react";

const Day15 = () => {
  const [minPrice, setMinPrice] = useState(0);

  const products = [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Mouse", price: 50 },
    { id: 3, name: "Keyboard", price: 150 },
    { id: 4, name: "Monitor", price: 300 },
  ];

  const filteredProducts = products.filter((p) => p.price >= minPrice);

  return (
    <div className="wrapper">
      <h4 className="days">Day 15</h4>
      <h2>Product List</h2>
      <label>
        Minimum Price:
        <input
          type="text"
          value={minPrice}
          onChange={(e) => setMinPrice(Number(e.target.value))}
        />
      </label>
      <ul>
        {filteredProducts.map((p) => (
          <li key={p.id}>
            {p.name} - ${p.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Day15;