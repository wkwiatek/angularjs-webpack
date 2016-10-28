import { IProduct } from './product.interface'

export class AppController {
  public products: IProduct[]

  //4/ 'ngInject' makes dependency injection working in explicit way for that function
  constructor(AppService: any) {
    'ngInject';
    
    this.products = AppService.products
  }
}
