import ApiError from "../utils/apiError";
import bcrypt from "bcrypt";

import { User } from "../models/models.js";

const generateJwtToken = () => {};

export class userController {
  async registration(req, res, next) {}
  async login(req, res, next) {}
  async check(req, res, next) {}
  async deleteUser(req, res, next) {}
  async updateProfile(req, res, next) {}
  async getCurrentUser(req, res, next) {}
  async forgotPassword(req, res, next) {}
  async resetPassword(req, res, next) {}
  async logout(req, res, next) {}
}
