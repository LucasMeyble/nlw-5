# nlw-5
Repositório destinado ao programa plantmanager, com desenvolvimento em react-native, da nlw #5

<h1>Ambiente para React-Native em Windows</h1>

<h2> Node e NPM </h2>
<p> Para o Windows utilizaremos o gerenciador de pacotes Chocolatey, porém antes dos passos de instalação vamos falar brevemente sobre qual shell você deve usar. </p>
<ul>
  <li>CMD: também conhecido como Command Prompt, ele é um dos shells mais antigos da atualidade (foi construído para ser compatível com o MS-DOS) e, apesar da sua fama, hoje em dia tem sido cada vez menos utilizado.</li>
  <li>Powershell: novo shell apresentado pela Microsoft por volta de 2005, ele apresenta diversas melhorias em relação ao CMD, tornando-o popular atualmente.</li>
</ul>
Escolhido o shell, vamos começar a instalação:
<ul>
  <li>Busque no campo de busca do Windows por Windows Powershell, clique com o botão direito em cima do programa e escolha a opção Executar como administrador.</li>
  <li>O Powershell trabalha com um esquema de autorizações (conhecido como Execution Policy) para execução de scripts e, por isso, precisamos verificar se o presente no sistema está compatível com o que o Chocolatey precisa. Execute o seguinte comando: <strong>Get-ExecutionPolicy</strong></li>
</ul>

<p>caso ele retorne <em>"Restricted"</em>, execute o comando: <strong>Set-ExecutionPolicy RemoteSigned</strong></p>
<p>E escolha a opção [A] Sim para Todos</p>

<p>Caso o comando acima apresente Erro, tente usar: <strong>Set-ExecutionPolicy Bypass -Scope Process</strong></p>

<p>Verifique se alteração de premissão ocorreu com sucesso executando novamente o comando: <strong>Get-ExecutionPolicy</strong></p>

<p>Alterada a permissão, basta instalar o Chocolatey com o comando: <strong>Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))</strong></p>

<p>Após o fim da instalação, feche e abra o powershell como administrador novamente e execute: <strong>choco -v</strong></p>

<p>Caso ele retorne a versão do Chocolatey, a instalação foi um sucesso. Para finalizar, basta instalar a versão LTS mais recente do Node com o seguinte comando: <strong>cinst nodejs-lts</strong></p>
<p>E escolha a opção [A]ll - yes to all</p>

<p>Após o fim da instalação, feche e abra o powershell como administrador novamente e execute:
<strong>
  node -v
  npm -v
</strong></p>

<p>Caso retorne as versões do Node e npm, sua instalação foi um sucesso.</p>

<h2> Yarn </h2>
<p>Para instalar o Yarn 1 no Windows siga os seguintes passos, execute o comando no Powershell (como admin): <strong> cinst yarn </strong></p>
<p>E escolha a opção [A]ll - yes to all</p>
<p>Feche e abra o terminal novamente, em seguida rode o comando: <strong>yarn --version</strong></p>
<p>Caso retorne a versão do Yarn (acima de 1.0, abaixo de 2.0), a instalação ocorreu com sucesso.</p>

<h2> Expo </h2>
<p>Para instalar o Expo é bem simples e o passo é o mesmo nos 3 sistemas operacionais.</p>

<p>Com o Node e Yarn instalados, abra o terminal (no Windows, sem ser como admin) e execute: <strong>yarn global add expo-cli</strong></p>
<p>Para verificar se a instalação ocorreu com sucesso, execute: <strong>expo --version</strong></p>
<p>Se retornar a versão da cli do Expo, a instalação ocorreu com sucesso.</p>
