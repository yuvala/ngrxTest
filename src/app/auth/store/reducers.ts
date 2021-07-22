import { createReducer, on, Action } from '@ngrx/store'

import { AuthStateInterface } from "src/app/auth/types/authState.interface";
import { registerAction, registerFailureAction, registerSuccessAction } from "src/app/auth/store/actions/register.actions";
import { loginAction, loginFailureAction, loginSuccessAction } from 'src/app/auth/store/actions/login.actions';

const initialState: AuthStateInterface = {
    isSubmitting: false,
    currentUser: null,
    validationErrors: null,
    isLoggedIn: null
};


const authReducer = createReducer(
    initialState,
    on(
        registerAction,
        (state): AuthStateInterface => ({
            ...state,
            isSubmitting: true,
            validationErrors: null
        })
    ),
    on(
        registerSuccessAction,
        (state, action): AuthStateInterface => ({
            ...state,
            isSubmitting: false,
            isLoggedIn: true,
            currentUser: action.currentUser
        })
    ),
    on(registerFailureAction,
        (state, action): AuthStateInterface => ({
            ...state,
            isSubmitting: false,
            validationErrors: action.errors
        })
    ),
    on(loginAction,
        (state, action): AuthStateInterface => ({
            ...state,
            isSubmitting: true,
            validationErrors: null
        })
    ),
    on(
        loginSuccessAction,
        (state, action): AuthStateInterface => ({
            ...state,
            isSubmitting: false,
            isLoggedIn: true,
            currentUser: action.currentUser
        })
    ),
    on(loginFailureAction,
        (state, action): AuthStateInterface => ({
            ...state,
            isSubmitting: false,
            validationErrors: action.errors
        })
    ),
)
export function reducers(state: AuthStateInterface, action: Action) {
    return authReducer(state, action)
}
