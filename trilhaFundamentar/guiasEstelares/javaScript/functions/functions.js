// Criar um aplicativo de frases motivacionais

// Declaration - declaração da função ou Function Statement
function createPhrases() {
    console.log('Estudar é muito bom')
    console.log('Paciência e persistência')
    console.log('Revisão é mãe do aprendizado')
  }
  
  // Executar,chamar,invocar a função (execute,run,call,invoke)
  createPhrases()
  
  console.log('Fim do programa')


  // Função anonima | function anonymous
// Função expressa | function expression 




// Parâmetros (parameters)
const sum = function (number1, number2) {
    total = number1 + number2
    return total
  }
  
  let number11 = 34
  let number22 = 35
  
  sum(number11, number22) // Argumentos (arguments)
  
  console.log(`O número 1 é ${number11}`)
  console.log(`O número 2 é ${number22}`)
  console.log(`A soma é ${sum(number11, number22)}`)



  // Função é um liquidificador

  function fazerSuco (fruta1, fruta2) {
    return fruta1 + fruta2
  }

  const copo = fazerSuco(`banana` + `maçã`)

  console.log(copo)