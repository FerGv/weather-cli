"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseArguments = void 0;
// Libraries
var minimist_1 = __importDefault(require("minimist"));
// Utils
var logging_1 = require("./logging");
/**
 * Process arguments and return an object with parsed options.
 *
 * @param argv - The list of arguments.
 */
function parseArguments(argv) {
    var parsedArgv = minimist_1.default(argv);
    var city = parsedArgv.c || parsedArgv.city || 'Dallas';
    var export_ = parsedArgv.e || parsedArgv.export || false;
    var filename = parsedArgv.f || parsedArgv.filename || 'weather.csv';
    logging_1.logInfo("\n    Running with following options:\n      - City: " + city + "\n      - Export file: " + export_ + "\n      - Filename: " + filename + "\n\n    Run -h, --help for a quick help.\n  ");
    return {
        city: city,
        export_: export_,
        filename: filename,
    };
}
exports.parseArguments = parseArguments;
