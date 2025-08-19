import React from 'react';

interface SearchFieldProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  onSearch?: () => void;
}

const SearchField: React.FC<SearchFieldProps> = ({
  placeholder = "Cari pertanyaan",
  value = "",
  onChange,
  onSearch
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearch?.();
    }
  };

  const handleSearchClick = () => {
    onSearch?.();
  };

  return (
    <div 
      className="relative flex items-center"
      style={{
        width: '648px',
        height: '49px',
        flexShrink: 0,
        borderRadius: '15.089px',
        border: '2px solid #3F170D',
        background: '#FFF',
        boxShadow: '0 1.775px 3.55px 0 rgba(0, 0, 0, 0.07) inset'
      }}
    >
      <input
        type="text"
        value={value}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder={placeholder}
        className="flex-1 h-full px-6 text-base text-gray-800 placeholder-[#3F170D] bg-transparent border-none outline-none"
        style={{
          borderRadius: '13.089px 0 0 13.089px'
        }}
      />
      
      <button
        onClick={handleSearchClick}
        className="flex items-center justify-center h-full px-6 transition-colors hover:bg-gray-50"
        style={{
          borderRadius: '0 13.089px 13.089px 0'
        }}
      >
        <img
          src="/icon/search-icon.svg" 
          alt="Search"
          width={24}
          height={24}
          className="object-contain"
        />
      </button>
    </div>
  );
};

export default SearchField;

