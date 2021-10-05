import TestStep from "./TestStep";

export default interface TestCase {
    id?: number
    title: string
    description: string
    expected_result: string
    test_steps: Array<TestStep>
    automated?: boolean
    candidate_scenario_id?: number
    candidate_id?: number
    testcaseId?: number
}