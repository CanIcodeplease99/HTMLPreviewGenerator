import { apiRequest } from "./queryClient";
import type { RimImage, PairingSuggestion } from "../types";

export const api = {
  images: {
    getAll: () => fetch("/api/images").then(res => res.json()) as Promise<RimImage[]>,
    getByCategory: (category: string) => 
      fetch(`/api/images/category/${category}`).then(res => res.json()) as Promise<RimImage[]>,
    search: (query: string) => 
      fetch(`/api/images/search?q=${encodeURIComponent(query)}`).then(res => res.json()) as Promise<RimImage[]>,
    fetchFromStock: (category: string) => 
      apiRequest("POST", `/api/images/fetch/${category}`).then(res => res.json()) as Promise<RimImage[]>,
    toggleSelection: (id: number) => 
      apiRequest("PATCH", `/api/images/${id}/toggle`).then(res => res.json()) as Promise<RimImage>,
    getSelected: () => 
      fetch("/api/images/selected").then(res => res.json()) as Promise<RimImage[]>,
    clearSelections: () => 
      apiRequest("DELETE", "/api/images/selected").then(res => res.json()),
  },
  
  pairingSuggestions: {
    getAll: () => 
      fetch("/api/pairing-suggestions").then(res => res.json()) as Promise<PairingSuggestion[]>,
    create: (data: { beforeImageId: number; afterImageId: number; description: string }) => 
      apiRequest("POST", "/api/pairing-suggestions", data).then(res => res.json()) as Promise<PairingSuggestion>,
  },
};
