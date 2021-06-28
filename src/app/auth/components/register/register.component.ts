import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { registerAction } from "src/app/auth/store/actions";
import { isSubmittingSelector } from "src/app/auth/store/selectors";

@Component({
    selector: "mc-register",
    templateUrl: "./register.component.html",
    styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
    form!: FormGroup;
    isSubmitting$!: Observable<boolean>;

    constructor(private fb: FormBuilder, private store: Store) {}

    ngOnInit(): void {
        this.initializeForm();
        this.initializeValues();
    }

    initializeForm(): void {
        this.form = this.fb.group({
            username: ["", Validators.required],
            email: ["", Validators.required],
            password: ["", Validators.required]
        });
    }
    initializeValues(): void {
        this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
        console.log("isSubmitting$", this.isSubmitting$);
        
    }
    onSubmit(): void {
        this.store.dispatch(registerAction(this.form.value));
        console.log(this.form.value);
    }
}
