function checaIdadade(idade){
    return new Promise((resolve,reject) => {
        const result = (idade >=18) ? resolve(idade) : reject(idade);
    });
}

checaIdadade(17)
    .then(resolve => console.log('Maior/igual 18'))
    .catch(reject => console.log('Menor que 18'));