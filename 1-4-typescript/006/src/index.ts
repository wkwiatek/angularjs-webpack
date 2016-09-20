import './index.styl'

import * as angular from 'angular'
import { AppController } from './app/app.controller'
import { AppService } from './app/app.service'

angular
  .module('app', [])
  /// A my nie musimy dodatkowo tutaj definiować zależności
  .controller('AppController', AppController)
  .service('AppService', AppService)
