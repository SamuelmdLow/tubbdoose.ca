import { pgTable, serial, integer, text, varchar, timestamp } from 'drizzle-orm/pg-core';

export const postsTable = pgTable('posts', {
	id: serial('id').primaryKey(),
	title: text('title').notNull(),
	lede: varchar('lede').notNull(),
	url: varchar('url').notNull(),
	image: varchar('image').notNull(),
	published_at: timestamp('published_at').notNull().defaultNow()
});