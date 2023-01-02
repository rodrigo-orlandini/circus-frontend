import Image from "next/image";

import instagram from '../../assets/instagram.png';
import youtube from '../../assets/youtube.png';
import whatsapp from '../../assets/whatsapp.png';

import { whatsappData } from "../../constants/whatsapp";

const Contacts = () => {

    const handleInstagramClick = () => {
        window.open("https://www.instagram.com/fyecircus/", "_blank");
    }

    const handleYoutubeClick = () => {
        window.open("https://www.instagram.com/fyecircus/", "_blank");
    }

    const handleWhatsappClick = () => {
        window.open(
            "https://api.whatsapp.com/send?phone=" + whatsappData.phoneNumber,
            "_blank"
        );
    }

    return (
        <div className="flex items-center">
            <Image 
                alt="Instagram link" 
                src={instagram} 
                onClick={handleInstagramClick}
                className="mr-6 hover:cursor-pointer hover:scale-105 transition-all duration-300" 
            />

            <Image 
                alt="Youtube link" 
                src={youtube} 
                onClick={handleYoutubeClick} 
                className="mr-6 hover:cursor-pointer hover:scale-105 transition-all duration-300" 
            />

            <div 
                className="flex items-center hover:cursor-pointer hover:scale-105 transition-all duration-300" 
                onClick={handleWhatsappClick}
            >
                <Image 
                    alt="Whatsapp link" 
                    src={whatsapp} 
                />
                <p className="font-light ml-2">(19) 98856-0746</p>
            </div>
        </div>
    )
}

export default Contacts;