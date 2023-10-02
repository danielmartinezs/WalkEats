import { NextResponse } from "next/server";
import User from "@db/models/user";
import { dbConnection } from "@db/utils/database";
import bcrypt from "bcrypt";

export async function POST(request){
    const {username, mail, password} = await request.json()

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
        const userFound = await User.findOne({ email: mail });

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
            }
        )
    
        const savedUser = await user.save()
    
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