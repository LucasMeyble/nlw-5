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

caso ele retorne <em>"Restricted"</em>, execute o comando: 
<strong>Set-ExecutionPolicy RemoteSigned</strong>
E escolha a opção [A] Sim para Todos

Caso o comando acima apresente Erro, tente usar: <strong>Set-ExecutionPolicy Bypass -Scope Process</strong>

Verifique se alteração de premissão ocorreu com sucesso executando novamente o comando: <strong>Get-ExecutionPolicy</strong>

Alterada a permissão, basta instalar o Chocolatey com o comando: <strong>Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))</strong>

Após o fim da instalação, feche e abra o powershell como administrador novamente e execute: <strong>choco -v</strong>

Caso ele retorne a versão do Chocolatey, a instalação foi um sucesso. Para finalizar, basta instalar a versão LTS mais recente do Node com o seguinte comando: <strong>cinst nodejs-lts</strong>
E escolha a opção [A]ll - yes to all

Após o fim da instalação, feche e abra o powershell como administrador novamente e execute:
<strong>
  node -v
  npm -v
</strong>

Caso retorne as versões do Node e npm, sua instalação foi um sucesso.

<h2> Yarn </h2>
