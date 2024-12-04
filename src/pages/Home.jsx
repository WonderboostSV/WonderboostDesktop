import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <Sidebar />
      <h1 className="text-4xl text-gray-800 dark:text-gray-200">
        ¡Hola desde Electron con React y Tailwind!
      </h1>
      <div className="debug-dark-mode">
        Test modo oscuro
      </div>
    </div>
  );
};

export default Home;
