/** @type {import("drizzle-kit").Config} */
export default {
    schema:"./configs/schema.js",
    dialect:'postgresql',
    dbCredentials:{
        url:"postgresql://ai-short-video-data_owner:npg_NXSO8WfDPqu7@ep-calm-frog-a151dalc-pooler.ap-southeast-1.aws.neon.tech/ai-short-video-data?sslmode=require"
    }
}