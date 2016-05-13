import IComponentOptions = angular.IComponentOptions
import { IProduct } from '../product.interface'

export const ProductsAddComponent: IComponentOptions = {
  bindings: {
    onProductAdded: '&',
  },
  controller: class {
    public newProduct: IProduct
    public onProductAdded: Function

    public onSubmit(product: IProduct): void {
      this.onProductAdded(product)
      this.newProduct = {
        name: '',
        price: undefined,
      }
    }
  },
  template: `
    <form 
      ng-submit="$ctrl.onSubmit({ newProduct: $ctrl.newProduct })"
    >
      <input 
        ng-model="$ctrl.newProduct.name" 
        placeholder="name" 
        required
      >
      <input 
        ng-model="$ctrl.newProduct.price" 
        placeholder="price" 
        type="number" 
        step="0.01"
        required
      >
      <button>Save</button>
    </form>
  `,
}
