import React from "react";

function Footer() {
return (
    <footer style={{position: "fixed", bottom: 0, width: "100%"}}>
        <p>&copy; Bire Bir Eğitimler {new Date().getFullYear()}. Tüm hakları saklıdır.</p>
    </footer>
)
}

export default Footer;