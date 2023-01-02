import Image from "next/image";

import { ClassNameProp } from "../../@types/class-name";

import search from '../../assets/search.png';

import Button from "../Button";

interface InputProps extends ClassNameProp {
    value: string;
    setValue: (value: string) => void;
}

const Input = ({ value, setValue, className="" }: InputProps) => {

    const handleSearchClick = () => {
        
    }

    return (
        <div className={`
            ${className}
            flex
        `}>
            <input 
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="
                    h-12 rounded-lg shadow-inset px-4 py-2 text-purple-800 font-light outline-none w-72 z-10
                "
            />

            <Button 
                hasIcon={true}
                iconURL={search}
                hasText={false}
                onClick={handleSearchClick}
                className="pr-4 pl-8 -ml-4"
            />
        </div>
    )
}

export default Input;