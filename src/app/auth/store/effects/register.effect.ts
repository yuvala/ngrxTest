import { Injectable } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { switchMap, map, catchError } from "rxjs/operators";
import { registerAction, registerFailureAction, registerSuccessAction } from "src/app/auth/store/actions/register.actions";
import { CurrentUserInterface } from "src/app/shared/types/currentUser.Interface";
import { AuthService } from "src/app/auth/services/auth.service";



@Injectable()
export class registerEffect {
    register$ = createEffect(() =>
        this.actions$.pipe(
            ofType(registerAction),
            switchMap((res: any) => {
                return this.authService.register(res).pipe(
                    map((currentUser: CurrentUserInterface) => {
                        return registerSuccessAction({ currentUser });
                    }),
                    catchError((errorResponse: HttpErrorResponse) => {
                        return of(
                            registerFailureAction({ errors: errorResponse.error.errors })
                        );
                    })
                );
            })
        )
    );

    constructor(private actions$: Actions, private authService: AuthService) { }
}
