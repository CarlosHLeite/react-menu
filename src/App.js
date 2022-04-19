import "./App.css";
import Menu from "./components/Menu";
import Categories from "./components/Categories";

import data from "./data/data";
import { useState } from "react";

function App() {
  const [menuItems, setMenuItems] = useState(data);
  const [categories, setCategories] = useState([]);

  const filterItems = (category) => {
    if (category === "All") {
      setMenuItems(data);
      return;
    }
    const newItems = data.filter((item) => item.category === category);

    setMenuItems(newItems);
  };

  return (
    <main className="menu section">
      <section className="title">
        <h2>Our Menu</h2>
        <div className="underline"></div>
        <Categories filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
