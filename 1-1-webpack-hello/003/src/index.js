//3/ Webpack 2 properly resolves ES2015 syntaxt of imports and exports
import { hello } from './app/app';

document.getElementById('root').innerText = hello;