import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

export function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [devType, setDevType] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { theme } = useTheme();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Cadastro com:', { name, email, password, devType });
    navigate('/swipe');
  };

  const devTypes = [
    { value: 'frontend', label: 'Front-end', icon: '🎨' },
    { value: 'backend', label: 'Back-end', icon: '⚙️' },
    { value: 'fullstack', label: 'Full Stack', icon: '🚀' },
    { value: 'mobile', label: 'Mobile', icon: '📱' },
    { value: 'data', label: 'Data Science', icon: '📊' },
    { value: 'devops', label: 'DevOps', icon: '🔧' }
  ];

  return (
    <div className={`min-h-screen flex items-center justify-center p-4 ${theme === 'light' ? 'bg-gradient-to-br from-blue-50 via-white to-purple-50' : theme === 'dark' ? 'bg-gray-900' : 'bg-gray-950'}`}>
      <div className="w-full max-w-md">
        <div className={`rounded-2xl p-8 shadow-xl ${
          theme === 'light' ? 'bg-white' : theme === 'dark' ? 'bg-gray-800' : 'bg-gray-900 neon-border'
        }`}>
          <div className="text-center mb-6">
            <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <span className="text-3xl">👨‍💻</span>
            </div>
            <h1 className={`text-2xl font-bold ${
              theme === 'light' ? 'text-indigo-600' : 
              theme === 'dark' ? 'text-white' : 'text-cyan-400 neon-text'
            }`}>
              Criar Conta
            </h1>
            <p className={`mt-1 text-sm ${
              theme === 'light' ? 'text-gray-600' : 'text-gray-400'
            }`}>
              Crie seu perfil de desenvolvedor
            </p>
          </div>
          
          <form onSubmit={handleSignup} className="space-y-4">
            <div>
              <label htmlFor="name" className={`block text-sm font-medium ${
                theme === 'light' ? 'text-gray-700' : 'text-gray-300'
              }`}>
                Nome completo
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`mt-1 block w-full rounded-xl border px-4 py-3 shadow-sm focus:outline-none focus:ring-2 transition-all ${
                  theme === 'light' 
                    ? 'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500' 
                    : theme === 'dark' 
                      ? 'border-gray-600 bg-gray-700 text-white focus:border-indigo-400 focus:ring-indigo-400' 
                      : 'border-cyan-500/50 bg-gray-800 text-cyan-300 focus:border-cyan-400 focus:ring-cyan-400'
                }`}
                placeholder="Seu nome"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className={`block text-sm font-medium ${
                theme === 'light' ? 'text-gray-700' : 'text-gray-300'
              }`}>
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`mt-1 block w-full rounded-xl border px-4 py-3 shadow-sm focus:outline-none focus:ring-2 transition-all ${
                  theme === 'light' 
                    ? 'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500' 
                    : theme === 'dark' 
                      ? 'border-gray-600 bg-gray-700 text-white focus:border-indigo-400 focus:ring-indigo-400' 
                      : 'border-cyan-500/50 bg-gray-800 text-cyan-300 focus:border-cyan-400 focus:ring-cyan-400'
                }`}
                placeholder="seu@email.com"
                required
              />
            </div>
            
            <div>
              <label htmlFor="password" className={`block text-sm font-medium ${
                theme === 'light' ? 'text-gray-700' : 'text-gray-300'
              }`}>
                Senha
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`mt-1 block w-full rounded-xl border px-4 py-3 pr-10 shadow-sm focus:outline-none focus:ring-2 transition-all ${
                    theme === 'light' 
                      ? 'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500' 
                      : theme === 'dark' 
                        ? 'border-gray-600 bg-gray-700 text-white focus:border-indigo-400 focus:ring-indigo-400' 
                        : 'border-cyan-500/50 bg-gray-800 text-cyan-300 focus:border-cyan-400 focus:ring-cyan-400'
                  }`}
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? '👁️' : '🙈'}
                </button>
              </div>
            </div>

            <div>
              <label htmlFor="devType" className={`block text-sm font-medium ${
                theme === 'light' ? 'text-gray-700' : 'text-gray-300'
              }`}>
                Área de atuação
              </label>
              <div className="grid grid-cols-2 gap-2 mt-2">
                {devTypes.map((type) => (
                  <button
                    key={type.value}
                    type="button"
                    onClick={() => setDevType(type.value)}
                    className={`p-3 rounded-xl text-sm font-medium transition-all ${
                      devType === type.value
                        ? theme === 'light' 
                          ? 'bg-indigo-600 text-white ring-2 ring-indigo-400' 
                          : theme === 'dark' 
                            ? 'bg-indigo-500 text-white ring-2 ring-indigo-300' 
                            : 'bg-cyan-500 text-white ring-2 ring-cyan-300'
                        : theme === 'light' 
                          ? 'bg-gray-100 text-gray-700 hover:bg-gray-200' 
                          : theme === 'dark' 
                            ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                            : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                    }`}
                  >
                    <span className="text-lg">{type.icon}</span>
                    <div className="mt-1">{type.label}</div>
                  </button>
                ))}
              </div>
            </div>
            
            <button
              type="submit"
              disabled={!name || !email || !password || !devType}
              className={`w-full flex justify-center py-3 px-4 rounded-xl shadow-lg text-sm font-bold transition-all transform hover:scale-[1.02] ${
                !name || !email || !password || !devType
                  ? 'opacity-50 cursor-not-allowed'
                  : theme === 'light' 
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700' 
                    : theme === 'dark' 
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600' 
                      : 'neon-button text-white font-bold'
              }`}
            >
              ✨ Criar Conta
            </button>
          </form>
          
          <div className="mt-4 text-center">
            <button 
              onClick={() => navigate('/login')}
              className={`text-sm font-medium hover:underline ${
                theme === 'light' ? 'text-indigo-600 hover:text-indigo-800' :
                theme === 'dark' ? 'text-indigo-400 hover:text-indigo-300' :
                'text-cyan-400 hover:text-cyan-300'
              }`}
            >
              Já tem uma conta? <span className="font-bold">Faça login</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}