
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { LoaderInterceptor } from './loader.interceptor';
import { LogsInterceptor } from './logs.interceptor';

export const interceptorProvider = [
    { provide: HTTP_INTERCEPTORS, useClass: LogsInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
]