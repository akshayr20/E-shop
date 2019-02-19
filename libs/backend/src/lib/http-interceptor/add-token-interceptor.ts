import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { LoaderService } from '../service/loader.service';
import { UserService } from '../service/user.service';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class AddTokenInterceptor implements HttpInterceptor {
  constructor(
    private loaderService: LoaderService,
    private userService: UserService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const authToken = this.userService.getAuthToken();
    request = request.clone({
      setHeaders: {
        Authorization: authToken
      }
    });
    this.loaderService.show();
    return next.handle(request).pipe(
      map(resp => {
        if (resp instanceof HttpResponse) {
          this.loaderService.hide();
          return resp;
        }
      }),
      catchError((error: Response) => {
        this.loaderService.hide();
        console.log('Error, status code:' + error.status);

        if (error instanceof HttpErrorResponse) {
          if (error.status === 401) {
            this.userService.redirectToLogin();
          } else {
            console.error('Error:' + error);
          }
        }

        this.loaderService.hide();

        return throwError(error);
      })
    );
  }
}
