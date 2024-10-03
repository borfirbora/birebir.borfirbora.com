import React from "react";
import { Helmet } from "react-helmet";
import { Accordion, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Sss() {
	return (<>
		<Helmet>
			<title>Sıkça Sorulan Sorular - Bire Bir Eğitimler</title>
		</Helmet>
		<h1>Sıkça Sorulan Sorular</h1>
		<p>Aşağıda, <strong>Bire Bir Eğitim Platformu</strong> hakkında bana en çok sorulan sorular ve cevaplarını bulacaksınız. Daha fazla sorunuz varsa, <Link to="/iletisim">İletişim</Link> bölümünden benimle paylaşabilirsiniz.</p>
		<Accordion defaultActiveKey={0}>
			<Accordion.Item eventKey="s1">
				<Accordion.Header>Bire Bir Eğitim Platformu Nedir?</Accordion.Header>
				<Accordion.Body>
					<p><strong>Bire Bir Eğitim Platformu</strong>, başta <b>görmeyen</b> bireyler olmak üzere, çeşitli alanlarda eğitimler vermeyi amaçlayan bir girişimdir. Eğitim almak isteyen kişilerin hem istedikleri saatlerde eğitim almalarını sağlamak hem de kişiye özel müfredat imkanlarından yararlanmalarına olanak tanımak için, <b>Bora FIRLANGEÇ</b> tarafından geliştirilmiş bireysel bir projedir.</p>
				</Accordion.Body>
			</Accordion.Item>
			<Accordion.Item eventKey="s2">
				<Accordion.Header>Eğitimler Nasıl Yapılıyor?</Accordion.Header>
				<Accordion.Body>
					<p>Eğitimlerimiz: <a href="https://meet.jit.si" target="_blank" rel="noopener noreferrer">Jitsi Meet</a> platformu üzerinde gerçekleştiriliyor. Jitsi Meet platformu, hem açık kaynak kodlu bir proje hem de son derece erişilebilir bir tasarıma sahip. </p>
					<p>Süreç şu şekilde işliyor:</p>
					<ListGroup as="ul">
						<ListGroup.Item as="li"><Link to="/egitimler">Eğitimler</Link> kısmından, almak istediğiniz eğitimi seçip başvuru aşamalarını tamamlıyorsunuz.</ListGroup.Item>
						<ListGroup.Item as="li">Ardından açılan sayfadaki bilgileri kullanarak ödemenizi tamamlıyorsunuz.</ListGroup.Item>
						<ListGroup.Item as="li">Eğitiminiz onaylandıktan sonra tarafınıza, seçtiğiniz saatte katılmanız gereken toplantı linki iletiliyor ve bu link yardımıyla eğitiminize katılabiliyorsunuz.</ListGroup.Item>
					</ListGroup>
					<blockquote title="Önemli Not">
						Eğitim gününe kadar gerçekleştirilmeyen ödemeler, eğitimin onaylanmaması ile sonuçlanacaktır.
					</blockquote>
				</Accordion.Body>
			</Accordion.Item>
			<Accordion.Item eventKey="s3">
				<Accordion.Header><b>Seans Türü</b> Ne Anlama Geliyor?</Accordion.Header>
				<Accordion.Body>
					<p>Hangi eğitimi alıyor olursanız olun, sizlerden ortak bir soruyu cevaplamanızı istiyorum: <strong>Seans Türünüz</strong></p>
					<p>Bu sizin için, eğitime sürekli mi yoksa tek seferlik mi devam edeceğinizi bana bildirebileceğiniz anlamına geliyor. <b>Serî Eğitim</b> seçeneğini seçtiğinizde, sizin için bireysel bir müfredat oluşturmam gerektiğini anlıyorum. <b>Tek Seferlik Eğitim</b> seçeneği ise seçtiğiniz konuda, herhangi bir müfredat oluşturmadan, tek oturumdan oluşan bir eğitim gerçekleştireceğimiz niteliği taşıyor.</p>
					<p>Bu konuyu daha rahat anlatabilmek için bir örnek üzerinden gidelim istiyorum:</p>
					<p>Diyelim ki benden, <b>Python</b> konusunda eğitim almak istiyorsunuz. Eğitimin randevusunu oluştururken <b>Tek Seferlik Eğitim</b> seçeneğini seçerseniz, tek bir oturumda bana kendi belirlediğiniz konularda sorularınız olduğunu, herhangi bir müfredâta gerek duymadığınızı ve o konuda cevaplarınızı aldıktan sonra eğitimimizin tamamlanacağı sonucunu çıkarırım.</p>
					<p>Diyelim ki <b>NVDA</b> eğitimini <b>Serî Eğitim</b> seçeneğini seçerek oluşturdunuz. Eğitiminiz onaylandığında ben, adınıza bir klasör oluştururum ve size özel bir müfredat tasarlarım. İlk dersimizi işlediğimizde ve memnun kaldığınızda, bir sonraki dersi de <b>Serî Eğitim</b> olarak seçerseniz müfredâtınıza kaldığımız yerden devam ederiz. Eğer <b>NVDA</b> dersini <b>Tek Seferlik Eğitim</b> olarak seçerseniz, müfredatınızdan bağımsız olarak bir ders işleyeceğimiz anlamını çıkarırım.</p>
					<p><b>Seans Türünüz</b> seçeneği, eğitiminizi işte bu şekilde etkiler.</p>
				</Accordion.Body>
			</Accordion.Item>

		</Accordion>
	</>)
}