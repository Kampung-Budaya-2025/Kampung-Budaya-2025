import React, { useEffect, useState } from 'react';
import { ArrowLeft, Send } from 'lucide-react';
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
const StepperItem = ({ step, label, isCompleted, isActive }: StepperItemProps) => {
  const bubble =
    isActive ? 'bg-amber-500 text-white' :
    isCompleted ? 'bg-green-500 text-white' :
    'bg-amber-100 text-amber-400';
  const text =
    isActive || isCompleted ? 'text-amber-700' : 'text-amber-400';

  return (
    <div className={`flex items-center gap-2 ${!isActive && !isCompleted ? 'opacity-70' : ''}`}>
      <div className={`flex h-8 w-8 items-center justify-center rounded-full font-bold ${bubble}`}>
        {isCompleted ? '✓' : step}
      </div>
      <span className={`hidden sm:inline text-sm font-semibold ${text}`}>{label}</span>
    </div>
  );
};

const DataRow = ({ label, value }: { label: string; value: React.ReactNode }) => (
  <div className="grid grid-cols-[auto_1fr] items-start gap-x-2">
    <span className="text-gray-600">{label}</span>
    <div className="flex gap-2">
      <span className="text-gray-500">:</span>
      <span className="text-gray-800">{value || '-'}</span>
    </div>
  </div>
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

  return (
    <div className="relative min-h-screen px-4 py-8 bg-gradient-to-br from-amber-50 to-orange-100">
      {/* Header */}
      <header className="mb-4 text-center">
        <h1 className="text-xl font-extrabold text-amber-800 sm:text-2xl md:text-3xl">
          Pendaftaran Lomba Videografi
        </h1>
      </header>

      <div className="relative max-w-5xl mx-auto">
        {/* maskot (sembunyikan di hp) */}
        <div className="absolute hidden w-32 -left-4 top-20 lg:block">
          <img src="/mascot-left.png" alt="Maskot kiri" className="float-slow" />
        </div>
        <div className="absolute hidden w-32 -right-4 top-20 lg:block">
          <img src="/mascot-right.png" alt="Maskot kanan" className="float-slow" />
        </div>

        {/* CARD PUTIH */}
        <div className="relative w-full max-w-xl p-5 mx-auto bg-white border shadow-lg rounded-3xl border-amber-100 sm:max-w-2xl md:max-w-3xl md:p-8">
          {/* stepper */}
          <div className="flex items-center justify-center gap-2 mb-4 sm:gap-4">
            <StepperItem step={1} label="Data Diri" isCompleted />
            <div className="w-8 h-px bg-green-500 sm:w-10" />
            <StepperItem step={2} label="Upload Berkas" isCompleted />
            <div className="w-8 h-px bg-amber-300 sm:w-10" />
            <StepperItem step={3} label="Konfirmasi" isActive />
          </div>

          {/* title + garis */}
          <div className="text-center">
            <h2 className="text-base font-extrabold text-amber-800 sm:text-lg">
              Verifikasi Biodata
            </h2>
            <p className="text-xs text-amber-600 sm:text-sm">
              Pastikan data yang anda masukkan sudah benar
            </p>
          </div>
          <div className="w-full h-px mt-3 bg-amber-200" />

          {/* isi biodata */}
          <div className="grid grid-cols-1 mt-5 gap-y-3 sm:gap-y-4 md:grid-cols-2 md:gap-x-8">
            <div className="space-y-3 text-sm sm:text-base">
              <DataRow label="Nama" value={f?.namaLengkap} />
              <DataRow label="Mendaftar" value={f?.kategori} />
              <DataRow label="Asal Instansi" value={f?.asalInstansi} />
              <DataRow label="Tempat, Tanggal Lahir" value={formatDate(f?.tanggalLahir)} />
              <DataRow label="Nomor Handphone" value={f?.noHandphone?.replace(/(\d{4})\d+/, '$1 XXXX XXXX')} />
              <DataRow label="Instagram" value={f?.instagram} />
              <DataRow label="Email" value={f?.email} />
              <DataRow label="Formulir Pendaftaran" value={u?.formulirPendaftaran?.name} />
              <DataRow label="Bukti Pembayaran" value={u?.buktiPembayaran?.name} />
            </div>
            {/* kolom kanan bisa dipakai kalau ada field tambahan; dibiarkan kosong agar layout mirip gambar */}
            <div className="hidden md:block" />
          </div>
        </div>

        {/* tombol di luar card, center, kecil seperti gambar */}
        <div className="flex flex-col-reverse items-center justify-between max-w-3xl gap-4 mx-auto mt-6 sm:flex-row">
          <button
            type="button"
            onClick={back}
            className="inline-flex items-center justify-center w-full gap-2 px-6 py-3 text-base font-medium transition border rounded-full border-amber-300 text-amber-700 hover:bg-amber-50 sm:w-auto"
          >
            <ArrowLeft className="w-5 h-5" />
            Kembali
          </button>

          <button
            type="button"
            onClick={submit}
            disabled={submitting || !f || !u}
            className={`w-full rounded-full px-10 py-3 text-lg font-semibold sm:w-auto ${
              submitting || !f || !u
                ? 'cursor-not-allowed bg-gray-300 text-gray-600'
                : 'bg-amber-500 text-white shadow-md hover:bg-amber-600'
            }`}
          >
            {submitting ? 'Mengirim…' : 'Submit'}
          </button>
        </div>
      </div>

      {/* animasi float halus */}
      <style>
        {`
          .float-slow { animation: floatY 4.5s ease-in-out infinite; }
          @keyframes floatY {
            0%,100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
          }
        `}
      </style>
    </div>
  );
};

export default RegisterConfirmation;
