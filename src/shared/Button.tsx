import {FC} from "react";
import {ButtonProps} from "../types.ts";

const Button: FC<ButtonProps> = ({
                                                  text,
                                                  onClick,
                                                  downloadPath,
                                                  fileName,
                                                  isPrimary
                                              }) => {
    const baseStyle =
        'w-full sm:w-auto px-6 sm:px-8 md:px-10 py-2 sm:py-3 text-sm sm:text-base md:text-lg font-roboto rounded-xl transition-all duration-300 ease-in-out shadow-md hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] active:shadow-inner focus:outline-none focus:ring-2 focus:ring-[#7051EF] focus:ring-opacity-50 transform';

    const primaryStyle = 'text-white bg-gradient-to-r from-[#8D74F2] to-[#7051EF] hover:bg-gradient-to-r hover:from-[#7051EF] hover:to-[#6446e0]';
    const secondaryStyle ='bg-white text-[#7051EF] hover:bg-[#7051EF] hover:text-white hover:shadow-lg';

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
