import { NextResponse } from "next/server";
import User from "@utils/models/user";
import { dbConnection } from "@utils/utils/database";
import bcrypt from "bcrypt";
import {validateHuman} from '@utils/utils/catcha'


export async function POST(request){
    const human = await validateHuman(token)
    if(!human){
        return new Response(JSON.stringify({validated: false, error: "Falló el registro por culpa del captcha"}), { status: 400 })
    }
    const {username, mail, password, confpassword, token} = await request.json()

    if(!password || password.lenght < 8) return NextResponse.json(
        {
            message: "La contraseña debe tener al menos 8 caracteres",
        },
        {
            status: 400
        }
    );

    if(password !== confpassword) return NextResponse.json(
        {
            message: "Las contraseñas deben ser iguales",
        },
        {
            status: 400
        }
    ) 

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
                active: true,
                location: [],
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