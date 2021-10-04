import CustomReporter = jasmine.CustomReporter;
import Configuration from "../../app-config";
import SpecResult = jasmine.SpecResult;
import JasmineStartedInfo = jasmine.JasmineStartedInfo;

export default class SpecReporter implements CustomReporter {
    private delimiter: string = '||==============================================================================||';

    jasmineStarted(suiteInfo: JasmineStartedInfo): void {
        console.log(`Suite starting, running ${suiteInfo.totalSpecsDefined}`)
        console.log('Environment configuration: ', Configuration);
    }

    specStarted(result: SpecResult): void {
        console.log(this.delimiter);
        console.info(`|||=== Running spec : ${result.description} ===|||`);
    }

    specDone(result: SpecResult): void {
        console.info(`Spec runtime: ${result.duration} ms`);
        console.info(`Spec finished with status: ${result.status.toUpperCase()}.`);
    }
}