# 🎨 Guia de Estilo - DevMach

## 📋 Índice
1. [Nomenclatura](#nomenclatura)
2. [Estrutura de Arquivos](#estrutura-de-arquivos)
3. [Componentes React](#componentes-react)
4. [TypeScript](#typescript)
5. [Estilização](#estilização)
6. [Comentários e Documentação](#comentários-e-documentação)
7. [Git e Commits](#git-e-commits)
8. [Padrões de Design](#padrões-de-design)

---

## 🏷 Nomenclatura

### 1. Componentes React
```typescript
// ✅ Bom: PascalCase
function UserProfile() {}
function LoginButton() {}
function DevMachHeader() {}

// ❌ Ruim: camelCase ou kebab-case
function userProfile() {}  // Não é componente
function login-button() {} // Não é válido
```

### 2. Variáveis e Funções
```typescript
// ✅ Bom: camelCase
const userName = 'Ana Silva';
const isLoggedIn = true;
const getUserProfile = () => {};

// ❌ Ruim: PascalCase ou snake_case
const UserName = 'Ana Silva';  // Reservado para componentes
const user_name = 'Ana Silva'; // Não segue padrão
```

### 3. Constantes
```typescript
// ✅ Bom: UPPER_SNAKE_CASE para constantes globais
const API_URL = 'https://api.devmach.com';
const MAX_PROFILE_COUNT = 100;
const THEME_COLORS = {
  light: '#ffffff',
  dark: '#000000'
};

// ✅ Bom: camelCase para constantes locais
const defaultProfile = { name: 'Anônimo' };
```

### 4. Interfaces e Tipos
```typescript
// ✅ Bom: PascalCase com sufixo Type ou Interface
interface UserProfile {
  name: string;
  email: string;
}

type Theme = 'light' | 'dark' | 'neon';

// ✅ Bom: Prefixo I para interfaces (opcional)
interface IDevProfile {
  id: number;
  name: string;
}

// ❌ Ruim: camelCase para tipos
interface userProfile { /* ... */ }  // Não use
```

### 5. Props
```typescript
// ✅ Bom: Nome descritivo com sufixo Props
interface UserProfileProps {
  user: UserProfile;
  onEdit: () => void;
}

// ✅ Bom: Props curtas para componentes simples
interface ButtonProps {
  label: string;
  onClick: () => void;
}

// ❌ Ruim: Nomes vagos
interface Props { /* ... */ }  // Muito genérico
interface Config { /* ... */ } // Não claro
```

---

## 📁 Estrutura de Arquivos

### 1. Nomes de Arquivos
```bash
# ✅ Bom: kebab-case para arquivos
src/
  pages/
    login.tsx
    signup.tsx
    swipe.tsx
    profile-detail.tsx
    messages.tsx
  
  components/
    dev-card.tsx
    message-bubble.tsx
    filter-panel.tsx
  
  contexts/
    theme-context.tsx
  
  utils/
    cn.ts
    validators.ts

# ❌ Ruim: camelCase ou PascalCase
src/
  pages/
    Login.tsx      # Deveria ser login.tsx
    userprofile.tsx # Deveria ser user-profile.tsx
```

### 2. Estrutura de Pastas
```
src/
├── 📁 assets/          # Imagens, fonts, SVGs
├── 📁 components/      # Componentes reutilizáveis
│   ├── 📁 common/      # Botões, inputs, cards
│   ├── 📁 layout/      # Headers, footers, sidebars
│   └── 📁 features/    # Componentes específicos
├── 📁 contexts/        # Context Providers
├── 📁 hooks/           # Custom hooks
├── 📁 pages/           # Componentes de página
├── 📁 services/        # API calls, lógica de negócio
├── 📁 types/           # Tipos e interfaces
├── 📁 utils/           # Funções utilitárias
└── 📁 styles/          # Estilos globais
```

### 3. Importações
```typescript
// ✅ Bom: Importações organizadas e com aliases
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@/contexts/ThemeContext';
import { DevProfile } from '@/types/profile';
import { cn } from '@/utils/cn';
import DevCard from '@/components/common/dev-card';
import styles from './login.module.css';

// ❌ Ruim: Importações desorganizadas
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { DevProfile } from '../../types/profile';
import { cn } from '../../utils/cn';
import DevCard from '../components/common/dev-card';
import styles from './login.module.css';

// ✅ Bom: Importações de terceiros separadas
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@/contexts/ThemeContext';
import { DevProfile } from '@/types/profile';
import { cn } from '@/utils/cn';
import DevCard from '@/components/common/dev-card';
```

---

## 🧩 Componentes React

### 1. Estrutura Básica
```typescript
// ✅ Bom: Componente funcional com TypeScript
import { useState, useEffect } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

interface UserProfileProps {
  user: UserProfile;
  onEdit?: () => void;
}

export function UserProfile({ user, onEdit }: UserProfileProps) {
  // 1. Estados
  const [isEditing, setIsEditing] = useState(false);
  
  // 2. Contextos
  const { theme } = useTheme();
  
  // 3. Efeitos
  useEffect(() => {
    // Lógica de efeito
  }, [user.id]);
  
  // 4. Handlers
  const handleEdit = () => {
    setIsEditing(true);
    onEdit?.();
  };
  
  const handleSave = () => {
    setIsEditing(false);
  };
  
  // 5. Renderização
  return (
    <div className={`profile-card ${theme}`}>
      <h2>{user.name}</h2>
      <button onClick={handleEdit}>Editar</button>
    </div>
  );
}
```

### 2. Ordem de Código
```typescript
// ✅ Bom: Ordem consistente
export function ComponentName(props: Props) {
  // 1. Estados
  const [state, setState] = useState();
  
  // 2. Refs
  const ref = useRef();
  
  // 3. Contextos
  const context = useContext(Context);
  
  // 4. Memoizações
  const memoizedValue = useMemo(() => {}, []);
  const memoizedCallback = useCallback(() => {}, []);
  
  // 5. Efeitos
  useEffect(() => {}, []);
  
  // 6. Handlers
  const handleClick = () => {};
  
  // 7. Helpers
  const helperFunction = () => {};
  
  // 8. Render
  return <div>...</div>;
}
```

### 3. Componentes Pequenos
```typescript
// ✅ Bom: Componente simples e focado
interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

export function Button({ children, onClick, variant = 'primary' }: ButtonProps) {
  const baseClasses = 'px-4 py-2 rounded-lg font-medium';
  const variantClasses = {
    primary: 'bg-indigo-600 text-white',
    secondary: 'bg-gray-200 text-gray-800'
  };
  
  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
```

### 4. Componentes com Lógica Complexa
```typescript
// ✅ Bom: Separação de responsabilidades
export function DevProfileCard({ profile }: DevProfileCardProps) {
  // Lógica de estado
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Lógica de cálculo
  const techCount = profile.techs.length;
  const displayTechs = isExpanded 
    ? profile.techs 
    : profile.techs.slice(0, 3);
  
  // Lógica de eventos
  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };
  
  // Renderização
  return (
    <div className="profile-card">
      <ProfileHeader profile={profile} />
      <TechTags techs={displayTechs} />
      {techCount > 3 && (
        <button onClick={handleToggle}>
          {isExpanded ? 'Ver menos' : `Ver mais (${techCount - 3})`}
        </button>
      )}
    </div>
  );
}
```

---

## 🦄 TypeScript

### 1. Tipagem Estrita
```typescript
// tsconfig.json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "strictPropertyInitialization": true
  }
}

// ✅ Bom: Tipos explícitos
interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user';
}

// ❌ Ruim: Any (evitar)
function processUser(user: any) { /* ... */ }

// ✅ Bom: Tipos específicos
function processUser(user: User) { /* ... */ }
```

### 2. Tipos para Props
```typescript
// ✅ Bom: Interface para props
interface UserProfileProps {
  user: {
    name: string;
    email: string;
  };
  onEdit: () => void;
}

// ✅ Bom: Tipo para componentes com children
interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

// ✅ Bom: Tipos opcionais
interface CardProps {
  title: string;
  subtitle?: string;  // Opcional
  onClick?: () => void;  // Opcional
}
```

### 3. Tipos para Estado
```typescript
// ✅ Bom: Tipo explícito para estado
const [user, setUser] = useState<User | null>(null);
const [isLoading, setIsLoading] = useState<boolean>(false);
const [error, setError] = useState<string | null>(null);

// ✅ Bom: Tipo para objetos complexos
interface FilterState {
  region: string;
  role: string;
  minExperience: number;
}

const [filters, setFilters] = useState<FilterState>({
  region: 'Todas',
  role: 'Todas',
  minExperience: 0
});
```

### 4. Funções e Callbacks
```typescript
// ✅ Bom: Tipos de funções
const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  event.preventDefault();
};

const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setValue(event.target.value);
};

// ✅ Bom: Tipos de callbacks
interface Props {
  onSubmit: (data: FormData) => void;
  onCancel: () => void;
}

// ✅ Bom: Funções genéricas
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
```

---

## 🎨 Estilização

### 1. Tailwind CSS
```typescript
// ✅ Bom: Classes organizadas
<div className="
  flex flex-col items-center justify-center
  p-4 md:p-8
  bg-white dark:bg-gray-800
  rounded-xl shadow-lg
  transition-all duration-200
  hover:shadow-xl
">

// ❌ Ruim: Classes desorganizadas
<div className="flex flex-col items-center justify-center p-4 md:p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg transition-all duration-200 hover:shadow-xl">

// ✅ Bom: Classes condicionais
const buttonClasses = cn(
  'px-4 py-2 rounded-lg font-medium',
  variant === 'primary' && 'bg-indigo-600 text-white',
  variant === 'secondary' && 'bg-gray-200 text-gray-800',
  disabled && 'opacity-50 cursor-not-allowed',
  className
);
```

### 2. Cores e Temas
```typescript
// ✅ Bom: Cores do sistema Tailwind
const colors = {
  primary: 'indigo',
  secondary: 'purple',
  success: 'green',
  error: 'red',
  warning: 'yellow'
};

// ✅ Bom: Uso de cores temáticas
const themeColors = {
  light: {
    bg: 'bg-white',
    text: 'text-gray-800',
    border: 'border-gray-200'
  },
  dark: {
    bg: 'bg-gray-800',
    text: 'text-white',
    border: 'border-gray-700'
  }
};
```

### 3. Responsividade
```typescript
// ✅ Bom: Breakpoints mobile-first
<div className="
  w-full
  sm:w-1/2
  md:w-1/3
  lg:w-1/4
  p-2 sm:p-4
">

// ✅ Bom: Grid responsivo
<div className="
  grid grid-cols-1
  sm:grid-cols-2
  md:grid-cols-3
  lg:grid-cols-4
  gap-4
">
```

### 4. Animações
```typescript
// ✅ Bom: Transições suaves
<div className="
  transition-all duration-200 ease-in-out
  hover:scale-105
  hover:shadow-xl
">

// ✅ Bom: Animações com Tailwind
<div className="
  animate-pulse
  animate-bounce
  animate-spin
">
```

---

## 💬 Comentários e Documentação

### 1. Comentários de Código
```typescript
// ✅ Bom: Comentários explicativos
// Calcula a idade com base na data de nascimento
function calculateAge(birthDate: Date): number {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  
  // Ajusta a idade se o aniversário ainda não chegou
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  
  return age;
}

// ❌ Ruim: Comentários redundantes
// Função para calcular idade
function calculateAge(birthDate: Date): number {
  // Retorna a idade
  return 25; // Valor fixo
}
```

### 2. JSDoc para Funções
```typescript
/**
 * Busca um perfil de desenvolvedor por ID
 * 
 * @param id - Identificador único do perfil
 * @returns Perfil encontrado ou null se não existir
 * @throws Error se o ID for inválido
 * 
 * @example
 * const profile = getProfileById(1);
 * console.log(profile?.name); // "Ana Silva"
 */
function getProfileById(id: number): DevProfile | null {
  // Implementação
}
```

### 3. Comentários de Seção
```typescript
// ============================================================================
// VALIDAÇÃO DE USUÁRIO
// ============================================================================

function validateUser(user: User): ValidationResult {
  // ...
}

// ============================================================================
// MANIPULAÇÃO DE ERROS
// ============================================================================

function handleError(error: Error): void {
  // ...
}
```

### 4. Comentários de Aviso
```typescript
// ⚠️ ATENÇÃO: Esta função tem efeitos colaterais
// Modifica o estado global diretamente
function updateUserProfile(user: User): void {
  // ...
}

// 🚨 TODO: Refatorar esta função
// A lógica está muito complexa e difícil de testar
function complexLogic(): void {
  // ...
}

// 🔧 FIXME: Bug conhecido
// O usuário não consegue fazer logout em mobile
function logout(): void {
  // ...
}
```

---

## 🌿 Git e Commits

### 1. Mensagens de Commit
```bash
# ✅ Bom: Formato Conventional Commits
feat: adiciona sistema de filtro por região

fix: corrige bug no swipe de perfis

docs: atualiza documentação de instalação

style: ajusta espaçamento do header

refactor: simplifica lógica de validação

test: adiciona testes para Login component

chore: atualiza dependências

# ❌ Ruim: Mensagens vagas
update
fix bug
mudanças

# ✅ Bom: Mensagens descritivas
feat: adiciona página de detalhes do perfil com redes sociais

fix: corrige navegação após logout em mobile

docs: adiciona guia de estilo para o projeto
```

### 2. Branches
```bash
# ✅ Bom: Nomenclatura de branches
feature/login-page
feature/swipe-cards
feature/messages-system
fix/bug-swipe-mobile
docs/update-readme
chore/update-dependencies

# ❌ Ruim: Branches genéricas
feature-1
bug-fix
update
```

### 3. Estrutura de Commits
```bash
# ✅ Bom: Commits pequenos e focados
git add src/pages/login.tsx
git commit -m "feat: adiciona validação de email"

git add src/pages/login.tsx
git commit -m "feat: adiciona toggle de visibilidade de senha"

# ❌ Ruim: Commits grandes e desorganizados
git add .
git commit -m "feat: página de login completa"
```

---

## 📐 Padrões de Design

### 1. DRY (Don't Repeat Yourself)
```typescript
// ❌ Ruim: Código duplicado
function ButtonPrimary({ label }: { label: string }) {
  return <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg">{label}</button>;
}

function ButtonSecondary({ label }: { label: string }) {
  return <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg">{label}</button>;
}

// ✅ Bom: Componente reutilizável
interface ButtonProps {
  label: string;
  variant: 'primary' | 'secondary';
}

function Button({ label, variant }: ButtonProps) {
  const variants = {
    primary: 'bg-indigo-600 text-white',
    secondary: 'bg-gray-200 text-gray-800'
  };
  
  return (
    <button className={`${variants[variant]} px-4 py-2 rounded-lg`}>
      {label}
    </button>
  );
}
```

### 2. Single Responsibility Principle
```typescript
// ❌ Ruim: Componente faz muitas coisas
function UserProfile({ user }: { user: User }) {
  const [isEditing, setIsEditing] = useState(false);
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  
  useEffect(() => {
    // Carrega posts
    // Carrega comentários
    // Atualiza perfil
  }, []);
  
  // Renderiza tudo
  return (
    <div>
      {/* Perfil, posts, comentários... */}
    </div>
  );
}

// ✅ Bom: Componentes separados por responsabilidade
function UserProfile({ user }: UserProfileProps) {
  return (
    <div>
      <ProfileHeader user={user} />
      <ProfileBio user={user} />
    </div>
  );
}

function UserPosts({ userId }: UserPostsProps) {
  // Carrega e exibe posts
}

function UserComments({ userId }: UserCommentsProps) {
  // Carrega e exibe comentários
}
```

### 3. Composition over Inheritance
```typescript
// ❌ Ruim: Herança de componentes
class Card extends React.Component {
  render() {
    return <div className="card">{this.props.children}</div>;
  }
}

class ProfileCard extends Card {
  render() {
    return (
      <div className="profile-card">
        {super.render()}
        {/* Conteúdo específico */}
      </div>
    );
  }
}

// ✅ Bom: Composição de componentes
function Card({ children }: CardProps) {
  return <div className="card">{children}</div>;
}

function ProfileCard({ user }: ProfileCardProps) {
  return (
    <Card>
      <ProfileHeader user={user} />
      <ProfileBody user={user} />
    </Card>
  );
}
```

### 4. Separation of Concerns
```typescript
// ✅ Bom: Lógica separada da UI
// api/profile.ts
export async function fetchProfile(id: number): Promise<DevProfile> {
  const response = await fetch(`/api/profiles/${id}`);
  return response.json();
}

// hooks/useProfile.ts
export function useProfile(id: number) {
  const [profile, setProfile] = useState<DevProfile | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetchProfile(id)
      .then(setProfile)
      .finally(() => setLoading(false));
  }, [id]);
  
  return { profile, loading };
}

// components/ProfileView.tsx
function ProfileView({ id }: ProfileViewProps) {
  const { profile, loading } = useProfile(id);
  
  if (loading) return <LoadingSpinner />;
  if (!profile) return <NotFound />;
  
  return <ProfileCard profile={profile} />;
}
```

---

## 🎯 Boas Práticas

### 1. Nomes Significativos
```typescript
// ✅ Bom: Nomes que revelam intenção
const userIsAuthenticated = true;
const daysUntilExpiration = 30;
const fetchUserProfile = () => {};

// ❌ Ruim: Nomes vagos
const flag = true;
const count = 30;
const doSomething = () => {};
```

### 2. Evitar "Magic Numbers"
```typescript
// ❌ Ruim: Números mágicos
if (user.age > 18) { /* ... */ }
const timeout = setTimeout(() => {}, 5000);

// ✅ Bom: Constantes descritivas
const MIN_AGE_FOR_REGISTRATION = 18;
const DEFAULT_TIMEOUT = 5000;

if (user.age > MIN_AGE_FOR_REGISTRATION) { /* ... */ }
const timeout = setTimeout(() => {}, DEFAULT_TIMEOUT);
```

### 3. Tratamento de Erros
```typescript
// ❌ Ruim: Erros silenciosos
try {
  // código
} catch {
  // vazio
}

// ✅ Bom: Erros tratados adequadamente
try {
  const profile = await fetchProfile(id);
  setProfile(profile);
} catch (error) {
  console.error('Erro ao carregar perfil:', error);
  setError('Não foi possível carregar o perfil');
} finally {
  setLoading(false);
}
```

### 4. Early Returns
```typescript
// ❌ Ruim: Aninhamento profundo
function processUser(user: User) {
  if (user) {
    if (user.isActive) {
      if (user.hasPermission) {
        // lógica principal
      }
    }
  }
}

// ✅ Bom: Early returns
function processUser(user: User) {
  if (!user) return;
  if (!user.isActive) return;
  if (!user.hasPermission) return;
  
  // lógica principal
}
```

---

## 📦 Padrões de Arquitetura

### 1. Container/Presenter
```typescript
// Container: Gerencia estado e lógica
function ProfileContainer({ id }: ProfileContainerProps) {
  const [profile, setProfile] = useState<DevProfile | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    loadProfile(id);
  }, [id]);
  
  const handleEdit = () => {
    // Lógica de edição
  };
  
  return (
    <ProfilePresenter 
      profile={profile}
      loading={loading}
      onEdit={handleEdit}
    />
  );
}

// Presenter: Apenas renderiza UI
function ProfilePresenter({ profile, loading, onEdit }: ProfilePresenterProps) {
  if (loading) return <LoadingSpinner />;
  if (!profile) return <NotFound />;
  
  return (
    <div className="profile">
      <h1>{profile.name}</h1>
      <button onClick={onEdit}>Editar</button>
    </div>
  );
}
```

### 2. Custom Hooks
```typescript
// ✅ Bom: Hook para lógica reutilizável
function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebounceValue] = useState(value);
  
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(value);
    }, delay);
    
    return () => clearTimeout(handler);
  }, [value, delay]);
  
  return debouncedValue;
}

// Uso
function SearchInput() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  
  useEffect(() => {
    // Buscar resultados
  }, [debouncedSearchTerm]);
  
  return <input onChange={(e) => setSearchTerm(e.target.value)} />;
}
```

---

## ✅ Checklist de Code Review

### Antes de Commitar
- [ ] Código segue este guia de estilo
- [ ] Nomes são significativos e descritivos
- [ ] Tipos TypeScript estão corretos
- [ ] Componentes têm responsabilidade única
- [ ] Não há código duplicado
- [ ] Comentários são necessários e claros
- [ ] Importações estão organizadas
- [ ] Tailwind classes estão formatadas

### Code Review
- [ ] Código é legível e compreensível
- [ ] Não há "magic numbers"
- [ ] Erros são tratados adequadamente
- [ ] Efeitos colaterais são minimizados
- [ ] Performance é considerada
- [ ] Testabilidade é possível
- [ ] Documentação está atualizada

---

**Guia de Estilo atualizado em**: 2024
**Versão**: 1.0.0
**Status**: ✅ Completo

---

<div align="center">

### 💜 Seguindo este guia, garantimos código limpo, consistente e de qualidade!

</div>
