"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* Handle all / products routes */
const express_1 = __importDefault(require("express"));
const characters_controller_1 = require("../controllers/characters_controller");
const character_rules_1 = require("../validations/character_rules");
const router = express_1.default.Router();
/**
 * GET /products
 */
router.get('/', characters_controller_1.index);
/**
 * GET /products/:productId
 */
router.get('/:characterId', characters_controller_1.show);
router.post('/', characters_controller_1.template);
/**
 * POST /product
 */
router.post('/', character_rules_1.createCharacterRules, characters_controller_1.template);
exports.default = router;
