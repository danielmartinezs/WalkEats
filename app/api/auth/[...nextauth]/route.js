import NextAuth from "next-auth"; 
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { dbConnection } from "@utils/database";
import User from "@models/user";
import bcrypt from "bcrypt";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: {
                    label: "Email",
                    type: "text",
                    placeholder: "Email",
                },
                username: {
                    label: "Username",
                    type: "text",
                    placeholder: "Username",
                },
                password: {
                    label: "Password",
                    type: "password",
                    placeholder: "Password",
                },
            },
            async authorize(credentials, req){
                try{
                    await dbConnection();
                    //check if user exists
                    const userExists = await User.findOne({
                        email: credentials?.email,
                    }).select("+password");
                    //if not create new user
                    if(!userExists){
                        throw new Error("Invalid credentials");
                    }
                    console.log(userExists);

                    const passwordMatch = await bcrypt.compare(
                        credentials?.password,
                        userExists.password
                    );
                    if(!passwordMatch) throw new Error("Invalid credentials");

                    return userExists;
                }
                catch (error) {
                    console.log(error);
                    return false;
                }
            },
        })
    ],
    callbacks: {
        jwt({ account, token, profile, user, session }){
            console.log({
                account,
                token,
                profile,
                user,
                session
            })
            if(user){
                token.user = user;
            }
            return token;
        },
        session({ session, token }){
            session.user =  token.user;
            return session;
        }
    },
    pages: {
        signIn: "/login",
    }
})

export { handler as GET, handler as POST };