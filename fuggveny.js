export function rekurzio(arr,sum=0){
    if(arr.length===0) return sum;
    let[head, ...tail]=arr;
    return rekurzio(tail,sum+head)


};
let rekurzioegyszerubb=(arr,sum=0)=>
    typeof head==='undefined'? sum : rekurzioegyszerubb(tail,sum+head);