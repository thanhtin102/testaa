// App.js
import React, { useState } from "react";

const App = () => {
  const data = [
    "Nguyễn Văn A",
    "Trần Thị B",
    "Lê Văn C",
    "Phạm Thị D",
    "Nguyễn Thị Thanh Tín",
  ];

  const [searchTerm, setSearchTerm] = useState("");

  // Lọc danh sách theo từ khóa nhập
  const filteredData = data.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>🔍 Tìm kiếm tên</h2>
      <input
        type="text"
        placeholder="Nhập tên cần tìm..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: "10px",
          width: "300px",
          marginBottom: "20px",
          fontSize: "16px",
        }}
      />

      <ul>
        {filteredData.map((item, index) => (
          <li key={index} style={{ fontSize: "18px", marginBottom: "5px" }}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
