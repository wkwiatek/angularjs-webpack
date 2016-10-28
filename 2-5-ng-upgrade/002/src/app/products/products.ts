import IModule = angular.IModule
import { ProductsComponent } from './products.component'
import { ProductsService } from './products.service'
import { ProductsAddComponent } from './add/products-add.component'
import { ProductsMainComponent } from './main/products-main.component'
import { adapter } from '../../index'

/// We need to register service in Angular's 2 part
adapter.addProvider(ProductsService);

export const ProductsModule: IModule = angular
  .module('app.components.products', [])
  .component('products', ProductsComponent)
  .component('productsAdd', ProductsAddComponent)
  .component('productsMain', ProductsMainComponent)
  /// And register it's downgraded version in Angular's 1 part
  .service('Products', adapter.downgradeNg2Provider(ProductsService))
