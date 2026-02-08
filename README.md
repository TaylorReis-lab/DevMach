# DevMach - Tinder para Desenvolvedores

<div align="center">

![DevMach Logo](https://img.shields.io/badge/DevMach-Tinder_para_Devs-blueviolet?style=for-the-badge)
![React](https://img.shields.io/badge/React-19.2.3-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=for-the-badge&logo=typescript)
![Tailwind](https://img.shields.io/badge/Tailwind-4.1.17-06B6D4?style=for-the-badge&logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?style=for-the-badge&logo=vite)

**Encontre seu par ideal de código!** 💜

</div>

---

## 📖 Sobre o Projeto

**DevMach** é uma aplicação web moderna e elegante, inspirada no Tinder, mas voltada para desenvolvedores. O objetivo é conectar profissionais de tecnologia através de um sistema de match baseado em interesses, tecnologias e localização.

### 🎯 Objetivos
- Conectar desenvolvedores em potencial colaborações
- Facilitar networking profissional na área de tecnologia
- Criar uma experiência visual moderna e tecnológica
- Fornecer filtros avançados para encontrar o perfil ideal

### 👥 Público Alvo
- Desenvolvedores Front-end, Back-end, Full Stack
- Mobile Developers
- Data Scientists
- DevOps Engineers
- Tech Leads e Arquitetos de Software

---

## ✨ Funcionalidades

### 🎨 Design Moderno
- ✅ Interface limpa e responsiva
- ✅ 3 temas disponíveis: **Claro**, **Escuro** e **Neon**
- ✅ Animações suaves e transições elegantes
- ✅ Design inspirado no Tinder com toques tecnológicos
- ✅ Glass morphism e efeitos glow

### 🔐 Autenticação
- ✅ Tela de login com design moderno
- ✅ Tela de cadastro com seleção de área de atuação
- ✅ Acesso rápido com perfis de demonstração
- ✅ Suporte a temas em todas as telas
- ✅ Validação de campos

### 👥 Perfil de Desenvolvedores
- ✅ Cards com foto, nome, localização e tecnologias
- ✅ Visualização completa do perfil ao clicar
- ✅ Informações sobre experiência e projetos
- ✅ Links para GitHub e LinkedIn
- ✅ Filtros por região e área de atuação

### 💬 Mensagens
- ✅ Interface estilo Facebook Messenger
- ✅ Lista de conversas com status online
- ✅ Indicadores de mensagens não lidas
- ✅ Chat em tempo real com envio de mensagens
- ✅ Design responsivo para mobile e desktop

### 🔍 Filtros Avançados
- ✅ Filtro por região (São Paulo, Rio, Minas Gerais, etc.)
- ✅ Filtro por área de atuação (Front-end, Back-end, Full Stack, Mobile, Data Science, DevOps)
- ✅ Contador de perfis disponíveis

---

## 🛠 Tecnologias Utilizadas

### Frontend
| Tecnologia | Versão | Propósito |
|------------|--------|-----------|
| **React** | 19.2.3 | Framework principal |
| **TypeScript** | 5.9.3 | Tipagem estática |
| **Tailwind CSS** | 4.1.17 | Estilização |
| **Vite** | 7.2.4 | Build tool e dev server |
| **React Router** | 6.23.1 | Navegação e roteamento |

### Ferramentas de Desenvolvimento
- `@vitejs/plugin-react` - Plugin React para Vite
- `@tailwindcss/vite` - Integração Tailwind com Vite
- `vite-plugin-singlefile` - Build como arquivo único
- `clsx` - Utilitário para classes condicionais
- `tailwind-merge` - Merge de classes Tailwind

---

## 📁 Estrutura do Projeto

```
devmach/
├── 📄 index.html                    # HTML principal
├── 📄 package.json                  # Dependências do projeto
├── 📄 tsconfig.json                 # Configuração TypeScript
├── 📄 vite.config.ts                # Configuração Vite
├── 📄 README.md                     # Este arquivo
├── 📄 DOCUMENTACAO.md              # Documentação completa
├── 📄 TECHNICAL_GUIDE.md           # Guia técnico
├── 📄 STYLE_GUIDE.md               # Guia de estilo
└── 📁 src/
    ├── 📄 main.tsx                  # Entry point da aplicação
    ├── 📄 App.tsx                   # Componente principal
    ├── 📄 index.css                 # Estilos globais e animações
    ├── 📁 utils/
    │   └── 📄 cn.ts                # Utilitário para classes Tailwind
    ├── 📁 contexts/
    │   └── 📄 ThemeContext.tsx     # Gerenciamento de temas
    └── 📁 pages/
        ├── 📄 Login.tsx             # Tela de login
        ├── 📄 Signup.tsx            # Tela de cadastro
        ├── 📄 Swipe.tsx             # Tela principal de swipe
        ├── 📄 ProfileDetail.tsx     # Detalhes do perfil
        └── 📄 Messages.tsx          # Área de mensagens
```

---

## 🚀 Como Executar

### Pré-requisitos
- Node.js >= 18.0.0
- npm >= 9.0.0

### Instalação e Execução

1. **Clone o repositório** (ou use os arquivos fornecidos):
```bash
# Se estiver usando um repositório
git clone https://github.com/seu-usuario/devmach.git
cd devmach
```

2. **Instale as dependências**:
```bash
npm install
```

3. **Inicie o servidor de desenvolvimento**:
```bash
npm run dev
```

4. **Acesse a aplicação**:
- Abra seu navegador em `http://localhost:5173` (ou a porta indicada)

### Build de Produção

```bash
# Build para produção
npm run build

# Preview do build
npm run preview
```

O build gera um arquivo único em `dist/index.html` que pode ser hospedado em qualquer servidor estático.

---

## 🎯 Como Usar

### 1. Login / Cadastro
- Acesse a página inicial em `/login`
- Use os botões demo para acesso rápido:
  - **Ana (Full Stack)** - ana@devmach.com
  - **Carlos (Back-end)** - carlos@devmach.com
- Ou crie uma nova conta em `/signup`

### 2. Sistema de Swipe
- Navegue pelos perfis na tela principal
- **❤️ Like**: Clique no coração para curtir
- **❌ Dislike**: Clique no X para não curtir
- **👁️ Ver Perfil**: Clique no olho para ver detalhes

### 3. Filtros
- Use os filtros de **Região** e **Área de Atuação**
- Os perfis serão filtrados em tempo real
- Contador mostra posição atual e total

### 4. Detalhes do Perfil
- Clique no card ou no botão "Ver Perfil"
- Visualize informações completas
- Acesse links para GitHub e LinkedIn
- Clique em "Enviar Mensagem" para iniciar conversa

### 5. Mensagens
- Acesse via botão de mensagens (💬)
- Selecione uma conversa na lista
- Digite sua mensagem e pressione Enter ou clique em enviar
- Mensagens aparecem em tempo real

### 6. Temas
- No login, selecione o tema desejado:
  - ☀️ **Claro**: Gradiente azul/púrpura
  - 🌙 **Escuro**: Interface escura
  - ⚡ **Neon**: Efeito ciano com glow

---

## 🎨 Temas Disponíveis

### ☀️ Tema Claro
- **Background**: Gradiente azul/púrpura
- **Cards**: Branco
- **Texto**: Cinza escuro
- **Accent**: Indigo
- **Uso**: Ambiente claro, fácil leitura

### 🌙 Tema Escuro
- **Background**: Cinza escuro (#111827)
- **Cards**: Cinza 800 (#1f2937)
- **Texto**: Branco e cinza claro
- **Accent**: Indigo claro
- **Uso**: Menor cansaço visual, ambiente noturno

### ⚡ Tema Neon
- **Background**: Preto profundo (#0a0a0a)
- **Cards**: Preto com borda ciano
- **Texto**: Ciano com efeito neon glow
- **Accent**: Ciano (#00ffff)
- **Uso**: Estilo tecnológico, futurista

---

## 📸 Recursos Visuais

### Avatares
- Utilizamos `pravatar.cc` para avatares online
- Cada perfil tem um avatar único
- Formato: `https://i.pravatar.cc/150?img={id}`

### Gradientes
- Header com gradientes vibrantes
- Cores: Indigo → Purple → Pink
- Transições suaves

### Animações
- **Swipe Right**: Card move para direita com rotação
- **Swipe Left**: Card move para esquerda com rotação
- **Pulse Glow**: Efeito de brilho pulsante no logo
- **Hover**: Cards aumentam levemente ao passar o mouse

### Efeitos Especiais
- **Glass Morphism**: Cards com efeito de vidro
- **Neon Glow**: Texto e bordas com brilho ciano
- **Shadows**: Sombras suaves e profundas

---

## 🔧 Dados de Demonstração

### Perfis de Desenvolvedores (5 perfis)

| Nome | Área | Localização | Tecnologias |
|------|------|-------------|-------------|
| **Ana Silva** | Full Stack | São Paulo, SP | React, Node.js, PostgreSQL, TypeScript |
| **Carlos Oliveira** | Back-end | Rio de Janeiro, RJ | Python, Django, AWS, Docker, PostgreSQL |
| **Mariana Costa** | Front-end | Belo Horizonte, MG | React, TypeScript, Tailwind, Next.js |
| **Pedro Santos** | Mobile | Porto Alegre, RS | React Native, Flutter, TypeScript, Firebase |
| **Julia Mendes** | Data Science | São Paulo, SP | Python, TensorFlow, Pandas, SQL, AWS |

### Conversas de Demonstração
- 4 conversas pré-carregadas
- Mensagens de exemplo para cada perfil
- Status online/offline simulado

---

## 📱 Responsividade

### Mobile First
- ✅ Layout otimizado para smartphones
- ✅ Botões grandes e fáceis de tocar
- ✅ Scroll suave
- ✅ Conversas em tela cheia

### Tablet
- ✅ Layout adaptado
- ✅ Grid de cards otimizado
- ✅ Sidebar de mensagens responsiva

### Desktop
- ✅ Layout completo com sidebar
- ✅ Cards maiores e mais detalhados
- ✅ Navegação lateral
- ✅ Chat ao lado da lista de conversas

---

## 🚀 Deploy e Hospedagem

### Build Único (Single File)
O projeto usa `vite-plugin-singlefile` para gerar um arquivo único:
- **Saída**: `dist/index.html`
- **Formato**: HTML + CSS + JS embutidos
- **Ideal para**: Hospedagem estática

### Hospedagem Recomendada

1. **GitHub Pages** (Gratuito)
```bash
# Build o projeto
npm run build

# Configure GitHub Pages no repositório
# Settings > Pages > Source: gh-pages branch

# Deploy
npx gh-pages -d dist
```

2. **Netlify** (Gratuito)
- Arraste a pasta `dist` para o Netlify
- Ou conecte seu repositório Git

3. **Vercel** (Gratuito)
- Conecte seu repositório Git
- Deploy automático

4. **Firebase Hosting** (Gratuito)
```bash
npm install -g firebase-tools
firebase init hosting
firebase deploy
```

---

## 📚 Documentação Adicional

Para mais detalhes, consulte os arquivos:

- **[DOCUMENTACAO.md](DOCUMENTACAO.md)** - Documentação completa do projeto
- **[TECHNICAL_GUIDE.md](TECHNICAL_GUIDE.md)** - Guia técnico detalhado
- **[STYLE_GUIDE.md](STYLE_GUIDE.md)** - Guia de estilo e boas práticas

---

## 📝 Notas e Considerações

### ⚠️ Aviso Importante
- Este é um **projeto de demonstração**
- Dados são **simulados** (não há backend real)
- Funcionalidades de login/cadastro são **locais** (no navegador)
- Mensagens são **armazenadas em memória** (perdem ao recarregar)
- Não há autenticação real ou segurança de dados

### 🔒 Limitações Conhecidas
- Sem persistência de dados
- Sem validação de backend
- Sem proteção contra XSS (cuidado com inputs)
- Sem rate limiting
- Sem logs de segurança

### 🎯 Próximos Passos
- [ ] Adicionar backend real (Node.js + Express + MongoDB)
- [ ] Implementar autenticação JWT
- [ ] Adicionar persistência de dados
- [ ] Criar sistema de match bidirecional
- [ ] Adicionar notificações push
- [ ] Implementar video call (WebRTC)
- [ ] Adicionar testes unitários e E2E
- [ ] Melhorar SEO e meta tags

---

## 🤝 Contribuição

### Como Contribuir
1. Fork o repositório
2. Crie uma branch: `git checkout -b feature/nova-feature`
3. Faça suas alterações
4. Commit: `git commit -m "feat: adiciona nova feature"`
5. Push: `git push origin feature/nova-feature`
6. Abra um Pull Request

### Padronização
- Siga o [STYLE_GUIDE.md](STYLE_GUIDE.md)
- Use Conventional Commits
- Mantenha o código limpo e documentado

### Reportar Issues
- Abra uma issue no repositório
- Descreva o problema detalhadamente
- Inclua passos para reproduzir
- Adicione screenshots se necessário

---

## 📄 Licença

Este projeto está sob a licença **MIT**.

```
MIT License

Copyright (c) 2024 DevMach

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 📞 Contato

- **Projeto**: DevMach
- **Versão**: 1.0.0
- **Status**: ✅ Em desenvolvimento
- **License**: MIT

---

## 🙏 Agradecimentos

- **React Team** - Pelo framework incrível
- **Tailwind CSS** - Pelo sistema de estilos
- **Vite Team** - Pela ferramenta de build rápida
- **Tinder** - Pela inspiração de design
- **Comunidade Dev** - Pelo suporte e feedback

---

<div align="center">

### 💜 DevMach - Conectando desenvolvedores, um match de cada vez

**Feito com ❤️ para a comunidade de desenvolvimento**

[![Made with React](https://img.shields.io/badge/Made%20with-React-61DAFB?logo=react&style=for-the-badge)](https://react.dev/)
[![Made with TypeScript](https://img.shields.io/badge/Made%20with-TypeScript-3178C6?logo=typescript&style=for-the-badge)](https://www.typescriptlang.org/)
[![Made with Tailwind](https://img.shields.io/badge/Made%20with-Tailwind-06B6D4?logo=tailwindcss&style=for-the-badge)](https://tailwindcss.com/)

</div>

