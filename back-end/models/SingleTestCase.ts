export default interface SingleTestCase {
    id: number
    candidate_id: number,
    title: string
    expected_result: string
    description: string
    automated: boolean
    candidate_scenario_id: number
    test_steps: TestStep
}