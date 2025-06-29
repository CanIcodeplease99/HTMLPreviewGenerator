import { rimImages, pairingSuggestions, type RimImage, type InsertRimImage, type PairingSuggestion, type InsertPairingSuggestion } from "@shared/schema";

export interface IStorage {
  // Rim Images
  getRimImages(): Promise<RimImage[]>;
  getRimImagesByCategory(category: string): Promise<RimImage[]>;
  searchRimImages(query: string): Promise<RimImage[]>;
  createRimImage(image: InsertRimImage): Promise<RimImage>;
  updateRimImage(id: number, updates: Partial<RimImage>): Promise<RimImage>;
  toggleImageSelection(id: number): Promise<RimImage>;
  getSelectedImages(): Promise<RimImage[]>;
  clearSelections(): Promise<void>;
  
  // Pairing Suggestions
  getPairingSuggestions(): Promise<PairingSuggestion[]>;
  createPairingSuggestion(suggestion: InsertPairingSuggestion): Promise<PairingSuggestion>;
}

export class MemStorage implements IStorage {
  private rimImages: Map<number, RimImage>;
  private pairingSuggestions: Map<number, PairingSuggestion>;
  private currentImageId: number;
  private currentSuggestionId: number;

  constructor() {
    this.rimImages = new Map();
    this.pairingSuggestions = new Map();
    this.currentImageId = 1;
    this.currentSuggestionId = 1;
  }

  async getRimImages(): Promise<RimImage[]> {
    return Array.from(this.rimImages.values());
  }

  async getRimImagesByCategory(category: string): Promise<RimImage[]> {
    return Array.from(this.rimImages.values()).filter(
      (image) => image.category === category
    );
  }

  async searchRimImages(query: string): Promise<RimImage[]> {
    const searchTerm = query.toLowerCase();
    return Array.from(this.rimImages.values()).filter(
      (image) =>
        image.title.toLowerCase().includes(searchTerm) ||
        image.description.toLowerCase().includes(searchTerm) ||
        image.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    );
  }

  async createRimImage(insertImage: InsertRimImage): Promise<RimImage> {
    const id = this.currentImageId++;
    const image: RimImage = { 
      ...insertImage, 
      id,
      isSelected: false,
      tags: insertImage.tags || [],
      downloadUrl: insertImage.downloadUrl || null
    };
    this.rimImages.set(id, image);
    return image;
  }

  async updateRimImage(id: number, updates: Partial<RimImage>): Promise<RimImage> {
    const image = this.rimImages.get(id);
    if (!image) {
      throw new Error(`Image with id ${id} not found`);
    }
    const updatedImage = { ...image, ...updates };
    this.rimImages.set(id, updatedImage);
    return updatedImage;
  }

  async toggleImageSelection(id: number): Promise<RimImage> {
    const image = this.rimImages.get(id);
    if (!image) {
      throw new Error(`Image with id ${id} not found`);
    }
    const updatedImage = { ...image, isSelected: !image.isSelected };
    this.rimImages.set(id, updatedImage);
    return updatedImage;
  }

  async getSelectedImages(): Promise<RimImage[]> {
    return Array.from(this.rimImages.values()).filter(image => image.isSelected);
  }

  async clearSelections(): Promise<void> {
    Array.from(this.rimImages.entries()).forEach(([id, image]) => {
      if (image.isSelected) {
        this.rimImages.set(id, { ...image, isSelected: false });
      }
    });
  }

  async getPairingSuggestions(): Promise<PairingSuggestion[]> {
    return Array.from(this.pairingSuggestions.values());
  }

  async createPairingSuggestion(insertSuggestion: InsertPairingSuggestion): Promise<PairingSuggestion> {
    const id = this.currentSuggestionId++;
    const suggestion: PairingSuggestion = { ...insertSuggestion, id };
    this.pairingSuggestions.set(id, suggestion);
    return suggestion;
  }
}

export const storage = new MemStorage();
