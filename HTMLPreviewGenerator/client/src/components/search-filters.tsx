import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import type { Category } from "../types";

interface SearchFiltersProps {
  onSearch: (query: string) => void;
  onCategoryChange: (category: Category) => void;
  activeCategory: Category;
  imageCounts: Record<Category, number>;
}

export function SearchFilters({
  onSearch,
  onCategoryChange,
  activeCategory,
  imageCounts,
}: SearchFiltersProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    onSearch(value);
  };

  const categories: { key: Category; label: string }[] = [
    { key: "all", label: "All Images" },
    { key: "damaged", label: "Damaged Rims" },
    { key: "restored", label: "Restored Rims" },
    { key: "rusty", label: "Rusty Wheels" },
    { key: "polished", label: "Polished Rims" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Search Bar */}
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="text"
                placeholder="Search rim repair images..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="search-input pl-10 pr-4 py-3"
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map(({ key, label }) => (
              <Button
                key={key}
                onClick={() => onCategoryChange(key)}
                variant="ghost"
                className={`category-btn ${
                  activeCategory === key ? "active" : ""
                }`}
              >
                {label} ({imageCounts[key] || 0})
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
