import {FC} from "react";

type ButtonProps = {
    text: string,
    onClick?: () => void,
    link?: string,
    downloadPath?: string,
    fileName?:string,
    isPrimary:boolean
};

const Button: FC<ButtonProps> = ({
                                                  text,
                                                  onClick,
                                                  downloadPath,
                                                  fileName,
                                                  isPrimary
                                              }) => {
    const baseStyle =
        'px-10 py-3 font-roboto rounded-xl transition-all duration-500 ease-in-out drop-shadow-xl hover:scale-105 hover:shadow-2xl transform transition-transform';

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