import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderInterceptor } from './header-interceptor';

export const v_HttpInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass : HeaderInterceptor, multi: true }
]