import { prisma } from "../db.js"

export class TaskModel{
    static async getAll(){
        const tasks = await prisma.task.findMany();
        return tasks;
    }

    static async getById(id){
        try {
            const taskFound = await prisma.task.findUnique({
                where :{id:id}
            });
            return taskFound;
        } catch (error) {
            console.log(error);
        }
    }

    static async create(data){
        try {
            const newTask = await prisma.task.create({data:data})
            return newTask;
        } catch (error) {
            console.log(error);
        }
    }

    static async update(id,data){
        try {
            const updatedTask = await prisma.task.update({
                where : {id:id},
                data : data
            })
            return updatedTask;
        } catch (error) {
            console.log(error);
        }
    }

    static async deleteTask(id){
        try {
            await prisma.task.delete({where : {id:id}})
        } catch (error) {
            console.log(error);
        }
    }
}