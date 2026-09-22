import { redirect } from "@sveltejs/kit";
import { env } from '$env/dynamic/private';
import { db } from "$lib/server/db/index.js";
import { postsTable } from "$lib/server/db/schema.js";
import { eq, sql } from "drizzle-orm";
import jwt from 'jsonwebtoken';
const {verify} = jwt;

function checkCredential(cookies) {
    const token = cookies.get("token");
    if (token) {
        try {
            verify(token, env.SECRET_KEY);
        } catch(err) {
            redirect(307, "/login?redirectTo=admin")
        }
    } else {
        redirect(307, "/login?redirectTo=admin")
    }
}

export const load = async ({cookies}) => {
    checkCredential(cookies);
    return {posts: await db.select().from(postsTable).orderBy(sql`${postsTable.published_at} desc`)};
}

export const actions = {
    publish: async ({ cookies, request}) => {
        checkCredential(cookies);

        const data = await request.formData();
        
        const title = String(data.get("title") ?? "");
        const lede = String(data.get("lede") ?? "");
        const url = String(data.get("url") ?? "");
        const image = String(data.get("image") ?? "");

        const id = Number(data.get("id") ?? -1);

        if (id > -1) {
            await db.update(postsTable).set({
                title: title,
                lede: lede,
                url: url,
                image: image
            }).where(eq(postsTable.id, id));
        } else {
            await db.insert(postsTable).values({
                title: title,
                lede: lede,
                url: url,
                image: image
            });
        }
    },
    delete: async ({cookies, request}) => {
        checkCredential(cookies);
        
        const data = await request.formData();
        const id = Number(data.get("id") ?? -1);

        if (id > -1) {
            await db.delete(postsTable).where(eq(postsTable.id, id));
        }
    }


}