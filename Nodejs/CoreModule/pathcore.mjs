//all local path related modules
import path from 'path'

//Get path of file in ES6

import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
console.log(path.join(__dirname,'pathcore.mjs'))

export default{
    
}