import {FC} from "react";

type ButtonProps = {
    text: string,
    onClick?: () => void,
    link?: string,
    downloadPath?: string,
    fileName?:string
};

const Button: FC<ButtonProps> = ({
                                                  text,
                                                  onClick,
                                                  downloadPath,
                                                  fileName
                                              }) => {
    const baseStyle =
        'px-10 py-3 bg-gradient-to-r from-[#8D74F2] to-[#7051EF] text-white font-roboto rounded-2xl hover:bg-gradient-to-r hover:from-[#9D84FF] hover:to-[#8061FF] transition-all duration-500 ease-in-out';

    if(downloadPath)  return (
        <a href={downloadPath} download={fileName}>
            <button
                type="button"
                className={baseStyle}
                onClick={onClick}
            >
                {text}
            </button>
        </a>
    );

    return (
        <button
            type="button"
            className={baseStyle}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default Button;