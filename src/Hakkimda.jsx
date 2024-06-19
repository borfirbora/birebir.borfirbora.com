import React from "react";
import { Accordion, Table } from "react-bootstrap";
import { Helmet } from "react-helmet";

export default function Hakkimda() {
    return (
        <>
            <Helmet>
                <title>Hakkımda - Bire Bir Eğitimler</title>
            </Helmet>
            <h1>Hakkımda</h1>
            <p>Merhaba. Ben <mark>Bora FIRLANGEÇ</mark>.<br />
                Aşağıda, benimle ilgili çeşitli konulardaki tecrübelerimi içeren kartlar yer almaktadır. Dilediğiniz kartı etkinleştirerek, söz konusu alana ilişkin deneyim ve tecrübelerim hakkında bilgi alabilirsiniz:</p>
            <Accordion>
                <Accordion.Item eventKey="egitim-bilgilerim">
                    <Accordion.Header>Eğitim Bilgilerim</Accordion.Header>
                    <Accordion.Body>
                        <section title="Eğitim Bilgilerim">
                            <p>İlk öğrenimimi <mark>Aşık Veysel Görme Engelliler İlk ve Ortaokulu</mark>'nda, lise eğitimimi ise <mark>Karabağlar Cumhuriyet Anadolu Lisesi</mark>'nde tamamladım.</p>
                            <p>Ortaokul yıllarımda bilgisayara karşı çok büyük bir ilgim olduğunu fark ettim. Bunun üzerine kendimi, bilgisayar kullanımı konusunda geliştirmeye adadım.</p>
                            <p>Lise yıllarımda ilgim, <b>kodlama</b> konusunu da kapsayacak şekilde genişledi. Bunun üzerine çeşitli diller öğrenmeyi denedim. Bu konudaki detayları diğer başlıklarda bulacaksınız.</p>
                            <p>Üniversite olarak da <mark>Yönetim Bilişim Sistemleri</mark> bölümünü açıktan okuyorum.</p>
                        </section>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="ilgi-alanlarim">
                    <Accordion.Header>İlgi Alanlarım</Accordion.Header>
                    <Accordion.Body>
                        <section title="İlgi Alanlarım">
                            <p>Müzik ile uğraşmayı çok seviyorum. Amatör bir ev stüdyom var ve kişisel çalışmalarımı burada yapıyorum. Yaptığım çalışmalarımdan paylaşılabilecek seviyede bulduklarımı <a href="https://youtube.com/borafirlangec" target="_blank" rel="noopener noreferrer">Bora FIRLANGEÇ</a> isimli Youtube kanalımda paylaşıyorum.</p>
                            <p>Kurgu yazmak da sevdiğim şeyler arasında. Çeşitli öykülerimi ise <a href="https://www.wattpad.com/user/borfirbora" target="_blank" rel="noopener noreferrer">Wattpad</a> platformunda yayımlıyorum.</p>
                            <p>Öğrendiğim teknolojik yenilikleri duyurmayı, kullanımlarını keşfettiğim yazılım ve Web sitelerini tanıtmayı da önemli buluyorum. Özellikle erişilebilir olmayan platformlardan nasıl yararlanılabileceğini anlatmayı çok seviyorum. Tüm bu içeriklerimi de <a href="https://youtube.com/babaprogramlar" target="_blank" rel="noopener noreferrer">Baba Programlar</a> Youtube kanalımda takipçilerimle paylaşıyorum.</p>
                            <p>Duygularımı, düşüncelerimi ve genel konulara dair bakış açılarımı da yazmayı ara sıra aklıma getiriyiroum. Yazdıklarımdan tamamlayabildiklerimi ise <a href="https://borfirbora.com" target="_blank" rel="noopener noreferrer">Borfirbora.com</a> adresindeki kişisel sitemde yayımlıyorum.</p>
                        </section>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="bildigim-diller">
                    <Accordion.Header>Bildiğim Diller</Accordion.Header>
                    <Accordion.Body>
                        <section title="Bildiğim Diller">
                            <Table responsive>
                                <tr>
                                    <th>Dil</th>
                                    <th>Açıklama</th>
                                </tr>
                                <tr>
                                    <td>PHP</td>
                                    <td>Lise yıllarında başladığım bu dil ile özellikle okuduğum lisede çok fazla işimi kolaylaştırdım. OOP (Nesne Yönelimli Programlama) yaklışımını kullanabilecek kadar bildiğim bu dil ile şu aralar çok fazla aramız yok diyebilirim.</td>
                                </tr>
                                <tr>
                                    <td>C# (C-Sharp)</td>
                                    <td>Liseden mezun olduktan sonra ilgilendim bu dille. Özellikle WFA (Windows Form Uygulamaları) tarzında çok fazla denemelerim oldu. O dönemki bilgisayarımın hantallığı ve Visual Studio yazılımının beni delirten çalışma şekli yüzünden bu dilden de uzaklaştım. Otursam OOP teknikleriyle bir uygulama geliştiririm ama bu dil artık beni çekmiyor.</td>
                                </tr>
                                <tr>
                                    <td>Javascript</td>
                                    <td>HTML ve CSS'ten sonra tabii ki bilinmesi gereken ilk dil Javascript. Bu dil ile ilgili tecrübemi şöyle anlatayım: Şu an hakkımdaki bilgileri incelediğiniz bu platformu, React kullanarak bizzat kendim geliştirdim. React'ın ne olduğunu araştırırsanız, ne demek istediğimi çok iyi anlayacaksınız.</td>
                                </tr>
                                <tr>
                                    <td>Python</td>
                                    <td>Hayatımdaki en büyük önyargıyı gösterdiğim, daha sonrada kaybettiğim aylar, hatta yıllar için pişman olduğum bir dil Python. Python önce üşengeçliğimden yapmak istemediğim işleri yaptırdığım bir dil oldu benim için. Ardından her işimi yaptırdığım bir dile dönüştü. En basitten en karmaşığa bütün işlerimi yazdığım bir Python betiği ile halledebildiğimi çıkardıysanız, bu dili ne kadar sevdiğimi ve ona ne kadar hakim olduğumu anlamış olmanız işten bile değil.</td>
                                </tr>
                            </Table>
                        </section>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    )
}