import { useNavigate, useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

interface DevProfile {
  id: number;
  name: string;
  role: string;
  techs: string[];
  location: string;
  description: string;
  image: string;
  avatar: string;
  experience?: string;
  projects?: string[];
  github?: string;
  linkedin?: string;
}

export function ProfileDetail() {
  const navigate = useNavigate();
  const location = useLocation();
  const { theme } = useTheme();
  const profile = location.state as DevProfile;

  if (!profile) {
    navigate('/swipe');
    return null;
  }

  const handleBack = () => {
    navigate('/swipe');
  };

  const cardBg = theme === 'light' ? 'bg-white' : theme === 'dark' ? 'bg-gray-800' : 'bg-gray-900 neon-border';
  const textColor = theme === 'light' ? 'text-gray-800' : 'text-white';
  const subTextColor = theme === 'light' ? 'text-gray-600' : 'text-gray-400';
  const accentColor = theme === 'light' ? 'text-indigo-600' : theme === 'dark' ? 'text-indigo-400' : 'text-cyan-400';

  return (
    <div className={`min-h-screen p-4 ${theme === 'light' ? 'bg-gradient-to-br from-blue-50 via-white to-purple-50' : theme === 'dark' ? 'bg-gray-900' : 'bg-gray-950'}`}>
      <div className="max-w-2xl mx-auto">
        {/* Botão Voltar */}
        <button 
          onClick={handleBack}
          className={`mb-6 flex items-center gap-2 font-medium hover:underline ${accentColor}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Voltar para Swipe
        </button>

        {/* Card Principal */}
        <div className={`${cardBg} rounded-2xl shadow-xl overflow-hidden`}>
          {/* Header com imagem */}
          <div className="relative h-72 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
            <img 
              src={profile.avatar} 
              alt={profile.name}
              className="w-40 h-40 rounded-full border-4 border-white/30 object-cover shadow-2xl"
            />
            <div className="absolute top-4 right-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium">
              {profile.role}
            </div>
          </div>

          <div className="p-8">
            {/* Nome e Localização */}
            <div className="text-center mb-8">
              <h1 className={`text-3xl font-bold ${textColor}`}>{profile.name}</h1>
              <p className={`${accentColor} font-medium text-lg mt-2`}>{profile.location}</p>
            </div>

            {/* Sobre */}
            <div className="mb-8">
              <h3 className={`text-xl font-semibold ${textColor} mb-3 flex items-center gap-2`}>
                <span>📝</span> Sobre
              </h3>
              <p className={`${subTextColor} leading-relaxed`}>{profile.description}</p>
            </div>

            {/* Experiência */}
            <div className="mb-8">
              <h3 className={`text-xl font-semibold ${textColor} mb-3 flex items-center gap-2`}>
                <span>💼</span> Experiência
              </h3>
              <p className={`${subTextColor}`}>{profile.experience || 'Não informado'}</p>
            </div>

            {/* Tecnologias */}
            <div className="mb-8">
              <h3 className={`text-xl font-semibold ${textColor} mb-3 flex items-center gap-2`}>
                <span>⚡</span> Tecnologias
              </h3>
              <div className="flex flex-wrap gap-2">
                {profile.techs.map((tech, index) => (
                  <span 
                    key={index}
                    className={`px-4 py-2 rounded-full text-sm font-medium ${
                      theme === 'light' ? 'bg-indigo-100 text-indigo-700' :
                      theme === 'dark' ? 'bg-indigo-900 text-indigo-300' :
                      'bg-cyan-900/50 text-cyan-300'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Projetos */}
            <div className="mb-8">
              <h3 className={`text-xl font-semibold ${textColor} mb-3 flex items-center gap-2`}>
                <span>🚀</span> Projetos Destacados
              </h3>
              <ul className="space-y-2">
                {profile.projects?.map((project, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 mt-0.5 flex-shrink-0 ${accentColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className={`${subTextColor}`}>{project}</span>
                  </li>
                )) || (
                  <li className={`${subTextColor}`}>Nenhum projeto destacado</li>
                )}
              </ul>
            </div>

            {/* Links Sociais */}
            <div className="grid grid-cols-2 gap-4">
              <a 
                href={profile.github || '#'} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.652.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
              <a 
                href={profile.linkedin || '#'} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.119 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Ação Rápida */}
        <div className="mt-6 flex gap-4">
          <button
            onClick={() => navigate('/messages')}
            className={`flex-1 py-3 px-4 rounded-xl font-bold transition-all transform hover:scale-[1.02] ${
              theme === 'light' 
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700' 
                : theme === 'dark' 
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600' 
                  : 'neon-button text-white font-bold'
            }`}
          >
            💬 Enviar Mensagem
          </button>
          <button
            onClick={handleBack}
            className={`py-3 px-6 rounded-xl font-bold transition-all ${
              theme === 'light' 
                ? 'bg-gray-200 text-gray-700 hover:bg-gray-300' 
                : theme === 'dark' 
                  ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
}