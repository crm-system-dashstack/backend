import ApiError from "../utils/apiError.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../models/models.js";

const generateJwtToken = (id, email, role) => {
  return jwt.sign({ id, email, role }, process.env.SECRET_KEY, {
    expiresIn: "24h",
  });
};

export class userController {
  async registration(req, res, next) {
    const { email, password, role } = req.body;

    if (!email) {
      return next(ApiError.badRequest("Email is required"));
    }

    if (!password) {
      return next(ApiError.badRequest("Password is required"));
    }

    const candidate = await User.findOne({ where: { email } });

    if (candidate) {
      return next(ApiError.badRequest("A user with this email already exists"));
    }

    const hashPassword = await bcrypt.hash(password, 5);

    const user = await User.create({ email, role, password: hashPassword });
    const token = generateJwtToken(user.id, user.email, user.role);

    return res.json({ token });
  }
  async login(req, res, next) {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } }); //Вытягиваю все поля через email

    if (!user) {
      return next(ApiError.internal("User with such email not found"));
    }

    const isPasswordCorrect = bcrypt.compareSync(password, user.password);
    if (!isPasswordCorrect) {
      return next(ApiError.internal("Incorrect password"));
    }
    const token = generateJwtToken(user.id, user.email, user.role);
    return res.json({ token });
  }
  async check(req, res, next) {}
  async deleteUser(req, res, next) {}
  async updateProfile(req, res, next) {}
  async getCurrentUser(req, res, next) {}
  async forgotPassword(req, res, next) {}
  async resetPassword(req, res, next) {}
  async logout(req, res, next) {}
}

export default new userController();
