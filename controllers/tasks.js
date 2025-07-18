import { TaskModel } from "../models/task.js";


export class TaskController {
    static async getAll(req, res) {
        try {
            const tasks = await TaskModel.getAll();
            res.json(tasks);
        } catch (error) {
            console.log(error);
            res.status(500);
        }
    }

    static async getById(req, res) {
        try {
            const task = await TaskModel.getById(req.params.id);
            res.json(task);
        } catch (error) {
            console.log(error);
            res.status(500);
        }
    }

    static async create(req, res) {
        const { title, description, priority, isDone, boardId } = req.body;
        try {
            const newTask = await TaskModel.create({
                title,
                description,
                priority,
                isDone,
                board: {
                    connect: { id: boardId }
                }
            });
            res.json(newTask);
        } catch (error) {
            console.log(error);
            res.status(500);
        }
    }

    static async update(req, res) {
        try {
            const id = req.params.id;
            const data = req.body;

            const taskModified = await TaskModel.update(id, data);
            res.json(taskModified);
        } catch (error) {
            console.log(error);
            res.status(500);
        }
    }

    static async delete(req, res) {
        try {
            const id = req.params.id;

            await TaskModel.deleteTask(id);
            res.json({ message: 'Task deleted succesfully' }).status(200);
        } catch (error) {
            console.log(error);
            res.status(500);
        }
    }
}