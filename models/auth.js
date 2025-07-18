import { prisma } from "../db.js"
import bcrypt from 'bcrypt';

export class AuthModel {
    static async create(data) {
        const { name, email, password } = data;
        const hashedPass = await bcrypt.hash(password, 10);
        const newUser = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPass
            }
        });
        return newUser;
    }

    static async login(email, password) {
        const user = await prisma.user.findUnique({ where: { email: email } });
        if (!user) {
            return false;
        }

        const validPass = await bcrypt.compare(password, user.password);

        if (!validPass) {
            return false;
        }

        return user;
    }
}