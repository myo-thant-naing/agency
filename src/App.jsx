import { useState } from "react";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import Hero from "./components/Hero";

const App = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light",
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <div className=" dark:bg-black relative">
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
    </div>
  );
};

export default App;
