"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Libraries
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.default = {
    API_KEY: process.env.WEATHER_API_KEY,
    API_URL: 'http://api.weatherapi.com/v1/',
};
