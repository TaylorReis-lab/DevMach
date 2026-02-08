import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

interface DevProfile {
  id: number;
  name: string;
  role: string;
  techs: string[];
  location: string;
  description: string;
  image: string;
  experience?: string;
  projects?: string[];
  github?: string;
  linkedin?: string;
  avatar: string;
}

export function Swipe() {
  const navigate = useNavigate();
  const { theme } = useTheme();
  
  // Perfis simulados com avatares online
  const profiles: DevProfile[] = [
    {
      id: 1,
      name: "Ana Silva",
      role: "Full Stack",
      techs: ["React", "Node.js", "PostgreSQL", "TypeScript"],
      location: "São Paulo, SP",
      description: "Desenvolvedora full stack com 5 anos de experiência. Amo criar aplicações modernas e aprender novas tecnologias. Trabalho com React, Node.js e bancos de dados relacionais.",
      image: "/placeholder.jpg",
      avatar: "https://i.pravatar.cc/150?img=1",
      experience: "5 anos profissionalmente, trabalhando em empresas de tecnologia e startups. Atualmente liderando projetos de e-commerce e sistemas de agendamento.",
      projects: ["Sistema de agendamento médico", "E-commerce de produtos artesanal", "Dashboard de analytics"],
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    },
    {
      id: 2,
      name: "Carlos Oliveira",
      role: "Back-end",
      techs: ["Python", "Django", "AWS", "Docker", "PostgreSQL"],
      location: "Rio de Janeiro, RJ",
      description: "Especialista em back-end Python com foco em escalabilidade e microservices. Apaixonado por arquitetura de software e boas práticas.",
      image: "/placeholder.jpg",
      avatar: "https://i.pravatar.cc/150?img=3",
      experience: "8 anos de experiência em desenvolvimento back-end. Trabalhou em fintechs e startups de logística. Certificado em AWS Solutions Architect.",
      projects: ["API de pagamentos", "Sistema de análise de dados", "Microserviços de orquestração"],
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    },
    {
      id: 3,
      name: "Mariana Costa",
      role: "Front-end",
      techs: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Figma"],
      location: "Belo Horizonte, MG",
      description: "UX/Front-end developer com paixão por interfaces bonitas e responsivas. Especialista em React e design systems.",
      image: "/placeholder.jpg",
      avatar: "https://i.pravatar.cc/150?img=5",
      experience: "3 anos focada em React e TypeScript. Trabalhou com design systems e componentes reutilizáveis.",
      projects: ["Dashboard analítico", "Landing page para startup", "Design System corporativo"],
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    },
    {
      id: 4,
      name: "Pedro Santos",
      role: "Mobile",
      techs: ["React Native", "Flutter", "TypeScript", "Firebase"],
      location: "Porto Alegre, RS",
      description: "Desenvolvedor mobile com foco em React Native e Flutter. Criação de apps nativos para iOS e Android.",
      image: "/placeholder.jpg",
      avatar: "https://i.pravatar.cc/150?img=8",
      experience: "4 anos desenvolvendo apps mobile para startups e empresas de médio porte.",
      projects: ["App de delivery", "Rede social fitness", "App de finanças pessoais"],
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    },
    {
      id: 5,
      name: "Julia Mendes",
      role: "Data Science",
      techs: ["Python", "TensorFlow", "Pandas", "SQL", "AWS"],
      location: "São Paulo, SP",
      description: "Cientista de dados com experiência em machine learning e análise preditiva. Apaixonada por transformar dados em insights.",
      image: "/placeholder.jpg",
      avatar: "https://i.pravatar.cc/150?img=9",
      experience: "6 anos em análise de dados e ML. Trabalhou em projetos de recomendação e previsão de demanda.",
      projects: ["Sistema de recomendação", "Previsão de vendas", "Análise de sentimentos"],
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    }
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filterRegion, setFilterRegion] = useState('Todas');
  const [filterRole, setFilterRole] = useState('Todas');
  const [isAnimating, setIsAnimating] = useState<'right' | 'left' | null>(null);
  
  const currentProfile = profiles[currentIndex];

  const filteredProfiles = profiles.filter(profile => {
    const matchRegion = filterRegion === 'Todas' || profile.location.includes(filterRegion);
    const matchRole = filterRole === 'Todas' || profile.role === filterRole;
    return matchRegion && matchRole;
  });

  const actualCurrentIndex = filteredProfiles.findIndex(p => p.id === currentProfile?.id) ?? 0;
  const displayedProfile = filteredProfiles[actualCurrentIndex];

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(null);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  const handleLike = () => {
    if (!displayedProfile) return;
    console.log('Curtiu:', displayedProfile.name);
    setIsAnimating('right');
    setTimeout(() => {
      if (actualCurrentIndex < filteredProfiles.length - 1) {
        setCurrentIndex(prev => prev + 1);
      }
    }, 300);
  };

  const handleDislike = () => {
    if (!displayedProfile) return;
    console.log('Discurtiu:', displayedProfile.name);
    setIsAnimating('left');
    setTimeout(() => {
      if (actualCurrentIndex < filteredProfiles.length - 1) {
        setCurrentIndex(prev => prev + 1);
      }
    }, 300);
  };

  const handleViewProfile = () => {
    navigate('/profile', { state: displayedProfile });
  };

  const handleMessages = () => {
    navigate('/messages');
  };

  const handleLogout = () => {
    navigate('/login');
  };

  if (!displayedProfile) {
    return (
      <div className={`min-h-screen flex items-center justify-center p-4 ${theme === 'light' ? 'bg-gradient-to-br from-blue-50 via-white to-purple-50' : theme === 'dark' ? 'bg-gray-900' : 'bg-gray-950'}`}>
        <div className={`text-center p-8 rounded-2xl shadow-xl ${theme === 'light' ? 'bg-white' : 'bg-gray-800'}`}>
          <h1 className={`text-2xl font-bold ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>Sem mais perfis!</h1>
          <p className={`mt-2 ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>Volte outro dia para mais conexões.</p>
          <button
            onClick={handleLogout}
            className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          >
            Sair
          </button>
        </div>
      </div>
    );
  }

  const getAnimationClass = () => {
    if (isAnimating === 'right') return 'animate-swipe-right';
    if (isAnimating === 'left') return 'animate-swipe-left';
    return '';
  };

  const cardBg = theme === 'light' ? 'bg-white' : theme === 'dark' ? 'bg-gray-800' : 'bg-gray-900 neon-border';
  const textColor = theme === 'light' ? 'text-gray-800' : 'text-white';
  const subTextColor = theme === 'light' ? 'text-gray-600' : 'text-gray-400';
  const accentColor = theme === 'light' ? 'text-indigo-600' : theme === 'dark' ? 'text-indigo-400' : 'text-cyan-400';
  
  return (
    <div className={`min-h-screen p-4 ${theme === 'light' ? 'bg-gradient-to-br from-blue-50 via-white to-purple-50' : theme === 'dark' ? 'bg-gray-900' : 'bg-gray-950'}`}>
      {/* Header com navegação */}
      <div className="max-w-md mx-auto mb-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <span className="text-xl">👨‍💻</span>
            </div>
            <h1 className={`text-2xl font-bold ${theme === 'neon' ? 'neon-text text-cyan-400' : accentColor}`}>
              DevMach
            </h1>
          </div>
          <div className="flex gap-2">
            <button
              onClick={handleMessages}
              className={`p-2 rounded-full transition-all ${
                theme === 'light' ? 'bg-indigo-100 text-indigo-600 hover:bg-indigo-200' :
                theme === 'dark' ? 'bg-gray-700 text-indigo-400 hover:bg-gray-600' :
                'bg-gray-800 text-cyan-400 hover:bg-gray-700 neon-border'
              }`}
              title="Mensagens"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </button>
            <button
              onClick={handleLogout}
              className={`p-2 rounded-full transition-all ${
                theme === 'light' ? 'bg-gray-100 text-gray-600 hover:bg-gray-200' :
                theme === 'dark' ? 'bg-gray-700 text-gray-400 hover:bg-gray-600' :
                'bg-gray-800 text-gray-400 hover:bg-gray-700 neon-border'
              }`}
              title="Sair"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto">
        {/* Cartão principal */}
        <div 
          className={`relative ${cardBg} rounded-2xl shadow-xl overflow-hidden cursor-pointer transform transition-all duration-300 ${getAnimationClass()}`}
          onClick={handleViewProfile}
        >
          {/* Imagem do perfil */}
          <div className="relative h-64 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
            <img 
              src={displayedProfile.avatar} 
              alt={displayedProfile.name}
              className="w-32 h-32 rounded-full border-4 border-white/30 object-cover shadow-lg"
            />
            <div className="absolute top-4 right-4 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
              {displayedProfile.role}
            </div>
          </div>
          
          <div className="p-6">
            <div className="text-center mb-4">
              <h2 className={`text-2xl font-bold ${textColor}`}>{displayedProfile.name}</h2>
              <p className={`${accentColor} font-medium`}>{displayedProfile.location}</p>
            </div>
            
            <div className="mb-4">
              <p className={`${subTextColor} text-sm leading-relaxed`}>{displayedProfile.description}</p>
            </div>
            
            <div className="mb-6">
              <h3 className={`text-xs font-bold uppercase tracking-wider mb-2 ${subTextColor}`}>Tecnologias</h3>
              <div className="flex flex-wrap gap-2">
                {displayedProfile.techs.map((tech, index) => (
                  <span 
                    key={index}
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
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

            {/* Botões de ação */}
            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleDislike();
                }}
                className={`p-4 rounded-full transition-all transform hover:scale-110 ${
                  theme === 'light' ? 'bg-red-100 text-red-600 hover:bg-red-200' :
                  theme === 'dark' ? 'bg-red-900 text-red-400 hover:bg-red-800' :
                  'bg-red-900/50 text-red-400 hover:bg-red-900'
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleViewProfile();
                }}
                className={`p-4 rounded-full transition-all transform hover:scale-110 ${
                  theme === 'light' ? 'bg-blue-100 text-blue-600 hover:bg-blue-200' :
                  theme === 'dark' ? 'bg-blue-900 text-blue-400 hover:bg-blue-800' :
                  'bg-blue-900/50 text-blue-400 hover:bg-blue-900'
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </button>
              
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleLike();
                }}
                className={`p-4 rounded-full transition-all transform hover:scale-110 ${
                  theme === 'light' ? 'bg-green-100 text-green-600 hover:bg-green-200' :
                  theme === 'dark' ? 'bg-green-900 text-green-400 hover:bg-green-800' :
                  'bg-green-900/50 text-green-400 hover:bg-green-900'
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Filtros */}
        <div className={`mt-6 rounded-xl shadow-md p-4 ${theme === 'light' ? 'bg-white' : theme === 'dark' ? 'bg-gray-800' : 'bg-gray-900 neon-border'}`}>
          <h3 className={`font-medium mb-3 ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>🔍 Filtros</h3>
          <div className="space-y-3">
            <div>
              <label className={`block text-sm font-medium mb-1 ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                🌍 Região
              </label>
              <select 
                className={`w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 transition-all ${
                  theme === 'light' 
                    ? 'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500' 
                    : theme === 'dark' 
                      ? 'border-gray-600 bg-gray-700 text-white focus:border-indigo-400 focus:ring-indigo-400' 
                      : 'border-cyan-500/50 bg-gray-800 text-cyan-300 focus:border-cyan-400 focus:ring-cyan-400'
                }`}
                value={filterRegion}
                onChange={(e) => setFilterRegion(e.target.value)}
              >
                <option>Todas</option>
                <option>São Paulo</option>
                <option>Rio de Janeiro</option>
                <option>Minas Gerais</option>
                <option>Rio Grande do Sul</option>
                <option>Outros</option>
              </select>
            </div>
            
            <div>
              <label className={`block text-sm font-medium mb-1 ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                💼 Área de atuação
              </label>
              <select 
                className={`w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 transition-all ${
                  theme === 'light' 
                    ? 'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500' 
                    : theme === 'dark' 
                      ? 'border-gray-600 bg-gray-700 text-white focus:border-indigo-400 focus:ring-indigo-400' 
                      : 'border-cyan-500/50 bg-gray-800 text-cyan-300 focus:border-cyan-400 focus:ring-cyan-400'
                }`}
                value={filterRole}
                onChange={(e) => setFilterRole(e.target.value)}
              >
                <option>Todas</option>
                <option>Front-end</option>
                <option>Back-end</option>
                <option>Full Stack</option>
                <option>Mobile</option>
                <option>Data Science</option>
                <option>DevOps</option>
              </select>
            </div>
          </div>
        </div>

        {/* Contador de perfis */}
        <div className="mt-4 text-center">
          <p className={`${subTextColor} text-sm`}>
            {actualCurrentIndex + 1} de {filteredProfiles.length} perfis
          </p>
        </div>
      </div>
    </div>
  );
}