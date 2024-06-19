import React from "react";
import { Accordion, ListGroup, Table } from "react-bootstrap";
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
                <Accordion.Item eventKey="kullandigim-yazilimlar">
                    <Accordion.Header>Kullandığım Yazılımlar</Accordion.Header>
                    <Accordion.Body>
                        <section title="Kullandığım Yazılımlar">
                            <Table responsive>
                                <tr>
                                    <th>Yazılım</th>
                                    <th>Açıklama</th>
                                </tr>
                                <tr>
                                    <td>NVDA (NonVisual Desktop Access)</td>
                                    <td>2020 yılının sonundan itibaren kullandığım ekran okuyucusu oldu NVDA. JAWS (Job Access With Speech) yazılımı hakkındaki kötü düşüncelerimin bir sonucu olarak NVDA, uzman olduğum bir yazılım oldu artık. NVDA için yazdığım Temel Youtube İndirici ve BFDown gibi eklentiler de bu ekran okuyucusu hakkındaki bilgilerimi tasdik eder nitelikte</td>
                                </tr>
                                <tr>
                                    <td>JAWS (Job Access With Speech)</td>
                                    <td>2008 yılından beri kullandığım ana ekran okuyucumdu kendisi. Kendisi için de çok Script yazmışlığım var fakat son yıllarda beni kendisinden uzaklaştırmayı başarmış bir yazılım olarak, bilgi dağarcığımda bulunmaya devam ediyor. Sorulan soruları cevaplayacak kadar iyi biliyorum bu yazılımı fakat artık kurulum dosyasının bile bilgisayarımda bulunmadığı bir hâle düştü gözümde.</td>
                                </tr>
                                <tr>
                                    <td>Reaper</td>
                                    <td>Amatör ev stüdyom olduğundan bahsetmiştim yukarıda. Bunu sağlayan yazılım işte bu. Ayrıca <a href="https://borfirbora.com/reaper" target="_blank" rel="noopener noreferrer">Reaper Eğitimi</a> adında bir eğitim de hazırlamıştım bu yazılım için. Bire bir olarak sizlere destek olmak çok hoşuma gidecek, buna inanıyorum.</td>
                                </tr>
                                <tr>
                                    <td>Audacity</td>
                                    <td>Reaper'dan sonra benim için en güzel ses düzenleme yazılımıdır kendisi. Audacity varken, Sound Forge gibi muadilleri bir kenarda varsın, dursun.</td>
                                </tr>
                                <tr>
                                    <td>Google ürünleri (Docs, Sheets, Slides, Forms, Classroom VS.)</td>
                                    <td>Günlük yaşantıma tam anlamıyla yerleştirdiğim Google ürünlerini kesinlikle herkese öneriyorum. Bilgi birikimimi sizlere aktarmak için de sabırsızlanıyorum.</td>
                                </tr>
                                <tr>
                                    <td>VSCode (Visual Studio Code)</td>
                                    <td>Markdown formatında yazdığım kısa metinlerden geliştirdiğim büyük projelere varıncaya kadarki bütün işlerimde kullandığım, erişilebilirlikte üzerine bir başkasını tanımadığım bu inanılmaz yazılımı da oldukça verimli kullandığımı söyleyebilirim.</td>
                                </tr>
                            </Table>
                            <p>Daha niceleri var elbet. İlk anda aklıma gelenler bunlar. Kullanmadıklarımı da sizin sayenizde kullanıp size tanıtabileceğimden eminim.</p>
                        </section>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="aldigim-egitimler">
                    <Accordion.Header>Aldığım Eğitimler</Accordion.Header>
                    <Accordion.Body>
                        <section title="Aldığım Eğitimler">
                            <p>Aşağıda gerek tamamladığım gerekse hâlâ devam eden eğitimlerimi bulacaksınız. Bu eğitimlerin tamamını, kişisel kaynak olarak kullanmayı tercih ediyorum. Aradığımı hızlıca bulabildiğim, bana her zaman anlatmaya hazır eğitmenlerle dolu bir kaynak olarak görüyorum bu eğitimleri. O yüzden bitirmeyi değil, yararlanmayı önemli buluyorum.</p>
                            <ListGroup as="ul">
                                <ListGroup.Item as="li"><a href="https://www.udemy.com/share/10auG03@k5zaopiztVwl9CPkb1TDo-omFwiZxf8vb3zLFjXOswpSDWb7cynsTOWPoMj0XFzG/" target="_blank" rel="noopener noreferrer">Python Django 5 ile Sıfırdan İleri Seviye (Emrah YÜKSEL)</a></ListGroup.Item>
<ListGroup.Item as="li"><a href="https://www.udemy.com/share/101Yo03@reDTdVY3PuP-HVAEtyg8jAXDP6K-VQASrX1y5mWxb9q0j3cHDnny5QPN51yM-fZM/" target="_blank" rel="noopener noreferrer">Komple Uygulamalı Web Geliştirme Eğitimi (Sadık TURAN)</a></ListGroup.Item>
<ListGroup.Item as="li"><a href="https://www.udemy.com/share/106UoC3@e2ZYnkKczy7Ddi39MtiQdCzmLsH7YyeNVSFdDkJ6hZjU_VFmF1oykGs5sHwfnGUP/" target="_blank" rel="noopener noreferrer">Uygulamalı - Sıfırdan PHP ve MySQL Eğitimi A-Z (CT Eğitim)</a></ListGroup.Item>
<ListGroup.Item as="li"><a href="https://www.udemy.com/share/101Xu83@-WCY6T9vXZ9rr3QuSpIglGs2uYy1TzV2Z_1labzFaE7vw0m1t0bXvieqQahgKRpV/" target="_blank" rel="noopener noreferrer">Python ile Sıfırdan İleri Seviye Programlama (Sadık TURAN)</a></ListGroup.Item>
<ListGroup.Item as="li"><a href="https://www.udemy.com/share/101vq23@G56tQhyDSqmoPr8_npPomnz-UNMf61L6DysfTMtC4GjnpslJSO8X2x-JSTbXftV8/" target="_blank" rel="noopener noreferrer">React Native ile Sıfırdan Mobil Uygulama Geliştirme (Hasret ÖZCAN)</a></ListGroup.Item>
<ListGroup.Item as="li"><a href="https://www.udemy.com/share/106Lsy3@mfX5U-O7pUy5vNbduhBbYu5NcVslIkz0L6-UOu5Lgkv-4k82sF1lVzzq82Gom1zr/" target="_blank" rel="noopener noreferrer">Uçtan Uca Nodejs (Yasin DALKILIÇ)</a></ListGroup.Item>
                            </ListGroup>
                            <p>Aldığım diğer eğitimleri de gerek tamamladıkça gerekse paylaşmaya değer buldukça yukarıdaki listeye ekleyeceğim, incelersiniz artık.</p>
                        </section>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="verdigim-egitimler">
                    <Accordion.Header>Verdiğim Eğitimler</Accordion.Header>
                    <Accordion.Body>
                        <section title="Verdiğim Eğitimler">
                            <p>Sadece eğitim almak olur mu? Tabii ki belli topluluklara eğitimler de verdim. Aşağıda bunların bir listesini bulacaksınız:</p>
                            <ListGroup as="ul">
                                <ListGroup.Item as="li">Temel HTML Eğitimi - 2016 - 30 saat - 23 öğrenci</ListGroup.Item>
                                <ListGroup.Item as="li">Temel BGT (Blastbay Game Toolkit) Eğitimi - 2017 - 10 saat - 3 öğrenci</ListGroup.Item>
                                <ListGroup.Item as="li">Reaper Eğitimi (Online) - 2018 - 20+ saat - 100+ öğrenci</ListGroup.Item>
                                <ListGroup.Item as="li">Başlangıç Seviyesi Python Eğitimi (Online | Google Classroom) - 2023 - 10 saat - 6 öğrenci</ListGroup.Item>
                                <ListGroup as="li">Görmeyen Çocuklar ve Ebeveynleri İçin Dijital Okuryazarlık Eğitimi (Online) - 2024 - 12 saat - 8 öğrenci</ListGroup>
                            </ListGroup>
                        </section>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    )
}