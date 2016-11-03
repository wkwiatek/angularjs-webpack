import * as angular from 'angular';
import IComponentOptions = angular.IComponentOptions;

import {IProduct} from './product.interface';

import './products.styl' // tslint:disable-line


export const ProductsComponent: IComponentOptions = {
    controller: class {
        public products: IProduct[];

        constructor(Products: any) {
            'ngInject';

            this.products = Products.products
        }
    },
    template: `
    <div>
      <h1>Shopping list</h1>
      <ul>
        <li ng-repeat="product in $ctrl.products" class="listElement">
          {{ product.name }} - {{ product.price | currency }}
        </li>
      </ul>
      <ng-outlet></ng-outlet>
    </div>
  `,
}
