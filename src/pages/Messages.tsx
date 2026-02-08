import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

interface Message {
  id: number;
  sender: string;
  content: string;
  timestamp: string;
  unread: boolean;
}

interface Conversation {
  id: number;
  name: string;
  avatar: string;
  lastMessage: string;
  timestamp: string;
  unreadCount: number;
  online: boolean;
}

export function Messages() {
  const navigate = useNavigate();
  const { theme } = useTheme();
  
  // Conversas simuladas
  const [conversations] = useState<Conversation[]>([
    {
      id: 1,
      name: "Ana Silva",
      avatar: "https://i.pravatar.cc/150?img=1",
      lastMessage: "Obrigada pelo match! Vamos marcar um café?",
      timestamp: "12:30",
      unreadCount: 2,
      online: true
    },
    {
      id: 2,
      name: "Carlos Oliveira",
      avatar: "https://i.pravatar.cc/150?img=3",
      lastMessage: "Top! Amanhã às 15h naquela cafeteria do centro",
      timestamp: "10:15",
      unreadCount: 0,
      online: false
    },
    {
      id: 3,
      name: "Mariana Costa",
      avatar: "https://i.pravatar.cc/150?img=5",
      lastMessage: "Acabei de terminar um projeto com React e TypeScript...",
      timestamp: "Ontem",
      unreadCount: 1,
      online: true
    },
    {
      id: 4,
      name: "Pedro Santos",
      avatar: "https://i.pravatar.cc/150?img=8",
      lastMessage: "Legal! Você também trabalha com mobile?",
      timestamp: "Ontem",
      unreadCount: 0,
      online: false
    }
  ]);

  // Mensagens da conversa selecionada
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(null);
  
  const [messages, setMessages] = useState<Message[]>([
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
    },
    {
      id: 4,
      sender: "Ana Silva",
      content: "Obrigada pelo match! Vamos marcar um café?",
      timestamp: "12:30",
      unread: true
    }
  ]);

  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;
    
    const newMsg: Message = {
      id: messages.length + 1,
      sender: "você",
      content: newMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      unread: false
    };
    
    setMessages([...messages, newMsg]);
    setNewMessage('');
  };

  const handleSelectConversation = (conversation: Conversation) => {
    setSelectedConversation(conversation);
    // Simular carregamento de mensagens da conversa
    setMessages([
      {
        id: 1,
        sender: conversation.name,
        content: `Olá! Vi seu perfil no DevMach. Você é ${conversation.name.toLowerCase()}.`,
        timestamp: "10:00",
        unread: false
      },
      {
        id: 2,
        sender: "você",
        content: "Oi! Sim, prazer em conhecer! Como está sua experiência com desenvolvimento?",
        timestamp: "10:05",
        unread: false
      },
      {
        id: 3,
        sender: conversation.name,
        content: "Ótima! Trabalho com tecnologias modernas e gosto muito de criar soluções inovadoras.",
        timestamp: "10:10",
        unread: false
      }
    ]);
  };

  const handleBack = () => {
    navigate('/swipe');
  };

  const cardBg = theme === 'light' ? 'bg-white' : theme === 'dark' ? 'bg-gray-800' : 'bg-gray-900 neon-border';
  const textColor = theme === 'light' ? 'text-gray-800' : 'text-white';
  const subTextColor = theme === 'light' ? 'text-gray-600' : 'text-gray-400';
  const accentColor = theme === 'light' ? 'text-indigo-600' : theme === 'dark' ? 'text-indigo-400' : 'text-cyan-400';
  const bgColor = theme === 'light' ? 'bg-gray-50' : theme === 'dark' ? 'bg-gray-900' : 'bg-gray-950';

  return (
    <div className={`min-h-screen flex flex-col ${bgColor}`}>
      {/* Header */}
      <div className={`${cardBg} p-4 shadow-sm flex items-center gap-3`}>
        <button 
          onClick={handleBack}
          className={`${accentColor} hover:opacity-80`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </button>
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
            <span className="text-xl">💬</span>
          </div>
          <h1 className={`text-xl font-bold ${theme === 'neon' ? 'neon-text text-cyan-400' : accentColor}`}>
            Mensagens
          </h1>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Lista de conversas (sidebar) */}
        {!selectedConversation ? (
          <div className="w-full overflow-y-auto">
            {conversations.map(conversation => (
              <div 
                key={conversation.id}
                className={`p-4 border-b cursor-pointer flex items-start gap-3 transition-all ${
                  theme === 'light' 
                    ? 'border-gray-100 hover:bg-gray-50' 
                    : theme === 'dark' 
                      ? 'border-gray-700 hover:bg-gray-700' 
                      : 'border-gray-800 hover:bg-gray-800'
                } ${conversation.unreadCount > 0 ? (theme === 'light' ? 'bg-blue-50' : 'bg-indigo-900/30') : ''}`}
                onClick={() => handleSelectConversation(conversation)}
              >
                <div className="relative flex-shrink-0">
                  <img 
                    src={conversation.avatar} 
                    alt={conversation.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  {conversation.online && (
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                  )}
                  {conversation.unreadCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center font-bold">
                      {conversation.unreadCount}
                    </span>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center">
                    <h3 className={`font-semibold truncate ${textColor}`}>{conversation.name}</h3>
                    <span className={`text-xs ${subTextColor} flex-shrink-0 ml-2`}>
                      {conversation.timestamp}
                    </span>
                  </div>
                  <p className={`text-sm truncate mt-1 ${conversation.unreadCount > 0 ? 'font-medium' : subTextColor}`}>
                    {conversation.lastMessage}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Área de conversa (chat)
          <div className="flex-1 flex flex-col">
            {/* Header da conversa */}
            <div className={`${cardBg} p-4 shadow-sm flex items-center gap-3`}>
              <button 
                onClick={() => setSelectedConversation(null)}
                className={`${accentColor} hover:opacity-80 md:hidden`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </button>
              <div className="relative">
                <img 
                  src={selectedConversation.avatar} 
                  alt={selectedConversation.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                {selectedConversation.online && (
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></span>
                )}
              </div>
              <div>
                <h3 className={`font-semibold ${textColor}`}>{selectedConversation.name}</h3>
                <p className={`text-xs ${selectedConversation.online ? 'text-green-500' : subTextColor}`}>
                  {selectedConversation.online ? 'Online' : 'Offline'}
                </p>
              </div>
            </div>

            {/* Mensagens */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map(message => (
                <div 
                  key={message.id}
                  className={`flex ${message.sender === 'você' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-xs md:max-w-md px-4 py-3 rounded-2xl ${
                    message.sender === 'você' 
                      ? theme === 'light' 
                        ? 'bg-indigo-600 text-white rounded-br-none' 
                        : theme === 'dark' 
                          ? 'bg-indigo-500 text-white rounded-br-none' 
                          : 'bg-cyan-500 text-white rounded-br-none'
                      : theme === 'light' 
                        ? 'bg-gray-100 text-gray-800 rounded-bl-none' 
                        : theme === 'dark' 
                          ? 'bg-gray-700 text-gray-200 rounded-bl-none' 
                          : 'bg-gray-800 text-gray-300 rounded-bl-none'
                  }`}
                  >
                    {message.sender !== 'você' && (
                      <p className={`text-xs font-semibold mb-1 ${
                        theme === 'light' ? 'text-indigo-600' : 
                        theme === 'dark' ? 'text-indigo-300' : 'text-cyan-300'
                      }`}>
                        {message.sender}
                      </p>
                    )}
                    <p className="break-words">{message.content}</p>
                    <p className={`text-xs mt-1 ${
                      message.sender === 'você' 
                        ? theme === 'light' ? 'text-indigo-100' : 'text-indigo-100' 
                        : subTextColor
                    }`}>
                      {message.timestamp}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Input de mensagem */}
            <div className={`${cardBg} p-4 border-t ${theme === 'light' ? 'border-gray-200' : 'border-gray-700'} flex items-center gap-2`}>
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Digite uma mensagem..."
                className={`flex-1 rounded-full border px-4 py-3 focus:outline-none focus:ring-2 transition-all ${
                  theme === 'light' 
                    ? 'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 bg-white text-gray-800' 
                    : theme === 'dark' 
                      ? 'border-gray-600 focus:border-indigo-400 focus:ring-indigo-400 bg-gray-700 text-white' 
                      : 'border-cyan-500/50 focus:border-cyan-400 focus:ring-cyan-400 bg-gray-800 text-cyan-300'
                }`}
              />
              <button
                onClick={handleSendMessage}
                disabled={newMessage.trim() === ''}
                className={`p-3 rounded-full transition-all ${
                  newMessage.trim() === ''
                    ? 'opacity-50 cursor-not-allowed'
                    : theme === 'light' 
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
                      : theme === 'dark' 
                        ? 'bg-indigo-500 text-white hover:bg-indigo-600' 
                        : 'neon-button text-white'
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2z" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}