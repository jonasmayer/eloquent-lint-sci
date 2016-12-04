import _ from "lodash";
import Eloquent from "eloquestlint";
import lib from "./lib";

export const scientific = function () {
    return function (files, eloquent, done) {
        _.forEach(files, (file, fileName) => {
            _.forEach(file.lines, (line, index) => {
                const printFunction = _.bind(eloquent.printMessage, null, fileName, index + 1);
                lib(line, printFunction);

                /*
                const patt = new RegExp("e", "g");
                let match = patt.exec(line);
                while (match != null) {
                    eloquent.printMessage(fileName, index + 1, match.index + 1,
                    "You have a 'e' in ", line.substring(match.index - 10, match.index + 10));
                    match = patt.exec(line);
                }*/
            });
        });
        done();
    };
};

const args = process.argv.slice(2);

export default Eloquent(args[0])
    .use(scientific())
    .process((e) => {
        if (e) {
            throw e;
        }
    });
