import React from "react";
import { ListGroup, Tab, Tabs } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export default function Anasayfa() {
    return (
        <>
            <Helmet>
                <title>Anasayfa - Bire Bir Eğitimler</title>
            </Helmet>
            <h1>Anasayfa</h1>
            <p><strong>Bire Bir Eğitim Paneli</strong>'ne hoş geldiniz!</p>
            <p>Öncelikle benden alacağınız bire bir eğitimlerin sizi geliştirmesini umuyorum. Yukarıdaki menüde yer alan bağlantıları kullanarak bire bir eğitimlerimi inceleyebilir, hakkımda bilgi edinebilir ya da benimle iletişime geçebilirsiniz.</p>
            <p>Aşağıda yer alan her bir sekmede, yukarıdaki menüde yer alan sayfalar hakkında detaylı incelemeler bulunmakta. <span role="alert">Eğer ilk kez bire bir eğitim alacaksanız, mutlaka bu sayfada yer alan sekmeleri incelemenizi tavsiye ederim.</span></p>
            <Tabs defaultActiveKey="0">
                <Tab title="Eğitimler" eventKey="egitim">
                    <section title="Eğitimler">
                        <p><Link to="/egitimler">Eğitimler</Link> bağlantısına tıkladığınızda, her bir eğitim ikinci seviye başlık kullanılarak listelenmiş olacak. İlgilendiğiniz eğitimin başlığına tıkladığınızda, ilgili başlık genişletilecek ve eğitim hakkında daha detaylı bilgiler edineceksiniz.</p>
                        <p>Eğitimden faydalanmaya karar verdiğinizde, <strong>Randevu Oluştur: XXX</strong> butonunu kullanarak randevu ekranına ulaşabilirsiniz.</p>
                        <p>Randevu ekranında sırasıyla aşağıdaki adımları kullanarak (ekran okuyucusu kullanıcıları) başarılı bir randevu oluşturma deneyimi yaşayabilirsiniz:</p>
                        <ListGroup as="ul" title="Randevu Oluşturma Adımları" numbered>
                            <ListGroup.Item as="li">Açılan iletişim kutusundaki çerçeveye <code>M</code> harfi ile odaklanılır;</ListGroup.Item>
                            <ListGroup.Item as="li">Bir kez <code>R</code> harfine basılarak <strong>12 sa</strong> seçim düğmesine ulaşılır;</ListGroup.Item>
                            <ListGroup.Item as="li"><code>Yukarı Ok</code> tuşuna bir kez basılır ve ilgili gün ve tarih duyulur (Örn: Cum 21);</ListGroup.Item>
                            <ListGroup.Item as="li">Eğer ilgilendiğiniz gün burada yazan gün değilse, <code>Shift+B</code> kısayol tuşları yardımıyla ayın ilgili günü bulunur ve etkinleştirilir. Ardından tekrar <code>R</code> harfi ile <strong>12 sa</strong> seçim düğmesine gidilir;</ListGroup.Item>
                            <ListGroup.Item as="li"><code>B</code> harfi yardımıyla, seçilen gün randevuya açık saatler arasında gezilebilir (önceki saat için <code>Shift</code> tuşu eklenmelidir). İlgilenilen saat etkinleştirilerek bir sonraki aşamaya geçilir;</ListGroup.Item>
                            <ListGroup.Item as="li">Sonrasında sayfanın başına ulaşmak için <code>Control+Home</code> tuşlarına basılır ve tekrar <code>M</code> harfi ile çerçeveye ulaşılır;</ListGroup.Item>
                            <ListGroup.Item as="li">Karşımıza çıkan formda yer alan sorular doğru şekilde cevaplanır ve sayfanın sonunda yer alan <strong>Onayla</strong> butonu yardımıyla randevu işlemi tamamlanır.</ListGroup.Item>
                        </ListGroup>
                        <p>Son olarak açılacak sayfada, eğitim detayları ile ilgili son bilgiler sizi karşılıyor olacak.</p>
                    </section>
                </Tab>
                <Tab title="Hakkımda" eventKey="hakkimda">
                    <section title="Hakkımda">
                        <p><Link to="/hakkimda">Hakkımda</Link> sayfası, sizleri <Link to="/egitimler">Eğitimler</Link> sayfasında yer alana benzer bir panelle karşılayacak. Bu panelde benimle ilgili çeşitli kategorilerdeki bilgileri bulacaksınız.</p>
                        <p>Dilediğiniz paneli genişleterek, söz konusu alandaki bilgilere ulaşabilirsiniz.</p>
                    </section>
                </Tab>
                <Tab eventKey="iletisim" title="İletişim">
<section title="İletişim">
<p><Link to="/iletisim">İletişim</Link> sayfasında, bana ait çeşitli iletişim adreslerini bulacaksınız. Ayrıca, bu sayfada, bana ulaştırmak üzere doldurabileceğiniz bir iletişim formu da sağlıyor olacağım.</p>
</section>
                </Tab>
            </Tabs>
        </>
    )
}