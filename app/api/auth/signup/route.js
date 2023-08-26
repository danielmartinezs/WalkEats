import { NextResponse } from "next/server";
import User from "@models/user";
import { dbConnection } from "@utils/database";
import bcrypt from "bcrypt";

export async function POST(request){
    const {rol, username, mail, password} = await request.json()

    console.log(rol, username, mail, password)

    if(!password || password.lenght < 6) return NextResponse.json(
        {
            message: "La contraseña debe tener al menos 6 caracteres",
        },
        {
            status: 400
        }
    );

    try {
        await dbConnection();
        console.log(mail)
        const userFound = await User.findOne({ email: mail });
        console.log(userFound);

        if(userFound) return NextResponse.json(
            {  
                message: "Mail ya registrado",
            },
            {
                status: 409
            }
        );
    
        const hashpass = await bcrypt.hash(password, 12);
    
        const user = new User (
            {
                email: mail,
                password: hashpass,
                username,
                type: rol,
            }
        )
    
        const savedUser = await user.save()
        console.log(savedUser)
    
        return NextResponse.json(savedUser)
    } catch (error) {
        console.log(error)
        if(error instanceof Error){
            return NextResponse.json(
                {
                    message: error.message
                },
                {
                    status: 400
                }
            );
        }
    }
}