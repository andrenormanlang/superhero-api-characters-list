"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCharacterRules = void 0;
const express_validator_1 = require("express-validator");
exports.createCharacterRules = [
    (0, express_validator_1.body)('character').isString().isLength({ max: 20 }).withMessage('Character name is a max. of 20 characters'),
];
