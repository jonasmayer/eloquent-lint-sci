import _ from "lodash";
import annotations from "./annotations";

const dictionaries = [
    annotations,
];

const sampleParser = function (samples, line, printFunction) {
    _.forEach(samples, (sample) => {
        const patt = new RegExp(sample.regex, "g");
        let match = patt.exec(line);
        while (match != null) {
            printFunction(match.index + 1, line.substring(match.index - 10, match.index + 10),
                sample.message);
            match = patt.exec(line);
        }
    });
};

export default function plugin() {
    return function (files, eloquent, done) {
        _.forEach(files, (file, fileName) => {
            _.forEach(file.lines, (line, index) => {
                const printFunction = _.bind(eloquent.printMessage, null, fileName, index + 1);
                _.forEach(dictionaries, (dictionary) => {
                    sampleParser(dictionary, line, printFunction);
                });
            });
        });
        done();
    };
}
