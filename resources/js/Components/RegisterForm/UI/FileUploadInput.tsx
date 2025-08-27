import React, { ChangeEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MdUpload, MdDescription } from 'react-icons/md';
import { UploadedFile } from '../types/registration';

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

export default FileUploadInput;