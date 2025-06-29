import { useState } from "react";
import { Eye, Plus, Download, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToggleImageSelection } from "../hooks/use-images";
import { useToast } from "@/hooks/use-toast";
import type { RimImage } from "../types";

interface ImageCardProps {
  image: RimImage;
  onPreview: (image: RimImage) => void;
}

const categoryColors = {
  damaged: "bg-red-500",
  restored: "bg-green-500", 
  rusty: "bg-orange-500",
  polished: "bg-blue-500",
};

const categoryLabels = {
  damaged: "Damaged",
  restored: "Restored",
  rusty: "Rusty", 
  polished: "Polished",
};

export function ImageCard({ image, onPreview }: ImageCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const toggleSelection = useToggleImageSelection();
  const { toast } = useToast();

  const handleToggleSelection = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      await toggleSelection.mutateAsync(image.id);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update image selection",
        variant: "destructive",
      });
    }
  };

  const handleDownload = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      const link = document.createElement("a");
      link.href = image.downloadUrl || image.imageUrl;
      link.download = `${image.title}-${image.id}.jpg`;
      link.target = "_blank";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      toast({
        title: "Download started",
        description: `Downloading ${image.title}`,
      });
    } catch (error) {
      toast({
        title: "Download failed",
        description: "Failed to download image",
        variant: "destructive",
      });
    }
  };

  return (
    <div
      className="image-card bg-white rounded-xl shadow-sm overflow-hidden group cursor-pointer relative"
      onClick={() => onPreview(image)}
    >
      <div className="relative">
        <img
          src={image.thumbnailUrl}
          alt={image.title}
          className="w-full h-48 object-cover"
          onLoad={() => setImageLoaded(true)}
          style={{ opacity: imageLoaded ? 1 : 0 }}
        />
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
            <div className="text-gray-400">Loading...</div>
          </div>
        )}
        
        <div className="overlay absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 flex items-center justify-center">
          <div className="text-white text-center">
            <Eye className="w-8 h-8 mb-2 mx-auto" />
            <p className="text-sm">Quick Preview</p>
          </div>
        </div>

        <div className="absolute top-3 left-3">
          <Badge className={`${categoryColors[image.category]} text-white`}>
            {categoryLabels[image.category]}
          </Badge>
        </div>

        <div className="absolute top-3 right-3">
          <Button
            size="sm"
            variant="secondary"
            className="w-8 h-8 p-0 bg-white rounded-full shadow-lg hover:bg-gray-50"
            onClick={handleToggleSelection}
            disabled={toggleSelection.isPending}
          >
            {image.isSelected ? (
              <Check className="w-4 h-4 text-green-600" />
            ) : (
              <Plus className="w-4 h-4 text-gray-600" />
            )}
          </Button>
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-medium text-gray-900 mb-1 line-clamp-1">
          {image.title}
        </h3>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {image.description}
        </p>
        <div className="flex items-center justify-between">
          <div className="text-xs text-gray-500 flex items-center">
            <Eye className="w-3 h-3 mr-1" />
            {image.resolution}
          </div>
          <Button
            size="sm"
            onClick={handleDownload}
            className="bg-accent hover:bg-accent/90 text-accent-foreground text-xs px-3 py-1"
          >
            <Download className="w-3 h-3 mr-1" />
            Download
          </Button>
        </div>
      </div>
    </div>
  );
}
