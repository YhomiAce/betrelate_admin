require("dotenv").config();
const axios = require("axios");

const Service = {
    Client: {
        url: process.env.CLIENT_URL,
        async getAllEnrolledUsers() {
            try {
                const url = `${this.url}/enrolled/users`;
                const headers = { accept: "application/json" };
                const response = await axios.get(url, { headers });
                console.log(response.data);
                return response.data;
            } catch (error) {
                console.log(error);
                const externalError = new Error(error.response.data.message);
                externalError.status = error.response.status;
                throw externalError;
            }
        },
        async addBookToCatalogue(payload) {
            try {
                const url = `${this.url}/catalogue/add-book`;
                const headers = { accept: "application/json" };
                const response = await axios.post(url, payload, { headers });
                console.log(response.data);
                return response.data;
            } catch (error) {
                console.log(error);
                const externalError = new Error(error.response.data.message);
                externalError.status = error.response.status;
                throw externalError;
            }
        },
        async removeBookFromCatalogue(bookId) {
            try {
                const url = `${this.url}/catalogue/remove-book/${bookId}`;
                const headers = { accept: "application/json" };
                const response = await axios.delete(url, { headers });
                console.log(response.data);
                return response.data;
            } catch (error) {
                console.log(error);
                const externalError = new Error(error.response.data.message);
                externalError.status = error.response.status;
                throw externalError;
            }
        },
        
    },
};

module.exports = Service