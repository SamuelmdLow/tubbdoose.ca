import { db } from '$lib/server/db/index.js';
import { sql } from "drizzle-orm";
import { postsTable } from '$lib/server/db/schema.js';

const BASE_URL = "https://tubbdoose.ca";
const TITLE = "TubbDoose";
const DESCRIPTION = "Blogs from TubbDoose.ca";

export const GET = async () => {
    const posts = await db.select().from(postsTable).orderBy(sql`${postsTable.published_at} desc`);
    const body = render(posts);
    const headers = {
        'Cache-Control': `max-age=0, s-max-age=${600}`,
        'Content-Type': 'application/xml',
    };
	return new Response(
		body,
		{
			status: 200,
			headers,
		}
	)
};

const render = (posts) => 
    `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
        <atom:link href="${BASE_URL}/rss" rel="self" type="application/rss+xml" />
        <title>${TITLE}</title>
        <link>${BASE_URL}</link>
        <description>${DESCRIPTION}</description>
        ${posts.map((post) => 
            `<item>
                <guid>${post.id}</guid>
                <title>${post.title}</title>
                <link>${post.url}</link>
                <description>${post.lede}</description>
                <pubDate>${new Date(post.published_at).toUTCString()}</pubDate>
            </item>`
        ).join('')}
    </channel>
    </rss>
`;