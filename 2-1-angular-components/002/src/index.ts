import './index.styl'

import * as angular from 'angular'
//6/ Let's import components module and register it as a dependency
import { ComponentsModule } from './app/app'

angular
  .module('app', [
    ComponentsModule.name,
  ])
