# 📚 DevMach - Documentação Profissional

## 📋 Índice
1. [Visão Geral do Projeto](#visão-geral-do-projeto)
2. [Estrutura do Projeto](#estrutura-do-projeto)
3. [Funcionalidades](#funcionalidades)
4. [Tecnologias Utilizadas](#tecnologias-utilizadas)
5. [Arquitetura e Design Patterns](#arquitetura-e-design-patterns)
6. [Fluxo de Usuário](#fluxo-de-usuário)
7. [Componentes](#componentes)
8. [Estilização e Temas](#estilização-e-temas)
9. [Gerenciamento de Estado](#gerenciamento-de-estado)
10. [Roteamento](#roteamento)
11. [Variáveis de Ambiente](#variáveis-de-ambiente)
12. [Testes](#testes)
13. [Deploy e Build](#deploy-e-build)
14. [Melhorias Futuras](#melhorias-futuras)
15. [Contribuição](#contribuição)
16. [Licença](#licença)

---

## 🎯 Visão Geral do Projeto

**DevMach** é uma aplicação web moderna e elegante, inspirada no Tinder, mas voltada para desenvolvedores. O objetivo é conectar profissionais de tecnologia através de um sistema de match baseado em interesses, tecnologias e localização.

### Objetivos do Projeto
- Conectar desenvolvedores em potencial colaborações
- Facilitar networking profissional na área de tecnologia
- Criar uma experiência visual moderna e tecnológica
- Fornecer filtros avançados para encontrar o perfil ideal

### Público Alvo
- Desenvolvedores Front-end, Back-end, Full Stack
- Mobile Developers
- Data Scientists
- DevOps Engineers
- Tech Leads e Arquitetos de Software

---

## 📁 Estrutura do Projeto

```
devmach/
├── 📄 index.html                    # HTML principal
├── 📄 package.json                  # Dependências do projeto
├── 📄 tsconfig.json                 # Configuração TypeScript
├── 📄 vite.config.ts                # Configuração Vite
├── 📄 README.md                     # README do projeto
├── 📄 DOCUMENTACAO.md              # Esta documentação
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

## ✨ Funcionalidades

### 1. Autenticação e Cadastro
- **Login**: Formulário de autenticação com email e senha
- **Cadastro**: Formulário completo com seleção de área de atuação
- **Acesso Rápido**: Botões demo para testar o sistema rapidamente
- **Validação**: Validação de campos obrigatórios

### 2. Sistema de Swipe
- **Cards de Perfil**: Visualização atraente com foto, nome, localização e tecnologias
- **Ações de Swipe**:
  - ❤️ Like (curtir)
  - ❌ Dislike (não curtir)
  - 👁️ Ver perfil completo
- **Animações**: Transições suaves para direita/esquerda
- **Contador**: Mostra posição atual e total de perfis

### 3. Filtros Avançados
- **Filtro por Região**:
  - São Paulo
  - Rio de Janeiro
  - Minas Gerais
  - Rio Grande do Sul
  - Outros
  - Todas
- **Filtro por Área de Atuação**:
  - Front-end
  - Back-end
  - Full Stack
  - Mobile
  - Data Science
  - DevOps
  - Todas

### 4. Detalhes do Perfil
- **Foto e Nome**: Exibição destacada
- **Localização**: Cidade/Estado
- **Descrição**: Bio do desenvolvedor
- **Experiência**: Histórico profissional
- **Tecnologias**: Tags com tecnologias dominadas
- **Projetos**: Lista de projetos destacados
- **Links Sociais**: GitHub e LinkedIn

### 5. Sistema de Mensagens
- **Lista de Conversas**: Visualização estilo Facebook Messenger
- **Status Online**: Indicador visual de disponibilidade
- **Mensagens Não Lidas**: Badge com contagem
- **Chat em Tempo Real**: Interface de conversação
- **Envio de Mensagens**: Input com envio via Enter ou botão
- **Timestamps**: Horário das mensagens

### 6. Sistema de Temas
- **Tema Claro**: Gradiente azul/púrpura, cards brancos
- **Tema Escuro**: Fundo cinza escuro, cards cinza 800
- **Tema Neon**: Preto profundo, bordas ciano, efeitos glow
- **Persistência**: Tema mantido durante a sessão

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
| Ferramenta | Versão | Propósito |
|------------|--------|-----------|
| **@vitejs/plugin-react** | 5.1.1 | Plugin React para Vite |
| **@tailwindcss/vite** | 4.1.17 | Integração Tailwind com Vite |
| **vite-plugin-singlefile** | 2.3.0 | Build como arquivo único |
| **TypeScript** | 5.9.3 | Compilação TypeScript |

### Dependências de Runtime
- `clsx` - Utilitário para construção de classes condicionais
- `tailwind-merge` - Merge de classes Tailwind

---

## 🏗 Arquitetura e Design Patterns

### 1. Component-Based Architecture
A aplicação é dividida em componentes reutilizáveis e independentes:

```
Layout Components
├── Header (recorrente em todas as páginas)
├── Cards (perfis, conversas)
└── Forms (login, cadastro, filtros)

Page Components
├── Login (autenticação)
├── Signup (cadastro)
├── Swipe (feed principal)
├── ProfileDetail (visualização completa)
└── Messages (chat)

Context Providers
└── ThemeContext (gerenciamento de tema)
```

### 2. Context API Pattern
Usado para gerenciar o estado global do tema:
- Centraliza a lógica de mudança de tema
- Acessível em qualquer componente via hook `useTheme()`
- Facilita a adição de novos temas no futuro

### 3. React Router Pattern
Navegação declarativa baseada em rotas:
- Rotas protegidas (lógica implementada)
- Navegação programática via `useNavigate()`
- Passagem de estado entre rotas via `location.state`

### 4. Hook Pattern
Custom hooks para lógica reutilizável:
- `useTheme()` - Acesso ao contexto de tema
- Hooks built-in do React (`useState`, `useEffect`, `useNavigate`)

---

## 🔄 Fluxo de Usuário

### Fluxo Principal
```
1. Acesso à Landing Page (/login)
   ↓
2. Login ou Cadastro
   ↓
3. Tela de Swipe (/swipe)
   ├── Ver perfis
   ├── Aplicar filtros
   ├── Curtir/Não curtir
   └── Ver detalhes
   ↓
4. Detalhes do Perfil (/profile)
   ├── Informações completas
   ├── Links sociais
   └── Enviar mensagem
   ↓
5. Mensagens (/messages)
   ├── Lista de conversas
   ├── Selecionar conversa
   ├── Enviar mensagens
   └── Ver histórico
```

### Fluxo de Login
```
1. Usuário acessa /login
2. Preenche email e senha
3. Sistema valida (simulado)
4. Redireciona para /swipe
5. Exibe lista de perfis
```

### Fluxo de Cadastro
```
1. Usuário acessa /signup
2. Preenche dados pessoais
3. Seleciona área de atuação
4. Cria conta (simulado)
5. Redireciona para /swipe
```

### Fluxo de Mensagens
```
1. Usuário acessa /messages
2. Vê lista de conversas
3. Seleciona conversa
4. Visualiza histórico
5. Digita e envia mensagem
6. Mensagem aparece no chat
```

---

## 📦 Componentes

### Login.tsx
**Responsabilidade**: Autenticação do usuário

**Props**: Nenhuma (componente de página)

**Estado**:
- `email` - Email do usuário
- `password` - Senha do usuário
- `showPassword` - Toggle de visibilidade da senha

**Funcionalidades**:
- Formulário de login
- Validação de campos
- Botões de acesso rápido (demo)
- Seletor de tema

**Estilização**:
- Cards com sombras
- Gradientes para botões
- Animações de hover

---

### Signup.tsx
**Responsabilidade**: Criação de conta

**Props**: Nenhuma (componente de página)

**Estado**:
- `name` - Nome completo
- `email` - Email
- `password` - Senha
- `devType` - Área de atuação
- `showPassword` - Toggle de visibilidade

**Funcionalidades**:
- Formulário completo
- Grid de seleção de área de atuação
- Validação de campos obrigatórios
- Botão desabilitado até preencher todos os campos

**Estilização**:
- Cards responsivos
- Grid de opções interativas
- Feedback visual de seleção

---

### Swipe.tsx
**Responsabilidade**: Feed principal de perfis

**Props**: Nenhuma (componente de página)

**Estado**:
- `currentIndex` - Índice do perfil atual
- `filterRegion` - Filtro de região
- `filterRole` - Filtro de área de atuação
- `isAnimating` - Estado de animação do swipe

**Funcionalidades**:
- Exibição de cards de perfil
- Ações de like/dislike/ver perfil
- Filtros dinâmicos
- Contador de perfis
- Animações de swipe

**Estilização**:
- Cards com gradientes
- Botões de ação coloridos
- Filtros com dropdowns

---

### ProfileDetail.tsx
**Responsabilidade**: Visualização completa do perfil

**Props**: Nenhuma (recebe estado via `location.state`)

**Estado**: Nenhum (usa dados do location)

**Funcionalidades**:
- Exibição detalhada do perfil
- Seção de experiência
- Lista de tecnologias
- Projetos destacados
- Links para GitHub e LinkedIn
- Botão de ação rápida para mensagem

**Estilização**:
- Layout de página completa
- Seções organizadas
- Tags de tecnologia estilizadas
- Botões de links sociais

---

### Messages.tsx
**Responsabilidade**: Sistema de mensagens

**Props**: Nenhuma (componente de página)

**Estado**:
- `conversations` - Lista de conversas
- `selectedConversation` - Conversa selecionada
- `messages` - Mensagens da conversa atual
- `newMessage` - Nova mensagem digitada

**Funcionalidades**:
- Lista de conversas com status
- Seleção de conversa
- Chat em tempo real
- Envio de mensagens
- Indicadores de online/offline
- Badge de mensagens não lidas

**Estilização**:
- Layout sidebar + chat
- Mensagens alinhadas à direita/esquerda
- Cores diferenciadas para remetente/destinatário
- Design responsivo

---

## 🎨 Estilização e Temas

### Sistema de Temas

#### 1. Tema Claro (Light)
```css
Background: linear-gradient(135deg, #f0f4ff 0%, #ffffff 50%, #faf5ff 100%);
Cards: #ffffff
Texto primário: #1f2937 (gray-800)
Texto secundário: #6b7280 (gray-600)
Accent: #4f46e5 (indigo-600)
Botões: gradient indigo-600 → purple-600
```

#### 2. Tema Escuro (Dark)
```css
Background: #111827 (gray-900)
Cards: #1f2937 (gray-800)
Texto primário: #f9fafb (gray-50)
Texto secundário: #9ca3af (gray-400)
Accent: #818cf8 (indigo-400)
Botões: gradient indigo-500 → purple-500
```

#### 3. Tema Neon
```css
Background: #0a0a0a (preto profundo)
Cards: #0f0f0f com borda cyan
Texto primário: #ffffff
Texto secundário: #9ca3af
Accent: #00ffff (cyan)
Efeitos: text-shadow e box-shadow cyan
Botões: gradient cyan → azul com glow
```

### Animações

#### Swipe Animations
```css
@keyframes swipe-right {
  0% { transform: translateX(0) rotate(0); opacity: 1; }
  100% { transform: translateX(200%) rotate(20deg); opacity: 0; }
}

@keyframes swipe-left {
  0% { transform: translateX(0) rotate(0); opacity: 1; }
  100% { transform: translateX(-200%) rotate(-20deg); opacity: 0; }
}
```

#### Pulse Glow Animation
```css
@keyframes pulse-glow {
  0%, 100% { box-shadow: 0 0 20px rgba(99, 102, 241, 0.3); }
  50% { box-shadow: 0 0 40px rgba(99, 102, 241, 0.6); }
}
```

### Glass Morphism
```css
.glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
```

---

## 🗃 Gerenciamento de Estado

### Estado Local (useState)
Cada componente gerencia seu próprio estado local:
- Login: email, password, showPassword
- Signup: name, email, password, devType
- Swipe: currentIndex, filters, isAnimating
- Messages: conversations, selectedConversation, messages, newMessage

### Estado Global (Context API)
**ThemeContext**:
```typescript
interface ThemeContextType {
  theme: 'light' | 'dark' | 'neon';
  setTheme: (theme: Theme) => void;
  getThemeClasses: () => string;
}
```

**Uso**:
```typescript
const { theme, setTheme } = useTheme();
```

### Passagem de Estado entre Rotas
```typescript
// Enviando estado
navigate('/profile', { state: profile });

// Recebendo estado
const location = useLocation();
const profile = location.state as DevProfile;
```

---

## 🧭 Roteamento

### Rotas Definidas
| Rota | Componente | Descrição |
|------|------------|-----------|
| `/` | Login | Página inicial / Login |
| `/login` | Login | Tela de login |
| `/signup` | Signup | Tela de cadastro |
| `/swipe` | Swipe | Feed principal |
| `/profile` | ProfileDetail | Detalhes do perfil |
| `/messages` | Messages | Área de mensagens |

### Navegação Programática
```typescript
// Navegar para rota
navigate('/swipe');

// Navegar com estado
navigate('/profile', { state: profile });

// Voltar (simulado)
navigate('/swipe');
```

---

## 🌍 Variáveis de Ambiente

### Configuração
O projeto usa variáveis de ambiente via Vite. Não há variáveis sensíveis configuradas atualmente, mas o sistema está preparado para:

```env
# Exemplo de variáveis
VITE_API_URL=https://api.devmach.com
VITE_APP_NAME=DevMach
```

### Uso no Código
```typescript
const apiUrl = import.meta.env.VITE_API_URL;
```

---

## 🧪 Testes

### Estratégia de Testes
O projeto está configurado para suportar testes, mas atualmente não possui testes implementados.

### Framework Recomendado
- **Vitest** - Test runner integrado ao Vite
- **@testing-library/react** - Testes de componentes React

### Exemplo de Teste
```typescript
import { render, screen } from '@testing-library/react';
import { Login } from './pages/Login';

describe('Login Component', () => {
  it('should render login form', () => {
    render(<Login />);
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/senha/i)).toBeInTheDocument();
  });
});
```

---

## 🚀 Deploy e Build

### Comandos

#### Desenvolvimento
```bash
npm install
npm run dev
```

#### Build de Produção
```bash
npm run build
```

#### Preview do Build
```bash
npm run preview
```

### Configuração do Build
O projeto usa `vite-plugin-singlefile` para gerar um arquivo único:
- **Saída**: `dist/index.html`
- **Formato**: Single-file (HTML + CSS + JS embutidos)
- **Ideal para**: Hospedagem estática (GitHub Pages, Netlify, Vercel)

### Hospedagem Recomendada
1. **GitHub Pages** - Gratuito, ideal para projetos open source
2. **Netlify** - Deploy contínuo, gratuito para projetos pessoais
3. **Vercel** - Deploy rápido, excelente para projetos React
4. **Firebase Hosting** - Gratuito, integrado ao ecossistema Google

### Deploy no GitHub Pages
```bash
# 1. Build o projeto
npm run build

# 2. Configure o GitHub Pages no repositório
# Settings > Pages > Source: gh-pages branch

# 3. Deploy
npx gh-pages -d dist
```

---

## 🔮 Melhorias Futuras

### Funcionalidades Planejadas
- [ ] **Backend Real**: API com Node.js + Express + MongoDB
- [ ] **Autenticação JWT**: Tokens de acesso e refresh
- [ ] **Match System**: Sistema de matching bidirecional
- [ ] **Notificações**: Push notifications para novas mensagens
- [ ] **Video Call**: Integração com WebRTC para chamadas
- [ ] **Portfólio**: Upload de projetos e casos de estudo
- [ ] **Reviews**: Sistema de reviews entre desenvolvedores
- [ ] **Analytics**: Dashboard para métricas de uso

### Frontend
- [ ] **Testes Unitários**: Vitest + Testing Library
- [ ] **Testes E2E**: Cypress ou Playwright
- [ ] **Storybook**: Documentação de componentes
- [ ] **PWA**: Progressive Web App
- [ ] **Offline Support**: Service Workers
- [ ] **SEO**: Meta tags dinâmicas

### Design
- [ ] **Dark Mode Toggle**: Switcher de tema em tempo real
- [ ] **Custom Themes**: Usuários criam seus próprios temas
- [ ] **Animations**: Framer Motion para animações avançadas
- [ ] **Micro-interações**: Feedback visual aprimorado

### Performance
- [ ] **Code Splitting**: Lazy loading de rotas
- [ ] **Image Optimization**: Imagens otimizadas
- [ ] **Caching**: Estratégias de cache
- [ ] **PWA**: Instalação offline

---

## 🤝 Contribuição

### Guia de Contribuição

1. **Fork** o repositório
2. **Clone** seu fork: `git clone https://github.com/seu-usuario/devmach.git`
3. **Crie** uma branch: `git checkout -b feature/nova-feature`
4. **Faça** suas alterações
5. **Commit**: `git commit -m "Adiciona nova feature"`
6. **Push**: `git push origin feature/nova-feature`
7. **Pull Request** no repositório principal

### Padronização de Código
- **Commits**: Use Conventional Commits (feat:, fix:, docs:, etc.)
- **Branches**: feature/, fix/, docs/, chore/
- **Code Style**: Prettier + ESLint
- **TypeScript**: Tipagem estrita

### Como Reportar Bugs
1. Verifique se o bug já foi reportado
2. Crie uma issue com:
   - Título claro
   - Passos para reproduzir
   - Ambiente (SO, navegador, versão)
   - Prints ou logs

### Como Sugerir Features
1. Abra uma issue com label `enhancement`
2. Descreva a feature detalhadamente
3. Explique o problema que resolve
4. Sugira implementação se possível

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
- **Repositório**: https://github.com/seu-usuario/devmach
- **Issues**: https://github.com/seu-usuario/devmach/issues

---

## 🎓 Glossário

| Termo | Definição |
|-------|-----------|
| **Swipe** | Ação de arrastar o card para direita (like) ou esquerda (dislike) |
| **Match** | Quando dois usuários se curtem mutuamente |
| **Full Stack** | Desenvolvedor que trabalha com front-end e back-end |
| **Front-end** | Desenvolvedor focado na interface do usuário |
| **Back-end** | Desenvolvedor focado na lógica do servidor |
| **DevOps** | Profissional que combina desenvolvimento e operações |
| **Context API** | Sistema de estado global do React |
| **Single-file** | Build que gera um único arquivo HTML |

---

## 📊 Métricas e KPIs

### Métricas de Sucesso
- **Tempo de Carregamento**: < 2 segundos
- **Taxa de Conversão Login**: > 60%
- **Taxa de Match**: > 20%
- **Engajamento Mensagens**: > 3 conversas por usuário
- **Retenção**: > 40% após 7 dias

### Métricas Técnicas
- **Bundle Size**: < 500KB
- **Lighthouse Score**: > 90/100
- **Test Coverage**: > 80%
- **Build Time**: < 30 segundos

---

## 📚 Referências

### Documentação Oficial
- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev/guide/)
- [React Router Documentation](https://reactrouter.com/en/main)

### Inspirations
- Tinder - Design de swipe e cards
- LinkedIn - Perfil profissional
- Facebook Messenger - Interface de mensagens
- GitHub - Perfil de desenvolvedor

---

**Documentação atualizada em**: 2024
**Versão**: 1.0.0
**Status**: ✅ Em desenvolvimento

---

<div align="center">

### 💜 DevMach - Conectando desenvolvedores, um match de cada vez

</div>
