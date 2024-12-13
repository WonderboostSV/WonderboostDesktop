import { useState } from "react";
import FormRegistroCuentaAdministrador from "../components/Forms/FormPrimerUsoUsuario";
import FormRegistroDatosPersonales from "../components/Forms/FormPrimerUsoDatos";

const PrimerUso = () => {
    const [formStep, setFormStep] = useState(1); // 1 para registro de cuenta, 2 para datos personales

    const handleNextStep = () => {
        setFormStep(2); // Cambiar al siguiente formulario
    };

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
                <div>
                    {formStep === 1 ? (
                        <FormRegistroCuentaAdministrador onNext={handleNextStep} />
                    ) : (
                        <FormRegistroDatosPersonales />
                    )}
                </div>
            </div>
        </div>
    );
};

export default PrimerUso;
