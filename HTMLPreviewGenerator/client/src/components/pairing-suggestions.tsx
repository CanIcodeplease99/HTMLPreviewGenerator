import { ArrowRight, Lightbulb } from "lucide-react";
import { usePairingSuggestions } from "../hooks/use-images";

export function PairingSuggestions() {
  const { data: suggestions = [], isLoading } = usePairingSuggestions();

  if (isLoading) {
    return (
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <Lightbulb className="w-5 h-5 text-accent mr-2" />
          <h2 className="text-lg font-semibold text-gray-900">
            Before & After Pairing Suggestions
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-white rounded-lg shadow-sm p-4 border-l-4 border-accent">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-8 bg-gray-200 animate-pulse rounded"></div>
                <ArrowRight className="w-4 h-4 text-gray-400" />
                <div className="w-12 h-8 bg-gray-200 animate-pulse rounded"></div>
              </div>
              <div className="h-4 bg-gray-200 animate-pulse rounded mt-2"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (suggestions.length === 0) {
    return (
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <Lightbulb className="w-5 h-5 text-accent mr-2" />
          <h2 className="text-lg font-semibold text-gray-900">
            Before & After Pairing Suggestions
          </h2>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6 text-center text-gray-500">
          <p>Pairing suggestions will appear here once images are loaded.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mb-8">
      <div className="flex items-center mb-4">
        <Lightbulb className="w-5 h-5 text-accent mr-2" />
        <h2 className="text-lg font-semibold text-gray-900">
          Before & After Pairing Suggestions
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {suggestions.map((suggestion) => (
          <div
            key={suggestion.id}
            className="bg-white rounded-lg shadow-sm p-4 border-l-4 border-accent"
          >
            <div className="flex items-center space-x-3">
              {suggestion.beforeImage && (
                <img
                  src={suggestion.beforeImage.thumbnailUrl}
                  alt="Before"
                  className="w-12 h-8 object-cover rounded"
                />
              )}
              <ArrowRight className="w-4 h-4 text-gray-400" />
              {suggestion.afterImage && (
                <img
                  src={suggestion.afterImage.thumbnailUrl}
                  alt="After"
                  className="w-12 h-8 object-cover rounded"
                />
              )}
            </div>
            <p className="text-xs text-gray-600 mt-2">{suggestion.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
