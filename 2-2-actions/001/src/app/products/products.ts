import IModule = angular.IModule
import { ProductsComponent } from './products.component'
import { ProductsService } from './products.service'
/// Importing new component
import { ProductsAddComponent } from './add/products-add.component'

export const ProductsModule: IModule = angular
  .module('app.components.products', [])
  .component('products', ProductsComponent)
  /// And registering it
  .component('productsAdd', ProductsAddComponent)
  .service('Products', ProductsService)
