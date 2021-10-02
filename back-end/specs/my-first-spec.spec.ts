import axios from "axios";



describe('My backend test suite', () => {
    it('Does smth', async () => {
        let res = await axios.get('https://jsonplaceholder.typicode.com/todos/1')

        console.log(res.data);



        expect(res.data).toBeNull();
    })

    it('Does smth', async () => {
        let res = await axios.get('https://jsonplaceholder.typicode.com/todos/1')

        console.log(res.data);

        expect(res.data).toBe(1);
    })
})

