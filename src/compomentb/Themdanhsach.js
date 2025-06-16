// src/components/Themdanhsach.js
import React, { useState } from "react";

function Themdanhsach() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  const handleAdd = () => {
    if (newItem.trim() === "") return;
    setItems([...items, newItem]);
    setNewItem("");
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h3>📌 Thêm vào danh sách</h3>

      <input
        type="text"
        placeholder="Nhập mục mới..."
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        style={{ padding: "8px", width: "60%", marginRight: "10px" }}
      />

      <button onClick={handleAdd} style={{ padding: "8px 16px" }}>
        Thêm
      </button>

      <ul style={{ marginTop: "20px" }}>
        {items.map((item, index) => (
          <li key={index}>✅ {item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Themdanhsach;
