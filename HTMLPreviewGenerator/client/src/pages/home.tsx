import { useState, useMemo } from "react";
import { Header } from "../components/header";
import { SearchFilters } from "../components/search-filters";
import { ImageGallery } from "../components/image-gallery";
import { ImagePreviewModal } from "../components/image-preview-modal";
import { useImages, useImagesByCategory, useSearchImages } from "../hooks/use-images";
import type { RimImage, Category } from "../types";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [previewImage, setPreviewImage] = useState<RimImage | null>(null);

  const { data: allImages = [], isLoading: allImagesLoading } = useImages();
  const { data: categoryImages = [], isLoading: categoryLoading } = useImagesByCategory(
    activeCategory === "all" ? "" : activeCategory
  );
  const { data: searchResults = [], isLoading: searchLoading } = useSearchImages(searchQuery);

  const displayedImages = useMemo(() => {
    if (searchQuery) {
      return searchResults;
    }
    if (activeCategory === "all") {
      return allImages;
    }
    return categoryImages;
  }, [searchQuery, searchResults, activeCategory, allImages, categoryImages]);

  const isLoading = searchQuery ? searchLoading : activeCategory === "all" ? allImagesLoading : categoryLoading;

  const imageCounts = useMemo(() => {
    const counts: Record<Category, number> = {
      all: allImages.length,
      damaged: 0,
      restored: 0,
      rusty: 0,
      polished: 0,
    };

    allImages.forEach((image) => {
      counts[image.category as Category]++;
    });

    return counts;
  }, [allImages]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query) {
      setActiveCategory("all");
    }
  };

  const handleCategoryChange = (category: Category) => {
    setActiveCategory(category);
    setSearchQuery("");
  };

  const handleImagePreview = (image: RimImage) => {
    setPreviewImage(image);
  };

  const handleClosePreview = () => {
    setPreviewImage(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <SearchFilters
        onSearch={handleSearch}
        onCategoryChange={handleCategoryChange}
        activeCategory={activeCategory}
        imageCounts={imageCounts}
      />

      <ImageGallery
        images={displayedImages}
        isLoading={isLoading}
        onImagePreview={handleImagePreview}
        activeCategory={activeCategory}
      />

      <ImagePreviewModal
        image={previewImage}
        isOpen={!!previewImage}
        onClose={handleClosePreview}
      />
    </div>
  );
}
