//5/ Dane do wyświetlenia pochodzą teraz z AppService wstrzykniętego do kontrolera
export function AppController(AppService) {
	const vm = this
	
	vm.products = AppService.fetchedProducts
}