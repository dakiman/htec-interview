export default interface TestCase {
    title: string
    description: string
    expected_result: string
    test_steps: Array<TestStep>
    automated?: boolean
}