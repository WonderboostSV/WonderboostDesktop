import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className="h-screen flex bg-gray-100 dark:bg-gray-900">
            {/* Sección izquierda con la imagen */}
            <div className="hidden md:flex w-1/2 bg-cover bg-center" style={{ backgroundImage: `url('/src/assets/leftLogin.avif')` }}>
            </div>

            {/* Sección derecha del formulario */}
            <div className="w-full md:w-1/2 flex flex-col items-center justify-center px-8">
                {/* Logo */}
                <img
                    alt="Wonderboost"
                    src="/src/assets/logo.avif"
                    className="mb-6 h-12 w-auto"
                />

                {/* Título */}
                <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                    INICIO DE SESIÓN
                </h1>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                    Bienvenido a tu cuenta nuevamente
                </p>

                {/* Formulario */}
                <form className="w-full max-w-sm space-y-4">
                    {/* Campo de usuario */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Usuario:
                        </label>
                        <input
                            type="email"
                            placeholder="Ingresa tu usuario"
                            id="email"
                            className="w-full px-4 py-2 mt-1 bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-blue-500 focus:border-blue-500 focus:outline-none text-gray-900 dark:text-gray-200"
                        />
                    </div>

                    {/* Campo de contraseña */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Clave de acceso:
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                placeholder="Ingresa tu clave"
                                className="w-full px-4 py-2 mt-1 bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-blue-500 focus:border-blue-500 focus:outline-none text-gray-900 dark:text-gray-200"
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-3 flex items-center text-gray-500 dark:text-gray-400 focus:outline-none"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? (
                                    <FaEyeSlash className="text-gray-500 dark:text-gray-400" />
                                ) : (
                                    <FaEye className="text-gray-500 dark:text-gray-400" />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Botón de iniciar sesión */}
                    <button
                        type="submit"
                        className="w-full py-2 bg-yellow-500 hover:bg-yellow-600 text-white font-medium rounded-md transition duration-300"
                    >
                        INICIAR SESIÓN
                    </button>
                </form>

                {/* Opciones adicionales */}
                <div className="mt-4 text-sm text-gray-600 dark:text-gray-400 text-center">
                    <a href="#" className="hover:underline">
                        ¿Olvidó su clave?
                    </a>
                    <p className="mt-2">
                        ¿No tienes una cuenta?{' '}
                        <a href="#" className="text-blue-500 hover:underline">
                            ¡Crea hoy mismo tu cuenta!
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
