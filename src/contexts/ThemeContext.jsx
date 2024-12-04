import { createContext, useState, useEffect, useContext } from 'react';

// Crear el contexto del tema
const ThemeContext = createContext();

// Proveedor del tema
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

    console.log('Valor guardado en localStorage:', localStorage.getItem('theme'));

    useEffect(() => {
        const initialTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.classList.add(initialTheme);
    }, []);


    // Aplicar el tema al DOM y sincronizar con localStorage
    useEffect(() => {
        const rootElement = document.documentElement;
        console.log(`Aplicando tema: ${theme}`);

        if (theme === 'dark') {
            rootElement.classList.add('dark');
            rootElement.classList.remove('light');
        } else {
            rootElement.classList.add('light');
            rootElement.classList.remove('dark');
        }

        // Guardar el estado del tema en localStorage
        localStorage.setItem('theme', theme);
    }, [theme]);

    // Escuchar el evento "toggle-theme" desde Electron
    useEffect(() => {
        const handleToggleTheme = () => {
            console.log('Evento toggle-theme recibido en ThemeContext');
            /*  setTheme((prevTheme) => {
                console.log(`Tema previo: ${prevTheme}, nuevo tema: ${prevTheme === 'dark' ? 'light' : 'dark'}`);
                return prevTheme === 'dark' ? 'light' : 'dark';
            }); */
            setTheme(theme === 'dark' ? 'light' : 'dark');
        };

        if (window.api) {
            window.api.on('toggle-theme', handleToggleTheme);
        } else {
            console.error('API no disponible en window');
        }

        // Cleanup para evitar fugas de memoria
        return () => {
            if (window.api) {
                window.api.removeListener('toggle-theme', handleToggleTheme);
            }
        };

    }, []);

    // Función para cambiar el tema manualmente
    const toggleTheme = () => {
        console.log('Cambiando tema manualmente');
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Hook personalizado para usar el contexto del tema
export const useTheme = () => useContext(ThemeContext);
