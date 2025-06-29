import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../lib/api";
import type { Category } from "../types";

export function useImages() {
  return useQuery({
    queryKey: ["/api/images"],
    queryFn: api.images.getAll,
  });
}

export function useImagesByCategory(category: string) {
  return useQuery({
    queryKey: ["/api/images/category", category],
    queryFn: () => api.images.getByCategory(category),
    enabled: category !== "all",
  });
}

export function useSearchImages(query: string) {
  return useQuery({
    queryKey: ["/api/images/search", query],
    queryFn: () => api.images.search(query),
    enabled: !!query,
  });
}

export function useSelectedImages() {
  return useQuery({
    queryKey: ["/api/images/selected"],
    queryFn: api.images.getSelected,
  });
}

export function usePairingSuggestions() {
  return useQuery({
    queryKey: ["/api/pairing-suggestions"],
    queryFn: api.pairingSuggestions.getAll,
  });
}

export function useFetchStockImages() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (category: string) => api.images.fetchFromStock(category),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/images"] });
    },
  });
}

export function useToggleImageSelection() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (id: number) => api.images.toggleSelection(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/images"] });
      queryClient.invalidateQueries({ queryKey: ["/api/images/selected"] });
    },
  });
}

export function useClearSelections() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: api.images.clearSelections,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/images"] });
      queryClient.invalidateQueries({ queryKey: ["/api/images/selected"] });
    },
  });
}
