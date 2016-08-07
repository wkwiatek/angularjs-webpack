export function AppController(AppService: any) {
	const vm = this
	
	vm.fetchedProducts = AppService.products
}