import axios, {AxiosResponse} from "axios";
import LoginResponse from "../models/LoginResponse";

export default class AuthClient {
    public login(email: string, password: string): Promise<AxiosResponse<LoginResponse>> {
        return axios.post('/login', { email, password });
    }
}