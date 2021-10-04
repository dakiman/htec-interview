import axios, {AxiosResponse} from "axios";
import LoginResponse from "../models/LoginResponse";
import SingleTestCase from "../models/SingleTestCase";
import DataUtils from "../../front-end/utils/DataUtils";
import TestCase from "../../front-end/types/TestCase";


describe('My backend test suite', () => {
    axios.defaults.baseURL = 'https://qa-sandbox.ni.htec.rs/api/candidate';
    axios.interceptors.response.use(
        (response) => {
            console.log(response.data);
            return response;
        }, (error) => {
            console.log(error.response.data);
            return Promise.reject(error);
        });


    let testCaseId: number;
    let testCases: Array<TestCase>;

    beforeAll(async () => {
        testCases = JSON.parse(await DataUtils.readFileAsJson('common-module/resources/testCases.json'));
    })

    it('Logs in', async () => {
        let res: AxiosResponse<LoginResponse> = await axios.post('/login', {
            email: "dvancov@hotmail.com",
            password: "Dakidaki123"
        })

        console.log(res.data.token);

        axios.defaults.headers = {
            Authorization: `Bearer ${res.data.token}`
        }
    })

    it('Gets all test cases', async () => {
        let res: AxiosResponse<Array<SingleTestCase>> = await axios.get('/testcases')

        // console.log(res.data[0]);
        // console.log(res.data[0].title);
        testCaseId = res.data[0].id
    })

    it('Gets single test case', async () => {
        console.log('prerequest')
        let res: AxiosResponse<SingleTestCase> = await axios.get(`/testcases/${testCaseId}`)
        console.log('Title', res.data.title);
        expect(res.data.id).toBe(testCaseId);
    })

    it('Creates a test case', async () => {
        let singleCase = testCases[0];
        singleCase.title = Math.random().toString();
        console.log('Prereq', testCases[0]);
        let res: AxiosResponse<Array<SingleTestCase>> = await axios.post('/testcases', singleCase)
        console.log('Response: ', res.data);
        expect(res.status).toBe(200);
    })

    it('Updates a test case', async () => {
        let res: AxiosResponse<Array<SingleTestCase>> = await axios.put(`/testcases/${testCaseId}`, {
            title: "This field previously had 38 ",
            "description": "This field previously had 32 characters",
            "expected_result": "This field previously had 39 characters",
            "test_steps": [
                {
                    "value": "yea"
                },
                {
                    "value": "This field previously had 19 "
                },
                {
                    "value": "yea"
                }
            ],
            "automated": false,
            "candidate_scenario_id": 339,
            "testcaseId": 8489
        })
        expect(res.status).toBe(200);
    })

    it('Deletes a test case', async () => {
        let res = await axios.delete(`/testcases/${testCaseId}`);
        expect(res.status).toBe(200);
    })


})

