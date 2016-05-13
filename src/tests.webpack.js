//2/ importowanie angulara oraz mocków
import 'angular'
import 'angular-mocks/angular-mocks'

//2/ importowanie wszystkich plików *.spec*
var testsContext = require.context('.', true, /.spec$/)
testsContext.keys().forEach(testsContext)
