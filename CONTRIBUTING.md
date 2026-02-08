# 🤝 Guia de Contribuição - DevMach

Bem-vindo ao projeto DevMach! 🎉

Este guia irá ajudá-lo a contribuir para o projeto de forma eficiente e organizada.

---

## 📋 Índice

1. [Como Começar](#como-começar)
2. [Estrutura do Projeto](#estrutura-do-projeto)
3. [Padrões de Código](#padrões-de-código)
4. [Fluxo de Trabalho](#fluxo-de-trabalho)
5. [Tipos de Contribuição](#tipos-de-contribuição)
6. [Reportar Issues](#reportar-issues)
7. [Pull Requests](#pull-requests)
8. [Code Review](#code-review)
9. [Commits](#commits)
10. [Testes](#testes)
11. [Documentação](#documentação)
12. [Perguntas Frequentes](#perguntas-freququentes)

---

## 🚀 Como Começar

### Pré-requisitos

- Node.js >= 18.0.0
- npm >= 9.0.0
- Git
- Um editor de código (VS Code recomendado)

### Instalação

1. **Clone o repositório:**
```bash
git clone https://github.com/seu-usuario/devmach.git
cd devmach
```

2. **Instale as dependências:**
```bash
npm install
```

3. **Inicie o servidor de desenvolvimento:**
```bash
npm run dev
```

4. **Acesse a aplicação:**
- Abra `http://localhost:5173` no navegador

### Configuração Inicial

1. **Configure o Git:**
```bash
git config user.name "Seu Nome"
git config user.email "seu@email.com"
```

2. **Crie uma branch para sua contribuição:**
```bash
git checkout -b feature/sua-feature
```

---

## 📁 Estrutura do Projeto

```
devmach/
├── 📄 README.md                    # Visão geral do projeto
├── 📄 CONTRIBUTING.md              # Este arquivo
├── 📄 DOCUMENTACAO.md              # Documentação completa
├── 📄 TECHNICAL_GUIDE.md           # Guia técnico
├── 📄 STYLE_GUIDE.md               # Guia de estilo
├── 📄 CHANGELOG.md                 # Histórico de versões
├── 📄 package.json                 # Dependências
├── 📄 tsconfig.json                # Configuração TypeScript
├── 📄 vite.config.ts               # Configuração Vite
└── 📁 src/
    ├── 📄 App.tsx                  # Componente principal
    ├── 📄 main.tsx                 # Entry point
    ├── 📄 index.css                # Estilos globais
    ├── 📁 assets/                  # Imagens, fonts
    ├── 📁 components/              # Componentes reutilizáveis
    ├── 📁 contexts/                # Context Providers
    ├── 📁 hooks/                   # Custom hooks
    ├── 📁 pages/                   # Páginas da aplicação
    ├── 📁 services/                # Lógica de negócio
    ├── 📁 types/                   # Tipos TypeScript
    ├── 📁 utils/                   # Funções utilitárias
    └── 📁 styles/                  # Estilos adicionais
```

---

## 🎨 Padrões de Código

### 1. Nomenclatura

| Tipo | Padrão | Exemplo |
|------|--------|---------|
| Componentes | PascalCase | `UserProfile`, `LoginButton` |
| Funções | camelCase | `fetchData`, `handleClick` |
| Variáveis | camelCase | `userName`, `isLoggedIn` |
| Constantes | UPPER_SNAKE_CASE | `API_URL`, `MAX_COUNT` |
| Arquivos | kebab-case | `user-profile.tsx`, `login.tsx` |
| Interfaces | PascalCase | `UserProfile`, `DevProfile` |

### 2. TypeScript

- Sempre use tipos explícitos
- Evite `any` - use tipos específicos
- Use interfaces para props
- Documente tipos complexos

```typescript
// ✅ Bom
interface UserProfileProps {
  user: {
    name: string;
    email: string;
  };
  onEdit: () => void;
}

// ❌ Ruim
interface Props {
  user: any; // Evite any
}
```

### 3. Tailwind CSS

- Use classes do sistema Tailwind
- Organize classes em múltiplas linhas para legibilidade
- Use `cn()` para classes condicionais

```typescript
// ✅ Bom
<div className="
  flex flex-col items-center
  p-4 bg-white
  rounded-lg shadow
  hover:shadow-lg
  transition-all
">

// ❌ Ruim
<div className="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-lg transition-all">
```

### 4. React

- Use componentes funcionais
- Separe lógica e UI
- Use hooks apropriados
- Evite efeitos colaterais desnecessários

```typescript
// ✅ Bom
function UserProfile({ userId }: UserProfileProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUser(userId)
      .then(setUser)
      .finally(() => setLoading(false));
  }, [userId]);

  if (loading) return <LoadingSpinner />;
  if (!user) return <NotFound />;

  return <ProfileCard user={user} />;
}
```

---

## 🔄 Fluxo de Trabalho

### 1. Escolha uma Issue

- Verifique as issues abertas
- Comente na issue para reservá-la
- Se não houver issue, crie uma

### 2. Crie uma Branch

```bash
# Sincronize com a branch main
git checkout main
git pull origin main

# Crie sua branch
git checkout -b feature/nome-da-feature
```

### 3. Desenvolva

- Siga o [STYLE_GUIDE.md](STYLE_GUIDE.md)
- Escreva código limpo e documentado
- Teste localmente
- Atualize a documentação se necessário

### 4. Commit

```bash
# Adicione suas alterações
git add .

# Commit com mensagem descritiva
git commit -m "feat: adiciona sistema de filtro"

# Push para o repositório remoto
git push origin feature/nome-da-feature
```

### 5. Crie um Pull Request

- Vá para o repositório no GitHub
- Clique em "Compare & pull request"
- Preencha o template do PR
- Aguarde revisão

---

## 📝 Tipos de Contribuição

### 1. Novas Funcionalidades

**Exemplos:**
- Sistema de notificações
- Integração com API real
- Sistema de reviews
- Video chat

**Processo:**
1. Crie uma issue discutindo a feature
2. Obtenha feedback da comunidade
3. Desenvolva em uma branch feature
4. Adicione testes
5. Atualize documentação
6. Crie PR

### 2. Correção de Bugs

**Exemplos:**
- Bugs de UI/UX
- Problemas de performance
- Erros de TypeScript
- Issues de responsividade

**Processo:**
1. Reproduza o bug
2. Crie uma issue com detalhes
3. Crie uma branch fix/nome-do-bug
4. Corrija o bug
5. Adicione testes se aplicável
6. Crie PR

### 3. Documentação

**Exemplos:**
- Corrigir erros de digitação
- Adicionar exemplos de código
- Melhorar guias existentes
- Traduzir para outros idiomas

**Processo:**
1. Identifique o que precisa de melhoria
2. Crie uma branch docs/nome-da-seção
3. Faça as alterações
4. Crie PR

### 4. Testes

**Exemplos:**
- Testes unitários
- Testes de integração
- Testes E2E
- Testes de performance

**Processo:**
1. Identifique áreas sem cobertura
2. Crie uma branch test/nome-do-teste
3. Escreva os testes
4. Garanta que passam
5. Crie PR

### 5. Refatoração

**Exemplos:**
- Melhorar performance
- Reduzir complexidade
- Remover código duplicado
- Atualizar dependências

**Processo:**
1. Identifique código para refatorar
2. Crie uma branch refactor/nome-da-seção
3. Faça as alterações
4. Garanta que nada quebrou
5. Crie PR

### 6. Design e UI/UX

**Exemplos:**
- Melhorar interface
- Adicionar animações
- Otimizar para mobile
- Acessibilidade

**Processo:**
1. Crie mockups ou protótipos
2. Discuta na issue
3. Implemente as mudanças
4. Teste em diferentes dispositivos
5. Crie PR

---

## 🐛 Reportar Issues

### Template de Issue

```markdown
## Descrição
[Descreva o problema]

## Passos para Reproduzir
1. Vá para '...'
2. Clique em '...'
3. Role até '...'
4. Veja o erro

## Comportamento Esperado
[O que deveria acontecer]

## Comportamento Atual
[O que está acontecendo]

## Screenshots
[Se aplicável, adicione screenshots]

## Ambiente
- OS: [e.g. Windows, macOS, Linux]
- Navegador: [e.g. Chrome, Firefox, Safari]
- Versão: [e.g. 1.0.0]

## Prioridade
- [ ] Baixa
- [ ] Média
- [ ] Alta
- [ ] Crítica
```

### Dicas para Issues Boas

✅ **FAÇA:**
- Use títulos descritivos
- Forneça passos claros para reprodução
- Inclua screenshots quando relevante
- Especifique o ambiente
- Marque a prioridade

❌ **NÃO FAÇA:**
- Issues muito vagas
- Múltiplos problemas em uma issue
- Sem informações de ambiente
- Sem passos para reprodução

---

## 🔀 Pull Requests

### Template de PR

```markdown
## Descrição
[Breve descrição das alterações]

## Tipo de PR
- [ ] Bug fix
- [ ] Nova feature
- [ ] Refatoração
- [ ] Documentação
- [ ] Outro

## Mudanças
- [ ] Adicionado [descrição]
- [ ] Modificado [descrição]
- [ ] Removido [descrição]
- [ ] Corrigido [descrição]

## Checklist
- [ ] Código segue o STYLE_GUIDE.md
- [ ] Testes foram adicionados/alterados
- [ ] Documentação foi atualizada
- [ ] Build passa sem erros
- [ ] Code review foi feito

## Screenshots/Imagens
[Adicione se aplicável]

## Notas Adicionais
[Qualquer informação adicional]
```

### Checklist de PR

Antes de criar o PR, verifique:

- [ ] **Código**
  - [ ] Segue o STYLE_GUIDE.md
  - [ ] Sem erros de TypeScript
  - [ ] Sem warnings
  - [ ] Código limpo e legível

- [ ] **Testes**
  - [ ] Testes unitários (se aplicável)
  - [ ] Testes passam localmente
  - [ ] Cobertura adequada

- [ ] **Documentação**
  - [ ] README atualizado (se necessário)
  - [ ] Comentários claros no código
  - [ ] JSDoc para funções complexas

- [ ] **Build**
  - [ ] `npm run build` passa
  - [ ] `npm run dev` funciona
  - [ ] Sem erros de console

- [ ] **Commits**
  - [ ] Mensagens descritivas
  - [ ] Squash commits se necessário
  - [ ] Rebase com main antes de push

---

## 👀 Code Review

### O que os Revisores Procuram

**Qualidade do Código:**
- [ ] Legibilidade e clareza
- [ ] Segue padrões do projeto
- [ ] Sem código duplicado
- [ ] Boa nomenclatura

**Funcionalidade:**
- [ ] Funciona como esperado
- [ ] Não quebra funcionalidades existentes
- [ ] Lida com casos extremos
- [ ] Trata erros adequadamente

**Testes:**
- [ ] Cobertura adequada
- [ ] Testes significativos
- [ ] Testes passam

**Documentação:**
- [ ] Código é auto-documentado
- [ ] Comentários necessários
- [ ] README atualizado

**Performance:**
- [ ] Não introduz regressões
- [ ] Otimizações quando necessário
- [ ] Evita operações custosas

### Como Revisar

1. **Leia atentamente** o PR e descrição
2. **Clone a branch** localmente
3. **Teste manualmente** as mudanças
4. **Revise o código** linha por linha
5. **Deixe comentários** construtivos
6. **Sugira melhorias**
7. **Aprovação ou solicitação de mudanças**

### Comentários Construtivos

✅ **FAÇA:**
```
"Sugiro extrair esta lógica para uma função separada"
"Podemos adicionar um teste para este caso de borda"
"O nome desta variável poderia ser mais descritivo"
```

❌ **NÃO FAÇA:**
```
"Isso está errado"
"Não gosto desta abordagem"
"Altere isso"
```

---

## 💬 Commits

### Formato

```
tipo(escopo): descrição

[corpo]

[rodapé]
```

### Tipos

| Tipo | Descrição |
|------|-----------|
| `feat` | Nova funcionalidade |
| `fix` | Correção de bug |
| `docs` | Documentação |
| `style` | Estilos (código) |
| `refactor` | Refatoração |
| `test` | Testes |
| `chore` | Manutenção |

### Escopos

- `auth` - Autenticação
- `ui` - Interface de usuário
- `api` - Integração com API
- `perf` - Performance
- `types` - Tipos TypeScript
- `docs` - Documentação
- `test` - Testes

### Exemplos

```bash
# ✅ Bom
feat(auth): adiciona validação de email
fix(ui): corrige alinhamento do header
docs: atualiza README com exemplos
refactor(api): simplifica lógica de fetch
test: adiciona testes para Login component
chore: atualiza dependências

# ❌ Ruim
update
fix bug
mudanças
```

### Mensagens

- **Curta:** Máximo 50 caracteres
- **Descritiva:** Explique o que mudou
- **Imperativa:** "Adiciona", não "Adicionou"
- **Sem ponto final**

---

## 🧪 Testes

### Configuração

O projeto está configurado para suportar testes com Vitest:

```bash
# Instalar dependências de teste (se necessário)
npm install -D vitest @testing-library/react @testing-library/jest-dom

# Executar testes
npm test

# Executar testes com coverage
npm run test:coverage
```

### Estrutura de Testes

```
src/
├── __tests__/
│   ├── components/
│   │   └── Login.test.tsx
│   ├── pages/
│   │   └── Swipe.test.tsx
│   └── utils/
│       └── cn.test.ts
```

### Exemplo de Teste

```typescript
import { render, screen } from '@testing-library/react';
import { Login } from '../pages/Login';
import { ThemeProvider } from '../contexts/ThemeContext';
import { BrowserRouter } from 'react-router-dom';

describe('Login Component', () => {
  it('should render login form', () => {
    render(
      <BrowserRouter>
        <ThemeProvider>
          <Login />
        </ThemeProvider>
      </BrowserRouter>
    );
    
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/senha/i)).toBeInTheDocument();
  });

  it('should handle form submission', () => {
    // Teste de submissão
  });
});
```

### Cobertura de Testes

- **Mínimo:** 80% de cobertura
- **Ideal:** 90%+ de cobertura
- **Foco:** Componentes críticos e lógica de negócio

---

## 📚 Documentação

### O que Documentar

1. **Componentes**
   - Props e tipos
   - Exemplos de uso
   - Comportamento esperado

2. **Funções**
   - Parâmetros e tipos
   - Valor de retorno
   - Efeitos colaterais

3. **Tipos**
   - Interfaces e tipos complexos
   - Propósito de cada campo

4. **Fluxos**
   - Fluxo de usuário
   - Fluxo de dados
   - Fluxo de autenticação

### Ferramentas

- **JSDoc** para funções
- **TypeScript** para tipos
- **README** para visão geral
- **Guias** para funcionalidades complexas

### Atualizando Documentação

- Sempre que mudar a API
- Quando adicionar novos componentes
- Quando alterar comportamento
- Quando remover funcionalidades

---

## ❓ Perguntas Frequentes

### Como começo a contribuir?

1. Leia este guia
2. Escolha uma issue aberta
3. Comente para reservá-la
4. Siga o fluxo de trabalho

### Preciso de permissão?

Não! O projeto é open source. Você pode contribuir sem permissão prévia.

### Como escolho uma issue?

- Issues marcadas com `good first issue` são ideais para iniciantes
- Issues com `help wanted` precisam de contribuidores
- Issues sem label são boas para contribuidores experientes

### O que acontece se meu PR for recusado?

- Não desista! Peça feedback
- Faça as alterações solicitadas
- Reabra o PR ou crie um novo
- Aprenda com o feedback

### Posso contribuir em outras áreas?

Sim! Além de código, você pode:
- Melhorar documentação
- Reportar bugs
- Sugerir novas features
- Ajudar na revisão de PRs
- Participar da comunidade

### Como obtenho ajuda?

- Abra uma issue com label `question`
- Use o template de questão
- Seja específico
- Inclua contexto e exemplos

---

## 🎯 Metas do Projeto

### Curto Prazo (v1.x)
- [ ] Sistema de match funcional
- [ ] Backend básico
- [ ] Testes unitários
- [ ] Melhorias de UI

### Médio Prazo (v2.x)
- [ ] Autenticação JWT
- [ ] Notificações
- [ ] Sistema de reviews
- [ ] PWA

### Longo Prazo (v3.x)
- [ ] Video chat
- [ ] Sistema de premium
- [ ] Mobile app
- [ ] Escalabilidade

---

## 📞 Contato

- **Issues:** GitHub Issues
- **Discussions:** GitHub Discussions (se disponível)
- **Email:** contato@devmach.com (exemplo)

---

## 🎉 Agradecimentos

Obrigado por considerar contribuir para o DevMach! Cada contribuição, grande ou pequena, ajuda a tornar o projeto melhor para todos.

---

<div align="center">

### 💜 Juntos, construindo a melhor plataforma para desenvolvedores!

**[Voltar ao Topo](#guia-de-contribuição---devmach)**

</div>
