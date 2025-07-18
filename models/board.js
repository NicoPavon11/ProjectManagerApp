import { prisma } from "../db.js"

export class BoardModel {
    static async getAll() {
        const boards = await prisma.board.findMany();
        return boards;
    }

    static async create(data) {
        const newUser = await prisma.board.create({data : data});
        return newUser;
    }

    static async getById(id) {
        return await prisma.board.findUnique({
            where: {
                id: id
            }
        })
    }

    static async update(id, data) {
        try {
            const updated = await prisma.board.update({
                where: {
                    id: id
                },
                data: data
            });
            return updated;
        } catch (error) {
            console.log(error);
        }
    }


    static async delete(id){
        try {
            const userDeleted = await prisma.board.delete({
                where : {id:id}
            });
            return userDeleted;
        } catch (error) {
            console.log(error);
        }
    }
}