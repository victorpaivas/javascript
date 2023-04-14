let valores = [8, 7, 1 ,4 ,2 ,9]
valores.sort() //de forma ordenada
console.log(valores)
/*  JEITO MENOS SIMPLIFICADO
for(pos=0;pos < valores.length;pos++){
    console.log(`À posição ${pos} tem o valor ${valores[pos]}`)
}*/

for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]} `)
}