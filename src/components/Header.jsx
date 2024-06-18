import React from "react";
import { Link } from "react-router-dom";

function Header() {
return (
<>
<nav>
    <li>
        <Link to="/">Anasayfa</Link>
    </li>
    <li>
        <Link to="/egitimler">Eğitimler</Link>
    </li>
    <li>
        <Link to="hakkimda">Hakkımda</Link>
    </li>
    <li>
        <Link to="iletisim">İletişim</Link>
    </li>
</nav>
</>
)
}

export default Header;