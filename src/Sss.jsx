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
			<Accordion.Item eventKey="s4">
				<Accordion.Header>Eğitim Almak İçin Hangi Aşamalardan Geçmeliyim?</Accordion.Header>
				<Accordion.Body>
					<p>Öncelikle, Yukarıdaki menüde yer alan <b>Eğitimler</b> bağlantısından kendinize uygun bir eğitim seçerek başlamalısınız. Eğitimi genişleterek detaylı bilgileri aldıktan sonra, <strong>Randevu Oluştur</strong> butonu yardımıyla müsait zaman takvimine ulaşabilirsiniz.</p>
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
					<p>Gerçekten siz olduğunuzu kanıtlamanız için, önceki adımda verdiğiniz e-posta adresine doğrulama e-postası gönderilecek ve sizden, gönderilen altı haneli kodu girmeniz istenecektir.</p>
					<p>İşlemin başarılı bir şekilde tamamlanmasının ardından, sistem sizi onay sayfasına yönlendirecek ve bu sayfada ilgili ödeme bilgileri yer alıyor olacak.</p>
					<p>Ödemenizin onaylanmasının ardından randevunuz kabul edilecek ve ilgili saatte eğitiminizi alabilir durumda olacaksınız.</p>
				</Accordion.Body>
			</Accordion.Item>
			<Accordion.Item eventKey="s5">
				<Accordion.Header>Eğitimim Tamamlandı. Şimdi Ne Olacak?</Accordion.Header>
				<Accordion.Body>
					<p>Eğitiminiz tamamlandığında sizlere bir geribildirim formu iletilecek. Buradan, eğitiminizi değerlendirebilir ve görüşlerinizi benimle paylaşabilirsiniz. Eğer seri eğitim aldıysanız, bir sonraki eğitim tarihinizi belirleyebilirsiniz.</p>
				</Accordion.Body>
			</Accordion.Item>
		</Accordion>
	</>)
}