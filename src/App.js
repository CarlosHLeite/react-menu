import "./App.css";
import Menu from "./components/Menu";
import Categories from "./components/Categories";

import data from "./data/data";
import { useState } from "react";

const allCategories = ["all", ...new Set(data.map((item) => item.category))];

console.log(allCategories);
function App() {
  const [menuItems, setMenuItems] = useState(data);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
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
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
