import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { stockPhotoService } from "./services/stock-photo-service";
import { insertRimImageSchema, insertPairingSuggestionSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  
  // Get all rim images
  app.get("/api/images", async (req, res) => {
    try {
      const images = await storage.getRimImages();
      res.json(images);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch images" });
    }
  });

  // Get images by category
  app.get("/api/images/category/:category", async (req, res) => {
    try {
      const { category } = req.params;
      const images = await storage.getRimImagesByCategory(category);
      res.json(images);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch images by category" });
    }
  });

  // Search images
  app.get("/api/images/search", async (req, res) => {
    try {
      const { q } = req.query;
      if (!q || typeof q !== 'string') {
        return res.status(400).json({ message: "Search query is required" });
      }
      const images = await storage.searchRimImages(q);
      res.json(images);
    } catch (error) {
      res.status(500).json({ message: "Failed to search images" });
    }
  });

  // Fetch images from stock photo APIs
  app.post("/api/images/fetch/:category", async (req, res) => {
    try {
      const { category } = req.params;
      const stockImages = await stockPhotoService.searchRimImages(category);
      
      const savedImages = [];
      for (const stockImage of stockImages) {
        try {
          const imageData = {
            title: stockImage.title,
            description: stockImage.description,
            category,
            imageUrl: stockImage.imageUrl,
            thumbnailUrl: stockImage.thumbnailUrl,
            resolution: stockImage.resolution,
            source: stockImage.id.includes('unsplash') ? 'unsplash' : 'pixabay',
            sourceId: stockImage.id,
            tags: stockImage.tags,
            downloadUrl: stockImage.downloadUrl,
          };
          
          const validatedData = insertRimImageSchema.parse(imageData);
          const savedImage = await storage.createRimImage(validatedData);
          savedImages.push(savedImage);
        } catch (validationError) {
          console.error("Failed to save image:", validationError);
        }
      }
      
      res.json(savedImages);
    } catch (error) {
      console.error("Failed to fetch stock images:", error);
      res.status(500).json({ message: "Failed to fetch stock images" });
    }
  });

  // Toggle image selection
  app.patch("/api/images/:id/toggle", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const image = await storage.toggleImageSelection(id);
      res.json(image);
    } catch (error) {
      res.status(500).json({ message: "Failed to toggle image selection" });
    }
  });

  // Get selected images
  app.get("/api/images/selected", async (req, res) => {
    try {
      const selectedImages = await storage.getSelectedImages();
      res.json(selectedImages);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch selected images" });
    }
  });

  // Clear all selections
  app.delete("/api/images/selected", async (req, res) => {
    try {
      await storage.clearSelections();
      res.json({ message: "All selections cleared" });
    } catch (error) {
      res.status(500).json({ message: "Failed to clear selections" });
    }
  });

  // Get pairing suggestions
  app.get("/api/pairing-suggestions", async (req, res) => {
    try {
      const suggestions = await storage.getPairingSuggestions();
      const images = await storage.getRimImages();
      
      const enrichedSuggestions = suggestions.map(suggestion => {
        const beforeImage = images.find(img => img.id === suggestion.beforeImageId);
        const afterImage = images.find(img => img.id === suggestion.afterImageId);
        return {
          ...suggestion,
          beforeImage,
          afterImage
        };
      });
      
      res.json(enrichedSuggestions);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch pairing suggestions" });
    }
  });

  // Create pairing suggestion
  app.post("/api/pairing-suggestions", async (req, res) => {
    try {
      const validatedData = insertPairingSuggestionSchema.parse(req.body);
      const suggestion = await storage.createPairingSuggestion(validatedData);
      res.json(suggestion);
    } catch (error) {
      res.status(400).json({ message: "Invalid pairing suggestion data" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
