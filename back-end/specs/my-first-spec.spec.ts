import axios from "axios";
import ToDo from "../models/ToDo";

describe('My backend test suite', () => {
    it('Does smth 1', async () => {
        let res = await axios.get('https://jsonplaceholder.typicode.com/todos/1')

        console.log(res.data);

        expect(res.data).toBeNull();
    })

    it('Does smth 2', async () => {
        let res = await axios.get<ToDo>('https://jsonplaceholder.typicode.com/todos/1')

        console.log(res.data);
        expect(res.data.id).toBe(1);
        expect(res.data.completed).toBe(false);
    })

    it('Does smth 3', async () => {
        let res = await axios.get<ToDo>('https://jsonplaceholder.typicode.com/todos/1')

        console.log(res.data);
        expect(res.data.title).toBe("Something");
        expect(res.data.userId).toBe(1);
        expect(res.data.userId).toBe(2);
    })


})

