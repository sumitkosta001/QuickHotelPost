import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./utils/schema.tsx",
  dbCredentials: {
    url: "postgresql://neondb_owner:npg_bm0GLZyX3QoW@ep-little-smoke-a5znd4b0-pooler.us-east-2.aws.neon.tech/QuickHotelPost?sslmode=require&channel_binding=require"
  },
});
