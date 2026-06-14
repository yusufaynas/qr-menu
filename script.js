// Menü Verileri - Her ürün birden fazla resim içerebilir
const menuData = [
    // KAHVALTILI ÜRÜNLER
    {
        id: 56,
        name: "Kaşarlı Açma",
        category: "acmalar",
        price: "30 TL",
        description: "kaşar peynirli açma",
        images: ["./açmalar/kaşarlı.açma.jpg"]
    },
    {
        id: 57,
        name: "Peynirli Açma",
        category: "acmalar",
        price: "30 TL",
        description: "Taze peynirli açma",
        images: ["./açmalar/peynirl,.açma.jpg"]
    },
    {
        id: 58,
        name: "Zeytinli Açma",
        category: "acmalar",
        price: "30 TL",
        description: "zeytinli açma",
        images: ["./açmalar/zeytinli.açma.jpg"]
    },
    {
        id: 59,
        name: "Çikolatalı Açma",
        category: "acmalar",
        price: "30 TL",
        description: "çikolatalı açma",
        images: ["./açmalar/çikolatalı.açma.jpg"]
    },
    {
        id: 60,
        name: "Sade Açma",
        category: "acmalar",
        price: "30 TL",
        description: "Klasik sade açma",
        images: ["./açmalar/sade.açma.jpg"]
    },
    {
        id: 53,
        name: "Çıtır Simit",
        category: "simitler",
        price: "20 TL",
        description: "Çıtır çıtır, taze simit",
        images: ["./simitler/çıtırsimit.jpg"]
    },
    {
        id: 54,
        name: "Taban Simit",
        category: "simitler",
        price: "20 TL",
        description: " klasiktaban simit",
        images: ["./simitler/tabansimit.jpg"]
    },
    {
        id: 55,
        name: "Tereyeğalı Simit",
        category: "simitler",
        price: "30 TL",
        description: "Tereyeğlı  simit",
        images: ["./simitler/tereyagli.jpg"]
    },
    {
        id: 4,
        name: "Hamburger",
        category: "hamburgeler",
        price: "50 TL",
        description: "salam,kaşar,domates ve marul",
        images: ["./simitler/hamburgerler/hamburger.jpg"]
    },
    {
        id: 61,
        name: "Çedarlı Hamburger",
        category: "hamburgeler",
        price: "50 TL",
        description: "Çedarlı peynirli,sosisli hamburger",
        images: ["./simitler/hamburgerler/çedarlı.jpg"]
    },
    {
        id: 5,
        name: "Gül Böreği",
        category: "borek",
        price: "60 TL",
        description: "Otlu peynirli gülböreği",
        images: ["./börekler/gülböreği.jpg"]
    },
    {id: 7, name: "Sakallı", category: "pogaca", price: "20 TL", description: "Lor peynirli maydonozlu poğaça", images: ["./poğaçalar/sakallı.jpg"]},
    {id: 9, name: "Sosisli Poğaça", category: "pogaca", price: "50 TL", description: "Sosisli kaşarlı poğaça", images: ["./poğaçalar/sosisli.jpg"]},


    // ADET PASTALAR
    {id: 10, name: "1 Kişilik Pasta", category: "pastalar", price: "200 TL", description: "tek kişi için yaş pasta", images: ["./pastalar/1kisilik.jpg"]},
    {id: 11, name: "4 Kişilik Pasta", category: "pastalar", price: "500 TL", description: "Dört kişi için yaş pasta", images: ["./pastalar/4kisilik.jpg"]},
    {id: 12, name: "6 Kişilik Pasta", category: "pastalar", price: "600 TL", description: "Altı kişi için yaş pasta", images: ["./pastalar/6kisilik.jpg"]},
    {id: 13, name: "8 Kişilik Pasta", category: "pastalar", price: "700 TL", description: "Sekiz kişi için özel ve büyük pasta", images: ["./pastalar/8kisilik.jpg"]},
    {id: 14, name: "Rulo Pasta", category: "pastalar", price: "600 TL", description: "Rulo şekilde sarılmış özel pasta", images: ["./pastalar/rulopasta.jpg"]},
    {id: 18, name: "CEDRİC ANTEP FISTIĞI", category: "pasta", price: "200 TL", description: "antep fıstığı aromalı cedric", images: ["./pastalar/cedric.jpg"]},
    { id:78, name: "Bisküvili Pasta", category: "pastalar", price: "200 TL", description: "klasik bisküvili pasta", images: ["./pastalar/bisküvili.jpg"]},
    { id:79, name: "Çilekli Pasta", category: "pastalar", price: "200 TL", description: "Çilekli üçgen pasta", images: ["./pastalar/çilekli.jpg"]},
    { id:80, name: "Lotuslu Pasta", category: "pastalar ", price: "200 TL", description: "lotuslu pasta", images: ["./pastalar/lotuslu.jpg"]},
    { id:81, name: "Malaga", category: "pastalar", price: "200 TL", description: "yumuşak kakaolu pandispanya tabanı üzerine yerleştirilen bütün muzlar, yoğun pastacı kreması (veya krema) ve tamamını kaplayan çikolata ganajından oluşu", images: ["./pastalar/malaga.jpg"]},
    { id:82, name: "Snıckers", category: "pastalar", price: "200 TL", description: "Çikolata kaplaması, karamel sosu, fıstık parçaları ve kremsi dolgu ile hazırlanmış özel pasta.", images: ["./pastalar/snıckers.jpg"]},
    // EKLER
    {id: 21, name: "Ekler - Klasik", category: "eklerler", price: "50 TL", description: "Siyah çikolatalı", images: [ 
        "./ekler/klasik.jpg"]},
    {id: 22, name: "Ekler - Lotuslu", category: "eklerler", price: "80 TL", description: "Lotus bisküvi kırıntılarıyla yapılan lezzetli ekler", images: [

        "./ekler/lotuslu.jpg"]},

        
        {
            id: 37,
            name: "Antep Fıstıklı Ekler",
            category: "eklerler",
            price: "40 TL",
            description: "Antep fıstığı aromalı ekler",
            images: ["./ekler/fıstıklı.jpg"]
        },
        {
            id: 74,
            name: "beyaz çikolatalı ekler",
            category: "eklerler",
            price: "50 TL",
            description: "beyaz çikolatalı ekler",
            images: ["./ekler/beyaz.jpg"]
        },
        
        
        
        
        
        
    {
        id: 38,
        name: "Limonlu Cedric",
        category: "cedricler",
        price: "200 TL",
        description: "Limon aromalı cedric",
        images: ["./pastalar/cedricler/limon.jpg"]
    },
    {
        id: 44,
        name: "Avakadolu Cedric",
        category: "cedricler",
        price: "200 TL",
        description: "Avakado aromalı cedric",
        images: ["./pastalar/cedricler/avakado.jpg"]
    },
    {
        id: 45,
        name: "Fıstıklı Cedric",
        category: "cedricler",
        price: "200 TL",
        description: "Fıstık aromalı cedric",
        images: ["./pastalar/cedricler/fıstık.jpg"]
    },


    // BÖREKLER
    {id: 24, name: "Kıymalı Kol Böreği", category: "borek", price: "60 TL", description: "İnce yufka katları arasında özenle kavrulmuş kıyma, soğan ve baharatlarla hazırlanmış geleneksel lezzet.", images: ["./börekler/kıymalıkolböreği.jpg"]},
    {id: 23, name: "Tepsi Böreği", category: "borek", price: "60 TL", description: "özel el açmasıyla hazırlanmış otlu peynirli,patatesli,patlıcan kıymalı çeşitleriyle tepsi böreği", images: [
        "./börekler/tepsi.jpg"]},
    {id: 25, name: "peynirli kol böreği", category: "borek", price: "60 TL", description: "İnce açılmış yufkaların arasına bol beyaz peynir ve maydanoz konularak hazırlanır, çıtır çıtır pişirilir.", images: ["./börekler/peynirlikolböreği.jpg"]},

{ id: 75, name: "sigara böreği", category: "borek", price: "60 TL", description: "patatesli ve otlu peynirli çeşitleriyle sigara böreği", images: ["./börekler/sigara.jpg"]},

    // PIZZALAR
    {id: 25, name: "Yuvarlak Pizza", category: "pizza", price: "150 TL", description: "Klasik yuvarlak şekilde karışık ve lezzetli pizza", images: ["./pizzalar/yuvarlak.jpg"]},
{
    id: 41,
    name: "sucuklu dilim Pizza",
    category: "pizza",
price: "150 TL",
description: "Dilim şeklinde sucuklu pizza",
images: ["./pizzalar/sucuklu.jpg"]
},
{
    id: 42,
name: "karışık dilim Pizza",
category: "pizza",
price: "150 TL",
description: "Dilim şeklinde karışık pizza",
images: ["./pizzalar/karışık.jpg"]

},

    // POĞAÇALAR
    {id: 26, name: "kaşarlı Poğaça", category: "pogaca", price: "20 TL", description: "kaşarlı poğaça", images: ["./poğaçalar/kaşarlı.jpg"]},
    {id: 27, name: "patatesli Poğaça", category: "pogaca", price: "20 TL", description: "patatesli poğaça", images: ["./poğaçalar/patatesli.jpg"]},
{
    id: 43,
name: "peynirli Poğaça",
category: "pogaca",
price: "20 TL",description: "peynirli poğaça",
images: ["./poğaçalar/peynirli.jpg"]
},


    // KASE TATLILAR
    {id: 28, name: "Sütlaç", category: "kase_tatli", price: "90 TL", description: "Süt, pirinç ve şekerle hazırlanıp fırında üzeri hafif kızartılan geleneksel lezzet.", images: ["./kasetatlılar/sütlaç.jpg"]},
    {id: 29, name: "Lotus", category: "kase_tatli", price: "100 TL", description: "Lotuslu muhallebi ve çikolatalı tatlı", images: ["./kasetatlılar/lotus.jpg"]},
{    id: 44,
name: "Supangle",
category: "kase_tatli",price: "100 TL",
description: "Çikolatalı, yoğun kıvamlı supangle",
images: ["./kasetatlılar/supangle.jpg"]
},
{   id: 45,
name: "Profiterol",
category: "kase_tatli",
price: "100 TL",
description: "Sütlü çikolatalı profiterol",
images: ["./kasetatlılar/profiterol.jpg"]
},
{   id: 46,
name: "Senatör",
category: "kase_tatli",
price: "100 TL",
description: "Antep fıstıklı muhallebi ve çikolatalı sos ile hazırlanan senatör tatlı",
images: ["./kasetatlılar/senatör.jpg"]
},
{   id: 47,
name: "Kırmızı Kadife",
category: "kase_tatli",price: "100 TL",
description: "Kırmızı kadife muhallebi ve çikolatalı sos ile hazırlanan kase tatlı",
images: ["./kasetatlılar/kadife.jpg"]
},
{   id: 48,
name: "Kadayıflı Muhallebi",
category: "kase_tatli",price: "100 TL",
description: "Kadayıflı ve muhallebi kase tatlı",
images: ["./kasetatlılar/kadayıflımuhallebi.jpg"]
},
{   id: 49,
name: "Alaçatı Muallabesi",
category: "kase_tatli",
price: "100 TL",
description: "Alaçatı Muhallebisi; taze süt, vanilya ve hafif şekerle hazırlanmış, üzerine badem ve tarçın serpilerek sunulan yöresel bir tatlıdır. Hafif kıvamı ve ferah aromasıyla Ege’nin en sevilen sütlü tatlılarından biridir",
images: ["./kasetatlılar/alaçatı.jpg"]
},


    // TATLILAR - SÜTLÜ TATLILAR
    {id: 28, name: "Sütlaç", category: "sutlu_tatli", price: "90 TL", description: "Süt, pirinç ve şekerle hazırlanıp fırında üzeri hafif kızartılan geleneksel lezzet.", images: ["./kasetatlılar/sütlaç.jpg"]},
    {id: 31, name: "Karamelli Trileçe", category: "sutlu_tatli", price: "95 TL", description: "Karamelli trileçe", images: ["./sütlütatlılar/karamellitrileçe.jpg"]},
    {id: 53, name: "Frambuazlı Trileçe", category: "sutlu_tatli", price: "95 TL", description: "Frambuazlı  lezzetli trileçe", images: ["./sütlütatlılar/frambuazlıtrileçe.jpg"]},
    {id: 55, name: "Soğuk Baklava", category: "sutlu_tatli", price: "100 TL", description: "Şerbetli, sütlü, cevbizli soğuk baklava tatlı", images: ["./sütlütatlılar/soğukbaklava.jpg"]},
    {id: 56, name: "Süt Dilimi", category: "sutlu_tatli", price: "85 TL", description: "Lezzetli süt dolgulu dilim tatlı", images: ["./sütlütatlılar/sütdilimi.jpg"]},    {id: 57, name: "Kazandibi", category: "sutlu_tatli", price: "100 TL", description: "Tat kakaolu kazandibi tatlı", images: ["./kasetatlılar/kazandibi.jpg"]},
    {id: 58, name: "Keşkül", category: "sutlu_tatli", price: "100 TL", description: "Süt, pirinç unu ve bademle hazırlanmış, hafif ve ferah bir sütlü tatlı. ", images: ["./kasetatlılar/Keşkül.jpg"]},
    {id: 59, name: "Magnolya", category: "sutlu_tatli", price: "100 TL", description: "Çilekli ve çikolatalı magnolya tatlı", images: ["./kasetatlılar/magnolya.jpg"]},
    {id: 60, name: "Kadayıflı Muhallebi", category: "sutlu_tatli", price: "100 TL", description: "Kadayıflı ve muhallebi kase tatlı", images: ["./kasetatlılar/kadayıflımuhallebi.jpg"]},
    {id: 61, name: "Alaçatı Muallabesi", category: "sutlu_tatli", price: "100 TL", description: "Alaçatı Muhallebisi; taze süt, vanilya ve hafif şekerle hazırlanmış, üzerine badem ve tarçın serpilerek sunulan yöresel bir tatlıdır. Hafif kıvamı ve ferah aromasıyla Ege’nin en sevilen sütlü tatlılarından biridir", images: ["./kasetatlılar/alaçatı.jpg"]},
    {id: 62, name: "Kırmızı Kadife", category: "sutlu_tatli", price: "100 TL", description: "Kırmızı kadife muhallebi ve çikolatalı sos ile hazırlanan kase tatlı", images: ["./kasetatlılar/kadife.jpg"]},
    {id: 63, name: "Senatör", category: "sutlu_tatli", price: "100 TL", description: "Antep fıstıklı muhallebi ve çikolatalı sos ile hazırlanan senatör tatlı", images: ["./kasetatlılar/senatör.jpg"]},
    {id: 64, name: "Kazandibi", category: "sutlu_tatli", price: "100 TL", description: "Kazandibi tatlı", images: ["./kasetatlılar/kazandibi.jpg"]},


    // ŞERBETLİ TATLILAR
    {id: 32, name: "Cevizli Baklava", category: "serbetli_tatli", price: "150 TL", description: "Cevizli, şerbetli baklavalar", images: ["./serbetli_tatlilar/cevizli.jpg"]},
{id: 33, name: "Soğuk Baklava", category: "serbetli_tatli", price: "160 TL", description: "cevizli soğuk baklava", images: ["./serbetli_tatlilar/sogukbaklava.jpg"]},
{id: 49, name: "Şekerpare", category: "serbetli_tatli", price: "180 TL", description: "Şekerpare", images: ["./serbetli_tatlilar/sekerpare.jpg"]},
{id: 50, name: "Kalburabastı", category: "serbetli_tatli", price: "170 TL", description: "Kalburabastı", images: ["./serbetli_tatlilar/kalburabasti.jpg"]},

    // KURU PASTALAR
    {id: 51, name: "Un Kurabiyesi", category: "kuru_pastalar", price: "120 TL", description: "Ağızda dağılan klasik un kurabiyesi", images: ["data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'%3E%3Crect fill='%23F5DEB3' width='300' height='200'/%3E%3Ccircle cx='120' cy='100' r='42' fill='%23D2B48C'/%3E%3Ccircle cx='180' cy='100' r='42' fill='%23C8A97E'/%3E%3Ctext x='150' y='110' font-size='30' fill='white' text-anchor='middle'%3E🍪%3C/text%3E%3C/svg%3E"]},
    {id: 52, name: "Tuzlu Kurabiye", category: "kuru_pastalar", price: "110 TL", description: "Çay saatine uygun susamlı tuzlu kurabiye", images: ["data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'%3E%3Crect fill='%23EED7B0' width='300' height='200'/%3E%3Cellipse cx='150' cy='100' rx='80' ry='48' fill='%23B08968'/%3E%3Ctext x='150' y='112' font-size='30' fill='white' text-anchor='middle'%3E🥨%3C/text%3E%3C/svg%3E"]},


    // İÇECEKLER
    {id: 34, name: "Fanta", category: "sogukicecekler", price: "60 TL", description: "soğuk fanta", images: ["./sogukicecekler/fanta.jpg"]},
    {id: 35, name: "Fuse tea", category: "sogukicecekler", price: "20 TL", description: "çilek karpuzlu,mango ananaslı,şeftalili fuse tea", images: ["./sogukicecekler/fusetea.jpg"]},
    {id: 36, name: "kola", category: "sogukicecekler", price: "25 TL", description: "soğuk kola", images: ["./sogukicecekler/kola.jpg"]},
    {id: 37, name: "Ayran", category: "sogukicecekler", price: " thirty-five TL", description: "Taze, soğuk ayran", images: ["./sogukicecekler/ayran.jpg"]},
    {id: 38, name: "Sade Soda", category: "sogukicecekler", price: "15 TL", description: "Serinletici soda", images: ["./sogukicecekler/sadesoda.jpg"]},
    {id: 39, name: "Limonata", category: "sogukicecekler", price: "30 TL", description: "Ev yapımı taze limonata", images: ["./sogukicecekler/limonata.jpg"]},
    {id: 40, name: "Meyve Suyu", category: "sogukicecekler", price: "25 TL", description: "Çeşitli meyve aromalı meyve suyu", images: ["./sogukicecekler/meyvasuyu.jpg"]},
    {id: 41, name: "limonlu soda", category: "sogukicecekler", price: "30 TL", description: "limonlu soda", images: ["./sogukicecekler/limonlusoda.jpg"]},
    {id: 42, name: "Portakallı Soda", category: "sogukicecekler", price: "30 TL", description: "Portakallı soda", images: ["./sogukicecekler/portakallısoda.jpg"]},
    {id: 43, name: "Çilek Karpuzlu Soda", category: "sogukicecekler", price: "30 TL", description: "Çilek karpuzlu soda", images: ["./sogukicecekler/çilekkarpuzlusoda.jpg"]},
    {id: 44, name: "elmalı Soda", category: "sogukicecekler", price: "30 TL", description: "Elmalı soda", images: ["./sogukicecekler/elmalısoda.jpg"]},

    // Sıcak İçecekler
    {id: 45, name: "Türk Kahvesi", category: "sıcakicecekler", price: "30 TL", description: "Geleneksel Türk kahvesi", images: ["./sıcakicecekler/turkkahvesi.jpg"]},
    {id: 46, name: "Çay", category: "sıcakicecekler", price: "30 TL", description: "Taze kaynatılmış çay", images: ["./sıcakicecekler/cay.jpg"]},
    {id: 47, name: "adacayı", category: "sıcakicecekler", price: "30 TL", description: "Kurutulmuş ada yapraklarından demlenerek hazırlanan, ferah aromalı geleneksel içecek.", images: ["./sıcakicecekler/adacayı.jpg"]},
    {id: 48, name: "filtre kahve", category: "sıcakicecekler", price: "30 TL", description: "Filtre kahve", images: ["./sıcakicecekler/filtrekahve.jpg"]},
    {id: 49, name: "ıhlamur", category: "sıcakicecekler", price: "30 TL", description: "Ihlamur çayı", images: ["./sıcakicecekler/ıhlamur.jpg"]},
    {id: 50, name: "nane limon", category: "sıcakicecekler", price: "30 TL", description: "Nane limon çayı", images: ["./sıcakicecekler/nanelimon.jpg"]},
    {id: 51, name: "papatya çayı", category: "sıcakicecekler", price: "30 TL", description: "Papatya çayı", images: ["./sıcakicecekler/papatya.jpg"]},
    {id: 52, name: "salep", category: "sıcakicecekler", price: "30 TL", description: " klasik Salep ", images: ["./sıcakicecekler/salep.jpg"]},
    {id: 53, name: "sıcak çikolata", category: "sıcakicecekler", price: "30 TL", description: "Sıcak çikolata", images: ["./sıcakicecekler/sicakcikolata.jpg"]},

    // kurapasta 
    {id: 54, name: "Un Kurabiyesi", category: "kurupastalar", price: "120 TL", description: "Ağızda dağılan klasik un kurabiyesi", images: ["./kurupastalar/unlu.jpg"]},
    {id: 55, name: "Tuzlu Kurabiye", category: "kurupastalar", price: "110 TL", description: "Çay saatine uygun susamlı tuzlu kurabiye", images: ["./kurupastalar/tuzlu.jpg"]},
    {   id: 56, name: "leblebili Kurabiyesi", category: "kurupastalar", price: "130 TL", description: "Fındık aromalı çıtır kurabiye", images: ["./kurupastalar/leblebili.jpg"]},
    {   id: 57, name: "dereotlu kurabiye", category: "kurupastalar", price: "130 TL", description: "Dereotlu kurabiye", images: ["./kurupastalar/dereotlu.jpg"]},
    {   id: 58, name: "elmalı Kurabiye", category: "kurupastalar", price: "130 TL", description: "Elmalı kurabiye", images: ["./kurupastalar/elmalı.jpg"]},
    {   id: 59, name: "leblebili kurabiye", category: "kurupastalar", price: "130 TL", description: "Leblebili kurabiye", images: ["./kurupastalar/leblebili.jpg"]},
    {   id: 60, name: "damla çikolatalı kurabiye", category: "kurupastalar", price: "130 TL", description: "Damla çikolatalı kurabiye", images: ["./kurupastalar/damla.jpg"]},
    {   id: 61, name: "kakaolu kurabiye", category: "kurupastalar", price: "130 TL", description: "Kakaolu kurabiye", images: ["./kurupastalar/kakaolu.jpg"]},
    {   id: 62, name: "tahinli kurabiye", category: "kurupastalar", price: "130 TL", description: "Tahinli kurabiye", images: ["./kurupastalar/tahinli.jpg"]},
    {   id: 63, name: "çubuklu kurabiye", category: "kurupastalar", price: "130 TL", description: "Çubuklu kurabiye", images: ["./kurupastalar/çubuklu.jpg"]},
    {   id: 64, name: "Simit kurabiye", category: "kurupastalar", price: "130 TL", description: "Simit kurabiye", images: ["./kurupastalar/simitkuru.jpg"]},

    //KAHVALTI ÇEŞİTLERİ
    {   id: 65, name: "Kahvaltı Tabağı", category: "kahvalti", price: "150 TL", description: "yumurta,simit,zeytin,çay,tulum peyniri kahvaltı tabağı", images: ["./kahvalti/kahvaltıtabak.jpg"]},
    {   id: 66, name: "Serpme Kahvaltı", category: "kahvalti", price: "200 TL", description: "Çeşitli peynirler, zeytinler, reçeller ve taze ekmeklerle dolu serpme kahvaltı", images: ["./kahvalti/serpme.jpg"]},
    {   id: 67, name: "Söğüş", category: "kahvalti", price: "150 TL", description: "Taze s sogus", images: ["./kahvalti/söğüş.jpg"]},
    {   id: 68, name: "zeytin tabağı", category: "kahvalti", price: "100 TL", description: "çeşitli zeytinler ve taze ekmeklerle dolu zeytin tabağı", images: ["./kahvalti/zeytin.jpg"]},
    {   id: 69, name:"tulum peyniri", category: "kahvalti", price: "120 TL", description: "taze tulum peyniri ve taze ekmeklerle dolu tulum peyniri tabağı", images: ["./kahvalti/tulum.jpg"]},
    {   id: 70, name:"reçel", category: "kahvalti", price: "80 TL", description: "taze reçel ve taze ekmeklerle dolu reçel tabağı", images: ["./kahvalti/reçel.jpg"]},
    {   id: 71, name:"bal", category: "kahvalti", price: "90 TL", description: "taze bal ve taze ekmeklerle dolu bal tabağı", images: ["./kahvalti/bal.jpg"]},
    {   id: 72, name:"tereyağı", category: "kahvalti", price: "70 TL", description: "taze tereyağı ve taze ekmeklerle dolu tereyağı tabağı", images: ["./kahvalti/tereyağ.jpg"]},
    {   id:73, name:"haşlanmış yumurta", category: "kahvalti", price: "50 TL", description: "taze haşlanmış yumurta ve taze ekmeklerle dolu haşlanmış yumurta tabağı", images: ["./kahvalti/yumurta.jpg"]},
 
//Cheseecake
    {   id: 74, name:"San Sebastian", category: "CheeseCake", price: "200 TL", description: "Yoğun krem peynir tadı, vanilya aroması ve hafif yanık karamel dokusuyla benzersiz bir deneyim.", images: ["./Chesecake/sebastian.jpg"]},
    {   id: 75, name:"Frambuazlı Chesecake", category: "CheeseCake", price: "200 TL", description: "frambuazlı cheesecake", images: ["./Chesecake/frambuaz.jpg"]},
    {   id: 76, name:"Limonlu Chesecake", category: "CheeseCake", price: "200 TL", description: "limonlu cheesecake", images: ["./Chesecake/limon.jpg"]},
    {   id: 77, name:"lotuslu Chesecake", category: "CheeseCake", price: "200 TL", description: "lotuslu cheesecake", images: ["./Chesecake/lotuslu.jpg"]},
]; 

// DOM Elementleri
const menuContainer = document.getElementById('menuContainer');
const filterButtons = document.querySelectorAll('.filter-btn');
const modal = document.getElementById('productModal');
const closeBtn = document.querySelector('.close');

let currentFilter = 'tümü';
let currentImageIndex = 0;
let currentModalItem = null;

// Menüyü Kategorilere Göre Render Etme
function renderMenu() {
    const container = document.getElementById('categorySections');
    if (!container) return;
    
    container.innerHTML = '';
    
    // Kategori listesi
    const categories = [
        { id: 'simitler', label: '🥯 Simitler', background: 'linear-gradient(135deg, #D2B48C 0%, #8B6F47 100%)', backgroundImage: './simitler/çıtırsimit.jpg' },
        { id: 'acmalar', label: '🥯 Açmalar', background: 'linear-gradient(135deg, #FFD700 0%, #DAA520 100%)', backgroundImage: './açmalar/sade.açma.jpg' },
        { id: 'hamburgeler', label: '🍔 Hamburgeler', background: 'linear-gradient(135deg, #FF6347 0%, #8B4513 100%)', backgroundImage: './simitler/hamburgerler/hamburger.jpg' },
        { id: 'borek', label: '🌯 Börekler', background: 'linear-gradient(135deg, #CD853F 0%, #8B4513 100%)', backgroundImage: './börekler/kıymalıkolböreği.jpg' },
        { id: 'pizza', label: '🍕 Pizzalar', background: 'linear-gradient(135deg, #FF4500 0%, #DC143C 100%)', backgroundImage: './pizzalar/pizza.jpg' },
        { id: 'pogaca', label: '🧅 Poğaçalar', background: 'linear-gradient(135deg, #F4A460 0%, #D2691E 100%)', backgroundImage: './poğaçalar/poagaca.jpg' },
        { id: 'pastalar', label: '🎂 Pastalar', background: 'linear-gradient(135deg, #FFB6C1 0%, #FF69B4 100%)', backgroundImage: './pastalar/vitrin.jpg' },
        { id: 'CheeseCake', label: '🍰 Cheesecake', background: 'linear-gradient(135deg, #F5DEB3 0%, #D2B48C 100%)', backgroundImage: './Chesecake/cheesecake.jpg' },
        { id: 'cedricler', label: '🍰 Cedricler', background: 'linear-gradient(135deg, #DEB887 0%, #D2B48C 100%)', backgroundImage: './pastalar/cedricler/cedricler.jpg' },
        { id: 'kase_tatli', label: '🥣 Kase Tatlılar', background: 'linear-gradient(135deg, #FFFACD 0%, #FFD700 100%)', backgroundImage: './kasetatlılar/kasetatlılar.jpg' },
        { id: 'eklerler', label: '🍮 Eklerler', background: 'linear-gradient(135deg, #8B6914 0%, #DAA520 100%)', backgroundImage: './ekler/ekler.jpg' },
        { id: 'sutlu_tatli', label: '🍮 Sütlü Tatlılar', background: 'linear-gradient(135deg, #F0E68C 0%, #DAA520 100%)', backgroundImage: './sütlütatlılar/saütlütatlılar.jpg' },
        { id: 'serbetli_tatli', label: '🍡 Şerbetli Tatlılar', background: 'linear-gradient(135deg, #DEB887 0%, #D2691E 100%)', backgroundImage: './serbetli_tatlilar/serbetli.jpg' },
        { id: 'baklavalar', label: '🥜 Baklavalar', background: 'linear-gradient(135deg, #D2A679 0%, #8B6914 100%)', backgroundImage: './kategorigörsel/baklava.jpg' },
        { id: 'sogukicecekler', label: '☕  Soğuk İçecekler', background: 'linear-gradient(135deg, #87CEFA 0%, #00BFFF 100%)', backgroundImage: './sogukicecekler/sogukicecekler.jpg' },
        { id: 'sıcakicecekler', label: '☕ Sıcak İçecekler', background: 'linear-gradient(135deg, #A0522D 0%, #8B4513 100%)', backgroundImage: './sıcakicecekler/sıcakicecekler.jpg' },
        { id: 'kurupastalar', label: '🍪 Kuru Pastalar', background: 'linear-gradient(135deg, #FDDAA3 0%, #DAA520 100%)', backgroundImage: './kurupastalar/kurupasta.jpg' },
        { id: 'kahvalti', label: '📋 Kahvaltı Çeşitleri', background: 'linear-gradient(135deg, #D3D3D3 0%, #A9A9A9 100%)', backgroundImage: './kahvalti/kahvalti.jpg' }, 
    ];   
    
    categories.forEach(category => {
        const items = menuData.filter(item => item.category === category.id);
        if (items.length === 0) return;
        
        // Kategori kartı oluştur
        const section = document.createElement('div');
        section.className = 'category-section';
        
        // Eğer backgroundImage varsa onu, yoksa gradyent arka planı kullan
        if (category.backgroundImage) {
            section.style.backgroundImage = `url('${category.backgroundImage}')`;
        } else {
            section.style.background = category.background;
        }
        
        // Section header (kategori başlığı)
        const header = document.createElement('div');
        header.className = 'section-header';
        header.innerHTML = `<h2>${category.label}</h2>`;
        
        // Click olayı - urunler.html'e yönlendir
        section.addEventListener('click', () => {
            window.location.href = `urunler.html?kategori=${category.id}`;
        });
        
        // Section content (gizli - sadece data için)
        const content = document.createElement('div');
        content.className = 'section-content';
        
        section.appendChild(header);
        section.appendChild(content);
        container.appendChild(section);
    });
}

// Kategori Etiketini Getirme
function getCategoryLabel(category) {
    const labels = {
        'pastalar': '🎂 Pastalar',
        'simitler': '🥐 Simitler',
        'acmalar': '🥐 Açmalar',
        'hamburgeler': '🍔 Hamburgeler',
        'borek': '🌯 Börekler',
        'pizza': '🍕 Pizzalar',
        'pogaca': '🧅 Poğaçalar',
        'cedricler': '🍰 Cedricler',
        'kase_tatli': '🥣 Kase Tatlılar',
        'eklerler': '🍮 Eklerler',
        'sutlu_tatli': '🍮 Sütlü Tatlılar',
        'serbetli_tatli': '🍡 Şerbetli Tatlılar',
        'baklavalar': '🥜 Baklavalar',
        'kuru_pastalar': '🍪 Kuru Pastalar',
        'sogukicecekler': '☕ Soğuk İçecekler',
        'sicakicecekler': '☕ Sıcak İçecekler'
    };
    return labels[category] || category;
}

// Modal Açma
function openModal(item) {
    currentModalItem = item;
    currentImageIndex = 0;
    updateModalImage();
    modal.classList.add('show');
}

// Modal Resmi Güncelle
function updateModalImage() {
    if (!currentModalItem) return;
    const image = currentModalItem.images[currentImageIndex];
    document.getElementById('modalImage').src = image;
    document.getElementById('modalTitle').textContent = currentModalItem.name;
    document.getElementById('modalCategory').textContent = getCategoryLabel(currentModalItem.category);
    document.getElementById('modalDescription').textContent = currentModalItem.description;
    document.getElementById('modalPrice').textContent = currentModalItem.price;
    document.getElementById('imageCounter').textContent = `${currentImageIndex + 1} / ${currentModalItem.images.length}`;
}

// Modal Kapama
function closeModal() {
    modal.classList.remove('show');
}

// Filter Butonları - Removed (menus now scroll-based)

// Modal Kapama Olayları
closeBtn.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

// Fotoğraf Galerisi Butonları
document.getElementById('prevBtn').addEventListener('click', () => {
    if (!currentModalItem) return;
    currentImageIndex = (currentImageIndex - 1 + currentModalItem.images.length) % currentModalItem.images.length;
    updateModalImage();
});

document.getElementById('nextBtn').addEventListener('click', () => {
    if (!currentModalItem) return;
    currentImageIndex = (currentImageIndex + 1) % currentModalItem.images.length;
    updateModalImage();
});

// Sipariş Ver Butonları
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('add-to-order')) {
        alert('Siparişiniz alındı! Kısa sürede hazır olacaktır.');
        closeModal();
    }
});

// Sayfa Yüklendiğinde Menüyü Göster
document.addEventListener('DOMContentLoaded', () => {
    renderMenu();
});
