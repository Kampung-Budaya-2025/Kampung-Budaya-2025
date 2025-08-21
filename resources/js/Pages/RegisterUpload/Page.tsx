import React, { useState, useRef, ChangeEvent, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MdUpload, 
  MdDescription, 
  MdArrowBack, 
  MdCheckCircle 
} from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

interface UploadedFile {
  file: File | null;
  name: string;
  size: number;
  isValid: boolean;
  error?: string;
}

interface UploadFormData {
  formulirPendaftaran: UploadedFile;
  buktiPembayaran: UploadedFile;
}

interface StepperItemProps {
  step: number;
  label: string;
  isCompleted?: boolean;
  isActive?: boolean;
}

const StepperItem = ({ step, label, isCompleted = false, isActive = false }: StepperItemProps) => {
  const getStatusClasses = () => {
    if (isActive) return 'bg-amber-500 text-white';
    if (isCompleted) return 'bg-green-500 text-white';
    return 'bg-amber-100 text-amber-400';
  };

  const getTextColor = () => {
    if (isActive || isCompleted) return 'text-amber-700';
    return 'text-amber-400';
  };

  return (
    <motion.div 
      className={`flex items-center gap-2 ${!isActive && !isCompleted && 'opacity-70'}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div 
        className={`flex items-center justify-center w-8 h-8 font-bold rounded-full transition-colors ${getStatusClasses()}`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={isActive ? { scale: [1, 1.1, 1] } : {}}
        transition={{ duration: 0.3 }}
      >
        {isCompleted ? <MdCheckCircle className="w-5 h-5" /> : step}
      </motion.div>
      <span className={`hidden sm:inline text-sm font-semibold ${getTextColor()}`}>
        {label}
      </span>
    </motion.div>
  );
};

interface FileUploadInputProps {
  label: string;
  placeholder: string;
  accept: string;
  data: UploadedFile;
  inputRef: React.RefObject<HTMLInputElement | null>;
  onPick: (file: File) => void;
}

const FileUploadInput = ({ label, placeholder, accept, data, inputRef, onPick }: FileUploadInputProps) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.4 }}
  >
    <label className="block mb-2 text-sm font-medium text-gray-700">
      {label} <span className="text-red-500">*</span>
    </label>
    <motion.div 
      className={`relative flex items-center rounded-xl border transition-colors ${
        data.error ? 'border-red-400 bg-red-50' : 'border-gray-300 bg-white'
      }`}
      whileHover={{ borderColor: '#f59e0b' }}
      animate={data.error ? { x: [-5, 5, -5, 5, 0] } : {}}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center flex-1 min-w-0 pl-3">
        <MdDescription className="flex-shrink-0 w-5 h-5 text-gray-400" />
        <input
          type="text"
          readOnly
          value={data.name || ''}
          placeholder={placeholder}
          className="flex-1 px-2 py-3 text-sm text-gray-700 placeholder-gray-400 truncate bg-transparent outline-none"
        />
      </div>
      <motion.button
        type="button"
        onClick={() => inputRef.current?.click()}
        className="flex-shrink-0 mr-2 inline-flex items-center gap-1.5 rounded-lg border border-amber-300 bg-white px-3 py-1.5 text-sm font-medium text-amber-700 hover:bg-amber-50 transition-all"
        whileHover={{ scale: 1.02, backgroundColor: '#fffbeb' }}
        whileTap={{ scale: 0.98 }}
      >
        <MdUpload className="w-4 h-4" />
        <span className="hidden sm:inline">Pilih File</span>
        <span className="sm:hidden">Pilih</span>
      </motion.button>
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        className="hidden"
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          const file = e.target.files?.[0];
          if (file) onPick(file);
          e.target.value = ''; 
        }}
      />
    </motion.div>
    <AnimatePresence>
      {data.error && (
        <motion.p 
          className="mt-1.5 text-xs text-red-600"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          {data.error}
        </motion.p>
      )}
    </AnimatePresence>
  </motion.div>
);

const RegisterUpload: React.FC = () => {
  const navigate = useNavigate(); 

  const [uploadData, setUploadData] = useState<UploadFormData>({
    formulirPendaftaran: { file: null, name: '', size: 0, isValid: false },
    buktiPembayaran: { file: null, name: '', size: 0, isValid: false },
  });

  const formulirRef = useRef<HTMLInputElement | null>(null);
  const buktiRef = useRef<HTMLInputElement | null>(null);

  // Load existing data from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('registrationData');
    if (saved) {
      const parsedData = JSON.parse(saved);
      if (parsedData.uploadData) {
        setUploadData(parsedData.uploadData);
      }
    }
  }, []);

  const isFormValid =
    uploadData.formulirPendaftaran.isValid && uploadData.buktiPembayaran.isValid;

  const validateFile = (file: File, type: 'formulir' | 'bukti'): { isValid: boolean; error?: string } => {
    if (type === 'formulir') {
      const allowedMimeTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      const maxSizeMB = 5;
      if (!allowedMimeTypes.includes(file.type)) return { isValid: false, error: 'Format harus PDF atau DOCX' };
      if (file.size > maxSizeMB * 1024 * 1024) return { isValid: false, error: `Ukuran maksimal ${maxSizeMB}MB` };
    } else {
      const allowedMimeTypes = ['image/jpeg', 'image/png', 'application/pdf'];
      const maxSizeMB = 2;
      if (!allowedMimeTypes.includes(file.type)) return { isValid: false, error: 'Format harus JPG, PNG, atau PDF' };
      if (file.size > maxSizeMB * 1024 * 1024) return { isValid: false, error: `Ukuran maksimal ${maxSizeMB}MB` };
    }
    return { isValid: true };
  };

  const handleFileUpload = (type: keyof UploadFormData, file: File) => {
    const validation = validateFile(file, type === 'formulirPendaftaran' ? 'formulir' : 'bukti');
    
    const newUploadData = {
      ...uploadData,
      [type]: {
        file: validation.isValid ? file : null,
        name: file.name,
        size: file.size,
        isValid: validation.isValid,
        error: validation.error,
      },
    };
    
    setUploadData(newUploadData);
    
    // Save to localStorage immediately
    const existing = JSON.parse(localStorage.getItem('registrationData') || '{}');
    localStorage.setItem('registrationData', JSON.stringify({
      ...existing,
      uploadData: newUploadData,
      step: 2
    }));
  };
  
  const handleNext = () => {
    if (!isFormValid) return;
    
    // Make sure data is saved before navigating
    const existing = JSON.parse(localStorage.getItem('registrationData') || '{}');
    localStorage.setItem('registrationData', JSON.stringify({
      ...existing,
      uploadData,
      step: 2
    }));
    
    console.log('Berkas siap diunggah:', uploadData);
    navigate('/register-confirmation'); 
  };

  const handleBack = () => {
    // Save current progress before going back
    const existing = JSON.parse(localStorage.getItem('registrationData') || '{}');
    localStorage.setItem('registrationData', JSON.stringify({
      ...existing,
      uploadData,
      step: 2
    }));
    
    navigate('/register-form'); 
  };

  const floatVariants = {
    animate: {
      y: [0, -8, 0],
      transition: {
        duration: 4.5,
        ease: "easeInOut" as const,
        repeat: Infinity,
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="relative min-h-screen bg-[url('/background/background-hero.svg')] flex flex-col justify-center px-4 py-8 sm:py-10">
      {/* Header */}
      <motion.header 
        className="mb-4 text-center sm:mb-6"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-xl font-extrabold text-amber-800 sm:text-2xl md:text-3xl">
          Pendaftaran Lomba Videografi
        </h1>
      </motion.header>

      {/* Container dengan maskot - persis sama dengan RegisterForm */}
      <div className="relative max-w-5xl mx-auto">
        {/* Maskot kiri - positioning dan ukuran sama persis dengan RegisterForm */}
        <motion.div
          className="absolute hidden -translate-y-1/2 -left-40 top-1/2 lg:block"
          variants={floatVariants}
          animate="animate"
        >
          <img
            src="/mascot/mascot-cowok.svg"
            alt="Maskot kiri"
            className="h-auto w-28 sm:w-36 lg:w-48 xl:w-56"
          />
        </motion.div>

        {/* Maskot kanan - positioning dan ukuran sama persis dengan RegisterForm */}
        <motion.div
          className="absolute hidden -translate-y-1/2 -right-40 top-1/2 lg:block"
          variants={{
            animate: {
              y: [0, -8, 0],
              transition: {
                duration: 4.5,
                ease: "easeInOut" as const,
                repeat: Infinity,
                delay: 2.25,
              },
            },
          }}
          animate="animate"
        >
          <img
            src="/mascot/mascot-cewek.svg"
            alt="Maskot kanan"
            className="h-auto w-28 sm:w-36 lg:w-48 xl:w-56"
          />
        </motion.div>

        {/* Form Card - ukuran sama dengan RegisterForm */}
        <motion.div 
          className="relative w-full max-w-xl p-4 mx-auto bg-white border shadow-lg rounded-2xl border-amber-100 sm:max-w-2xl sm:rounded-3xl md:max-w-3xl md:p-8"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Stepper */}
          <motion.div 
            className="flex items-center justify-center gap-2 mb-8 sm:gap-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <StepperItem step={1} label="Data Diri" isCompleted />
            <motion.div 
              className="w-8 h-px bg-green-500 sm:w-10"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            />
            <StepperItem step={2} label="Upload Berkas" isActive />
            <motion.div 
              className="w-8 h-px sm:w-10 bg-amber-100"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            />
            <StepperItem step={3} label="Konfirmasi" />
          </motion.div>

          <motion.div 
            className="mb-6 text-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-base font-bold text-amber-800 sm:text-lg">Unggah Berkas</h2>
            <p className="text-xs text-amber-600 sm:text-sm">Pastikan format dan ukuran file sesuai.</p>
          </motion.div>

          <motion.div 
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <FileUploadInput
              label="Formulir Pendaftaran (.pdf, .docx)"
              placeholder="Pilih file formulir..."
              accept=".pdf,.docx"
              data={uploadData.formulirPendaftaran}
              inputRef={formulirRef}
              onPick={(f) => handleFileUpload('formulirPendaftaran', f)}
            />
            <FileUploadInput
              label="Bukti Pembayaran (.jpg, .png, .pdf)"
              placeholder="Pilih file bukti bayar..."
              accept=".jpg,.jpeg,.png,.pdf"
              data={uploadData.buktiPembayaran}
              inputRef={buktiRef}
              onPick={(f) => handleFileUpload('buktiPembayaran', f)}
            />
          </motion.div>
        </motion.div>

        {/* Tombol Aksi - container sama dengan RegisterForm */}
        <motion.div 
          className="flex flex-col-reverse items-center justify-between max-w-xl gap-4 mx-auto mt-5 sm:flex-row sm:mt-6 md:max-w-3xl"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <motion.button
            type="button"
            onClick={handleBack}
            className="inline-flex items-center justify-center w-full gap-2 px-6 py-3 text-base font-medium transition-all border rounded-full sm:w-auto border-amber-300 text-amber-700 hover:bg-amber-50"
            whileHover={{ scale: 1.02, backgroundColor: '#fffbeb' }}
            whileTap={{ scale: 0.98 }}
          >
            <MdArrowBack className="w-5 h-5" />
            Kembali
          </motion.button>

          <motion.button
            type="button"
            onClick={handleNext}
            disabled={!isFormValid}
            className={`w-full sm:w-auto rounded-full px-6 py-3 text-base font-semibold transition sm:px-10 sm:text-lg ${
              isFormValid
                ? "bg-gradient-to-r from-[#CE9C17] via-[#CD9514] to-[#CC8F12] text-white shadow-lg hover:from-[#CC8F12] hover:via-[#CD9514] hover:to-[#CE9C17]"
                : "cursor-not-allowed bg-gray-300 text-gray-600"
            }`}
            whileHover={isFormValid ? { scale: 1.05 } : {}}
            whileTap={isFormValid ? { scale: 0.98 } : {}}
            animate={isFormValid ? { boxShadow: "0 10px 25px rgba(245, 158, 11, 0.3)" } : {}}
          >
            Selanjutnya
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default RegisterUpload;