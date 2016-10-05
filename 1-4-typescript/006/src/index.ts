import './index.styl'

import * as angular from 'angular'
import { AppController } from './app/app.controller'
import { AppService } from './app/app.service'

angular
  .module('app', [])
  /// And we don't have to declare dependencies
  .controller('AppController', AppController)
  .service('AppService', AppService)
