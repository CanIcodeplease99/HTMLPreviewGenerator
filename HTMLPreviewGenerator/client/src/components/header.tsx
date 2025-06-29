import { Download, Images } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSelectedImages, useClearSelections } from "../hooks/use-images";
import { useToast } from "@/hooks/use-toast";

export function Header() {
  const { data: selectedImages = [], isLoading } = useSelectedImages();
  const clearSelections = useClearSelections();
  const { toast } = useToast();

  const handleDownloadSelected = async () => {
    if (selectedImages.length === 0) {
      toast({
        title: "No images selected",
        description: "Please select some images to download.",
        variant: "destructive",
      });
      return;
    }

    try {
      // Create download links for selected images
      for (const image of selectedImages) {
        const link = document.createElement("a");
        link.href = image.downloadUrl || image.imageUrl;
        link.download = `${image.title}-${image.id}.jpg`;
        link.target = "_blank";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }

      toast({
        title: "Download started",
        description: `Downloading ${selectedImages.length} images.`,
      });

      // Clear selections after download
      await clearSelections.mutateAsync();
    } catch (error) {
      toast({
        title: "Download failed",
        description: "Failed to download selected images.",
        variant: "destructive",
      });
    }
  };

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <Images className="text-primary text-2xl" />
            <h1 className="text-xl font-semibold text-gray-900">
              Rim Repair Stock Photos
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">
              {isLoading ? "..." : selectedImages.length}
            </span>
            <span className="text-sm text-gray-600">selected</span>
            <Button
              onClick={handleDownloadSelected}
              disabled={selectedImages.length === 0 || clearSelections.isPending}
              className="bg-success hover:bg-success/90 text-success-foreground"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Selected
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
