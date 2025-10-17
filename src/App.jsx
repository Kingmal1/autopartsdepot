import { useState } from "react";
import "./App.css";
import productsData from "./products";
import PaystackButton from "./PaystackButton";

function App() {
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const categories = ["All", ...new Set(productsData.map((p) => p.category))];

  const filteredProducts = productsData.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category === "All" || p.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div style={{ fontFamily: "Poppins, sans-serif", padding: "20px", backgroundColor: "#fafafa" }}>
      <h1 style={{ textAlign: "center", color: "#ff6600" }}>AutoPartsDepot</h1>
      <p style={{ textAlign: "center", color: "#555", marginBottom: "20px" }}>
        Ghana’s trusted source for genuine auto parts
      </p>

      {/* Search & Filter Controls */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          marginBottom: "20px",
          flexWrap: "wrap",
        }}
      >
        <input
          type="text"
          placeholder="Search for a part..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            width: "250px",
          }}
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        >
          {categories.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </div>

      {/* Product Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {filteredProducts.map((p) => (
          <div
            key={p.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "15px",
              background: "white",
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
            }}
          >
            <img src={p.image} alt={p.name} width="100%" style={{ borderRadius: "10px" }} />
            <h3 style={{ marginTop: "10px", color: "#222" }}>{p.name}</h3>
            <p style={{ color: "#666", fontSize: "14px" }}>{p.description}</p>
            <p style={{ fontWeight: "bold", color: "#ff6600" }}>₵{p.price}</p>
            <button
              onClick={() => addToCart(p)}
              style={{
                background: "#ff6600",
                color: "white",
                border: "none",
                padding: "8px 12px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Cart Summary */}
      <div style={{ marginTop: "40px", textAlign: "center" }}>
        <h2>🛒 Cart: {cart.length} items</h2>
        <h3>Total: ₵{total}</h3>
        {cart.length > 0 && <PaystackButton amount={total} />}
      </div>
    </div>
  );
}

export default App;