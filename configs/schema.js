import { boolean, json, jsonb, serial, varchar } from "drizzle-orm/pg-core";
import { pgTable } from "drizzle-orm/pg-core";

export const Users = pgTable("Users", {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 255 }).notNull(),
    email: varchar("email", { length: 255 }).notNull(),
    imageUrl: varchar("imageUrl", { length: 255 }),
    subscription: boolean("subscription").default(false)
});

export const videoTable = pgTable("videoTable", {
    id: serial('id').primaryKey(),
    audioCaption: jsonb("audioCaption").notNull(),
    audioFileUrl: varchar("audioFileUrl").notNull(),
    imageList: varchar("imageList").array().notNull(),
    videoScript: jsonb("videoScript").notNull(),
    createdBy: varchar("createdBy").notNull()
});
