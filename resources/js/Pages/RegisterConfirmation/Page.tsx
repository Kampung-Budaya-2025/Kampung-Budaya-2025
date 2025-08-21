import React, { useEffect, useState } from 'react';
import { motion, easeInOut, Variants } from 'framer-motion';
import { MdArrowBack, MdSend, MdCheckCircle } from 'react-icons/md';
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

interface UploadedFile {
  file: File | null;
  name: string;
  size: number;
  isValid: boolean;
}

interface UploadData {
  formulirPendaftaran: UploadedFile;
  buktiPembayaran: UploadedFile;
}

interface RegistrationData {
  formData?: FormData;
  uploadData?: UploadData;
  step?: number;
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

interface DataRowProps {
  label: string;
  value: React.ReactNode;
  delay?: number;
}

const DataRow = ({ label, value, delay = 0 }: DataRowProps) => (
  <motion.div 
    className="grid grid-cols-[auto_1fr] items-start gap-x-2"
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.4, delay }}
  >
    <span className="text-gray-600">{label}</span>
    <div className="flex gap-2">
      <span className="text-gray-500">:</span>
      <span className="text-gray-800">{value || '-'}</span>
    </div>
  </motion.div>
);

const RegisterConfirmation: React.FC = () => {
  const navigate = useNavigate();

  const [data, setData] = useState<RegistrationData>({});
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('registrationData');
    if (saved) setData(JSON.parse(saved));
  }, []);

  const f = data.formData;
  const u = data.uploadData;

  const formatDate = (ds?: string) => {
    if (!ds) return '';
    const d = new Date(ds);
    return d.toLocaleDateString('id-ID', { day: '2-digit', month: '2-digit', year: 'numeric' });
  };

  const submit = async () => {
    if (!f || !u) return;
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 800));
    localStorage.setItem(
      'registrationData',
      JSON.stringify({ ...data, step: 3, status: 'submitted', submittedAt: new Date().toISOString() })
    );
    setSubmitting(false);
    navigate('/register-success', { replace: true });
  };

  const back = () => navigate('/register-upload');

  // Animation variants
  const floatingVariants: Variants = {
    animate: {
      y: [0, -8, 0],
      transition: {
        duration: 4.5,
        ease: easeInOut,
        repeat: Infinity,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: easeInOut },
    },
  };

  const stepperVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const stepVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: easeInOut },
    },
  };

  return (
    <div className="relative min-h-screen bg-[url('/background/background-hero.svg')] flex flex-col justify-center px-4 py-8 sm:py-10">
      {/* Header */}
      <motion.header 
        className="mb-4 text-center sm:mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: easeInOut }}
      >
        <h1 className="text-xl font-extrabold text-amber-800 sm:text-2xl md:text-3xl">
          Pendaftaran Lomba Videografi
        </h1>
      </motion.header>

      {/* Container dengan maskot - sama dengan RegisterForm */}
      <div className="relative max-w-5xl mx-auto">
        {/* Maskot kiri */}
        <motion.div
          className="absolute hidden -translate-y-1/2 -left-60 top-1/2 lg:block"
          variants={floatingVariants}
          animate="animate"
        >
          <img
            src="/mascot/mascot-cowok.svg"
            alt="Maskot kiri"
            className="h-auto w-28 sm:w-36 lg:w-48 xl:w-56"
          />
        </motion.div>

        {/* Maskot kanan */}
        <motion.div
          className="absolute hidden -translate-y-1/2 -right-60 top-1/2 lg:block"
          variants={{
            animate: {
              y: [0, -8, 0],
              transition: {
                duration: 4.5,
                ease: easeInOut,
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

        {/* Card Putih */}
        <motion.div
          className="relative w-full max-w-xl p-4 mx-auto bg-white border shadow-lg rounded-2xl border-amber-100 sm:max-w-2xl sm:rounded-3xl md:max-w-3xl md:p-8"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Stepper */}
          <motion.div
            className="flex items-center justify-center gap-3 mb-4 sm:mb-6 sm:gap-6"
            variants={stepperVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={stepVariants}>
              <StepperItem step={1} label="Data Diri" isCompleted />
            </motion.div>
            <motion.div
              className="w-8 h-px bg-green-500 sm:w-10"
              variants={stepVariants}
            />
            <motion.div variants={stepVariants}>
              <StepperItem step={2} label="Upload Berkas" isCompleted />
            </motion.div>
            <motion.div
              className="w-8 h-px bg-amber-300 sm:w-10"
              variants={stepVariants}
            />
            <motion.div variants={stepVariants}>
              <StepperItem step={3} label="Konfirmasi" isActive />
            </motion.div>
          </motion.div>

          {/* Title + Description */}
          <motion.div
            className="mb-2 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.4,
              duration: 0.5,
              ease: easeInOut,
            }}
          >
            <h2 className="text-base font-bold text-amber-800 sm:text-lg">
              Verifikasi Biodata
            </h2>
            <p className="text-xs text-amber-600 sm:text-sm">
              Pastikan data yang anda masukkan sudah benar
            </p>
          </motion.div>

          {/* Divider */}
          <motion.div 
            className="w-full h-px mt-3 bg-amber-200"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          />

          {/* Data Biodata */}
          <motion.div 
            className="grid grid-cols-1 mt-5 gap-y-3 sm:gap-y-4 md:grid-cols-2 md:gap-x-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.6,
              duration: 0.5,
              ease: easeInOut,
            }}
          >
            <div className="space-y-3 text-sm sm:text-base">
              <DataRow label="Nama" value={f?.namaLengkap} delay={0.1} />
              <DataRow label="Mendaftar" value={f?.kategori} delay={0.15} />
              <DataRow label="Asal Instansi" value={f?.asalInstansi} delay={0.2} />
              <DataRow label="Tempat, Tanggal Lahir" value={formatDate(f?.tanggalLahir)} delay={0.25} />
              <DataRow label="Nomor Handphone" value={f?.noHandphone?.replace(/(\d{4})\d+/, '$1 XXXX XXXX')} delay={0.3} />
              <DataRow label="Instagram" value={f?.instagram} delay={0.35} />
              <DataRow label="Email" value={f?.email} delay={0.4} />
              <DataRow label="Formulir Pendaftaran" value={u?.formulirPendaftaran?.name} delay={0.45} />
              <DataRow label="Bukti Pembayaran" value={u?.buktiPembayaran?.name} delay={0.5} />
            </div>
            {/* Kolom kanan kosong untuk layout */}
            <div className="hidden md:block" />
          </motion.div>
        </motion.div>

        {/* Tombol Aksi */}
        <motion.div
          className="flex flex-col-reverse items-center justify-between max-w-xl gap-4 mx-auto mt-5 sm:flex-row sm:mt-6 md:max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5, ease: easeInOut }}
        >
          <motion.button
            type="button"
            onClick={back}
            className="inline-flex items-center justify-center w-full gap-2 px-6 py-3 text-base font-medium transition-all border rounded-full sm:w-auto border-amber-300 text-amber-700 hover:bg-amber-50"
            whileHover={{ scale: 1.02, backgroundColor: '#fffbeb' }}
            whileTap={{ scale: 0.98 }}
          >
            <MdArrowBack className="w-5 h-5" />
            Kembali
          </motion.button>

          <motion.button
            type="button"
            onClick={submit}
            disabled={submitting || !f || !u}
            className={`w-full rounded-full px-6 py-3 text-base font-semibold transition sm:w-auto sm:px-10 sm:text-lg ${
              submitting || !f || !u
                ? 'cursor-not-allowed bg-gray-300 text-gray-600'
                : 'bg-gradient-to-r from-[#CE9C17] via-[#CD9514] to-[#CC8F12] text-white shadow-lg hover:from-[#CC8F12] hover:via-[#CD9514] hover:to-[#CE9C17]'
            }`}
            whileHover={!submitting && f && u ? { scale: 1.05, y: -2 } : {}}
            whileTap={!submitting && f && u ? { scale: 0.98 } : {}}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 17,
            }}
          >
            <span className="flex items-center gap-2">
              {submitting ? (
                <>
                  <motion.div
                    className="w-4 h-4 border-2 border-white rounded-full border-t-transparent"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                  Mengirim...
                </>
              ) : (
                <>
                  <MdSend className="w-5 h-5" />
                  Submit
                </>
              )}
            </span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default RegisterConfirmation;