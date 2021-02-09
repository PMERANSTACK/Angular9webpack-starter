import './polyfills';
import { AppModuleNgFactory } from './app/app.module.ngfactory';

import { enableProdMode } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';

enableProdMode();

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
