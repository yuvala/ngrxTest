import { CurrentUserInterface } from "src/app/shared/types/currentUser.Interface";
import { BackendErrorsInterface } from "src/app/shared/types/backendErrors.interface";


export interface AuthStateInterface {
    isSubmitting: boolean;
    currentUser: CurrentUserInterface | null;
    isLoggedIn: boolean | null;
    validationErrors: BackendErrorsInterface | null;
}
