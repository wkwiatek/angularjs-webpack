import 'angular'
import 'angular-mocks/angular-mocks'

var testsContext = require.context('.', true, /.spec$/)
testsContext.keys().forEach(testsContext)
