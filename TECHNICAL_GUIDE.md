# 📖 Guia Técnico - DevMach

## 🎯 Visão Técnica

Este guia fornece detalhes técnicos sobre a implementação do DevMach, incluindo padrões de código, estruturas de dados e exemplos de implementação.

---

## 🏗 Arquitetura da Aplicação

### Diagrama de Componentes
```
App.tsx
├── ThemeProvider (Context)
│   ├── Login.tsx
│   │   ├── Theme Selector
│   │   ├── Login Form
│   │   └── Quick Access Buttons
│   ├── Signup.tsx
│   │   ├── Registration Form
│   │   ├── Dev Type Selector
│   │   └── Validation Logic
│   ├── Swipe.tsx
│   │   ├── Profile Cards
│   │   ├── Filter System
│   │   ├── Action Buttons
│   │   └── Animation Controller
│   ├── ProfileDetail.tsx
│   │   ├── Profile Info
│   │   ├── Tech Tags
│   │   ├── Social Links
│   │   └── Action Buttons
│   └── Messages.tsx
│       ├── Conversation List
│       ├── Chat Interface
│       ├── Message Input
│       └── Status Indicators
```

---

## 📦 Estruturas de Dados

### 1. Perfil de Desenvolvedor (DevProfile)
```typescript
interface DevProfile {
  id: number;                    // Identificador único
  name: string;                  // Nome completo
  role: string;                  // Área de atuação
  techs: string[];               // Tecnologias dominadas
  location: string;              // Localização (cidade/estado)
  description: string;           // Bio do desenvolvedor
  image: string;                 // Imagem de fundo
  avatar: string;                // URL do avatar
  experience?: string;           // Experiência profissional
  projects?: string[];           // Projetos destacados
  github?: string;               // Link para GitHub
  linkedin?: string;             // Link para LinkedIn
}
```

**Exemplo de dado:**
```typescript
{
  id: 1,
  name: "Ana Silva",
  role: "Full Stack",
  techs: ["React", "Node.js", "PostgreSQL", "TypeScript"],
  location: "São Paulo, SP",
  description: "Desenvolvedora full stack com 5 anos de experiência...",
  avatar: "https://i.pravatar.cc/150?img=1",
  experience: "5 anos profissionalmente...",
  projects: ["Sistema de agendamento médico", "E-commerce"],
  github: "https://github.com",
  linkedin: "https://linkedin.com"
}
```

### 2. Conversa (Conversation)
```typescript
interface Conversation {
  id: number;                    // Identificador único
  name: string;                  // Nome do contato
  avatar: string;                // URL do avatar
  lastMessage: string;           // Última mensagem
  timestamp: string;             // Horário da última mensagem
  unreadCount: number;           // Contador de mensagens não lidas
  online: boolean;               // Status online
}
```

**Exemplo de dado:**
```typescript
{
  id: 1,
  name: "Ana Silva",
  avatar: "https://i.pravatar.cc/150?img=1",
  lastMessage: "Obrigada pelo match! Vamos marcar um café?",
  timestamp: "12:30",
  unreadCount: 2,
  online: true
}
```

### 3. Mensagem (Message)
```typescript
interface Message {
  id: number;                    // Identificador único
  sender: string;                // Remetente ("você" ou nome)
  content: string;               // Conteúdo da mensagem
  timestamp: string;             // Horário
  unread: boolean;               // Status de não lida
}
```

**Exemplo de dado:**
```typescript
{
  id: 1,
  sender: "Ana Silva",
  content: "Olá! Vi que você também é Full Stack.",
  timestamp: "10:00",
  unread: false
}
```

### 4. Estado de Tema (ThemeContext)
```typescript
interface ThemeContextType {
  theme: 'light' | 'dark' | 'neon';  // Tema atual
  setTheme: (theme: Theme) => void;   // Função para alterar tema
  getThemeClasses: () => string;      // Retorna classes CSS do tema
}
```

---

## 🎨 Padrões de Código

### 1. Componente Funcional com TypeScript
```typescript
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

interface ComponentProps {
  // Defina suas props aqui
}

export function ComponentName({ /* props */ }: ComponentProps) {
  // Estado local
  const [state, setState] = useState(initialValue);
  
  // Contexto global
  const { theme } = useTheme();
  
  // Navegação
  const navigate = useNavigate();
  
  // Efeitos
  useEffect(() => {
    // Lógica de efeito
  }, [dependencies]);
  
  // Handlers
  const handleAction = () => {
    // Lógica de ação
  };
  
  // Renderização
  return (
    <div className={`container ${theme}`}>
      {/* JSX */}
    </div>
  );
}
```

### 2. Gerenciamento de Estado Local
```typescript
// ✅ Bom: Estado coeso e organizado
const [filters, setFilters] = useState({
  region: 'Todas',
  role: 'Todas'
});

const updateFilter = (key: string, value: string) => {
  setFilters(prev => ({ ...prev, [key]: value }));
};

// ❌ Ruim: Estado fragmentado
const [region, setRegion] = useState('Todas');
const [role, setRole] = useState('Todas');
// Dificulta gerenciamento de múltiplos estados
```

### 3. Efeitos com Cleanup
```typescript
useEffect(() => {
  // Configuração
  const timer = setTimeout(() => {
    // Ação após delay
  }, 500);
  
  // Cleanup
  return () => clearTimeout(timer);
}, [dependencies]);
```

### 4. Renderização Condicional
```typescript
// ✅ Bom: Operador ternário para condições simples
<div className={isActive ? 'active' : 'inactive'}>

// ✅ Bom: Short-circuit para condições complexas
{showElement && <Element />}

// ✅ Bom: IIFE para lógica complexa
{(() => {
  if (complexCondition) return <ComplexElement />;
  return <SimpleElement />;
})()}
```

### 5. Estilização Dinâmica
```typescript
// ✅ Bom: Template literals com classes condicionais
const cardBg = theme === 'light' 
  ? 'bg-white' 
  : theme === 'dark' 
    ? 'bg-gray-800' 
    : 'bg-gray-900 neon-border';

const textColor = theme === 'light' 
  ? 'text-gray-800' 
  : 'text-white';

return (
  <div className={`${cardBg} ${textColor}`}>
    {/* Conteúdo */}
  </div>
);
```

---

## 🔧 Hooks Customizados

### 1. useTheme (Context)
```typescript
import { useContext } from 'react';
import { ThemeContext, ThemeContextType } from '../contexts/ThemeContext';

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  
  return context;
}
```

**Uso:**
```typescript
const { theme, setTheme } = useTheme();

// Alterar tema
setTheme('dark');

// Obter classes
const classes = getThemeClasses();
```

### 2. useSwipe (Exemplo de hook customizado)
```typescript
import { useState, useCallback } from 'react';

interface SwipeConfig {
  onLike?: () => void;
  onDislike?: () => void;
  threshold?: number;
}

export function useSwipe(config: SwipeConfig) {
  const [isAnimating, setIsAnimating] = useState<'right' | 'left' | null>(null);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  
  const handleSwipeStart = useCallback((x: number) => {
    setStartX(x);
    setCurrentX(x);
  }, []);
  
  const handleSwipeMove = useCallback((x: number) => {
    setCurrentX(x);
  }, []);
  
  const handleSwipeEnd = useCallback(() => {
    const diff = currentX - startX;
    const threshold = config.threshold || 100;
    
    if (diff > threshold) {
      setIsAnimating('right');
      config.onLike?.();
    } else if (diff < -threshold) {
      setIsAnimating('left');
      config.onDislike?.();
    }
    
    setStartX(0);
    setCurrentX(0);
  }, [currentX, startX, config]);
  
  return {
    isAnimating,
    currentX,
    startX,
    handleSwipeStart,
    handleSwipeMove,
    handleSwipeEnd
  };
}
```

---

## 🎯 Padronização de Classes

### 1. Utilitário cn()
```typescript
// src/utils/cn.ts
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Uso
import { cn } from '@/utils/cn';

const className = cn(
  'base-class',
  condition && 'conditional-class',
  'another-class'
);
```

### 2. Padrões de Cores por Tema
```typescript
// Tema Claro
const lightTheme = {
  bg: 'bg-gradient-to-br from-blue-50 via-white to-purple-50',
  card: 'bg-white',
  text: 'text-gray-800',
  textSecondary: 'text-gray-600',
  accent: 'text-indigo-600',
  button: 'bg-gradient-to-r from-indigo-600 to-purple-600',
  border: 'border-gray-300'
};

// Tema Escuro
const darkTheme = {
  bg: 'bg-gray-900',
  card: 'bg-gray-800',
  text: 'text-white',
  textSecondary: 'text-gray-400',
  accent: 'text-indigo-400',
  button: 'bg-gradient-to-r from-indigo-500 to-purple-500',
  border: 'border-gray-600'
};

// Tema Neon
const neonTheme = {
  bg: 'bg-gray-950',
  card: 'bg-gray-900 neon-border',
  text: 'text-white',
  textSecondary: 'text-gray-400',
  accent: 'text-cyan-400 neon-text',
  button: 'neon-button',
  border: 'border-cyan-500/50'
};
```

---

## 📊 Dados de Demonstração

### Perfis de Desenvolvedores
```typescript
const devProfiles: DevProfile[] = [
  {
    id: 1,
    name: "Ana Silva",
    role: "Full Stack",
    techs: ["React", "Node.js", "PostgreSQL", "TypeScript"],
    location: "São Paulo, SP",
    description: "Desenvolvedora full stack com 5 anos de experiência...",
    avatar: "https://i.pravatar.cc/150?img=1",
    experience: "5 anos profissionalmente...",
    projects: ["Sistema de agendamento médico", "E-commerce"],
    github: "https://github.com",
    linkedin: "https://linkedin.com"
  },
  {
    id: 2,
    name: "Carlos Oliveira",
    role: "Back-end",
    techs: ["Python", "Django", "AWS", "Docker", "PostgreSQL"],
    location: "Rio de Janeiro, RJ",
    description: "Especialista em back-end Python...",
    avatar: "https://i.pravatar.cc/150?img=3",
    experience: "8 anos de experiência...",
    projects: ["API de pagamentos", "Sistema de análise de dados"],
    github: "https://github.com",
    linkedin: "https://linkedin.com"
  },
  {
    id: 3,
    name: "Mariana Costa",
    role: "Front-end",
    techs: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
    location: "Belo Horizonte, MG",
    description: "UX/Front-end developer com paixão por interfaces...",
    avatar: "https://i.pravatar.cc/150?img=5",
    experience: "3 anos focada em React...",
    projects: ["Dashboard analítico", "Landing page para startup"],
    github: "https://github.com",
    linkedin: "https://linkedin.com"
  },
  {
    id: 4,
    name: "Pedro Santos",
    role: "Mobile",
    techs: ["React Native", "Flutter", "TypeScript", "Firebase"],
    location: "Porto Alegre, RS",
    description: "Desenvolvedor mobile com foco em React Native...",
    avatar: "https://i.pravatar.cc/150?img=8",
    experience: "4 anos desenvolvendo apps...",
    projects: ["App de delivery", "Rede social fitness"],
    github: "https://github.com",
    linkedin: "https://linkedin.com"
  },
  {
    id: 5,
    name: "Julia Mendes",
    role: "Data Science",
    techs: ["Python", "TensorFlow", "Pandas", "SQL", "AWS"],
    location: "São Paulo, SP",
    description: "Cientista de dados com experiência em machine learning...",
    avatar: "https://i.pravatar.cc/150?img=9",
    experience: "6 anos em análise de dados...",
    projects: ["Sistema de recomendação", "Previsão de vendas"],
    github: "https://github.com",
    linkedin: "https://linkedin.com"
  }
];
```

### Mensagens de Demonstração
```typescript
const demoMessages: Message[] = [
  {
    id: 1,
    sender: "Ana Silva",
    content: "Olá! Vi que você também é Full Stack. Que tecnologias você costuma usar?",
    timestamp: "10:00",
    unread: false
  },
  {
    id: 2,
    sender: "você",
    content: "Oi Ana! Eu trabalho principalmente com React, Node.js e PostgreSQL. E você?",
    timestamp: "10:05",
    unread: false
  },
  {
    id: 3,
    sender: "Ana Silva",
    content: "Legal! Eu uso React com TypeScript, NestJS e MongoDB. Também tenho experiência com AWS.",
    timestamp: "10:10",
    unread: false
  }
];
```

---

## 🔄 Fluxo de Dados

### 1. Fluxo de Login
```
User Input (Email/Password)
    ↓
Form Submission
    ↓
Validation (Frontend)
    ↓
Console Log (Simulated)
    ↓
Navigate to /swipe
    ↓
Load Profiles
```

### 2. Fluxo de Swipe
```
Load Profiles
    ↓
Apply Filters (Region/Role)
    ↓
Display Current Profile
    ↓
User Action (Like/Dislike/View)
    ↓
Animation
    ↓
Update Index
    ↓
Display Next Profile
```

### 3. Fluxo de Mensagens
```
Load Conversations
    ↓
Display List (Sidebar)
    ↓
User Selects Conversation
    ↓
Load Messages
    ↓
Display Chat
    ↓
User Types Message
    ↓
Send Message
    ↓
Update UI
```

---

## 🚨 Tratamento de Erros

### 1. Validação de Formulário
```typescript
const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePassword = (password: string): boolean => {
  return password.length >= 6;
};

// Uso no componente
if (!validateEmail(email)) {
  setError('Email inválido');
  return;
}

if (!validatePassword(password)) {
  setError('Senha deve ter pelo menos 6 caracteres');
  return;
}
```

### 2. Tratamento de Dados Nulos
```typescript
// ✅ Bom: Verificação de segurança
const profile = location.state as DevProfile;

if (!profile) {
  navigate('/swipe');
  return null;
}

// ✅ Bom: Optional chaining
const experience = profile.experience || 'Não informado';
const projects = profile.projects || [];

// ✅ Bom: Fallback para arrays
const techs = profile.techs?.length > 0 
  ? profile.techs 
  : ['Sem tecnologias'];
```

### 3. Navegação Segura
```typescript
// ✅ Bom: Verificação antes de navegar
const handleBack = () => {
  navigate('/swipe');
};

// ✅ Bom: Navegação programática com estado
const handleViewProfile = (profile: DevProfile) => {
  navigate('/profile', { state: profile });
};
```

---

## 🔍 Performance

### 1. Otimizações Implementadas
- **Single-file Build**: Reduz requests HTTP
- **Code Splitting**: Vite gera chunks automáticos
- **Tree Shaking**: Remoção de código não utilizado
- **Lazy Loading**: Componentes carregados sob demanda

### 2. Otimizações Recomendadas
```typescript
// Lazy Loading de Componentes
import { lazy, Suspense } from 'react';

const ProfileDetail = lazy(() => import('./pages/ProfileDetail'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <ProfileDetail />
    </Suspense>
  );
}

// Memoização de Componentes
import { memo } from 'react';

const ProfileCard = memo(({ profile }: { profile: DevProfile }) => {
  // Componente otimizado
});

// useMemo para cálculos pesados
const filteredProfiles = useMemo(() => {
  return profiles.filter(profile => {
    // Lógica de filtro complexa
  });
}, [profiles, filterRegion, filterRole]);
```

### 3. Métricas de Performance
```typescript
// Monitoramento de performance
const measurePerformance = (start: number, label: string) => {
  const end = performance.now();
  console.log(`${label}: ${end - start}ms`);
};

// Uso
const start = performance.now();
// Operação pesada
measurePerformance(start, 'Filtragem de perfis');
```

---

## 🧪 Testes Unitários (Estrutura)

### 1. Teste de Componente
```typescript
import { render, screen, fireEvent } from '@testing-library/react';
import { Login } from './pages/Login';
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
    render(
      <BrowserRouter>
        <ThemeProvider>
          <Login />
        </ThemeProvider>
      </BrowserRouter>
    );
    
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/senha/i);
    const submitButton = screen.getByRole('button', { name: /entrar/i });
    
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(submitButton);
    
    // Verificar navegação
  });
});
```

### 2. Teste de Utilitário
```typescript
import { cn } from '../utils/cn';

describe('cn utility', () => {
  it('should merge classes correctly', () => {
    const result = cn('class1', 'class2');
    expect(result).toBe('class1 class2');
  });
  
  it('should handle conditional classes', () => {
    const result = cn('base', true && 'conditional', false && 'hidden');
    expect(result).toBe('base conditional');
  });
});
```

---

## 🔐 Segurança

### 1. Validação de Inputs
```typescript
// Sanitização básica
const sanitizeInput = (input: string): string => {
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove caracteres HTML
    .slice(0, 1000); // Limita tamanho
};

// Uso
const safeEmail = sanitizeInput(email);
const safePassword = sanitizeInput(password);
```

### 2. Proteção contra XSS
```typescript
// Nunca use dangerouslySetInnerHTML sem sanitização
// ✅ Bom: Renderização segura
<div>{userContent}</div>

// ❌ Ruim: Vulnerável a XSS
<div dangerouslySetInnerHTML={{ __html: userContent }} />
```

### 3. Validação de URLs
```typescript
const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};
```

---

## 📦 Dependências e Versões

### Dependências Principais
```json
{
  "dependencies": {
    "react": "^19.2.3",
    "react-dom": "^19.2.3",
    "react-router-dom": "^6.23.1",
    "clsx": "^2.1.1",
    "tailwind-merge": "^3.4.0"
  },
  "devDependencies": {
    "@types/react": "^19.2.7",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^5.1.1",
    "tailwindcss": "^4.1.17",
    "typescript": "^5.9.3",
    "vite": "^7.2.4"
  }
}
```

### Compatibilidade
- **Node.js**: >= 18.0.0
- **npm**: >= 9.0.0
- **Navegadores**: Chrome, Firefox, Safari, Edge (últimas 2 versões)

---

## 🎨 Estilos CSS Customizados

### Animações
```css
/* Swipe animations */
@keyframes swipe-right {
  0% { transform: translateX(0) rotate(0); opacity: 1; }
  100% { transform: translateX(200%) rotate(20deg); opacity: 0; }
}

@keyframes swipe-left {
  0% { transform: translateX(0) rotate(0); opacity: 1; }
  100% { transform: translateX(-200%) rotate(-20deg); opacity: 0; }
}

/* Neon effects */
.neon-text {
  text-shadow: 0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff;
}

.neon-border {
  border: 1px solid #00ffff;
  box-shadow: 0 0 10px #00ffff, inset 0 0 10px rgba(0, 255, 255, 0.1);
}

.neon-button {
  background: linear-gradient(135deg, #00ffff 0%, #0080ff 100%);
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.5);
}

.neon-button:hover {
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.8);
}

/* Glass effect */
.glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
```

---

## 🚀 Comandos Úteis

### Desenvolvimento
```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build de produção
npm run build

# Preview do build
npm run preview
```

### Git
```bash
# Criar branch feature
git checkout -b feature/nova-feature

# Commit com mensagem padrão
git commit -m "feat: adiciona nova feature"

# Push para remote
git push origin feature/nova-feature
```

### Linting
```bash
# Verificar erros TypeScript
npx tsc --noEmit

# Formatar código
npx prettier --write .
```

---

## 📝 Checklist de Implementação

### Antes de Commitar
- [ ] Código formatado (Prettier)
- [ ] Tipos TypeScript corretos
- [ ] Sem erros de linting
- [ ] Testes passando (se aplicável)
- [ ] Build bem-sucedido
- [ ] Documentação atualizada

### Code Review
- [ ] Código segue padrões do projeto
- [ ] Variáveis têm nomes descritivos
- [ ] Funções têm responsabilidade única
- [ ] Comentários para lógica complexa
- [ ] Sem código duplicado

### Performance
- [ ] Componentes otimizados
- [ ] Efeitos com cleanup
- [ ] Dependências corretas em useEffect
- [ ] Imagens otimizadas
- [ ] Bundle size aceitável

---

## 📚 Referências Adicionais

### Recursos Úteis
- [React Patterns](https://reactpatterns.com/)
- [Clean Code JavaScript](https://github.com/ryanmcdermott/clean-code-javascript)
- [TypeScript Best Practices](https://www.typescriptlang.org/docs/handbook/best-practices.html)
- [Tailwind CSS Cheatsheet](https://nerdcave.com/tailwind-cheat-sheet)

### Ferramentas
- **ESLint**: Análise estática de código
- **Prettier**: Formatação automática
- **Husky**: Git hooks
- **Lint-staged**: Linting em arquivos staged
- **TypeScript**: Verificação de tipos

---

**Guia Técnico atualizado em**: 2024
**Versão**: 1.0.0
**Status**: ✅ Completo
