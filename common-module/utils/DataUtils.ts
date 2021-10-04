import * as fs from 'fs';

export default class DataUtils {
    public static readFileAsJson(filePath: string): Promise<string> {
        return new Promise((resolve, reject) => {
            fs.readFile(filePath, (err, data) => {
                if (err) {
                    reject(`Error while reading file '${filePath}'`);
                }
                resolve(data.toString());
            });
        });
    }
}