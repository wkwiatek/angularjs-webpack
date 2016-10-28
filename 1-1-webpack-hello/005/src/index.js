//3/ Webpack 2 properly resolves ES2015 module syntax
import { hello } from './app/app';

document.getElementById('root').innerText = hello;