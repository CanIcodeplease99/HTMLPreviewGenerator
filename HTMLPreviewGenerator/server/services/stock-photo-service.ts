interface StockPhotoImage {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  thumbnailUrl: string;
  downloadUrl: string;
  resolution: string;
  tags: string[];
}

export class StockPhotoService {
  private unsplashApiKey: string;
  private pixabayApiKey: string;

  constructor() {
    this.unsplashApiKey = process.env.UNSPLASH_ACCESS_KEY || process.env.UNSPLASH_API_KEY || "";
    this.pixabayApiKey = process.env.PIXABAY_API_KEY || process.env.PIXABAY_KEY || "";
  }

  async searchUnsplash(query: string, perPage: number = 12): Promise<StockPhotoImage[]> {
    if (!this.unsplashApiKey) {
      console.warn("Unsplash API key not configured");
      return [];
    }

    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=${perPage}&orientation=landscape`,
        {
          headers: {
            'Authorization': `Client-ID ${this.unsplashApiKey}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Unsplash API error: ${response.status}`);
      }

      const data = await response.json();
      
      return data.results.map((photo: any) => ({
        id: photo.id,
        title: photo.alt_description || `${query} photo`,
        description: photo.description || photo.alt_description || `High-quality ${query} image`,
        imageUrl: photo.urls.regular,
        thumbnailUrl: photo.urls.thumb,
        downloadUrl: photo.urls.full,
        resolution: `${photo.width}x${photo.height}px`,
        tags: photo.tags?.map((tag: any) => tag.title) || [],
      }));
    } catch (error) {
      console.error("Error fetching from Unsplash:", error);
      return [];
    }
  }

  async searchPixabay(query: string, perPage: number = 12): Promise<StockPhotoImage[]> {
    if (!this.pixabayApiKey) {
      console.warn("Pixabay API key not configured");
      return [];
    }

    try {
      const response = await fetch(
        `https://pixabay.com/api/?key=${this.pixabayApiKey}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&category=transportation&per_page=${perPage}&safesearch=true`
      );

      if (!response.ok) {
        throw new Error(`Pixabay API error: ${response.status}`);
      }

      const data = await response.json();
      
      return data.hits.map((photo: any) => ({
        id: photo.id.toString(),
        title: photo.tags || `${query} photo`,
        description: `High-quality ${query} image from Pixabay`,
        imageUrl: photo.webformatURL,
        thumbnailUrl: photo.previewURL,
        downloadUrl: photo.largeImageURL,
        resolution: `${photo.imageWidth}x${photo.imageHeight}px`,
        tags: photo.tags.split(', '),
      }));
    } catch (error) {
      console.error("Error fetching from Pixabay:", error);
      return [];
    }
  }

  async searchRimImages(category: string): Promise<StockPhotoImage[]> {
    const queries = {
      damaged: ["damaged car rim", "scratched alloy wheel", "bent car rim", "curb damage wheel"],
      restored: ["restored car rim", "refurbished alloy wheel", "repaired car rim", "polished wheel"],
      rusty: ["rusty car wheel", "corroded rim", "rust car wheel", "oxidized alloy wheel"],
      polished: ["polished car rim", "chrome wheel", "shiny alloy rim", "mirror finish wheel"]
    };

    const categoryQueries = queries[category as keyof typeof queries] || ["car rim"];
    const query = categoryQueries[Math.floor(Math.random() * categoryQueries.length)];

    // Try both APIs and combine results
    const [unsplashResults, pixabayResults] = await Promise.all([
      this.searchUnsplash(query, 6),
      this.searchPixabay(query, 6)
    ]);

    return [...unsplashResults, ...pixabayResults];
  }
}

export const stockPhotoService = new StockPhotoService();
