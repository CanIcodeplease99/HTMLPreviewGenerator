import { useState, useMemo } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { ImageCard } from "./image-card";
import { PairingSuggestions } from "./pairing-suggestions";
import { useFetchStockImages } from "../hooks/use-images";
import type { RimImage, Category } from "../types";

interface ImageGalleryProps {
  images: RimImage[];
  isLoading: boolean;
  onImagePreview: (image: RimImage) => void;
  activeCategory: Category;
}

export function ImageGallery({
  images,
  isLoading,
  onImagePreview,
  activeCategory,
}: ImageGalleryProps) {
  const [loadingMore, setLoadingMore] = useState(false);
  const fetchStockImages = useFetchStockImages();
  const { toast } = useToast();

  const displayedImages = useMemo(() => {
    if (activeCategory === "all") {
      return images;
    }
    return images.filter(image => image.category === activeCategory);
  }, [images, activeCategory]);

  const handleLoadMore = async () => {
    if (loadingMore || fetchStockImages.isPending) return;

    setLoadingMore(true);
    try {
      const category = activeCategory === "all" ? "damaged" : activeCategory;
      await fetchStockImages.mutateAsync(category);
      
      toast({
        title: "Images loaded",
        description: `New ${category} images have been loaded from stock photo sources.`,
      });
    } catch (error) {
      toast({
        title: "Failed to load images",
        description: "Unable to fetch images from stock photo sources. Please check your API keys.",
        variant: "destructive",
      });
    } finally {
      setLoadingMore(false);
    }
  };

  if (isLoading && images.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <PairingSuggestions />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-sm overflow-hidden animate-pulse"
            >
              <div className="w-full h-48 bg-gray-200"></div>
              <div className="p-4 space-y-3">
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-3 bg-gray-200 rounded w-full"></div>
                <div className="h-3 bg-gray-200 rounded w-2/3"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
      <PairingSuggestions />

      {displayedImages.length === 0 ? (
        <div className="text-center py-12">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No images found
            </h3>
            <p className="text-gray-600 mb-6">
              Load images from stock photo sources to get started.
            </p>
            <Button
              onClick={handleLoadMore}
              disabled={loadingMore || fetchStockImages.isPending}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Plus className="w-4 h-4 mr-2" />
              {loadingMore || fetchStockImages.isPending
                ? "Loading Images..."
                : "Load Stock Images"}
            </Button>
          </div>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {displayedImages.map((image) => (
              <ImageCard
                key={image.id}
                image={image}
                onPreview={onImagePreview}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              onClick={handleLoadMore}
              disabled={loadingMore || fetchStockImages.isPending}
              variant="outline"
              className="px-6 py-3"
            >
              <Plus className="w-4 h-4 mr-2" />
              {loadingMore || fetchStockImages.isPending
                ? "Loading More Images..."
                : "Load More Images"}
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
