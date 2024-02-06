import express from "express"
import characters from './characters'

// instantiate a new router
const router = express.Router()

/**
 * GET /
 */
router.get('/', (req, res) => {
	res.send({
		message: "I AM API, BEEP BOOP",
	})
})

/**
 * [EXAMPLE] /resource
 */
// router.use('/resource', resource)


/**
 * /characters
 */
router.use('/characters', characters )


export default router
