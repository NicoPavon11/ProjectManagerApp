import { UserModel } from "../models/user.js";


export class UserController {


    static async getAll(req, res) {
        try {
            const users = await UserModel.getAll();
            res.json(users);
        } catch (error) {
            console.log(error);
            res.status(500)
        }

    }

    static async getById(req, res) {
        try {
            const id = req.params.id;
            const user = await UserModel.getById(id)
            res.json(user);
        } catch (error) {
            console.log(error);
            res.status(500);
        }
    }

    

    static async update(req, res) {
        try {
            const id = req.params.id;
            const data = req.body;

            const userModified = await UserModel.update(id, data);

            res.json(userModified);
        } catch (error) {
            console.error("Error al modificar el usuario:", error);
            res.status(500).json({ error: "No se pudo modificar al usuario." });
        }
    }

    static async deleteUser(req, res) {
        try {
            const id = req.params.id;

            await UserModel.deleteUser(id);
            res.json({ message: 'User deleted successfully' });
        } catch (error) {
            console.log(error);
        }
    }
}
