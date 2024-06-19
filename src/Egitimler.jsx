import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import CalEmbed from "./components/CalEmbed";
import parse from "html-react-parser";
import { Accordion, Button, Modal } from "react-bootstrap";

export default function Egitimler() {
    const [seanslar, setSeanslar] = useState([]);
    const [show, setShow] = useState(null);  // Her modal için farklı bir show state

    const handleShow = (index) => setShow(index);
    const handleClose = () => setShow(null);

    useEffect(() => {
        fetch("/egitimler.json").then(response => {
            response.json().then(value => {
                setSeanslar(value);
            });
        });
    }, []);

    return (
        <>
            <Helmet>
                <title>Eğitimler - Bire Bir Eğitimler</title>
            </Helmet>
            <h1>Eğitimler</h1>
            <p>Eğitim sayfasına hoş geldiniz!</p>
            <p>Aşağıda, bire bir olarak verdiğim eğitimler hakkında detaylı bilgiler bulacaksınız. Dilediğiniz eğitimin altında yer alan <strong>Randevu Oluştur</strong> düğmesini kullanarak, kendi programınıza en uygun saati rezerve edebilirsiniz.</p>
            <Accordion defaultActiveKey="0">
                {seanslar.map((egitim, index) => (
                    <Accordion.Item eventKey={egitim.url} key={index}>
                        <Accordion.Header>{egitim.ad}</Accordion.Header>
                        <Accordion.Body>
                            <section title={egitim.ad}>
                                {parse(egitim.aciklama)}
                                <Button variant="primary" onClick={() => handleShow(index)}>Randevu Oluştur: {egitim.ad}</Button>
                                <Modal show={show === index} onHide={handleClose} fullscreen>
                                    <Modal.Header closeButton closeLabel="Kapat">
                                        <Modal.Title>Randevu Oluştur: {egitim.ad}</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <p autoFocus>aşağıdaki takvimden randevunuzu oluşturun.</p>
                                        <CalEmbed CalURL={egitim.url} />
                                    </Modal.Body>
                                </Modal>
                            </section>
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>
        </>
    );
}
