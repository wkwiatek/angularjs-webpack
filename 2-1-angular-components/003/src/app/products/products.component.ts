import { IProduct } from './product.interface'
import IComponentOptions = angular.IComponentOptions;


export const ProductsComponent: IComponentOptions = {
  //3/ We can receive data in component by declaring bindings
  bindings: {
    products: '<'
  },
  controller: class {
    public products: IProduct[]
  },
  template: `
    <div>
      <h1>Shopping list</h1>
      <ul>
        <li ng-repeat="product in $ctrl.products">
          {{ product.name }} - {{ product.price | currency }}
        </li>
      </ul>
    </div>
  `,
};
