"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logSuccess = exports.logInfo = exports.logError = void 0;
// Libraries
var chalk_1 = __importDefault(require("chalk"));
/**
 * Log an error into console.
 *
 * @param error - The raised error.
 */
function logError(error) {
    console.log(chalk_1.default.red(error));
}
exports.logError = logError;
/**
 * Log a info message into console.
 *
 * @param text - The raised text.
 */
function logInfo(text) {
    console.log(chalk_1.default.blue(text));
}
exports.logInfo = logInfo;
/**
 * Log a success message into console.
 *
 * @param text - The raised text.
 */
function logSuccess(text) {
    console.log(chalk_1.default.green(text));
}
exports.logSuccess = logSuccess;
