import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { RegisterComponent } from "src/app/auth/components/register/register.component";
import { reducers } from "src/app/auth/store/reducers";
import { AuthService } from "src/app/auth/services/auth.service";
import { registerEffect } from "src/app/auth/store/effects/register.effect";
import { BackendErrorsMessagesModule } from "src/app/shared/backendErrorMessages/backendErrorMessages.module";

const routes: Routes = [
    {
        path: "register",
        component: RegisterComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        StoreModule.forFeature("auth", reducers),
        EffectsModule.forFeature([registerEffect]),
        BackendErrorsMessagesModule
    ],
    declarations: [RegisterComponent],
    providers: [AuthService]
})
export class AuthModule { }
