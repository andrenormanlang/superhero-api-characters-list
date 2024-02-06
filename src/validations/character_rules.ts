import { body } from "express-validator";

export const createCharacterRules = [
    body('character').isString().isLength({ max: 20 }).withMessage('Character name is a max. of 20 characters'),
  ]