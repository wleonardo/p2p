import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { IndexModule } from './index/index.module.ts';

const platform = platformBrowserDynamic();

platform.bootstrapModule(IndexModule);