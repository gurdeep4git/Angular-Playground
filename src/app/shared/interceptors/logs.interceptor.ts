import { Injectable } from "@angular/core";
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { map, tap } from "rxjs/operators";
import { LogsService } from "src/app/logger/logs.service";
import { Log } from "../models/log";


@Injectable({
    providedIn: 'root',
})
export class LogsInterceptor implements HttpInterceptor {

    constructor(private logsService: LogsService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const startTime = new Date().getTime();

        return next
            .handle(req)
            .pipe(
                map((event) => {
                    if (event instanceof HttpResponse) {
                        const endTime = (new Date()).getTime();
                        event = event.clone({ headers: event.headers.set('endTime', endTime.toString()) });
                        event = event.clone({ headers: event.headers.set('startTime', startTime.toString()) });
                        const diff = endTime - startTime;


                        const log = new Log()
                        log.id = Math.floor(Math.random() * (999999 - 1)) + 1;
                        log.url = event.url;
                        log.startTime = startTime.toString();
                        log.endTime = endTime.toString();
                        log.differenceTime = diff.toString();
                        log.status = event.status;

                        // if (!event.url.includes('/logs')) {
                        //     this.logsService.saveLog(log).subscribe(() => console.log('logged'));
                        // }

                        console.log(event.url + " succeeded in " + diff + " milliseconds");

                    }
                    return event;
                }),
                tap(() => { },
                    error => {
                        if (error instanceof HttpErrorResponse) {
                            const endTime = (new Date()).getTime();
                            const diff = endTime - startTime;

                            const log = new Log()
                            log.id = Math.floor(Math.random() * (999999 - 1)) + 1;
                            log.url = error.url;
                            log.startTime = startTime.toString();
                            log.endTime = endTime.toString();
                            log.differenceTime = diff.toString();
                            log.status = error.status;
                            log.status = error.status;

                            // if (!event.url.includes('/logs')) {
                            //     this.logsService.saveLog(log).subscribe(() => console.log('logged'));
                            // }

                            console.log(error.url + " failed in " + diff + " milliseconds");
                        }
                    }
                )
            )
    }
}