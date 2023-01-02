import Image, { StaticImageData } from "next/image";

import { ClassNameProp } from "../../@types/class-name";

import fire from '../../assets/fire.png';

interface ButtonProps extends ClassNameProp {
    onClick: () => void;
    type?: "primary" | "clear";
    hasText?: boolean;
    text?: string;
    hasIcon?: boolean;
    iconURL?: StaticImageData;
}

const Button = ({ 
    hasText=true, text="Button", onClick, type="primary", className="", hasIcon=false, iconURL=fire
}: ButtonProps) => {
    return (
        <div onClick={onClick} className={`
            ${className}
            ${type === "primary" ? "bg-purple-400" : "bg-red-500"}
            flex items-center h-12 px-4 rounded-lg
            hover:cursor-pointer transition-all duration-300
        `}>
            { hasIcon && (
                <Image alt="Button Icon" src={iconURL} className="hover:scale-110 transition-all duration-300" />
            )}

            { hasText && (
                <span>{text}</span>
            )}
        </div>
    );
}

export default Button;