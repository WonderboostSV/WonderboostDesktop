import React, { useState, useEffect } from 'react';
import { useTheme } from './contexts/ThemeContext';
import FetchData from './layouts/FetchData'; // Importar la función personalizada
import PrimerUso from './pages/PrimerUso';
import Login from './pages/Login';
import Home from './pages/Home';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'; // Estilos del skeleton

const App = () => {
  const { toggleTheme } = useTheme();
  const [isLoading, setIsLoading] = useState(true);
  const [view, setView] = useState(null); // Estados posibles: 'primera-uso', 'login', 'home'
  const FilenameAuth = 'admin/administradores';
  const FilenameNoAuth = 'public/admin/administradores';

  useEffect(() => {
    const initializeApp = async () => {
        try {
            // Primera petición: verificar sesión activa
            const session = await FetchData(FilenameAuth, 'getUser', 'R');
            if (session.status === 1) {
                setView('home');
                return; // Termina si la sesión es válida
            }
        } catch (error) {
            if (error.message.includes('403')) {
                console.warn('Sesión no activa, intentando verificar usuarios...');
            } else {
                console.error('Error al verificar sesión:', error);
                return; // Si el error no es manejable, detén el flujo
            }
        }

        try {
            // Segunda petición: verificar si hay usuarios creados
            const users = await FetchData(FilenameNoAuth, 'countAll', 'R');
            setView(users.status === 0 ? 'primer-uso' : 'login');
        } catch (error) {
            console.error('Error al verificar usuarios:', error);
        } finally {
            setIsLoading(false);
        }
    };

    initializeApp();

    if (window.electron) {
        window.electron.toggleTheme(() => toggleTheme());
    }
}, [toggleTheme]);


  if (isLoading) {
    return (
      <div style={{ padding: '20px' }}>
        <Skeleton count={5} height={40} />
        <Skeleton circle={true} height={50} width={50} />
      </div>
    );
  }

  if (view === 'primer-uso') {
    return <PrimerUso />;
  }

  if (view === 'login') {
    return <Login />;
  }

  return <Home />;
};

export default App;
