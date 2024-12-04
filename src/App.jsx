import Home from './pages/Home';
import { useEffect } from 'react';
import { useTheme } from './contexts/ThemeContext';

const App = () => {
  const { toggleTheme } = useTheme();

  useEffect(() => {
    if (window.electron) {
      window.electron.toggleTheme(() => {
        console.log('Evento toggle-theme recibido'); // Verifica si el mensaje llega
        toggleTheme(); // Cambiar el tema cuando se reciba el mensaje
      });
    }
  }, [toggleTheme]);

  return <Home />;
};

export default App;
