/** @type {import("drizzle-kit").Config} */
export default {
    schema:"./configs/schema.js",
    dialect:'postgresql',
    dbCredentials:{
        url:"postgresql://neondb_owner:DjEgOTZn91Cs@ep-flat-surf-a17doujr.ap-southeast-1.aws.neon.tech/neondb?sslmode=require"
    }
}