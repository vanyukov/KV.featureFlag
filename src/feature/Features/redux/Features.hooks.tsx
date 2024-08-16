import { useAppSelector } from "store"
import { selectAllFeatures, selectFeatureById } from "./Features.slice"

export function useFeatureList() {
  return useAppSelector(selectAllFeatures)
}

export function useFeatureById(id: string) {
  return useAppSelector(state => selectFeatureById(state, id))
}

export function useFeatureListStatus() {
  return useAppSelector(state => state.features.status)
}
