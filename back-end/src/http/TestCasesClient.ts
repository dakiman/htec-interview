import AuthClient from "./AuthClient";
import axios, {AxiosResponse} from "axios";
import LoginResponse from "../models/LoginResponse";
import TestCase from "../../../common-module/models/TestCase";
import Configuration from "../../../app-config";

export default class TestCasesClient {
    private authClient: AuthClient = new AuthClient();

    public async init() {
        let authResponse: AxiosResponse<LoginResponse> = await this.authClient.login(
            Configuration.USER_EMAIL,
            Configuration.USER_PASSWORD
        );

        axios.defaults.headers = {
            Authorization: `Bearer ${authResponse.data.token}`
        }
    }

    public async getAllTestCases(): Promise<AxiosResponse<Array<TestCase>>> {
        return axios.get('/testcases')
    }

    public async getTestCase(id: number): Promise<AxiosResponse<TestCase>> {
        return axios.get(`/testcases/${id}`)
    }

    public async createTestCase(requestBody: TestCase): Promise<AxiosResponse<Array<TestCase>>> {
        return axios.post('/testcases', requestBody)
    }

    public async updateTestCase(requestBody: TestCase): Promise<AxiosResponse<Array<TestCase>>> {
        return axios.put(`/testcases/${requestBody.testcaseId}`, requestBody);
    }

    public async deleteTestCase(id: number): Promise<AxiosResponse>{
        return axios.delete(`/testcases/${id}`)
    }
}