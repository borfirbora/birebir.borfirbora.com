import React from "react";
import { ListGroup } from "react-bootstrap";
import { Helmet } from "react-helmet";
import ContactForm from "./components/ContactForm";

export default function Iletisim() {
    return (
        <>
            <Helmet>
                <title>İletişim - Bire Bir Eğitimler</title>
            </Helmet>
            <h1>İletişim</h1>
            <p>Aşağıda yer alan iletişim kanallarını kullanarak, sormak istediklerinizi benimle paylaşabilirsiniz. Görüş, öneri ve isteklerinizi de bekliyor olacağımı da bilmenizi isterim.</p>
            <ListGroup as="ul" title="Sosyal Medya Hesaplarım">
                <ListGroup.Item as="li"><a href="https://www.facebook.com/bora.firlangec" target="_blank" rel="noopener noreferrer">Facebook: Bora FIRLANGEÇ</a></ListGroup.Item>
                <ListGroup.Item as="li"><a href="https://www.instagram.com/borfirbora/" target="_blank" rel="noopener noreferrer">İnstagram: @borfirbora</a></ListGroup.Item>
                <ListGroup.Item as="li"><a href="https://x.com/firbora" target="_blank" rel="noopener noreferrer">X: @firbora</a></ListGroup.Item>
                <ListGroup.Item as="li"><a href="https://youtube.com/babaprogramlar" target="_blank" rel="noopener noreferrer">Youtube: Baba Programlar</a></ListGroup.Item>
                <ListGroup.Item as="li"><a href="https://youtube.com/borafirlangec" target="_blank" rel="noopener noreferrer">Youtube: Bora FIRLANGEÇ</a></ListGroup.Item>
                <ListGroup.Item as="li"><a href="https://www.linkedin.com/in/borfirbora/" target="_blank" rel="noopener noreferrer">Linkedin: Bora FIRLANGEÇ</a></ListGroup.Item>
                <ListGroup.Item as="li"><a href="https://t.me/borfirbora" target="_blank" rel="noopener noreferrer">Telegram: @borfirbora</a></ListGroup.Item>
            </ListGroup>
            <hr />
            <ListGroup as="ul" title="E-posta adreslerim">
                <ListGroup.Item as="li"><a href="mailto:borafirlangec@gmail.com">borafirlangec@gmail.com</a></ListGroup.Item>
                <ListGroup.Item as="li"><a href="mailto:programlarbaba@gmail.com">programlarbaba@gmail.com</a></ListGroup.Item>
            </ListGroup>
            <hr />
            <section title="İletişim Formu">
                <ContactForm />
            </section>
        </>
    )
}