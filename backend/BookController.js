const axios = require('axios');
require('dotenv').config();

const apiKey = process.env.API_KEY;

module.exports = {
    async index(req, res) {
        const { query } = req;
        console.log(query);
        const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${query.q}&startIndex=${(query.page - 1) * 10}&key=${apiKey}`;

        try {
            const { data } = await axios.get(apiUrl);

            return res.send({ data }); 
        } catch (err) {
            console.log(err);
        }
        
    }
};