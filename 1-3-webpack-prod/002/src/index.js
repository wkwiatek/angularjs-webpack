// Webpack allows us to import not only JS files
import './index.styl'

import angular from 'angular'
import { AppController } from './app/app.controller'
import { AppService } from './app/app.service'

angular
	.module('app', [])
	.controller('AppController', ['AppService', AppController])
	.service('AppService', AppService)
