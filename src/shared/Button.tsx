import {FC} from "react";
import {ButtonProps} from "../types.ts";

const Button: FC<ButtonProps> = ({
                                                  text,
                                                  onClick,
                                                  downloadPath,
                                                  fileName,
                                                  isPrimary,
                                                  isSmall = false
                                              }) => {
    const baseStyle = isSmall
        ? 'w-full sm:w-auto px-3 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-base font-medium tracking-wide rounded-lg transition-all duration-300 ease-in-out shadow-sm hover:scale-[1.02] hover:shadow-md active:scale-[0.98] active:shadow-inner focus:outline-none focus:ring-1 focus:ring-[#7051EF] focus:ring-opacity-50 transform'
        : 'w-full sm:w-auto px-7 sm:px-9 md:px-12 py-3 sm:py-4 text-base sm:text-lg md:text-xl font-medium tracking-wide rounded-xl transition-all duration-300 ease-in-out shadow-md hover:scale-[1.03] hover:shadow-lg active:scale-[0.98] active:shadow-inner focus:outline-none focus:ring-2 focus:ring-[#7051EF] focus:ring-opacity-60 transform';

    const primaryStyle = 'text-white bg-gradient-to-r from-[#8D74F2] to-[#7051EF] hover:bg-gradient-to-r hover:from-[#7051EF] hover:to-[#6446e0] border border-transparent';
    const secondaryStyle ='bg-white text-[#7051EF] hover:bg-gray-50 hover:text-[#6446e0] hover:shadow-lg border border-[#7051EF]/20 hover:border-[#7051EF]/40';

    if(downloadPath)  return (
        <a href={downloadPath} download={fileName}>
            <button
                type="button"
                className={(isPrimary ? primaryStyle : secondaryStyle) + ' ' + baseStyle}
                onClick={onClick}
            >
                {text}
            </button>
        </a>
    );

    return (
        <button
            type="button"
            className={(isPrimary ? primaryStyle : secondaryStyle) + ' ' + baseStyle}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default Button;
