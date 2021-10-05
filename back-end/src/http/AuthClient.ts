import axios, {AxiosResponse} from "axios";
import LoginResponse from "../models/LoginResponse";
import LoginRequest from "../models/LoginRequest";

export default class AuthClient {
    public login(email: string, password: string): Promise<AxiosResponse<LoginResponse>> {
        let request: LoginRequest = {email, password};
        return axios.post('/login', request);
    }
}