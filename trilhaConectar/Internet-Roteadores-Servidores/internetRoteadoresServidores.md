### O que é Internet

- A internet são redes interligadas pelo mundo todo;
- Uma rede tem como objetivo interligar computadores para fornecer aos usuários acesso a diversas informações;
- A internet é feita de cabos que conectam o mundo inteiro;

### Rede de computadores e comunicação

- Rede de computadores é a conexão de dispositivos para permitir a transmissão de dados;
- A comunicação na internet é feita de protocolos (conjunto de regras);

### IP e MAC Address

- Internet Protocol (IP) é um **número identificador** dado ao seu computador, ou roteador,**pelo provedor de internet no momento que se conecta a rede**;
- **MAC ADDRESS** é um **número de série identificador gravado no dispositivo de rede**;
- Através do IP que seu computador pode enviar e receber dados na internet;

### Servidores

- Um servidor é um **computador equipado com um ou mais processadores**, portas de comunicação, softwares, algum sistema para armazenamento de dados como **HDs** e/ou **SSDs**;
- Fornece serviços a uma rede de computadores, chamada de cliente;
- Esses serviços podem ser, por exemplo:
  - Hospedagem de sites;
  - Provedores de emails;
  - Entre outros...

### DNS

- Os servidores DNS (**Domain Name System**) ou **sistema de nomes de domínios** são os **responsáveis por localizar e traduzir para números IP e os endereços dos sites que digitamos nos navegadores**;
- O **DNS** permite que você acesse um site digitando um endereço nominal em lugar de números e pontos;

### HTTP

- **Hypertext Transfer Protocol** ou HTTP;
- HTTP é um **protocolo de trasnferências de dados**;
- No momento que o usuário **digita uma URL** em algum navegador, o navegador cria uma **requisição HTTP** e **manda** para o **servidor** correspondente ao **IP** da **URL** e então o servidor responde através do HTTP enviando todos os dados necessários para exibir o site pro usuário no navegador;
- O **HTTPS** - Hypertext Transfer Protocol Secure adiciona uma criptografia nas informações enviadas ou recebidas de um site;

### Como funciona a web?

A Web como as pessoas normais conhecem é somente digitar o nome do site e entrar, esse seria o caminho fácil, mas não se limita a somente isso, veremos agora o caminho avançado, onde você digita por exemplo https://rocketseat.com.br, agora temos uma URL e por de trás dos panos o que temos é o http é um protocolo que significa "Hypertext Transfer Protocol", que possui como função trocar mensagem entre computadores essa mensagem será enviada a um computador em diversos pedaços que chamamos de "chunks" e então temos a URL, que significa "Uniform Resource Locator", localizador e identificador de recursos, nesse caso o site. Essa primeira parte é apenas o processo de digitar e pressionar ENTER, então haverá o uso do protocolo para começar a comunicação.

Após o primeiro processo é então iniciada uma linha de comunicação, através de um outro protocolo chamado TCP, entre o cliente, que é o computador, dispositivo ou aplicativo que fez o pedido, no nosso caso o Browser, e o servidor, computador configurado para receber os pedidos e enviar respostas aos pedidos, e o TCP, que significa "Transmission Control Protocol", que tem como função garantir que os pacotes(chunks) cheguem corretamente ao destino, já que eles vêm em diversos pedaços.

Então a linha de comunicação foi criada, fazendo esse inicio, mas quando você apenas digita rocketseat.com o endereço precisa ser convertido em endereço de IP, através do DNS. IP significando "Internet Protocol", mais um conjunto de regras, que possui como função endereçar os computadores, todos os computadores que estão conectados à internet possuem um IP, e DNS significando "Domain Name Servers", tendo a função de converter um domínio em um endereço IP, domínio sendo de maneira simples, uma forma mais fácil de lembrarmos o IP, sem precisar digita-lo, apenas digitando o nome.

A linha de comunicação foi feita, o endereço convertido em IP e agora você quer que esse pedido seja feito, no nosso caso queremos ver o site, está percorrendo por diversos Proxys, Proxy é qualquer dispositivo no meio do caminho entre o computador e o servidor, sendo ele Modem, outros computadores, são tantos que nem sabemos quantos, tendo a função de encaminhar os pacotes, passando de um para o outro, até chegar ao servidor.

O servidor analisa seu pedido e te dá a resposta, no caso positiva, a resposta retorna pela linha de comunicação em também diversos pedacinhos até o dispositivo, Browser, montando o site para você, e esse processo ocorre diversas vezes para um único pedido, já que cada recurso (html, css, javascript, imagens, etc) é feita uma nova conexão.

Isso foi apenas uma visão geral de como funciona a Web, neste caso o que ocorre quando digitamos um endereço de site e pressionamos o ENTER, esse processo ocorre em aplicativos de smartphone também.
