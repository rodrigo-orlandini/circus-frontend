import Brand from "../Brand";
import Contacts from "../Contacts";
import Container from "../Container";

const Footer = () => {
    return (
        <footer className="bg-purple-400 shadow-purple py-2">
            <Container>
                <div className="flex justify-between items-center bg-purple-400">
                    <Brand />

                    <h5 className="font-light ">
                        Entre em contato pra tirar sua letra do papel e fazer o circo pegar fogo! 🔥
                    </h5>

                    <Contacts />
                </div>
            </Container>
        </footer>
    )
}

export default Footer;