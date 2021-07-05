import { Component, Input, OnInit } from '@angular/core';
import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface';

@Component({
  selector: 'mc-backend-error-messages',
  templateUrl: './backend-errors-messages.component.html',
  styleUrls: ['./backend-errors-messages.component.scss']
})


export class BackendErrorMessagesComponent implements OnInit {

  @Input('backendError') backendErrorProps: BackendErrorsInterface;
  errorMessages: string[];
  constructor() { }

  ngOnInit(): void {
    this.errorMessages = Object.keys(this.backendErrorProps).map((name: string) => {
      const message = this.backendErrorProps[name].join(' ');
      return `${name} ${message}`;
    });
  }

}
