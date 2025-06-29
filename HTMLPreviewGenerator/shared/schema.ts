import { pgTable, text, serial, integer, boolean, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const rimImages = pgTable("rim_images", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  category: text("category").notNull(), // 'damaged', 'restored', 'rusty', 'polished'
  imageUrl: text("image_url").notNull(),
  thumbnailUrl: text("thumbnail_url").notNull(),
  resolution: text("resolution").notNull(),
  source: text("source").notNull(), // API source like 'unsplash', 'pixabay'
  sourceId: text("source_id").notNull(),
  tags: text("tags").array().notNull().default([]),
  downloadUrl: text("download_url"),
  isSelected: boolean("is_selected").default(false),
});

export const pairingSuggestions = pgTable("pairing_suggestions", {
  id: serial("id").primaryKey(),
  beforeImageId: integer("before_image_id").notNull(),
  afterImageId: integer("after_image_id").notNull(),
  description: text("description").notNull(),
});

export const insertRimImageSchema = createInsertSchema(rimImages).omit({
  id: true,
  isSelected: true,
}).extend({
  tags: z.array(z.string()).default([]),
});

export const insertPairingSuggestionSchema = createInsertSchema(pairingSuggestions).omit({
  id: true,
});

export type InsertRimImage = z.infer<typeof insertRimImageSchema>;
export type RimImage = typeof rimImages.$inferSelect;
export type InsertPairingSuggestion = z.infer<typeof insertPairingSuggestionSchema>;
export type PairingSuggestion = typeof pairingSuggestions.$inferSelect;
