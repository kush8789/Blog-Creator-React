import axios from 'axios';
import { Cookies } from 'react-cookie';
const cookie = new Cookies();

class AccountAPI {
    static baseUrl = "http://127.0.0.1:8000/accounts";

    static async login(body) {
        try {
            const response = await axios.post(`${this.baseUrl}/token/`, body, {
                headers: {
                    "Content-Type": 'application/json'
                }
            });
            cookie.set('accesstoken', response.data.access);
            cookie.set('refreshtoken', response.data.refresh);
            return response.data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    static async signup(body){
        try{
            const response = await axios.post(`${this.baseUrl}/signup/`,body, {
                headers: {
                    "Content-Type": 'application/json'
                }
            });
            return response.data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    static async logout(){
        try{
            const access_token=cookie.get("accesstoken");
            const refresh_token=cookie.get("refreshtoken");
            if(refresh_token && access_token){
                const response=await axios.post(`${this.baseUrl}/logout/`,{"refresh_token": refresh_token}, {
                    headers:{
                        'content-Type': 'application/json',
                        'Authorization': `JWT ${access_token}`,
                    },
                });
                cookie.remove('accesstoken');
                cookie.remove('refreshtoken');
                return response;
            }
            else{
                throw new Error('Both refresh_token and access_token are required for logout.');
            }
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    }
    
};
export default AccountAPI;