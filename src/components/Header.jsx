import React from "react";
import { ListGroup } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

function Header() {
    const location = useLocation();

    return (
        <>
            <nav style={{position: "fixed", top: 0, width: "100%"}}>
                <ListGroup horizontal>
                    <ListGroup.Item as="li">
                        <Link to="/" aria-current={location.pathname === "/" ? "page" : undefined}>Anasayfa</Link>
                </ListGroup.Item>
                <ListGroup.Item as="li">
                    <Link to="/egitimler" aria-current={location.pathname === "/egitimler" ? "page" : undefined}>Eğitimler</Link>
                </ListGroup.Item>
                <ListGroup.Item as="li">
                    <Link to="/hakkimda" aria-current={location.pathname === "/hakkimda" ? "page" : undefined}>Hakkımda</Link>
                </ListGroup.Item>
                <ListGroup.Item as="li">
                    <Link to="/iletisim" aria-current={location.pathname === "/iletisim" ? "page" : undefined}>İletişim</Link>
                </ListGroup.Item>
            </ListGroup>
        </nav >
        </>
    );
}

export default Header;
