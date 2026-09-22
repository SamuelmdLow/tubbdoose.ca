import { db } from '$lib/server/db/index.js';
import { sql } from "drizzle-orm";
import { postsTable } from '$lib/server/db/schema.js';

export const load = async ({ params }) => {
	return {
		posts: await db.select().from(postsTable).orderBy(sql`${postsTable.published_at} desc`)
	}
};