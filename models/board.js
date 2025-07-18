import e from "express";
import { prisma } from "../db.js"

export class BoardModel {
    static async getAll() {
        const boards = await prisma.board.findMany();
        return boards;
    }

    static async create(data) {
        try {
            console.log("create mdeol");
            const newUser = await prisma.board.create({ data: data });
            return newUser;
        } catch (error) {
            console.log(error);
            throw error;
        }

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
            const { name, description } = data;
            const updatedData = {};

            if (name !== undefined) updatedData.name = name;
            if (description !== undefined) updatedData.description = description;

            const updated = await prisma.board.update({
                where: {
                    id: id
                },
                data: updatedData
            });

            return updated;
        } catch (error) {
            console.log(error);
        }
    }

    static async patch(id, data) {
        try {

        } catch (error) {

        }
    }


    static async delete(id) {
        try {
            const userDeleted = await prisma.board.delete({
                where: { id: id }
            });
            return userDeleted;
        } catch (error) {
            console.log(error);
        }
    }
}