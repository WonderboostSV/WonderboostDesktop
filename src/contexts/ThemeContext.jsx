import { createContext, useState, useEffect, useContext } from 'react';

// Crear el contexto del tema
const ThemeContext = createContext();

// Proveedor del tema
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(
        localStorage.getItem('theme') || 'light' // Guardar el tema seleccionado en localStorage
    );
    
    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            console.log("Modo oscuro activado");
        } else {
            document.documentElement.classList.remove('dark');
            console.log("Modo claro activado");
        }
        localStorage.setItem('theme', theme);
    }, [theme]);


    const toggleTheme = () => {
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
