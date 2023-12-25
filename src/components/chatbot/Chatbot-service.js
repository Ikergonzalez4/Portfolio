/*import axios from 'axios';

export const sendMessage = async (message) => {
    try {
        const response = await axios.get('https://api.wit.ai/message', {
            params: {
                v: '20200513', // Versión de la API de Wit.ai
                q: message, // El mensaje que el usuario envió
            },
            headers: {
                Authorization: 'Bearer JXVAWHJ34L6T7T3SOQ6DTCYSYAEPYPU6', // Reemplaza esto con tu token de Wit.ai
            },
        });

        // La respuesta de Wit.ai se encuentra en response.data
        // Aquí es donde deberías procesar la respuesta y decidir qué responder.
        // Por ahora, solo devolveremos el primer valor de la propiedad 'role' del primer 'entity' si existe, de lo contrario, devolveremos un mensaje predeterminado.
        const firstEntityName = response.data.entities && Object.keys(response.data.entities)[0];
        const firstEntity = firstEntityName && response.data.entities[firstEntityName][0];
        if (firstEntity && firstEntity.role) {
            return firstEntity.role || 'No entendí eso, por favor intenta de nuevo.';
        } else {
            return 'No entendí eso, por favor intenta de nuevo.';
        }
    } catch (error) {
        if (error.response) {
            console.error('Error al enviar el mensaje:', error.response.data);
        } else if (error.request) {
            console.error('No se recibió respuesta:', error.request);
        } else {
            console.error('Error al configurar la solicitud:', error.message);
        }
        return "Sorry the chat isn't working at this moment.";
    }
}; */