import { pgTable, text, varchar, serial } from "drizzle-orm/pg-core";

export const AIOutput = pgTable("aiOutput", {
  id: serial("id").primaryKey(), // Auto-incrementing ID
  formData: text("formdata").notNull(),
  aiResponse: text("airesponse").notNull(),
  templateSlug: varchar("templateslug").notNull(),
  createdBy: varchar("createdby").notNull(),
  createdAt: varchar("createdat").notNull(),
  generatedImage: text("generated_image"), // Stores base64 or URL string
});
