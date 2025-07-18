import { BoardModel } from "../models/board.js";

export class BoardController {
    static async getAll(req, res) {
        try {
            const boards = await BoardModel.getAll();
            res.json(boards);
        } catch (error) {
            console.log("error");
            res.status(500);
        }
    }

    static async create(req, res) {
        try {
            console.log("create controller");
            const newUser = await BoardModel.create(req.body);
            res.status(201).json(newUser);
        } catch (error) {
            console.log(error);
            res.status(500);
        }
    }

    static async getById(req, res) {
        try {
            const id = req.params.id;
            const userFound = await BoardModel.getById(id);
            res.json(userFound);
        } catch (error) {
            console.log(error);
            res.status(404);
        }
    }

    static async update(req,res){
        try {
            const id = req.params.id;
            const userData = req.body;
            const userUpdated = await BoardModel.update(id,userData);
            res.json(userUpdated);
        } catch (error) {
            console.log(error);
            res.status(500);
        }
    }

    static async delete(req,res){
        try {
            const id = req.params.id;
            const deleted = await BoardModel.delete(id);
            res.json({message : 'Board deleted succesfully'});
        } catch (error) {
            console.log(error);
            res.status(500);
        }
    }
}