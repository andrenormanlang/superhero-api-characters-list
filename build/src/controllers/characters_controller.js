"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.destroy = exports.update = exports.template = exports.show = exports.index = void 0;
/**
 * Products Template
 */
const debug_1 = __importDefault(require("debug"));
const express_validator_1 = require("express-validator");
const prisma_1 = __importDefault(require("../prisma"));
// Create a new debug instance
const debug = (0, debug_1.default)('prisma-bortakvall:character_controller');
/**
 * Get all orders
 */
const index = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const characters = yield prisma_1.default.characters.findMany();
        res.send({
            status: "success",
            data: characters,
        });
    }
    catch (err) {
        debug("Error thrown when finding products", err);
        res.status(500).send({ status: "error", message: "Something went wrong" });
    }
});
exports.index = index;
/**
 * Get a single order
 */
const show = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const characterId = Number(req.params.characterId);
    try {
        const character = yield prisma_1.default.characters.findUniqueOrThrow({
            where: {
                ID: characterId,
            }
        });
        res.send({
            status: "success",
            data: character,
        });
    }
    catch (err) {
        debug("Error thrown when finding character with id %o: %o", req.params.characterId, err);
        console.error(err);
        res.status(404).send({
            error: "Not found."
        });
    }
});
exports.show = show;
/**
 * Create a single character
 */
// export const store = async (req: Request, res: Response) => {const validationErrors = validationResult(req)
// 	if (!validationErrors.isEmpty()){
// 		return res.status(400).send({
// 			status: "fail",
// 			data: validationErrors.array()
// 		})
// 	}
// 	try {
// 		const character = await prisma.characters.create({
//             data: {
// 				ID: req.body.characterId,
// 				CharacterName: req.body.character,
// 			},
// 		})
// 		res.status(201).send({
// 			status: "success",
// 			data: character
// 		})
// 	} catch(err){
//         console.log("Error thrown when creating a character %o: %o", req.body.character, err)
// 		res.status(500).send({message:"Something went wrong"})
// 	}
// }
/**
 * Create many characters
 */
const template = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const validationErrors = (0, express_validator_1.validationResult)(req);
    if (!validationErrors.isEmpty()) {
        return res.status(400).send({
            status: "fail",
            data: validationErrors.array()
        });
    }
    try {
        const characters = yield prisma_1.default.characters.createMany({
            data: req.body
        });
        res.status(201).send({
            status: "success",
            data: characters
        });
    }
    catch (err) {
        debug("Error thrown when creating characters %o: %o", req.body, err);
        res.status(500).send({ message: "Something went wrong" });
    }
});
exports.template = template;
/**
 * Update a resource
 */
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
});
exports.update = update;
/**
 * Delete a resource
 */
const destroy = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
});
exports.destroy = destroy;
