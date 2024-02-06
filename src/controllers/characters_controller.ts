/**
 * Products Template
 */
import Debug from 'debug'
import { create } from 'domain'
import { Request, Response } from 'express'
import { validationResult } from 'express-validator'
import prisma from '../prisma'

// Create a new debug instance
const debug = Debug('prisma-bortakvall:character_controller')

/**
 * Get all orders
 */
export const index = async (req: Request, res: Response) => {
	try {
		const characters = await prisma.characters.findMany()

		res.send({
			status: "success",
			data: characters,
		})

	} catch (err) {
		debug("Error thrown when finding products", err)
		res.status(500).send({ status: "error", message: "Something went wrong" })
	}
}

/**
 * Get a single order
 */
export const show = async (req: Request, res: Response) => {
    const characterId = Number(req.params.characterId)
	try{
		const character = await prisma.characters.findUniqueOrThrow({
			where: {
                
				ID: characterId,
			}	
	
		})
		res.send({
			status: "success",
			data: character,
		})
	}catch (err){
        debug("Error thrown when finding character with id %o: %o", req.params.characterId, err)
	 	console.error(err)
	 	res.status(404).send({
		error: "Not found."
	 	})
	}
}

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
export const template = async (req: Request, res: Response) => {
	const validationErrors = validationResult(req)
	if (!validationErrors.isEmpty()){
		return res.status(400).send({
			status: "fail",
			data: validationErrors.array()
		})
	} 

	 try {const characters = await prisma.characters.createMany({
		data: req.body
	})
		res.status(201).send({
			status: "success",
			data: characters
		})
	} catch(err){
        debug("Error thrown when creating characters %o: %o", req.body, err)
		res.status(500).send({message:"Something went wrong"})
	} 
	
}
/**
 * Update a resource
 */
export const update = async (req: Request, res: Response) => {
}

/**
 * Delete a resource
 */
export const destroy = async (req: Request, res: Response) => {
}