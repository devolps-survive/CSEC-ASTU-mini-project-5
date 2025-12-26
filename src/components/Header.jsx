import { useTasks } from "../store/taskContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { darkMode, setDarkMode } = useTasks();

  return (
    <header className={darkMode ? "dark" : ""}>
      <h1>Task Tracker</h1>

      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/stats">Stats</Link>
      </nav>
    </header>
  );
};

export default Header;
