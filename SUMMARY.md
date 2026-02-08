# 📋 Resumo do Projeto DevMach

## 🎯 Visão Geral

**DevMach** é um aplicativo web inspirado no Tinder, mas voltado para desenvolvedores. Permite que profissionais de tecnologia encontrem potenciais colaboradores através de um sistema de swipe, filtros avançados e mensagens.

---

## ✅ Funcionalidades Implementadas

### 1. Autenticação e Cadastro
- [x] Tela de login moderna
- [x] Formulário de cadastro com seleção de área de atuação
- [x] Acesso rápido via botões demo (Ana e Carlos)
- [x] Toggle de visibilidade de senha
- [x] Validação de campos obrigatórios

### 2. Sistema de Swipe
- [x] Cards de perfil com foto, nome, localização e tecnologias
- [x] Ações: Like ❤️, Dislike ❌, Ver Perfil 👁️
- [x] Animações de swipe (direita/esquerda)
- [x] Contador de perfis (posição/atual)
- [x] 5 perfis de desenvolvedores pré-cadastrados

### 3. Filtros Avançados
- [x] Filtro por região (5 opções)
- [x] Filtro por área de atuação (6 opções)
- [x] Filtros funcionam em tempo real
- [x] Contador atualiza com filtro

### 4. Detalhes do Perfil
- [x] Página completa de perfil
- [x] Informações: nome, localização, descrição
- [x] Seção de experiência profissional
- [x] Tags de tecnologias
- [x] Lista de projetos destacados
- [x] Links para GitHub e LinkedIn
- [x] Botão de ação rápida para mensagem

### 5. Sistema de Mensagens
- [x] Interface estilo Facebook Messenger
- [x] Lista de conversas com status online
- [x] Badge de mensagens não lidas
- [x] Chat em tempo real (simulado)
- [x] Envio de mensagens (Enter ou botão)
- [x] Timestamps nas mensagens
- [x] Design responsivo (sidebar + chat)

### 6. Sistema de Temas
- [x] **Tema Claro**: Gradiente azul/púrpura, cards brancos
- [x] **Tema Escuro**: Interface escura, cards cinza
- [x] **Tema Neon**: Preto profundo, bordas ciano, efeitos glow
- [x] Seletor de tema na tela de login
- [x] Persistência durante a sessão

### 7. Design e UI
- [x] Interface moderna e tecnológica
- [x] Gradientes vibrantes
- [x] Animações suaves
- [x] Glass morphism
- [x] Neon effects
- [x] Totalmente responsivo
- [x] Mobile-first design

---

## 🛠 Tecnologias Utilizadas

| Tecnologia | Versão | Propósito |
|------------|--------|-----------|
| **React** | 19.2.3 | Framework principal |
| **TypeScript** | 5.9.3 | Tipagem estática |
| **Tailwind CSS** | 4.1.17 | Estilização |
| **Vite** | 7.2.4 | Build tool |
| **React Router** | 6.23.1 | Navegação |
| **clsx** | 2.1.1 | Classes condicionais |
| **tailwind-merge** | 3.4.0 | Merge de classes |

---

## 📁 Estrutura do Projeto

```
devmach/
├── 📄 README.md                    # Visão geral
├── 📄 CONTRIBUTING.md              # Guia de contribuição
├── 📄 DOCUMENTACAO.md              # Documentação completa
├── 📄 TECHNICAL_GUIDE.md           # Guia técnico
├── 📄 STYLE_GUIDE.md               # Guia de estilo
├── 📄 CHANGELOG.md                 # Histórico de versões
├── 📄 LICENSE                      # Licença MIT
├── 📄 SUMMARY.md                   # Este arquivo
├── 📄 package.json                 # Dependências
├── 📄 tsconfig.json                # Configuração TypeScript
├── 📄 vite.config.ts               # Configuração Vite
└── 📁 src/
    ├── 📄 main.tsx                 # Entry point
    ├── 📄 App.tsx                  # Componente principal
    ├── 📄 index.css                # Estilos globais
    ├── 📁 utils/
    │   └── 📄 cn.ts               # Utilitário para classes
    ├── 📁 contexts/
    │   └── 📄 ThemeContext.tsx    # Gerenciamento de temas
    └── 📁 pages/
        ├── 📄 Login.tsx            # Tela de login
        ├── 📄 Signup.tsx           # Tela de cadastro
        ├── 📄 Swipe.tsx            # Tela principal
        ├── 📄 ProfileDetail.tsx    # Detalhes do perfil
        └── 📄 Messages.tsx         # Área de mensagens
```

---

## 👥 Perfis de Demonstração

| Nome | Área | Localização | Tecnologias |
|------|------|-------------|-------------|
| **Ana Silva** | Full Stack | São Paulo, SP | React, Node.js, PostgreSQL, TypeScript |
| **Carlos Oliveira** | Back-end | Rio de Janeiro, RJ | Python, Django, AWS, Docker |
| **Mariana Costa** | Front-end | Belo Horizonte, MG | React, TypeScript, Tailwind, Next.js |
| **Pedro Santos** | Mobile | Porto Alegre, RS | React Native, Flutter, Firebase |
| **Julia Mendes** | Data Science | São Paulo, SP | Python, TensorFlow, Pandas, AWS |

---

## 🎨 Temas Disponíveis

### ☀️ Tema Claro
- **Background**: Gradiente azul/púrpura
- **Cards**: Branco
- **Texto**: Cinza escuro
- **Accent**: Indigo

### 🌙 Tema Escuro
- **Background**: Cinza escuro (#111827)
- **Cards**: Cinza 800 (#1f2937)
- **Texto**: Branco e cinza claro
- **Accent**: Indigo claro

### ⚡ Tema Neon
- **Background**: Preto profundo (#0a0a0a)
- **Cards**: Preto com borda ciano
- **Texto**: Ciano com efeito neon glow
- **Accent**: Ciano (#00ffff)

---

## 📱 Responsividade

| Dispositivo | Layout |
|-------------|--------|
| **Mobile** | Layout completo, botões grandes, scroll suave |
| **Tablet** | Grid adaptativo, sidebar responsiva |
| **Desktop** | Layout completo com sidebar, cards maiores |

---

## 🚀 Como Executar

### Pré-requisitos
- Node.js >= 18.0.0
- npm >= 9.0.0

### Comandos

```bash
# 1. Instalar dependências
npm install

# 2. Iniciar servidor de desenvolvimento
npm run dev

# 3. Build para produção
npm run build

# 4. Preview do build
npm run preview
```

### Acesso Rápido (Demo)

**Login Ana (Full Stack):**
- Email: ana@devmach.com
- Senha: demo123

**Login Carlos (Back-end):**
- Email: carlos@devmach.com
- Senha: demo123

---

## 📚 Documentação

| Arquivo | Descrição |
|---------|-----------|
| **README.md** | Visão geral e instruções de uso |
| **DOCUMENTACAO.md** | Documentação completa do projeto |
| **TECHNICAL_GUIDE.md** | Guia técnico detalhado |
| **STYLE_GUIDE.md** | Padrões de código e estilo |
| **CHANGELOG.md** | Histórico de versões |
| **CONTRIBUTING.md** | Guia para contribuidores |
| **LICENSE** | Licença MIT |

---

## 🔧 Build e Deploy

### Build Único
O projeto gera um arquivo único `dist/index.html` usando `vite-plugin-singlefile`:
- **Formato**: HTML + CSS + JS embutidos
- **Tamanho**: ~288 KB (gzip: ~83 KB)
- **Ideal para**: Hospedagem estática

### Hospedagem Recomendada
1. **GitHub Pages** - Gratuito, ideal para open source
2. **Netlify** - Deploy contínuo, gratuito
3. **Vercel** - Deploy rápido, excelente para React
4. **Firebase Hosting** - Gratuito, integrado ao Google

---

## 📝 Notas Importantes

### ⚠️ Limitações Atuais
- Dados são simulados (não há backend real)
- Login/cadastro são locais (no navegador)
- Mensagens perdem ao recarregar a página
- Sem persistência de dados
- Sem autenticação JWT
- Sem proteção contra XSS

### ✅ O que Funciona
- Interface completa e funcional
- Sistema de swipe com animações
- Filtros em tempo real
- Sistema de mensagens simulado
- 3 temas disponíveis
- Totalmente responsivo
- Build otimizado

---

## 🎯 Próximos Passos Planejados

### v1.1.0 - Backend Integration
- [ ] API Node.js + Express
- [ ] Banco de dados MongoDB
- [ ] Autenticação JWT
- [ ] Persistência de dados

### v1.2.0 - Match System
- [ ] Sistema de match bidirecional
- [ ] Notificações de match
- [ ] Algoritmo de recomendação

### v1.3.0 - Features Avançadas
- [ ] Sistema de reviews
- [ ] Portfólio de projetos
- [ ] Video call (WebRTC)
- [ ] Notificações push

### v1.4.0 - Testes e QA
- [ ] Testes unitários (Vitest)
- [ ] Testes E2E (Cypress)
- [ ] Coverage reports
- [ ] CI/CD pipeline

### v1.5.0 - PWA e Offline
- [ ] Service Workers
- [ ] Cache strategies
- [ ] Offline mode
- [ ] Install prompt

---

## 📊 Métricas

| Métrica | Valor |
|---------|-------|
| **Tamanho do bundle** | 288.66 KB |
| **Tamanho gzip** | 83.06 KB |
| **Tempo de build** | ~1.4s |
| **Páginas** | 5 |
| **Perfis demo** | 5 |
| **Temas** | 3 |
| **Áreas de atuação** | 6 |
| **Regiões** | 5 |

---

## 🤝 Contribuição

Para contribuir, leia:
1. [CONTRIBUTING.md](CONTRIBUTING.md) - Guia de contribuição
2. [STYLE_GUIDE.md](STYLE_GUIDE.md) - Padrões de código
3. [TECHNICAL_GUIDE.md](TECHNICAL_GUIDE.md) - Guia técnico

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
- **Status**: ✅ Lançado e funcional
- **License**: MIT

---

<div align="center">

### 💜 DevMach - Conectando desenvolvedores, um match de cada vez

**Feito com ❤️ para a comunidade de desenvolvimento**

[![React](https://img.shields.io/badge/React-19.2.3-61DAFB?logo=react&style=for-the-badge)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?logo=typescript&style=for-the-badge)](https://www.typescriptlang.org/)
[![Tailwind](https://img.shields.io/badge/Tailwind-4.1.17-06B6D4?logo=tailwindcss&style=for-the-badge)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?logo=vite&style=for-the-badge)](https://vitejs.dev/)

</div>
