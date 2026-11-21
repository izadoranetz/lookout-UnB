# Lookout UnB

Aplicativo mobile multiplataforma desenvolvido com Expo e React Native para centralizar informações de segurança e ocorrências na região da Universidade de Brasília (UnB).

> Estado atual: protótipo em desenvolvimento. O mapa e o menu lateral já estão implementados; as ações do menu ainda exibem apenas mensagens informativas.

## Especificações do projeto

- Plataforma: Android, iOS e web, com interface adaptada para dispositivos móveis.
- Navegação: Expo Router com roteamento baseado em arquivos.
- Linguagem: TypeScript.
- Interface: React Native e componentes nativos.
- Mapa: `react-native-maps`, com foco na posição atual do usuário.
- Localização: `expo-location`, com solicitação de permissão em primeiro plano.
- Posição padrão: região central de Brasília (`-15.7801`, `-47.9292`) quando o usuário não autoriza ou não é possível obter a localização.
- Menu: modal com as opções "Info do usuário", "Histórico de ocorrências" e "Sair".
- SDK utilizado: Expo SDK 58.

### Funcionalidades disponíveis

- Solicita autorização para acessar a localização do dispositivo.
- Exibe um mapa centrado na localização do usuário.
- Exibe o botão de localização atual no mapa.
- Apresenta um botão de menu no canto superior esquerdo.
- Permite fechar o menu ao tocar fora dele.
- Redireciona temporariamente as opções do menu para avisos "Em breve".

### Funcionalidades previstas

As funcionalidades abaixo dependem de implementação futura:

- Informações detalhadas do usuário.
- Histórico e consulta de ocorrências.
- Cadastro e acompanhamento de eventos.
- Autenticação e encerramento real da sessão.
- Integração com uma API ou banco de dados.
- Alertas e notificações de ocorrências.

## Tecnologias

- Expo 58
- React Native 0.88
- React 19
- Expo Router
- Expo Location
- React Native Maps
- TypeScript 6

## Estrutura do projeto

```text
app-mobile/
├── assets/          # Ícones, splash screen e imagens
├── src/
│   └── app/
│       ├── _layout.tsx  # Layout raiz e configuração da navegação
│       └── index.tsx    # Tela principal com mapa e menu
├── app.json         # Configuração do Expo
├── package.json     # Dependências e scripts
└── tsconfig.json    # Configuração do TypeScript
```

## Pré-requisitos

- Node.js 20 ou superior.
- npm.
- Android Studio e um emulador, ou um dispositivo Android.
- Para iOS: macOS, Xcode e o simulador iOS.
- Uma compilação de desenvolvimento para recursos nativos, como o mapa, caso o Expo Go não os disponibilize.

## Como executar

Na raiz do projeto `app-mobile`, instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm start
```

ou:

```bash
npx expo start
```

No terminal, use uma das opções:

- `a`: abrir no emulador ou dispositivo Android.
- `i`: abrir no simulador iOS.
- `w`: abrir na versão web.
- Leia o QR code com o Expo Go no dispositivo móvel.

### Executar diretamente por plataforma

Android:

```bash
npm run android
```

iOS:

```bash
npm run ios
```

Web:

```bash
npm run web
```

Ao abrir o aplicativo pela primeira vez, autorize o acesso à localização. Caso a permissão seja negada, o mapa será centralizado em Brasília.

## Desenvolvimento

As telas devem ser criadas em `src/app/`. O arquivo `src/app/_layout.tsx` configura o navegador raiz, e `src/app/index.tsx` contém a tela atual do mapa.

Verifique erros de lint:

```bash
npm run lint
```

Verifique os tipos do TypeScript:

```bash
npx tsc --noEmit
```

## Observações

- O aplicativo não possui backend ou persistência de dados nesta versão.
- O menu não realiza navegação nem autenticação.
- A versão web pode exigir uma configuração adicional para o provedor de mapas.
- Para uso contínuo dos módulos nativos e alterações no projeto, recomenda-se utilizar uma compilação de desenvolvimento do Expo.
