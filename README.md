# blazor-auto-typescript-chartjs
Integrando o TypeScript em um projeto Blazor com C#, para interoperar com o JavaScript renderizando gráficos da biblioteca Chart.Js

![.Net](https://img.shields.io/badge/.NET-5C2D91?style=for-the-badge&logo=.net&logoColor=white)
![C#](https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=c-sharp&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![Visual Studio](https://img.shields.io/badge/Visual%20Studio-5C2D91.svg?style=for-the-badge&logo=visual-studio&logoColor=white)

## Sobre o projeto
Este projeto mostra como integrar o TypeScript em um projeto Blazor com C#, para interoperar com o JavaScript renderizando gráficos da biblioteca Chart.Js.

Embora o Blazor seja um framework que utiliza C# para criar aplicações web, ele permite integração com JavaScript, e o TypeScript pode ser utilizado como uma extensão do JavaScript nessa integração.

O TypeScript pode ser usado para manipulação de DOM, integração com APIs externas ou até tarefas complexas de front-end, enquanto o Blazor gerencia a lógica de aplicação em C#.

Essa abordagem permite que você aproveite os benefícios do TypeScript (tipagem, ferramentas de desenvolvimento avançadas) dentro do ambiente Blazor.

Instalar o Node.js
>https://nodejs.org

Checar a versão do Node.js
><code>node -v</code>

Instalar o gerenciador de pacotes npm
><code>install -g npm</code>

Checar a versão do gerenciador de pacotes npm
><code>npm -v</code>

Instalar o TypeScript
><code>npm install -g typescript</code>

Checar a versão do TypeScript
><code>tsc -v</code>

Criar o projeto Blazor
><code>dotnet new blazor -int auto</code>

Instalar a biblioteca Chart.Js e copiar os arquivos gerados para o diretório de distribuição
><code>npm install chart.js</code>

Após configurar arquivo tsconfig.json no projeto e escrever seus scripts em TypeScript, basta executar o comando <code>ts</code> para transpilar os arquivos TypeScript para JavaScript.

<div align="center">
    <img src="https://github.com/user-attachments/assets/bd63cded-1672-43e3-b66e-01d3e56dbc11"</img>
    <img src="https://github.com/user-attachments/assets/8a52f2f9-a557-472a-a76f-6c29fdc8f8df"</img>
    <img src="https://github.com/user-attachments/assets/802052cb-aa1a-4f6f-b8d6-ee849beb91e0"</img>
    <img src="https://github.com/user-attachments/assets/839b9128-d33b-4b9b-971c-d2848a85a3ac"</img>
</div>

## Referências
https://learn.microsoft.com/en-us/aspnet/core/blazor/javascript-interoperability/?view=aspnetcore-10.0

https://nodejs.org

https://www.typescriptlang.org/

https://www.chartjs.org/

## Licença
GPL-3.0 license
