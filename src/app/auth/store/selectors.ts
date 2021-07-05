import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppStateInterface } from "src/app/shared/types/appState.interface";
import { AuthStateInterface } from "src/app/auth/types/authState.interface";

export const authFetureSelector = createFeatureSelector<
    AppStateInterface,
    AuthStateInterface
>('auth');

export const isSubmittingSelector = createSelector(
    authFetureSelector,
    (authSate: AuthStateInterface) => authSate.isSubmitting
);


export const validationErrorsSelector = createSelector(
    authFetureSelector,
    (authSate: AuthStateInterface) => authSate.validationErrors
);
