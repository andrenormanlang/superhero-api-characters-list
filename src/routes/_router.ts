/**
 * Router Template
 */
import express from "express";
import { body } from "express-validator";
import {
  index,
  show,
  template,
  update,
  destroy,
} from "../controllers/characters_controller";
const router = express.Router();

/**
 * GET /resource
 */
router.get("/", index);

/**
 * GET /resource/:resourceId
 */
router.get("/:resourceId", show);

/**
 * POST /resource
 */
router.post("/", [], template);

/**
 * PATCH /resource/:resourceId
 */
router.patch("/:resourceId", [], update);

/**
 * DELETE /resource/:resourceId
 */
router.delete("/:resourceId", destroy);

export default router;
