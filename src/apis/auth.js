import axios from "axios";
//const backendUrl = process.env.REACT_APP_BACKEND_URL;
const backendUrl = 'http://localhost:7000/api/v1';

export const signupUser = async({ name, mobile , email, password }) => {
    try {
        const requestUrl = `${backendUrl}/auth/signup`;
        const requestPayload = { name, mobile , email, password };
        const response = await axios.post(requestUrl, requestPayload);
        return response.data;
    } catch (error) {
        return;
    }
}

export const loginUser = async({ email, password }) => {
    try {
        const requestUrl = `${backendUrl}/auth/login`;
        const requestPayload = {  email, password };
        const response = await axios.post(requestUrl, requestPayload);
        return response.data;
    } catch (error) {
        return;
    }
}