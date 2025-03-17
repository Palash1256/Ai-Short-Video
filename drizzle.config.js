/** @type {import("drizzle-kit").Config} */
require('dotenv').config()
export default {
    schema:"./configs/schema.js",
    dialect:'postgresql',
    dbCredentials:{
        url: process.env.NEXT_PUBLIC_DRIZZLE_DATABASE_URL,
    }
}