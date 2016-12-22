import _ from "lodash";
import lib from "./lib";

export default function plugin (options) {
    options = options || {};
    return function (files, eloquent, done) {
        _.forEach(files, (file, fileName) => {
            _.forEach(file.lines, (line, index) => {
                const printFunction = _.bind(eloquent.printMessage, null, fileName, index + 1);
                lib(line, printFunction);
            });
        });
        done();
    };
};
