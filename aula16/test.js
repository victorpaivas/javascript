function parimp(n) {
    if(n % 2 == 0){
        return 'par'
    } else {
        return 'impar'
    }
}

let res = parimp(24)
console.log(res)