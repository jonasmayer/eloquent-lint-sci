"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (line, printFunction) {
    _.forEach(samples, function (sample) {
        var patt = new RegExp(sample.regex, "g");
        var match = patt.exec(line);
        while (match != null) {
            printFunction(match.index + 1, line.substring(match.index - 10, match.index + 10), sample.message);
            match = patt.exec(line);
        }
    });
};

var _ = require("lodash");

var samples = [{
    message: "annotations left behind",
    regex: "FIXME"
}, {
    message: "annotations left behind",
    regex: "FIX ME"
}, {
    message: "annotations left behind",
    regex: "TODO"
}, {
    message: "annotations left behind",
    regex: "todo"
}, {
    message: "annotations left behind",
    regex: "ERASE THIS"
}, {
    message: "annotations left behind",
    regex: "FIX THIS"
}, {
    message: "annotations left behind",
    regex: "FIX LATER"
}];
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (line, printFunction) {
    (0, _annotations2.default)(line, printFunction);
};

var _annotations = require("./annotations");

var _annotations2 = _interopRequireDefault(_annotations);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//# sourceMappingURL=eloquent-sci.js.map