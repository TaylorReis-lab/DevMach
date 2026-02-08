import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login com:', { email, password });
    navigate('/swipe');
  };

  const handleThemeChange = (newTheme: 'light' | 'dark' | 'neon') => {
    setTheme(newTheme);
  };

  return (
    <div className={`min-h-screen flex items-center justify-center p-4 ${theme === 'light' ? 'bg-gradient-to-br from-blue-50 via-white to-purple-50' : theme === 'dark' ? 'bg-gray-900' : 'bg-gray-950'}`}>
      <div className="w-full max-w-md">
        {/* Theme Selector */}
        <div className="flex justify-center gap-2 mb-6">
          <button
            onClick={() => handleThemeChange('light')}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
              theme === 'light' 
                ? 'bg-indigo-600 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            ☀️ Claro
          </button>
          <button
            onClick={() => handleThemeChange('dark')}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
              theme === 'dark' 
                ? 'bg-indigo-600 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            🌙 Escuro
          </button>
          <button
            onClick={() => handleThemeChange('neon')}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
              theme === 'neon' 
                ? 'bg-cyan-500 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            ⚡ Neon
          </button>
        </div>

        {/* Login Card */}
        <div className={`rounded-2xl p-8 shadow-xl ${
          theme === 'light' ? 'bg-white' : theme === 'dark' ? 'bg-gray-800' : 'bg-gray-900 neon-border'
        }`}>
          <div className="text-center mb-8">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center animate-pulse-glow">
              <span className="text-4xl">👨‍💻</span>
            </div>
            <h1 className={`text-4xl font-bold ${
              theme === 'light' ? 'text-indigo-600' : 
              theme === 'dark' ? 'text-white' : 'text-cyan-400 neon-text'
            }`}>
              DevMach
            </h1>
            <p className={`mt-2 ${
              theme === 'light' ? 'text-gray-600' : 
              theme === 'dark' ? 'text-gray-400' : 'text-gray-400'
            }`}>
              O Tinder para desenvolvedores
            </p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-5">
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
            
            <button
              type="submit"
              className={`w-full flex justify-center py-3 px-4 rounded-xl shadow-lg text-sm font-bold transition-all transform hover:scale-[1.02] ${
                theme === 'light' 
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700' 
                  : theme === 'dark' 
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600' 
                    : 'neon-button text-white font-bold'
              }`}
            >
              🔐 Entrar
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <button 
              onClick={() => navigate('/signup')}
              className={`text-sm font-medium hover:underline ${
                theme === 'light' ? 'text-indigo-600 hover:text-indigo-800' :
                theme === 'dark' ? 'text-indigo-400 hover:text-indigo-300' :
                'text-cyan-400 hover:text-cyan-300'
              }`}
            >
              Não tem uma conta? <span className="font-bold">Crie aqui</span>
            </button>
          </div>

          {/* Quick Login Demo */}
          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
            <p className={`text-xs text-center mb-3 ${
              theme === 'light' ? 'text-gray-500' : 'text-gray-400'
            }`}>
              Acesso rápido (demo):
            </p>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => {
                  setEmail('ana@devmach.com');
                  setPassword('demo123');
                }}
                className={`text-xs py-2 px-3 rounded-lg ${
                  theme === 'light' 
                    ? 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200' 
                    : theme === 'dark' 
                      ? 'bg-indigo-900 text-indigo-300 hover:bg-indigo-800' 
                      : 'bg-cyan-900/50 text-cyan-300 hover:bg-cyan-900'
                }`}
              >
                Ana (Full Stack)
              </button>
              <button
                onClick={() => {
                  setEmail('carlos@devmach.com');
                  setPassword('demo123');
                }}
                className={`text-xs py-2 px-3 rounded-lg ${
                  theme === 'light' 
                    ? 'bg-purple-100 text-purple-700 hover:bg-purple-200' 
                    : theme === 'dark' 
                      ? 'bg-purple-900 text-purple-300 hover:bg-purple-800' 
                      : 'bg-fuchsia-900/50 text-fuchsia-300 hover:bg-fuchsia-900'
                }`}
              >
                Carlos (Back-end)
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}