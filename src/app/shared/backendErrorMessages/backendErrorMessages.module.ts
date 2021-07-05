import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BackendErrorMessagesComponent } from 'src/app/shared/backendErrorMessages/compnents/backend-errors-messages/backend-errors-messages.component';

@NgModule({
    declarations: [BackendErrorMessagesComponent],
    imports: [CommonModule],
    exports: [BackendErrorMessagesComponent]
})

export class BackendErrorsMessagesModule {

}