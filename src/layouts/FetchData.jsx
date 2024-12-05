const SERVER_URL = 'http://localhost:3000/';

/**
 * Función asíncrona para realizar peticiones al servidor.
 * @param {string} filename - El endpoint al que se realizará la petición.
 * @param {string} action - Acción específica (e.g., logIn, signUp).
 * @param {string} method - Método HTTP en formato CRUD (C, R, U, D).
 * @param {Object|null} form - Datos opcionales a enviar en el cuerpo de la petición.
 * @returns {Promise<Object>} - Respuesta del servidor en formato JSON.
 */
const FetchData = async (filename, action, method, form = null) => {
    let httpMethod;
    switch (method.toUpperCase()) {
        case 'C':
            httpMethod = 'POST';
            break;
        case 'R':
            httpMethod = 'GET';
            break;
        case 'U':
            httpMethod = 'PUT';
            break;
        case 'D':
            httpMethod = 'DELETE';
            break;
        default:
            console.error('Método no válido');
            return;
    }

    const OPTIONS = {
        method: httpMethod,
        headers: {
            'Content-Type': 'application/json',
        },
    };

    if (form && (httpMethod === 'POST' || httpMethod === 'PUT' || httpMethod === 'DELETE')) {
        OPTIONS.body = JSON.stringify(form);
    }

    try {
        const PATH = new URL(SERVER_URL + filename);
        PATH.searchParams.append('action', action);

        const RESPONSE = await fetch(PATH.href, OPTIONS);
        if (!RESPONSE.ok) throw new Error(`Error: ${RESPONSE.status} - ${RESPONSE.statusText}`);

        // Parseo del JSON de la respuesta
        const DATA = await RESPONSE.json();
        // Si la respuesta es exitosa
        console.log('RESPONSE: ' , 
            ' Acción realizada: ', action,
            ' Ruta URL: ' , PATH.href,
            ' Datos: ', DATA.dataset,
            ' Estado: ', DATA.status,
            ' Mensaje: ', DATA.message,
            ' Error: ', DATA.error,
            ' Excepción: ' , DATA.exception,);
        return DATA;
    } catch (error) {
        // Verificar si el error es debido al servidor y hacer una segunda petición
        try {
            const PATH = new URL(SERVER_URL + filename);
            const RESPONSE = await fetch(PATH.href, OPTIONS);
            const errorText = await RESPONSE.text();
            console.log('Error en la respuesta del servidor:', errorText);

            // Intentar parsear el cuerpo de error como JSON
            const errorData = JSON.parse(errorText);

            // Si el cuerpo de error indica éxito, lo manejamos aquí
            if (errorData.status === 1) {
                console.log('El error retornado realmente es éxito. Procesando...');
                return errorData; // Devolvemos el objeto de éxito para su manejo
            }

            throw new Error(`Error retornado desde el servidor : ${errorData.error || "Error desconocido"}`);
        } catch (responseError) {
            console.log('Fallo en la respuesta de la petición:', responseError);
        }

        // Lanzar el error original para que sea manejado por quien llama a esta función
        throw error;
    }
};

export default FetchData;
