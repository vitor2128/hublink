# QRExpresso

Cardápio digital gratuito para bares e restaurantes

## Requisitos Desenvolvimento

```
VSCode

Visual Studio Community

Docker Desktop

Git

Node versão LTS

MySQL Workbench (ou qualquer outro sgdb)

.NET Core 5.0 (https://dotnet.microsoft.com/download)
```

### Extensões recomendadas para VSCode

```
Color Highlight
EditorConfig
ESLint
Prettier
vscode-styled-components
C#
C# Extensions
```

- Sugestão habilitar `formatOnSave:true` nas configurações do editor.

# Instruções Iniciais

### Clonar repositório para máquina local

```
https://github.com/hkanizawa/QRExpresso.git
```

## Frontend

### Instalar dependências node-modules

```
cd web
npm install
npm start
```

## Banco de Dados

### Subir containers MySQL e Redis via docker compose (raiz projeto)

```
docker-compose up -d
```

Porta MySQL: 3321

Porta Redis: 6379

## Backend

C# - .NET Core 5.0

Instalar SDKs

```
cd server
dotnet run
```

## Padrões git flow/commit

```
git checkout dev
```

???
