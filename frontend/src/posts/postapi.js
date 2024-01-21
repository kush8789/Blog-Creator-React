import axios from "axios";
import { Cookies } from "react-cookie";

const cookie = new Cookies();

class POSTAPI {
    static baseUrl = "http://127.0.0.1:8000/posts";

    static async postcreate(body) {
        const access_token = cookie.get("accesstoken");
        console.log(access_token);
        try {
            const response = await axios.post(`${this.baseUrl}/newpost/`, body, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    'Authorization': `JWT ${access_token}`,
                },
            });
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    static async postfetch(sortBy = '') {
        try {
            const response = await axios.get(`${this.baseUrl}/post/${sortBy === '' ? '' : '?order_by=' + sortBy}`, {
                headers: {
                    "Content-Type": "application/json",
                }
            });
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

};

export default POSTAPI;