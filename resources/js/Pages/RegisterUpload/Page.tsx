import React, { useState, useRef, ChangeEvent } from 'react';
import { Upload, File as FileIcon, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

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
  }
  return (
    <div className={`flex items-center gap-2 ${!isActive && !isCompleted && 'opacity-70'}`}>
      <div className={`flex items-center justify-center w-8 h-8 font-bold rounded-full transition-colors ${getStatusClasses()}`}>
        {isCompleted ? '✓' : step}
      </div>
      <span className={`hidden sm:inline text-sm font-semibold ${getTextColor()}`}>
        {label}
      </span>
    </div>
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
  <div>
    <label className="block mb-2 text-sm font-medium text-gray-700">
      {label} <span className="text-red-500">*</span>
    </label>
    <div className={`relative flex items-center rounded-xl border transition-colors ${
        data.error ? 'border-red-400 bg-red-50' : 'border-gray-300 bg-white'
      }`}
    >
      <div className="flex items-center flex-1 min-w-0 pl-3">
        <FileIcon className="flex-shrink-0 w-5 h-5 text-gray-400" />
        <input
          type="text"
          readOnly
          value={data.name || ''}
          placeholder={placeholder}
          className="flex-1 px-2 py-3 text-sm text-gray-700 placeholder-gray-400 truncate bg-transparent outline-none"
        />
      </div>
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        className="flex-shrink-0 mr-2 inline-flex items-center gap-1.5 rounded-lg border border-amber-300 bg-white px-3 py-1.5 text-sm font-medium text-amber-700 hover:bg-amber-50 transition-all"
      >
        <Upload className="w-4 h-4" />
        <span className="hidden sm:inline">Pilih File</span>
        <span className="sm:hidden">Pilih</span>
      </button>
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
    </div>
    {data.error && <p className="mt-1.5 text-xs text-red-600">{data.error}</p>}
  </div>
);


const RegisterUpload: React.FC = () => {
  const navigate = useNavigate(); 

  const [uploadData, setUploadData] = useState<UploadFormData>({
    formulirPendaftaran: { file: null, name: '', size: 0, isValid: false },
    buktiPembayaran: { file: null, name: '', size: 0, isValid: false },
  });

  const formulirRef = useRef<HTMLInputElement | null>(null);
  const buktiRef = useRef<HTMLInputElement | null>(null);

  const isFormValid =
    uploadData.formulirPendaftaran.isValid && uploadData.buktiPembayaran.isValid;

  const validateFile = (file: File, type: 'formulir' | 'bukti'): { isValid: boolean; error?: string } => {
    
    if (type === 'formulir') {
      const allowedMimeTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      const maxSizeMB = 5;
      if (!allowedMimeTypes.includes(file.type)) return { isValid: false, error: 'Format harus PDF atau DOCX' };
      if (file.size > maxSizeMB * 1024 * 1024) return { isValid: false, error: `Ukuran maksimal ${maxSizeMB}MB` };
    } 
 
    else {
      const allowedMimeTypes = ['image/jpeg', 'image/png', 'application/pdf'];
      const maxSizeMB = 2;
      if (!allowedMimeTypes.includes(file.type)) return { isValid: false, error: 'Format harus JPG, PNG, atau PDF' };
      if (file.size > maxSizeMB * 1024 * 1024) return { isValid: false, error: `Ukuran maksimal ${maxSizeMB}MB` };
    }
    return { isValid: true };
  };

  const handleFileUpload = (type: keyof UploadFormData, file: File) => {
    const validation = validateFile(file, type === 'formulirPendaftaran' ? 'formulir' : 'bukti');
    setUploadData(prev => ({
      ...prev,
      [type]: {
        file: validation.isValid ? file : null,
        name: file.name,
        size: file.size,
        isValid: validation.isValid,
        error: validation.error,
      },
    }));
  };
  
  const handleNext = () => {
    if (!isFormValid) return;
 
    console.log('Berkas siap diunggah:', uploadData);
    navigate('/register-confirmation'); 
  };

  const handleBack = () => {
    navigate('/register-form'); 
  };

  return (
    <div className="relative min-h-screen px-4 py-10 bg-gradient-to-br from-amber-50 to-orange-100">
      <header className="mb-8 text-center">
        <h1 className="text-2xl font-extrabold text-amber-800 md:text-3xl">
          Pendaftaran Lomba Videografi
        </h1>
      </header>

      <div className="relative max-w-5xl mx-auto">
        <div className="absolute hidden -left-4 top-24 w-36 lg:block">
          <img src="/mascot-left.png" alt="Maskot kiri" className="float-slow" />
        </div>
        <div className="absolute hidden -right-4 top-24 w-36 lg:block">
          <img src="/mascot-right.png" alt="Maskot kanan" className="float-slow" />
        </div>

        <div className="relative w-full max-w-3xl p-6 mx-auto border shadow-lg bg-white/95 rounded-3xl border-amber-100 md:p-8">
          {/* Stepper Responsif */}
          <div className="flex items-center justify-center gap-2 mb-8 sm:gap-4">
            <StepperItem step={1} label="Data Diri" isCompleted />
            <div className="w-8 h-px bg-green-500 sm:w-10" />
            <StepperItem step={2} label="Upload Berkas" isActive />
            <div className="w-8 h-px sm:w-10 bg-amber-100" />
            <StepperItem step={3} label="Konfirmasi" />
          </div>

          <div className="mb-6 text-center">
            <h2 className="text-xl font-bold text-amber-800">Unggah Berkas</h2>
            <p className="text-sm text-amber-600">Pastikan format dan ukuran file sesuai.</p>
          </div>

          <div className="space-y-6">
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
          </div>
        </div>

        {/* Area Tombol Aksi yang Responsif */}
        <div className="flex flex-col-reverse items-center justify-between max-w-3xl gap-4 mx-auto mt-8 sm:flex-row">
          {/* Tombol Kembali */}
          <button
            type="button"
            onClick={handleBack}
            className="inline-flex items-center justify-center w-full gap-2 px-6 py-3 text-base font-medium transition-all border rounded-full sm:w-auto border-amber-300 text-amber-700 hover:bg-amber-50"
          >
            <ArrowLeft className="w-5 h-5" />
            Kembali
          </button>

          {/* Tombol Selanjutnya */}
          <button
            type="button"
            onClick={handleNext}
            disabled={!isFormValid}
            className={`w-full sm:w-auto rounded-full px-10 py-3 text-lg font-semibold transition ${
              isFormValid
                ? 'bg-gradient-to-r from-amber-400 to-amber-600 text-white shadow-lg hover:from-amber-500 hover:to-amber-700 transform hover:scale-105'
                : 'cursor-not-allowed bg-gray-300 text-gray-600'
            }`}
          >
            Selanjutnya
          </button>
        </div>
      </div>

      <style>
        {`
          .float-slow { animation: floatY 4.5s ease-in-out infinite; }
          @keyframes floatY {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
        `}
      </style>
    </div>
  );
};

export default RegisterUpload;