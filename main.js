import {rekurzio} from './fuggveny.js'
console.log(rekurzio([1,2,3]))

let rekurzioegyszerubb=([head, ...tail],sum=0)=>
    typeof head==='undefined' ? sum : rekurzioegyszerubb(tail,sum+head);
console.log(rekurzioegyszerubb([1,2,3]))