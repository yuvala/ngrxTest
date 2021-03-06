import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";


import { isSubmittingSelector, validationErrorsSelector } from "src/app/auth/store/selectors";

import { BackendErrorsInterface } from "src/app/shared/types/backendErrors.interface";
import { AuthService } from "src/app/auth/services/auth.service";
import { LoginRequestInterface } from "src/app/auth/types/login.interface";
import { loginAction } from "src/app/auth/store/actions/login.actions";

@Component({
    selector: "mc-register",
    templateUrl: "./register.component.html",
    styleUrls: ["./register.component.scss"]
})

export class RegisterComponent implements OnInit {
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
            username: ['', Validators.required],
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    onSubmit(): void {
        console.log('submit', this.form.value, this.form.valid);
        const request: LoginRequestInterface = {
            user: this.form.value
        };
        this.store.dispatch(loginAction({ request }));
        //   this.authService.register(this.form.value).subscribe();
    }
}
