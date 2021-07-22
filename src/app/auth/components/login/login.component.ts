import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { isSubmittingSelector, validationErrorsSelector } from "src/app/auth/store/selectors";
import { RegisterRequestInterface } from "src/app/auth/types/registerRequest.interface";
import { BackendErrorsInterface } from "src/app/shared/types/backendErrors.interface";
import { AuthService } from "src/app/auth/services/auth.service";
import { loginAction } from "../../store/actions/login.actions";

@Component({
    selector: "mc-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.scss"]
})

export class LoginComponent implements OnInit {
    form: FormGroup;
    isSubmitting$: Observable<boolean>;
    backendErrors$: Observable<BackendErrorsInterface | null>;

    constructor(
        private fb: FormBuilder,
        private store: Store,
        private authService: AuthService
    ) { }

    ngOnInit(): void {
        this.initializeForm();
        this.initializeValues();
    }

    initializeValues(): void {
        this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
        this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
    }
    initializeForm(): void {
        this.form = this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    }



    onSubmit(): void {
        const request: RegisterRequestInterface = {
            user: this.form.value
        };
        this.store.dispatch(loginAction({ request }));
        //   this.authService.register(this.form.value).subscribe();
    }
}
