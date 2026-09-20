import { db } from '$lib/server/db/index.js';
import { postsTable } from '$lib/server/db/schema.js';

export const load = ({ params }) => {
	db.select().from(postsTable).then(posts => {
        return {
	    	posts: posts
    	};
    });

};