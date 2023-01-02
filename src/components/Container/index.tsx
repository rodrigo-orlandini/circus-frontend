import { ReactNode } from 'react';
import { ClassNameProp } from "../../@types/class-name";

interface ContainerProps extends ClassNameProp {
    children: ReactNode;
}

const Container = ({ children, className }: ContainerProps) => {
    return (
        <div className={`
            ${className}
            max-w-5xl mx-auto
            max-[1200px]:max-w-[90%] 
        `}>
            { children }
        </div>
    )
}

export default Container;