import { AuthModel } from '../models/auth.js'
import jwt from 'jsonwebtoken';
import { SECRET_KEY } from '../config.js';


export class AuthController {
    static async create(req, res) {
        try {
            const lele = await AuthModel.create(req.body);
            res.status(200).json(lele);
        } catch (error) {
            console.error("Error al registrar el usuario:", error);
            res.status(500).json({ error: "No se pudo registrar al usuario." });
        }
    }


    static async login(req, res) {
        try {
            const { email, password } = req.body;

            const user = await AuthModel.login(email, password);

            if (user) {
                const token = jwt.sign(
                    { id: user.id, mail: user.email },
                    SECRET_KEY,
                    {
                        expiresIn: '1h'
                    })

                res
                    .cookie('access_token', token, {
                        httpOnly: true,
                        secure: process.env.NODE_ENV === 'production',
                        sameSite: 'strict',
                        maxAge: 1000 * 60 * 60
                    })
                    .status(200)
                    .json({ message: "Login exitoso", user: { id: user.id, email: user.email, name: user.name } });
            } else {
                return res.status(401).json({ message: "Credenciales incorrectas" });
            }
        } catch (error) {
            console.error("Error de credenciales:", error);
            return res.status(500).json({ message: "Error interno del servidor" });
        }
    }

    static async logout(req,res) {
        try {
            res.clearCookie('access_token')
                .json({message : "Sesion cerrada"})
        } catch (error) {

        }
    }

}