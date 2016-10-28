import angular from 'angular'
import { AppController } from './app/app.controller'
import { AppService } from './app/app.service'

angular
	.module('app', [])
	/// Thanks to strict di mode we'll get error without explicit dependency declaration
	.controller('AppController', ['AppService', AppController])
	.service('AppService', AppService)
