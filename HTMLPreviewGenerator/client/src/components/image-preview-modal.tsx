import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Plus, Check, X } from "lucide-react";
import { useToggleImageSelection } from "../hooks/use-images";
import { useToast } from "@/hooks/use-toast";
import type { RimImage } from "../types";

interface ImagePreviewModalProps {
  image: RimImage | null;
  isOpen: boolean;
  onClose: () => void;
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

export function ImagePreviewModal({ image, isOpen, onClose }: ImagePreviewModalProps) {
  const toggleSelection = useToggleImageSelection();
  const { toast } = useToast();

  if (!image) return null;

  const handleToggleSelection = async () => {
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

  const handleDownload = async () => {
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
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full max-h-[90vh] overflow-auto">
        <DialogHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <DialogTitle className="text-xl font-semibold text-gray-900">
            {image.title}
          </DialogTitle>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="w-5 h-5" />
          </Button>
        </DialogHeader>

        <div className="space-y-4">
          <div className="relative">
            <img
              src={image.imageUrl}
              alt={image.title}
              className="w-full h-auto rounded-lg max-h-96 object-contain bg-gray-50"
            />
            <div className="absolute top-3 left-3">
              <Badge className={`${categoryColors[image.category]} text-white`}>
                {categoryLabels[image.category]}
              </Badge>
            </div>
          </div>

          <div className="flex items-start justify-between">
            <div className="flex-1 space-y-2">
              <p className="text-sm text-gray-600">{image.description}</p>
              <div className="flex flex-wrap gap-2">
                {image.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="text-sm text-gray-500">
                <p>Resolution: {image.resolution}</p>
                <p>Source: {image.source}</p>
              </div>
            </div>

            <div className="flex space-x-3 ml-4">
              <Button
                onClick={handleToggleSelection}
                disabled={toggleSelection.isPending}
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                {image.isSelected ? (
                  <>
                    <Check className="w-4 h-4 mr-2" />
                    Selected
                  </>
                ) : (
                  <>
                    <Plus className="w-4 h-4 mr-2" />
                    Add to Selection
                  </>
                )}
              </Button>
              <Button
                onClick={handleDownload}
                className="bg-success hover:bg-success/90 text-success-foreground"
              >
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
