import { useTheme } from '../contexts/ThemeContext';

const Sidebar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="p-4">
      <p>Modo actual: {theme}</p>
      <button
        onClick={toggleTheme}
        className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
      >
        Cambiar a {theme === 'light' ? 'oscuro' : 'claro'}
      </button>
    </div>
  );
};

export default Sidebar;
