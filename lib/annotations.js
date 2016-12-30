import _ from "lodash";

const samples = [
    {
        message: "annotations left behind",
        regex: "FIXME",
    },
    {
        message: "annotations left behind",
        regex: "FIX ME",
    },
    {
        message: "annotations left behind",
        regex: "TODO",
    },
    {
        message: "annotations left behind",
        regex: "todo",
    },
    {
        message: "annotations left behind",
        regex: "ERASE THIS",
    },
    {
        message: "annotations left behind",
        regex: "FIX THIS",
    },
    {
        message: "annotations left behind",
        regex: "FIX LATER",
    },
];

export default function (line, printFunction) {
    _.forEach(samples, (sample) => {
        const patt = new RegExp(sample.regex, "g");
        let match = patt.exec(line);
        while (match != null) {
            printFunction(match.index + 1, line.substring(match.index - 10, match.index + 10),
                sample.message);
            match = patt.exec(line);
        }
    });
}
