import { prisma } from "../db.js"
import bcrypt from 'bcrypt';



export class UserModel {
    static async getAll() {
        const users = await prisma.user.findMany();
        return users;
    }

    static async getById(id) {
        const userFound = await prisma.user.findUnique({
            where: {
                id: id
            }
        })
        return userFound;
    }


    // static async update(id, data) {
    //     const { name, email, password } = data;
    //     const hashedPass = await bcrypt.hash(password, 10);
    //     const updatedUser = await prisma.user.update({
    //         where: { id: id },
    //         data: {
    //                 name,
    //                 email,
    //                 password: hashedPass
    //             }
    //     });
    //     return updatedUser;
    // }

    static async update(id, data) {
    const { name, email, password } = data;

    const updatedData = {};

    if (name !== undefined) updatedData.name = name;
    if (email !== undefined) updatedData.email = email;
    if (password !== undefined) {
        updatedData.password = await bcrypt.hash(password, 10);
    }

    const updatedUser = await prisma.user.update({
        where: { id },
        data: updatedData
    });

    return updatedUser;
}


    static async deleteUser(id) {
        try {
            await prisma.user.delete({
                where: { id: id }
            });
        } catch (error) {
            console.log(error);
        }
    }
}
