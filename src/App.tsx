/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { Heart, Music, Volume2, VolumeX, ChevronDown, Sparkles, Facebook, Mail } from 'lucide-react';

const chapters = [
  {
    id: 1,
    title: "Chapter 1: Mở đầu",
    content: [
      "Những dòng mà anh sắp viết tới đây đều có ý nghĩa, đều xuất phát từ chính cảm xúc của anh.",
      "Gần đây anh dần ít lời với em đi, nhưng điều đó không có nghĩa là anh không còn suy nghĩ gì liên quan tới em.",
      "Em đừng lo lắng quá nha vì anh vẫn luôn yêu em như ngày đầu (thật ra là ngày càng yêu nhiều hơn nữa).",
      "Em hãy dành ra 5 phút để đọc vài dòng tâm tư mà anh viết ra nha."
    ],
    icon: (
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 3 }}
      >
        <Heart className="w-10 h-10 text-pink-400" fill="currentColor" />
      </motion.div>
    )
  },
  {
    id: 2,
    title: "Chapter 2: \"Anh\"",
    content: [
      "Anh dạo này, có chút không ổn thật...",
      "Chắc anh cũng không cần nói nhiều vì em là người hiểu anh nhất mà.",
      "Anh phải thừa nhận một điều, anh vẫn chưa đủ mạnh mẽ để gánh vác tất cả.",
      "Thời gian này anh cũng từng nghĩ: nếu chỉ mới nhiêu đây mà đã khó khăn, thì cuộc sống sau này còn tới mức nào.",
      "Ý anh ở đây là anh đã để những gánh nặng bên ngoài đè nặng lên cảm xúc của anh, khiến anh luôn mệt mỏi.",
      "Và cũng vì vậy mà anh ít thể hiện tình yêu của anh với em hơn.",
      "Anh rất xin lỗi về điều này, em chịu nhiều điều không hay rồi.",
      "Anh vẫn đang tiếp tục cố gắng, anh sẽ thích nghi, sẽ cứng rắn hơn để đối chọi với thử thách bên ngoài mà dịu dàng với riêng em."
    ],
    icon: (
      <motion.div
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <Sparkles className="w-10 h-10 text-indigo-400" />
      </motion.div>
    )
  },
  {
    id: 3,
    title: "Chapter 3: Gửi đến em",
    content: [
      "Hành trình đó của anh vẫn còn dài, nhưng anh cảm thấy rất may mắn vì em luôn tin tưởng anh, luôn kiên nhẫn chờ đợi anh lớn lên.",
      "Anh không biết phải diễn tả sao nữa, anh suy nghĩ rất nhiều: \"Anh có xứng đáng nhận được sự yêu thương nhẹ nhàng đó từ em không?\".",
      "Anh cảm ơn em. Em biết cách làm anh nhẹ nhõm.",
      "Anh cảm nhận rất rõ qua từng lời nói mà em dành cho anh.",
      "Anh nói để em biết, anh đã suy nghĩ về em và về tình yêu em dành cho anh rất nhiều.",
      "Mong rằng trong thời gian tới, anh sẽ trở lại, em sẽ không phải buồn vì thiếu \"anh\" nữa."
    ],
    icon: (
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
      >
        <Heart className="w-10 h-10 text-red-400" fill="currentColor" />
      </motion.div>
    )
  }
];

// Optimized ShimmerBackground
const ShimmerBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-pink-100 opacity-20 blur-[80px] will-change-transform"
          style={{
            width: '40vw',
            height: '40vw',
            left: (i * 25) + "%",
            top: (i % 2 === 0 ? 10 : 60) + "%",
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20 + i * 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// Optimized FloatingHearts
const FloatingHearts = () => {
  const hearts = Array.from({ length: 8 });
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-1">
      {hearts.map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            x: (i * 12) + "%", 
            y: "110%", 
            opacity: 0,
            scale: 0.6
          }}
          animate={{ 
            y: "-10%", 
            opacity: [0, 0.4, 0],
          }}
          transition={{ 
            duration: 15 + i * 2, 
            repeat: Infinity, 
            delay: i * 2,
            ease: "linear"
          }}
          className="absolute text-pink-300/30 will-change-transform"
        >
          <Heart fill="currentColor" size={24} />
        </motion.div>
      ))}
    </div>
  );
};

// Refined ParticleBackground with floating hearts
const ParticleBackground = () => {
  const particles = Array.from({ length: 35 });
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[45]">
      {particles.map((_, i) => {
        const duration = 12 + Math.random() * 18;
        const delay = Math.random() * 10;
        const xPos = Math.random() * 100;
        const yPos = Math.random() * 100;
        const isHeart = Math.random() > 0.7;

        return (
          <motion.div
            key={i}
            initial={{ 
              left: xPos + "%", 
              top: yPos + "%", 
              opacity: 0,
              scale: 0,
              rotate: 0
            }}
            animate={{ 
              opacity: [0, 0.8, 0],
              scale: [0, isHeart ? 1.5 : 1, 0],
              y: [0, -100, 0],
              x: [0, Math.random() * 60 - 30, 0],
              rotate: [0, Math.random() * 360]
            }}
            transition={{ 
              duration: duration, 
              repeat: Infinity, 
              delay: delay,
              ease: "easeInOut"
            }}
            className="absolute flex items-center justify-center"
          >
            {isHeart ? (
              <Heart className="text-pink-300/40 fill-pink-300/20 w-4 h-4" />
            ) : (
              <div className="w-2 h-2 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,1)]" />
            )}
          </motion.div>
        );
      })}
    </div>
  );
};

// Music Visualizer Component
const MusicVisualizer = ({ isPlaying }: { isPlaying: boolean }) => {
  return (
    <div className="flex items-end gap-[2px] h-4">
      {[1, 2, 3, 4].map((i) => (
        <motion.div
          key={i}
          animate={isPlaying ? { height: [4, 16, 4] } : { height: 4 }}
          transition={{
            repeat: Infinity,
            duration: 0.5 + Math.random() * 0.5,
            ease: "easeInOut",
          }}
          className="w-[3px] bg-pink-400 rounded-full"
        />
      ))}
    </div>
  );
};

// Interactive Message in a Bottle
const MessageInABottle = () => {
  const [isOpen, setIsOpen] = useState(false);
  const messages = [
    "Em là điều tuyệt vời nhất từng đến với anh.",
    "Mỗi ngày bên em đều là một món quà.",
    "Anh yêu cách em cười, nó làm thế giới của anh bừng sáng.",
    "Cảm ơn em vì đã luôn ở bên cạnh anh.",
    "Hứa với anh là mình sẽ mãi như thế này nhé!"
  ];
  const [currentMsg, setCurrentMsg] = useState(messages[0]);

  const openBottle = () => {
    setCurrentMsg(messages[Math.floor(Math.random() * messages.length)]);
    setIsOpen(true);
  };

  return (
    <div className="fixed bottom-10 right-10 z-[60]">
      <motion.button
        whileHover={{ scale: 1.1, rotate: 10 }}
        whileTap={{ scale: 0.9 }}
        onClick={openBottle}
        className="bg-white/90 backdrop-blur-md p-4 rounded-full shadow-xl border border-pink-100 text-pink-500"
      >
        <Mail className="w-8 h-8" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="absolute bottom-20 right-0 w-64 bg-white p-6 rounded-3xl shadow-2xl border border-pink-50 text-center"
          >
            <p className="text-gray-700 italic mb-4">"{currentMsg}"</p>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-sm font-bold text-pink-400 uppercase tracking-widest"
            >
              Đóng lại
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Love Counter Component
const LoveCounter = () => {
  const startDate = new Date('2024-01-01T09:00:00'); // Khởi đầu từ 9h sáng ngày 1/1/2024
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = now.getTime() - startDate.getTime();
      
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        mins: Math.floor((diff / 1000 / 60) % 60),
        secs: Math.floor((diff / 1000) % 60)
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-4 text-pink-500 font-medium">
      <div className="flex flex-col items-center">
        <span className="text-2xl font-bold">{timeLeft.days}</span>
        <span className="text-[10px] uppercase tracking-widest opacity-60">Ngày</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-2xl font-bold">{timeLeft.hours}</span>
        <span className="text-[10px] uppercase tracking-widest opacity-60">Giờ</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-2xl font-bold">{timeLeft.mins}</span>
        <span className="text-[10px] uppercase tracking-widest opacity-60">Phút</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-2xl font-bold">{timeLeft.secs}</span>
        <span className="text-[10px] uppercase tracking-widest opacity-60">Giây</span>
      </div>
    </div>
  );
};

export default function App() {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    if (hasStarted && isMusicPlaying) {
      audioRef.current?.play().catch(err => console.error("Audio play failed:", err));
    } else {
      audioRef.current?.pause();
    }
  }, [hasStarted, isMusicPlaying]);

  const toggleMusic = () => {
    setIsMusicPlaying(!isMusicPlaying);
  };

  const startJourney = () => {
    setHasStarted(true);
    setIsMusicPlaying(true);
  };

  return (
    <div className="min-h-screen bg-[#FFF5F5] text-[#4A4A4A] font-serif selection:bg-pink-200 selection:text-pink-900 overflow-x-hidden relative">
      {/* Audio Element */}
      <audio ref={audioRef} src="./music.mp3" loop />

      {/* Background Layers - Optimized */}
      <ShimmerBackground />
      <FloatingHearts />
      <ParticleBackground />

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-pink-400 origin-left z-50"
        style={{ scaleX }}
      />

      <AnimatePresence>
        {hasStarted && <MessageInABottle />}
        {!hasStarted ? (
          <motion.div
            key="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-white p-6 text-center"
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              <Heart className="w-20 h-20 text-pink-400 mb-6" fill="currentColor" />
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold text-pink-600 mb-6 leading-tight">
              Đôi lời gửi đến tình yêu của anh.
            </h1>
            <p className="text-xl text-gray-400 mb-10 max-w-lg italic font-light">
              Một món quà nhỏ dành cho người anh yêu nhất.<br/>
              Hãy bật âm thanh và bắt đầu nhé.
            </p>
            <button
              onClick={startJourney}
              className="px-12 py-5 bg-pink-500 text-white rounded-full text-xl font-medium shadow-lg hover:bg-pink-600 transition-all transform hover:scale-105 active:scale-95 flex items-center gap-3"
            >
              Bắt đầu hành trình <Music className="w-6 h-6" />
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative z-10"
          >
            {/* Music Toggle Button */}
            <div className="fixed top-6 right-6 z-50 flex items-center gap-4">
              {isMusicPlaying && <MusicVisualizer isPlaying={isMusicPlaying} />}
              <button
                onClick={toggleMusic}
                className="p-4 bg-white/80 backdrop-blur-md rounded-full shadow-md text-pink-500 hover:scale-110 active:scale-90 border border-pink-50"
              >
                {isMusicPlaying ? <Volume2 className="w-6 h-6" /> : <VolumeX className="w-6 h-6" />}
              </button>
            </div>

            {/* Header */}
            <header className="h-screen flex flex-col items-center justify-center p-6 text-center relative">
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="mb-12"
              >
                <LoveCounter />
              </motion.div>

              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <h1 className="text-6xl md:text-8xl font-bold text-pink-600 mb-6 tracking-tight leading-tight">
                  Đôi lời gửi đến tình yêu của anh.
                </h1>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 1 }}
                  className="text-pink-400 text-2xl italic font-light"
                >
                  Dành riêng cho em...
                </motion.div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-pink-300"
              >
                <span className="text-sm uppercase tracking-widest font-light">Cuộn xuống</span>
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  <ChevronDown className="w-8 h-8" />
                </motion.div>
              </motion.div>
            </header>

            {/* Chapters */}
            <main className="max-w-4xl mx-auto px-6 pb-40">
              {chapters.map((chapter, index) => (
                <section key={chapter.id} className="min-h-[80vh] flex items-center justify-center py-20">
                  <motion.div
                    initial={{ opacity: 0, y: 40, backgroundColor: "rgba(255, 255, 255, 0.6)" }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ 
                      y: -8, 
                      boxShadow: "0 25px 50px -12px rgba(251, 113, 133, 0.15)",
                      backgroundColor: "rgba(255, 255, 255, 0.8)"
                    }}
                    viewport={{ once: true, margin: "-15%" }}
                    transition={{ 
                      type: "spring",
                      stiffness: 100,
                      damping: 20,
                      opacity: { duration: 0.6 }
                    }}
                    className="bg-white/60 backdrop-blur-md p-10 md:p-16 rounded-[40px] shadow-lg border border-white/40 w-full cursor-default transition-colors duration-300 will-change-transform"
                  >
                    <div className="flex items-center gap-6 mb-10">
                      <div className="p-4 bg-pink-50 rounded-2xl">
                        {chapter.icon}
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold text-pink-700">
                        {chapter.title}
                      </h3>
                    </div>
                    
                    <div className="space-y-8">
                      {chapter.content.map((paragraph, pIndex) => (
                        <motion.p
                          key={pIndex}
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 + pIndex * 0.1 }}
                          className="text-2xl md:text-3xl leading-relaxed text-gray-700 font-light"
                        >
                          {paragraph}
                        </motion.p>
                      ))}
                    </div>
                  </motion.div>
                </section>
              ))}

              {/* Final Message */}
              <section className="min-h-[60vh] flex flex-col items-center justify-center text-center py-20">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="space-y-10"
                >
                  <motion.div 
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 4 }}
                    className="inline-block p-8 bg-pink-50 rounded-full"
                  >
                    <Heart className="w-16 h-16 text-pink-500" fill="currentColor" />
                  </motion.div>
                  
                  <div className="space-y-4">
                    <h2 className="text-5xl md:text-6xl font-bold text-pink-600">
                      Cảm ơn em đã đọc hết.
                    </h2>
                    <p className="text-3xl md:text-4xl italic text-pink-400 font-light">
                      Chúc em mãi xinh, mãi vui.
                    </p>
                  </div>
                  
                  <div className="flex flex-col items-center gap-10 pt-10">
                    <motion.a
                      href="https://www.facebook.com/2thag5"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center p-5 bg-white rounded-full shadow-md text-blue-600 border border-blue-50"
                    >
                      <Facebook className="w-8 h-8" fill="currentColor" />
                    </motion.a>

                    <div className="flex justify-center gap-6">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <motion.div
                          key={i}
                          animate={{ y: [0, -10, 0], opacity: [0.4, 1, 0.4] }}
                          transition={{ repeat: Infinity, duration: 2, delay: i * 0.3 }}
                        >
                          <Heart className="w-6 h-6 text-pink-300" fill="currentColor" />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </section>
            </main>
          </motion.div>
        )}
      </AnimatePresence>

      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Quicksand:wght@300;400;500;600&display=swap');
        
        body {
          font-family: 'Quicksand', sans-serif;
          scroll-behavior: smooth;
          background: #FFF5F5;
        }
        
        h1, h2, h3, .font-serif {
          font-family: 'Dancing Script', cursive;
        }

        ::-webkit-scrollbar {
          width: 6px;
        }
        ::-webkit-scrollbar-track {
          background: #FFF5F5;
        }
        ::-webkit-scrollbar-thumb {
          background: #FFD1D1;
          border-radius: 10px;
        }
      `}} />
    </div>
  );
}
