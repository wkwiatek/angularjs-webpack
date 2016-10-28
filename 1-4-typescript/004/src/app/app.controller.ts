//7/ Let's use classes
export class AppController {
  public products: any[]

  constructor(AppService: any) {
    this.products = AppService.products
  }
}
