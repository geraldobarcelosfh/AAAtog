# Tribuna do Oeste Goiano

Este projeto utiliza Next.js 14 com App Router e Firebase para o deploy. A camada de CMS foi migrada para o Sanity, eliminando a necessidade de hospedar um backend próprio.

## Sanity Studio
Crie um projeto no [Sanity.io](https://www.sanity.io/) e adicione o arquivo `sanity/schema.ts` ao Studio para iniciar com os tipos de `post` e `author`.

## Variáveis de Ambiente
Crie um `.env.local` com as seguintes chaves (valores disponíveis em **Settings → API** no painel do Sanity):

```
SANITY_PROJECT_ID=yourProjectId
SANITY_DATASET=production
SANITY_API_TOKEN=yourReadToken
```

As variáveis do Firebase permanecem as mesmas do `.env.sample`.

## Deploy
Após configurar as variáveis e fazer o build do Next.js, basta executar:

```
firebase deploy
```

para enviar o frontend ao Firebase Hosting e as funções ao Cloud Functions.
