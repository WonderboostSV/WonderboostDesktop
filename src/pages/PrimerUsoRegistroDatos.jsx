const RegistroDatosPersonales = () => {
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
                        REGISTRA TUS DATOS
                    </h2>
                    <form className="space-y-4">
                        {/* Campo Nombres */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label
                                    htmlFor="nombres"
                                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                                >
                                    Nombres:
                                </label>
                                <input
                                    type="text"
                                    id="nombres"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-200"
                                    placeholder="Tus nombres"
                                />
                            </div>

                            {/* Campo Apellidos */}
                            <div>
                                <label
                                    htmlFor="apellidos"
                                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                                >
                                    Apellidos:
                                </label>
                                <input
                                    type="text"
                                    id="apellidos"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-200"
                                    placeholder="Tus apellidos"
                                />
                            </div>
                        </div>

                        {/* Campo Teléfono */}
                        <div>
                            <label
                                htmlFor="telefono"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                            >
                                Teléfono:
                            </label>
                            <input
                                type="tel"
                                id="telefono"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-200"
                                placeholder="Tu teléfono"
                            />
                        </div>

                        {/* Campo DUI */}
                        <div>
                            <label
                                htmlFor="dui"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                            >
                                DUI:
                            </label>
                            <input
                                type="text"
                                id="dui"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-200"
                                placeholder="Tu DUI"
                            />
                        </div>

                        {/* Campo Dirección */}
                        <div>
                            <label
                                htmlFor="direccion"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                            >
                                Dirección:
                            </label>
                            <input
                                type="text"
                                id="direccion"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-200"
                                placeholder="Tu dirección"
                            />
                        </div>

                        {/* Campo Fecha de Nacimiento */}
                        <div>
                            <label
                                htmlFor="fecha-nacimiento"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                            >
                                Fecha de nacimiento:
                            </label>
                            <input
                                type="date"
                                id="fecha-nacimiento"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-200"
                            />
                        </div>

                        {/* Campo Foto */}
                        <div>
                            <label
                                htmlFor="foto"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                            >
                                Foto:
                            </label>
                            <div className="flex items-center">
                                <label
                                    htmlFor="upload-photo"
                                    className="cursor-pointer flex items-center justify-center w-20 h-20 bg-gray-200 dark:bg-gray-700 rounded-full border border-gray-300 dark:border-gray-600"
                                >
                                    <span className="text-gray-500 dark:text-gray-400">+</span>
                                </label>
                                <input type="file" id="upload-photo" className="hidden" />
                            </div>
                        </div>

                        {/* Botón de registro */}
                        <button
                            type="submit"
                            className="w-full bg-slate-900 dark:bg-yellow-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-slate-950 dark:hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        >
                            Registrarse
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegistroDatosPersonales;
