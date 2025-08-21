import React, { useEffect, useState } from 'react';
import { motion, easeInOut, Variants } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface FormData {
  namaLengkap: string;
  kategori: string;
  tanggalLahir: string;
  asalInstansi: string;
  noHandphone: string;
  email: string;
  instagram: string;
  idLine: string;
}

interface RegistrationData {
  formData?: FormData;
  step?: number;
  status?: string;
  submittedAt?: string;
}

const RegisterSuccess: React.FC = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<RegistrationData>({});

  useEffect(() => {
    const saved = localStorage.getItem('registrationData');
    if (saved) {
      const parsedData = JSON.parse(saved);
      setData(parsedData);
      
      // Redirect jika belum submit
      if (parsedData.status !== 'submitted') {
        navigate('/register-form');
      }
    } else {
      navigate('/register-form');
    }
  }, [navigate]);

  const handleFinish = () => {
    // Clear registration data dan redirect ke home
    localStorage.removeItem('registrationData');
    navigate('/');
  };

  // Animation variants
  const floatingVariants: Variants = {
    animate: {
      y: [0, -12, 0],
      transition: {
        duration: 3,
        ease: easeInOut,
        repeat: Infinity,
      },
    },
  };

  const mascotLeftVariants: Variants = {
    hidden: { x: -200, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: easeInOut,
        delay: 0.3,
      },
    },
  };

  const mascotRightVariants: Variants = {
    hidden: { x: 200, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: easeInOut,
        delay: 0.5,
      },
    },
  };

  const speechBubbleVariants: Variants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: easeInOut,
        delay: 1.2,
      },
    },
  };

  const contentVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: easeInOut,
        delay: 1.5,
      },
    },
  };

  return (
    <div className="relative min-h-screen bg-[url('/background/background-hero.svg')] flex flex-col justify-center px-4 py-8">
      {/* Title */}
      <motion.header 
        className="mb-8 text-center"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: easeInOut }}
      >
        <h1 className="text-3xl font-extrabold text-amber-800 md:text-4xl lg:text-5xl">
          Pendaftaran Berhasil
        </h1>
      </motion.header>

      {/* Main Content Container */}
      <div className="relative flex flex-col items-center justify-center max-w-6xl mx-auto">
        
        {/* Mascot Container */}
        <div className="relative flex items-center justify-center mb-12">
          
          {/* Decorative Background */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <div className="rounded-full w-80 h-80 bg-gradient-to-br from-amber-200 to-orange-200" />
          </motion.div>

          {/* Maskot Kiri */}
          <motion.div
            className="relative z-10 mr-4"
            variants={mascotLeftVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={floatingVariants}
              animate="animate"
            >
              <img
                src="/mascot/mascot-cowok.svg"
                alt="Maskot kiri"
                className="w-32 h-auto sm:w-40 md:w-48 lg:w-56"
              />
            </motion.div>
            
            {/* Speech Bubble Kiri */}
            <motion.div
              className="absolute -top-8 -left-4 sm:-top-12 sm:-left-8"
              variants={speechBubbleVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="relative">
                <div className="px-4 py-2 text-sm font-bold text-white rounded-full shadow-lg bg-amber-500 sm:px-6 sm:py-3 sm:text-base whitespace-nowrap">
                  Terima kasih telah mendaftar!!
                </div>
                <div className="absolute w-3 h-3 transform rotate-45 bg-amber-500 bottom-[-6px] left-6"></div>
              </div>
            </motion.div>
          </motion.div>

          {/* Maskot Kanan */}
          <motion.div
            className="relative z-10 ml-4"
            variants={mascotRightVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={{
                animate: {
                  y: [0, -12, 0],
                  transition: {
                    duration: 3,
                    ease: easeInOut,
                    repeat: Infinity,
                    delay: 1.5,
                  },
                },
              }}
              animate="animate"
            >
              <img
                src="/mascot/mascot-cewek.svg"
                alt="Maskot kanan"
                className="w-32 h-auto sm:w-40 md:w-48 lg:w-56"
              />
            </motion.div>
            
            {/* Speech Bubble Kanan */}
            <motion.div
              className="absolute -top-8 -right-4 sm:-top-12 sm:-right-8"
              variants={speechBubbleVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1.4 }}
            >
              <div className="relative">
                <div className="px-4 py-2 text-sm font-bold text-white rounded-full shadow-lg bg-amber-500 sm:px-6 sm:py-3 sm:text-base">
                  Yayyyy!
                </div>
                <div className="absolute w-3 h-3 transform rotate-45 bg-amber-500 bottom-[-6px] right-6"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Success Message & Instructions */}
        <motion.div
          className="max-w-2xl mx-auto text-center"
          variants={contentVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Instruction Text */}
          <motion.p
            className="mb-6 text-lg font-semibold text-amber-800 sm:text-xl md:text-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
          >
            Segera bergabung di grup WhatsApp untuk mendapatkan informasi selanjutnya!
          </motion.p>

          {/* WhatsApp Link */}
          <motion.a
            href="https://chat.whatsapp.com/J3au7X2Tu7fiIS9r9RF9K5"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mb-8 text-sm text-teal-600 underline break-all transition-colors hover:text-teal-800 sm:text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            https://chat.whatsapp.com/J3au7X2Tu7fiIS9r9RF9K5
          </motion.a>

          {/* Action Button - Only "Selesai" */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2 }}
          >
            <motion.button
              onClick={handleFinish}
              className="px-15 py-3 text-lg font-semibold text-white transition-all rounded-full s bg-gradient-to-r from-[#CE9C17] via-[#CD9514] to-[#CC8F12] shadow-lg hover:from-[#CC8F12] hover:via-[#CD9514] hover:to-[#CE9C17] hover:shadow-xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 17,
              }}
            >
              Selesai
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Celebration Animation */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
        >
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-amber-400"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: easeInOut,
              }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default RegisterSuccess;