export default interface TestCase {
    title: string
    description: string
    expectedResult: string
    testSteps: Array<string>
}