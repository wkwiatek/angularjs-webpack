import './index.styl'

import * as angular from 'angular'
/// Importing new component
import { AppComponent } from './app/app.component'
import { AppService } from './app/app.service'

angular
  .module('app', [])
  /// And register it as an 'app'
  .component('app', AppComponent)
  .service('AppService', AppService)
