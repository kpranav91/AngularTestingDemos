import { Injectable, ErrorHandler, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorFormatterService } from './error-formatter.service';

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandlerService implements ErrorHandler {


  constructor(private injector: Injector) { }

  handleError(error: Error | HttpErrorResponse) {

    const errorService = this.injector.get(ErrorFormatterService);
    // add logger & notification service as above
    let message;
    let stackTrace;

    if (error instanceof HttpErrorResponse) {
      // Server Error
      message = errorService.getServerMessage(error);
      stackTrace = errorService.getServerStack(error);
      // notification service method call
    } else {
      // Client Error
      message = errorService.getClientMessage(error);
      stackTrace = errorService.getClientStack(error);
      // notification service method call
    }

    console.log('message');
    console.log(message);

    // console service logging error
    console.log('error');
    console.log(error);

  }
}
