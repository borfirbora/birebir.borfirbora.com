import React, { useState } from "react";
import { useFormspark } from "@formspark/use-formspark";
import { Button, Form } from "react-bootstrap";

export default function ContactForm() {
  const [submit, submiting] = useFormspark({ formId: "SoYq8igDX" })
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <>
      <Form onSubmit={async (e) => {
        e.preventDefault()
        await submit(formState)
        alert(`Sayın ${formState.name}!\nMesajınız başarılı bir şekilte iletildi. Benimle iletişime geçtiğiniz için teşekkürler.`)
      }}>
        <Form.Group controlId="eposta">
          <Form.Label>E-posta Adresiniz</Form.Label>
          <Form.Control type="email" placeholder="Geçerli bir e-posta adresi girin" name="email" required value={formState.email} onChange={handleChange} />
          <Form.Text className="text-muted">
            E-posta adresinizi asla üçüncü kişilerle paylaşmayacağım.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="ad">
          <Form.Label>Adınız</Form.Label>
          <Form.Control type="text" placeholder="adınız ve soyadınız" name="name" required value={formState.name} onChange={handleChange} />
          <Form.Text className="text-muted">
            Ad ve soyadınızı tam olarak girin.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="mesaj">
          <Form.Label>Mesajınız</Form.Label>
          <Form.Control as="textarea" placeholder="Mesajınızı yazın" name="message" required value={formState.message} onChange={handleChange} />
        </Form.Group>
        <div class="g-recaptcha" data-sitekey="6Lf9ov8pAAAAAM5sWXmC5gpN072qvKJpzwd_8q1k"></div>
        <Button variant="primary" type="submit">
          Gönder
        </Button>
      </Form>
    </>
  )
}