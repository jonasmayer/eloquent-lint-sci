import _ from "lodash";
import annotations from "./annotations";

const lib = function (line, printFunction) {
    annotations(line, printFunction);
};

export default function plugin() {
    return function (files, eloquent, done) {
        _.forEach(files, (file, fileName) => {
            _.forEach(file.lines, (line, index) => {
                const printFunction = _.bind(eloquent.printMessage, null, fileName, index + 1);
                lib(line, printFunction);
            });
        });
        done();
    };
}
