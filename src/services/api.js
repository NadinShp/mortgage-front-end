import axios from 'axios';

const BASE_URL = 'https://mortgage-nodejs.herokuapp.com';

const ApiRequest = {
    fetchAllBanks() {
        return axios
        .get(`${BASE_URL}/banks`)
        .then(response => response.data.data.result);
    },
    fetchBankById(id) {
        return axios
        .get(`${BASE_URL}/banks/${id}`)
        .then(response => response.data.data.result);
    },
    fetchAddBank(newBank){
        return axios
        .post(`${BASE_URL}/banks/`, newBank)
        .then(response => response.data.data.result);
    },
    fetchDeleteBank(id){
        return axios
        .delete(`${BASE_URL}/banks/${id}`)
        .then(response => response.data.data.result);
    },
    fetchUpdateBank(id, data){
        return axios
        .put(`${BASE_URL}/banks/${id}`, data)
        .then(response => response.data.data.result);
    }
};

export default ApiRequest;

// const options = {
//   method: 'GET',
//   url: 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/GBP/en-GB/',
//   params: {query: 'Stockholm'},
//   headers: {
//     'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
//     'x-rapidapi-key': 'SIGN-UP-FOR-KEY'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });