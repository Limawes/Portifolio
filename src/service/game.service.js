import axios from 'axios'
const API_URL = 'https://games-test-api-81e9fb0d564a.herokuapp.com/api/data/'


const listar = async () => {
    const config = {
        timeout: 5000,
        headers: {
            "dev-email-address": 'wesleyaz0909@gmail.com',
        },
    }
    const url = API_URL

    try {
        return await axios.get(url, config)
    } catch (error) {
        return (error)
    }
}

const GameService = {
    listar,
}

export default GameService