import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

export default function OturumTamamla() {
    const months = ["", "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"]
    const prices = {
        "nvda-seansi": "300,00₺",
        "reaper-seansi": "300,00₺"
    }
    const location = useLocation()
    const parems = new URLSearchParams(location.search)
    const startTime = dateFormat(parems.get("startTime"))
    return (
        <>
            <Helmet>
                <title>{parems.get("title")} oturumu oluşturulmak üzere!</title>
            </Helmet>
            <h1><b>{parems.get("title")}</b> oturumu oluşturulmak üzere!</h1>
            <p>
                Sayın katılımcı;<br />
                <strong>{parems.get("title")}</strong> isimli oturumunuz, <strong>{startTime.day} {months[startTime.month]} {startTime.year}</strong> tarihi ve <strong>{startTime.hours}:00</strong> saatinde başlayacak şekilde planlanmak üzere..
            </p>
            <p>
                Artık tek yapmanız gereken, Aşağıdaki ödeme platformlarından herhangi birisine eğitim ücretini yatırmak. Ardından <strong>Onay E-postası</strong> tarafınıza <mark>({parems.get("email")})</mark> iletilecek ve oturum saatiniz tamamen sizin olacak.
            </p>
            <h2>Ödeme Yöntemleri</h2>
            <table>
                <thead>
                    <tr>
                        <th colSpan="2"><strong>{parems.get("title")}</strong> oturumu için belirlenen ücret: <strong>{prices[parems.get("eventTypeSlug")]}</strong></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>IBAN</td>
                        <td>Bora FIRLANGEÇ<br />Akbank T.A.Ş<br /><button onClick={e => navigator.clipboard.writeText(e.target.innerHTML)} title="Kopyalamak için tıklayın">TR780004600746888000208010</button></td>
                    </tr>
                    <tr>
                        <td>Papara</td>
                        <td><button onClick={e => navigator.clipboard.writeText(e.target.innerHTML)} title="Kopyalamak için tıklayın">1466029229</button></td>
                    </tr>
                    <tr>
                        <td>İninal</td>
                        <td><button onClick={e => navigator.clipboard.writeText(e.target.innerHTML)} title="Kopyalamak için tıklayın">1884305633771</button></td>
                    </tr>
                    <tr>
                        <td>Kredi/Banka Kartı</td>
                        <td>&nbsp;</td>
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