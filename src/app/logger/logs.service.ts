import { Injectable } from "@angular/core";
import { ApiService } from "../shared/services/api.service";
import { Log } from "../shared/models/log"
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class LogsService {

    constructor(private apiService: ApiService) { }

    saveLog(log: Log): Observable<unknown> {
        return this.apiService.post(`/logs`, log);
    }
}