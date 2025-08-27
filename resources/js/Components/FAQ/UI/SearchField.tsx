import React from "react";

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
    onSearch,
}) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            onSearch?.();
        }
    };

    const handleSearchClick = () => {
        onSearch?.();
    };

    return (
        <div
            className="
        relative flex items-start
        w-full max-w-full max-h-[2.8rem] md:min-h-[4.5rem]
        rounded-[15.089px] border-[2px] border-[#3F170D]
        bg-white
        shadow-[inset_0_1.775px_3.55px_0_rgba(0,0,0,0.07)]
      "
        >
            <input
                type="text"
                value={value}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                placeholder={placeholder}
                className="
          flex-1 w-full lg:min-h-[4.5rem] min-h-[2.8rem] lg:max-h-[4.5rem] px-6 text-base lg:text-2xl text-gray-800
          placeholder-[#3F170D] bg-transparent border-none outline-none
          rounded-l-[13.089px]
        "
            />

            <button
                onClick={handleSearchClick}
                className="
          flex items-center justify-center h-full px-6 my-auto
          transition-colors hover:bg-gray-50
          rounded-r-[13.089px]
        "
            >
                <img
                    src="/icon/search-icon.svg"
                    alt="Search"
                    width={33}
                    height={33}
                    className="h-6 w-6 lg:h-8 lg:w-8 object-contain"
                />
            </button> 
        </div>
    );
};

export default SearchField;
