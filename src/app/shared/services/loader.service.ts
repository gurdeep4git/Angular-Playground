import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';


@Injectable({
    providedIn: 'root',
})
export class LoaderService {
    private isLoadingSource$ = new BehaviorSubject<boolean>(false);
    public isLoading$ = this.isLoadingSource$.asObservable();

    show() {
        this.isLoadingSource$.next(true)
    }

    hide() {
        this.isLoadingSource$.next(false)
    }
}