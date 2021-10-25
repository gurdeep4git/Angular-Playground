import { Injectable } from "@angular/core";
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { LoaderService } from '../services/loader.service';

@Injectable({
    providedIn: 'root',
})
export class LoaderInterceptor implements HttpInterceptor {

    private counter = 0;
    constructor(public loaderService: LoaderService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.counter++;
        this.loaderService.show();

        return next.handle(req)
            .pipe(
                tap(x => {
                    if (x instanceof HttpResponse) {
                        this.counter--;
                        if (this.counter === 0) {
                            this.loaderService.hide();
                        }
                    }
                }, error => {
                    this.counter--;
                    this.loaderService.hide();
                })
            );
    }
}