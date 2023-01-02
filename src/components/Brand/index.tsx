import Image from "next/image";

import logo from '../../assets/logo.png';

const Brand = () => {
    return (
        <div className="flex items-center">
            <Image src={logo} alt="Circus Logo" />
            <h4 className="text-xl ml-4">CIRCUS ®</h4>
        </div>
    )
}

export default Brand;