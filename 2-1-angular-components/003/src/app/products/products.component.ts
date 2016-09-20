import { IProduct } from './product.interface'
import IComponentOptions = angular.IComponentOptions;


export const ProductsComponent: IComponentOptions = {
  //3/ Odbieramy je poprzez zdefiniowanie "bindings"
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
