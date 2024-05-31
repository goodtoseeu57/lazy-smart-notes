import { createSelector } from "@ngrx/store";
import { AppStateInterface } from "../../../../types/appState.interface";

export const selectFeature = (state: AppStateInterface) => state.notes

export const isLoadingSelector = createSelector(
  selectFeature,
  (state) => state.isLoading
)

export const notesSelector = createSelector(
  selectFeature,
  (state) => state.notes
)

export const errorSelector = createSelector(
  selectFeature,
  (state) => state.error
)
