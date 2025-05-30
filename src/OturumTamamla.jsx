import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

export default function OturumTamamla() {
    const months = ["", "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"]
    const prices = {
        "nvda-seansi": "850,00₺",
        "reaper-seansi": "850,00₺",
        "uygulama-seansi": "850,00₺",
        "web.seansi": "850,00₺",
        "programlama-seansi": "850,00₺"
    }
    const location = useLocation()
    const parems = new URLSearchParams(location.search)
    const startTime = dateFormat(parems.get("startTime"))
    const title = parems.get("title");
    const name = title.match(/ve\s+(.*?)\s+arasındaki/)[1]
    const rescheduleUid = parems.get("rescheduleUid")
    return (
        <>
            <Helmet>
                <title>{parems.get("title")} oturumu {rescheduleUid ? "Yeniden Planlanmak" : "Oluşturulmak"} üzere!</title>
            </Helmet>
            <h1><b>{parems.get("title")}</b> oturumu {rescheduleUid ? "Yeniden Planlanmak" : "Oluşturulmak"} üzere!</h1>
            <p>
                Sayın <span>{name}</span>;<br />
                <strong>{parems.get("title")}</strong> isimli oturumunuz, <strong>{startTime.day} {months[startTime.month]} {startTime.year}</strong> tarihi ve <strong>{startTime.hours}:00</strong> saatinde başlayacak şekilde {rescheduleUid ? "Yeniden Planlanmak" : "Oluşturulmak"} üzere..
            </p>
            <p>
                Artık tek yapmanız gereken, {rescheduleUid ? "eğer yapmadıysanız," : ""} Aşağıdaki ödeme platformlarından herhangi birisine eğitim ücretini yatırmak. Ardından <strong>Onay E-postası</strong> tarafınıza <mark>({parems.get("email")})</mark> iletilecek ve oturum saatiniz tamamen sizin olacak.
            </p>
            <h2>Ödeme Yöntemleri</h2>
            
            <table>
                <thead>
                    <tr>
                        <th colSpan="2" role="alert"><strong>{parems.get("title")}</strong> oturumu için belirlenen ücret: <strong>{prices[parems.get("eventTypeSlug")]}</strong></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Kredi/Banka Kartı</td>
                        <td><a href="https://shopier.com/33843164" target="_blank" rel="noopener noreferrer">Kredi/Banka Kartıyla Almak İçin Tıklayın!</a></td>
                    </tr>
                    <tr>
                        <td>IBAN</td>
                        <td>Bora FIRLANGEÇ<br /><button onClick={e => { navigator.clipboard.writeText(e.target.innerHTML); alert("IBAN'ımı panonuza kopyaladım.\nÖdemenizi yaparken açıklama kısmına e-posta adresinizi yazmayı unutmayın.") }} title="Kopyalamak için tıklayın">TR710082900009491466029229</button></td>
                    </tr>
                    <tr>
                        <td>Papara</td>
                        <td><button onClick={e => { navigator.clipboard.writeText(e.target.innerHTML); alert("Papara numaramı panonuza kopyaladım.\nÖdemenizi yaparken açıklama kısmına e-posta adresinizi yazmayı unutmayın.") }} title="Kopyalamak için tıklayın">1466029229</button></td>
                    </tr>
                    <tr>
                        <td>İninal</td>
                        <td><button onClick={e => { navigator.clipboard.writeText(e.target.innerHTML); alert("İninal Numaramı panonuza kopyaladım.\nÖdemenizi yaparken açıklama kısmına e-posta adresinizi yazmayı unutmayın.") }} title="Kopyalamak için tıklayın">1884305633771</button></td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

function dateFormat(date) {
    const d = new Date(date)
    return {
        "year": d.getFullYear(),
        "month": d.getMonth() + 1,
        "day": d.getDate(),
        "hours": d.getHours(),
        "minutes": d.getMinutes(),
        "seconds": d.getSeconds(),
        "Dstring": d.toISOString()
    }
}