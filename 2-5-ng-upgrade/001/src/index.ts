import './index.styl'

//2/ There we're importing angular 2 dependencies
import 'reflect-metadata'
require('zone.js/dist/zone') // tslint:disable-line

import * as angular from 'angular'
//2/ Importing upgrade adapter
import { UpgradeAdapter } from '@angular/upgrade'
const adapter: any = new UpgradeAdapter()

import { ComponentsModule } from './app/app'

angular
  .module('app', [
    ComponentsModule.name,
  ])

/// bootstrap with adapter
adapter.bootstrap(document.body, ['app']);
