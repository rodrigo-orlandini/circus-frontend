import Container from "../Container";
import Contacts from "../Contacts";

import Brand from "../Brand";

const Header = () => {
    return (
        <header className="py-4">
            <Container className="flex justify-between">
                <Brand />

                <Contacts />
            </Container>
        </header>
    )
}

export default Header;