import { env } from '$env/dynamic/private';
import { redirect } from "@sveltejs/kit";
import jwt from 'jsonwebtoken';
const {sign} = jwt;

export const actions = {
    login: async ({ cookies, request, url}) => {
        const data = await request.formData();
		const password = data.get('password')
    
        const date = Date.now().toString();
        if (password == env.PASSWORD) {
            const token = sign({signed_at: date}, env.SECRET_KEY, {expiresIn: "7d"});
            
            cookies.set('token', token, { path: '/'});

            const redirectTo = url.searchParams.get('redirectTo');
            console.log(url.searchParams.toString())
            console.log(redirectTo);
            if (redirectTo) {
                redirect(303, redirectTo);
            }

            return { success: true}
        }
    
        return { success: false};
    }
}