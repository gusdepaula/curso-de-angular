import { ApplicationConfig, LOCALE_ID } from '@angular/core';
import {
  provideRouter,
  withComponentInputBinding,
  withRouterConfig,
} from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

import localePt from '@angular/common/locales/pt';
import {
  IMAGE_LOADER,
  ImageLoaderConfig,
  provideImgixLoader,
  registerLocaleData,
} from '@angular/common';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { httpInterceptor } from './inteceptor/http.interceptor';
import { provideTranslate } from './app.translate';
import { environment } from 'environments/environment';
registerLocaleData(localePt);

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withComponentInputBinding(),
      withRouterConfig({
        paramsInheritanceStrategy: 'always',
      })
    ),
    provideClientHydration(),
    provideHttpClient(withInterceptors([httpInterceptor])),
    provideTranslate(),
    // provideImgixLoader(environment.img),
    {
      provide: IMAGE_LOADER,
      useValue: (config: ImageLoaderConfig) => {
        const img = config.src.split('.');
        const name = img.shift();
        const type = img.pop();
        const width = config.width;
        return `${environment.img}${name}${
          width ? '-' + width + 'w' : ''
        }.${type}`;
      },
    },
    { provide: LOCALE_ID, useValue: 'pt-BR' },
  ],
};
