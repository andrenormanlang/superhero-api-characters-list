/* Handle all / products routes */
import express from 'express'
import {body} from 'express-validator'
import {index, show, update, destroy, template} from '../controllers/characters_controller'
import { createCharacterRules } from "../validations/character_rules";

const router = express.Router()

/**
 * GET /products
 */
router.get('/', index)

/**
 * GET /products/:productId
 */
router.get('/:characterId', show)


router.post('/', template)

/**
 * POST /product
 */
router.post('/', createCharacterRules, template)


export default router
