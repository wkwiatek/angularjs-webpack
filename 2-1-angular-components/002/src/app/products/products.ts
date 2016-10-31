import * as angular from 'angular';
import IModule = angular.IModule

import { ProductsComponent } from './products.component'
import { ProductsService } from './products.service'

//4/ We're adding whole products stuff to products module
export const ProductsModule: IModule = angular
  .module('app.components.products', [])
  .component('products', ProductsComponent)
  .service('Products', ProductsService)
