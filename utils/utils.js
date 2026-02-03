// Tomas
const axios = require('axios');

async function fetchData(url) {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error('Error:', error.message);
        return { error: 'No se han encontrado los libros' };
    }
}

module.exports = fetchData;
