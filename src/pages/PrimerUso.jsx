import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const PrimerUso = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <div className="h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
            <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-5xl shadow-lg rounded-lg overflow-hidden">
                {/* Sección izquierda con imagen */}
                <div className="hidden md:block bg-yellow-500">
                    <img
                        src="/src/assets/leftSignUp.avif"
                        alt="Registro"
                        className="h-full w-full object-cover"
                    />
                </div>

                {/* Sección derecha con el formulario */}
                <div className="bg-white dark:bg-gray-800 p-8 flex flex-col justify-center">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                        CREA TU CUENTA AHORA
                    </h2>
                    <form className="space-y-4">
                        {/* Campo Usuario */}
                        <div>
                            <label
                                htmlFor="username"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                            >
                                Usuario:
                            </label>
                            <input
                                type="text"
                                id="username"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-200"
                                placeholder="Tu usuario"
                            />
                        </div>

                        {/* Campo Correo */}
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                            >
                                Correo:
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-200"
                                placeholder="Tu correo"
                            />
                        </div>

                        {/* Campo Contraseña */}
                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                            >
                                Contraseña:
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-200"
                                    placeholder="Tu contraseña"
                                />
                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-3 flex items-center"
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

                        {/* Campo Repetir Contraseña */}
                        <div>
                            <label
                                htmlFor="confirm-password"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                            >
                                Repite la clave:
                            </label>
                            <div className="relative">
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    id="confirm-password"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-200"
                                    placeholder="Repite tu contraseña"
                                />
                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-3 flex items-center"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                >
                                    {showConfirmPassword ? (
                                        <FaEyeSlash className="text-gray-500 dark:text-gray-400" />
                                    ) : (
                                        <FaEye className="text-gray-500 dark:text-gray-400" />
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Generar clave segura */}
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="generate-password"
                                className="w-4 h-4 text-yellow-500 border-gray-300 rounded focus:ring-yellow-500 dark:focus:ring-yellow-400 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label
                                htmlFor="generate-password"
                                className="ml-2 text-sm text-gray-700 dark:text-gray-300"
                            >
                                Generar clave segura
                            </label>
                        </div>

                        {/* Aceptar términos */}
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="terms"
                                className="w-4 h-4 text-yellow-500 border-gray-300 rounded focus:ring-yellow-500 dark:focus:ring-yellow-400 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label
                                htmlFor="terms"
                                className="ml-2 text-sm text-gray-700 dark:text-gray-300"
                            >
                                Acepto los términos y condiciones de uso.
                            </label>
                        </div>

                        {/* Botón de registro */}
                        <button
                            type="submit"
                            className="w-full bg-yellow-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:bg-yellow-400 dark:hover:bg-yellow-500"
                        >
                            Registrarse
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PrimerUso;
