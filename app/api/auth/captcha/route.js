import {validateHuman} from '@utils/utils/catcha'

export const POST = async (request) =>{
    const {token} = await request.json()
    const human = await validateHuman(token)
    if(!human){
        return new Response(JSON.stringify({validated: false, error: "Falló el registro por culpa del captcha"}), { status: 400 })
    }
    return new Response(JSON.stringify({validated: true}), { status: 201 })
}