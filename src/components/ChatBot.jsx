import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, MapPin, Package, MessageCircle, ArrowRight } from 'lucide-react';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      text: 'Hello! Welcome to WinAuto. I\'m your Virtual Assistant. How can I help you today?\n\n🕒 Office Hours: Mon-Sat, 9:00 AM - 6:30 PM',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);

  const quickActions = [
    { id: 'locations', label: 'Our Locations', icon: <MapPin size={16} /> },
    { id: 'catalog', label: 'Spare Parts Catalog', icon: <Package size={16} /> },
    { id: 'whatsapp', label: 'Contact on WhatsApp', icon: <MessageCircle size={16} /> },
  ];

  const handleAction = (id) => {
    let responseText = '';
    let link = null;

    if (id === 'locations') {
      responseText = 'We have 6 branches in Chennai:\n1. Vadapalani\n2. Chromepet\n3. Villivakkam\n4. Velachery\n5. Porur\n6. Old Washermenpet\nYou can find full addresses and contact numbers in our footer!';
    } else if (id === 'catalog') {
      responseText = 'You can view our digital catalog here:';
      link = { label: 'Go to Catalog', url: '#catalog' };
    } else if (id === 'whatsapp') {
      responseText = 'Opening WhatsApp to chat with +91 9150760720...';
      window.open('https://wa.me/919150760720', '_blank');
    }

    const newMessage = {
      id: messages.length + 1,
      type: 'user',
      text: quickActions.find(a => a.id === id).label,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    const botMessage = {
      id: messages.length + 2,
      type: 'bot',
      text: responseText,
      link: link,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages([...messages, newMessage, botMessage]);
  };

  return (
    <div className="fixed bottom-2 right-2 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end pointer-events-none">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="w-[calc(100vw-2rem)] sm:w-[380px] h-[500px] max-h-[80vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden mb-4 border border-gray-100 pointer-events-auto"
          >
            {/* Header */}
            <div className="bg-blue-600 p-4 flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm border border-white/30">
                  <MessageSquare className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-sm">WinAuto Assistant</h3>
                  <div className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-[10px] text-blue-100">Always Online</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/10 rounded-lg transition-colors"
                title="Close Assistant"
              >
                <X size={20} />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-grow overflow-y-auto p-4 space-y-4 bg-gray-50/50">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, x: msg.type === 'bot' ? -10 : 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex ${msg.type === 'bot' ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`max-w-[85%] rounded-2xl p-3 text-sm shadow-sm ${msg.type === 'bot'
                      ? 'bg-white text-gray-800 border border-gray-100 rounded-tl-none'
                      : 'bg-blue-600 text-white rounded-tr-none'
                    }`}>
                    <p className="whitespace-pre-line leading-relaxed">{msg.text}</p>
                    {msg.link && (
                      <a
                        href={msg.link.url}
                        className="mt-2 inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline"
                        onClick={() => msg.link.url === '#catalog' && setIsOpen(false)}
                      >
                        {msg.link.label} <ArrowRight size={14} />
                      </a>
                    )}
                    <span className={`text-[10px] mt-1 block ${msg.type === 'bot' ? 'text-gray-400' : 'text-blue-200'}`}>
                      {msg.timestamp}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Footer / Smart Actions */}
            <div className="p-4 bg-white border-t border-gray-100">
              <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider mb-2 px-1">Quick Actions</p>
              <div className="flex flex-wrap gap-2">
                {quickActions.map((action) => (
                  <button
                    key={action.id}
                    onClick={() => handleAction(action.id)}
                    className="flex items-center gap-2 px-3 py-2 bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-200 rounded-full text-[11px] font-medium text-gray-600 hover:text-blue-600 transition-all active:scale-95"
                  >
                    {action.icon}
                    {action.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-700 transition-colors pointer-events-auto relative"
        title="Chat with Assistant"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <MessageSquare size={24} />
              <div className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-white" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default ChatBot;
