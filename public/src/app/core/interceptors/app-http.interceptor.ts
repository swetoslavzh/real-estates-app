import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/app/data/constants/constants';

@Injectable({
  providedIn: 'root'
})
export class AppHttpInterceptorService implements HttpInterceptor {

  constructor(
    // private authService: AuthService
  ) { }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // const token: string = this.authService.getToken();
    const jsonReq: HttpRequest<any> = req.clone({
      url: `${baseUrl}${req.url}`,
      setHeaders: {
        // Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    }); 

    return next.handle(jsonReq);
  }
}
