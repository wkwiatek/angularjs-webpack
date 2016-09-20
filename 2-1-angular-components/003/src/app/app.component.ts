import IComponentOptions = angular.IComponentOptions
import {IProduct} from "./products/product.interface";
import {ProductsService} from "./products/products.service";


export const AppComponent: IComponentOptions = {
  controller: class {
    public fetchedProducts: IProduct[];

    constructor(Products: ProductsService) {
      'ngInject';

      this.fetchedProducts = Products.products;
    }
  },
  /// Przekazujemy dane do komponentu poprzez atrybuty
  template: `<products products="$ctrl.fetchedProducts"></products>`,
}
