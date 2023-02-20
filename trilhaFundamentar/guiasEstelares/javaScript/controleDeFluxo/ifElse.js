// If...else

let temperature = 36
let highTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >= 37

if (highTemperature) {
  console.log('Febre alta')
} else if (mediumTemperature) {
  console.log('Febre moderada')
} else {
  console.log('Saudável')
}

/* Dicas
  Sempre faça os Ifs e Elses em blocos;
  As condicionais Ifs aceitam valores booleanos;
  Transformar as condicionais em variáveis que façam sentidos e sejam melhores para ler
*/