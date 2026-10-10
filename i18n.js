/* Hirusha Travels – language switcher
   Languages: English (default), Russian, Chinese, Japanese, Hindi, Spanish, Arabic
   Add <script src="i18n.js"></script> just before <script src="script.js"> on every page.
   Row format: [English, Russian, Chinese, Japanese, Hindi, Spanish, Arabic]
   English text is the key – it must match the text on the page exactly. */
   (function(){
      "use strict";
      var LANGS=[["en","English"],["ru","Русский"],["zh","中文"],["ja","日本語"],["hi","हिन्दी"],["es","Español"],["ar","العربية"]];
      var CODES=LANGS.map(function(l){return l[0]});
      
      /*R-START*/
      var R=[
      /* ---------- photo strips / contact photo card ---------- */
      ["The island we call home","Остров, который мы зовём домом","我们的家园之岛","私たちが暮らす島","वह द्वीप जिसे हम घर कहते हैं","La isla que llamamos hogar","الجزيرة التي نسميها وطنًا"],
      ["Sri Lanka,","Шри-Ланка","斯里兰卡，","スリランカを、","श्रीलंका,","Sri Lanka","سريلانكا"],
      ["Through Our Eyes","нашими глазами","我们的视角","私たちの目線で","हमारी नज़र से","a través de nuestros ojos","بعيوننا"],
      ["Where to next?","Куда дальше?","下一站去哪里？","次はどこへ？","अगला पड़ाव कहाँ?","¿A dónde vamos después?","إلى أين بعد ذلك؟"],
      ["Your Next Destination","Ваше следующее направление","您的下一个目的地","次の目的地","आपकी अगली मंज़िल","Tu próximo destino","وجهتك التالية"],
      ["Your Sri Lankan story starts here","Ваша ланкийская история начинается здесь","您的斯里兰卡故事从这里开始","あなたのスリランカ物語は、ここから","आपकी श्रीलंका की कहानी यहीं से शुरू होती है","Tu historia en Sri Lanka empieza aquí","تبدأ قصتك في سريلانكا من هنا"],
      /* ---------- navigation, footer, shared ---------- */
      ["Home","Главная","首页","ホーム","होम","Inicio","الرئيسية"],
      ["About","О нас","关于我们","会社概要","हमारे बारे में","Nosotros","من نحن"],
      ["Tour Packages","Туры","旅游套餐","ツアーパッケージ","टूर पैकेज","Paquetes turísticos","باقات الرحلات"],
      ["Contact & Booking","Контакты и бронирование","联系与预订","お問い合わせ・ご予約","संपर्क और बुकिंग","Contacto y reservas","اتصل واحجز"],
      ["Now flying to","Летим в раздел","正飞往","行き先","अब उड़ान भर रहे हैं","Volando a","نحلّق الآن إلى"],
      ["Your trusted travel partner for unforgettable journeys across Sri Lanka and the world.","Ваш надёжный партнёр в путешествиях: незабываемые поездки по Шри-Ланке и всему миру.","您值得信赖的旅行伙伴，为您打造遍及斯里兰卡与世界各地的难忘旅程。","スリランカと世界各地への忘れられない旅を、信頼のパートナーがご案内します。","श्रीलंका और दुनिया भर की यादगार यात्राओं के लिए आपका भरोसेमंद ट्रैवल पार्टनर।","Tu socio de confianza para viajes inolvidables por Sri Lanka y el mundo.","شريكك الموثوق في السفر لرحلات لا تُنسى عبر سريلانكا والعالم."],
      ["Visit Us","Приходите к нам","到访我们","アクセス","हमसे मिलें","Visítanos","زورونا"],
      ["Visit us","Приходите","到访","ご来店","हमसे मिलें","Visítanos","زورونا"],
      ["Mon–Sat, 9am – 6pm","Пн–Сб, 9:00 – 18:00","周一至周六，9:00 – 18:00","月〜土 9:00〜18:00","सोम–शनि, सुबह 9 – शाम 6","Lun–Sáb, 9:00 – 18:00","من الاثنين إلى السبت، 9 ص – 6 م"],
      ["Emergency 24/7","Экстренная линия 24/7","24/7 紧急热线","24時間緊急対応","आपातकालीन 24/7","Emergencias 24/7","الطوارئ 24/7"],
      ["For travellers needing urgent help.","Для путешественников, которым нужна срочная помощь.","为需要紧急帮助的旅客提供服务。","緊急のサポートが必要な旅行者の方へ。","तुरंत मदद चाहने वाले यात्रियों के लिए।","Para viajeros que necesitan ayuda urgente.","للمسافرين الذين يحتاجون إلى مساعدة عاجلة."],
      ["Follow Us","Мы в соцсетях","关注我们","フォローする","हमें फ़ॉलो करें","Síguenos","تابعونا"],
      ["© 2026 Hirusha Travels. All rights reserved.","© 2026 Hirusha Travels. Все права защищены.","© 2026 Hirusha Travels 版权所有。","© 2026 Hirusha Travels. All rights reserved.","© 2026 Hirusha Travels. सर्वाधिकार सुरक्षित।","© 2026 Hirusha Travels. Todos los derechos reservados.","© 2026 Hirusha Travels. جميع الحقوق محفوظة."],
      ["Thank you! Hirusha Travels will contact you soon.","Спасибо! Hirusha Travels скоро свяжется с вами.","谢谢！Hirusha Travels 很快会与您联系。","ありがとうございます！Hirusha Travelsよりまもなくご連絡いたします。","धन्यवाद! Hirusha Travels जल्द ही आपसे संपर्क करेगा।","¡Gracias! Hirusha Travels se pondrá en contacto contigo pronto.","شكرًا لك! ستتواصل معك Hirusha Travels قريبًا."],
      
      /* ---------- place names ---------- */
      ["Sigiriya","Сигирия","锡吉里耶","シーギリヤ","सिगिरिया","Sigiriya","سيجيريا"],
      ["Yala","Яла","亚拉","ヤラ","यला","Yala","يالا"],
      ["Galle","Галле","加勒","ゴール","गाले","Galle","غالي"],
      ["Kandy","Канди","康提","キャンディ","कैंडी","Kandy","كاندي"],
      ["Hill Country","Горный край","高地地区","ヒルカントリー","पहाड़ी इलाका","Zona montañosa","المرتفعات"],
      ["Ella","Элла","埃拉","エラ","एला","Ella","إيلا"],
      ["Mirissa","Мирисса","米瑞莎","ミリッサ","मिरिस्सा","Mirissa","ميريسا"],
      ["Nuwara Eliya","Нувара-Элия","努沃勒埃利耶","ヌワラエリヤ","नुवारा एलिया","Nuwara Eliya","نوارا إليا"],
      ["Anuradhapura","Анурадхапура","阿努拉德普勒","アヌラーダプラ","अनुराधापुरा","Anuradhapura","أنورادابورا"],
      ["Dambulla","Дамбулла","丹布勒","ダンブッラ","दांबुला","Dambulla","دامبولا"],
      ["Arugam Bay","Аругам-Бей","阿鲁甘湾","アルガムベイ","अरुगम बे","Bahía de Arugam","خليج أروغام"],
      
      /* ---------- home: hero slider ---------- */
      ["The Lion Rock Fortress","Крепость Львиная скала","狮子岩堡垒","獅子岩の要塞","सिंह चट्टान किला","La fortaleza de la Roca del León","قلعة صخرة الأسد"],
      ["Wild Safari Adventure","Дикое сафари","野生动物探险之旅","ワイルド・サファリ体験","जंगली सफ़ारी रोमांच","Aventura de safari salvaje","مغامرة سفاري برية"],
      ["The Dutch Fort by the Sea","Голландский форт у моря","海边的荷兰古堡","海辺のオランダ要塞","समुद्र किनारे डच किला","El fuerte holandés junto al mar","الحصن الهولندي على البحر"],
      ["The Sacred Hill Capital","Священная столица в горах","圣山之都","聖なる丘の古都","पवित्र पहाड़ी राजधानी","La sagrada capital de las colinas","عاصمة التلال المقدسة"],
      ["Tea Estates & Mist","Чайные плантации и туман","茶园与云雾","茶畑と霧","चाय बागान और धुंध","Plantaciones de té y niebla","مزارع الشاي والضباب"],
      ["Climb the ancient rock palace of King Kashyapa, a UNESCO World Heritage Site rising 200 metres above the jungle, with mirror wall frescoes and water gardens at its feet.","Поднимитесь к древнему скальному дворцу царя Кашьяпы — объекту Всемирного наследия ЮНЕСКО высотой 200 метров над джунглями, с фресками на зеркальной стене и водными садами у подножия.","攀登迦叶波国王的古代岩石宫殿——这座联合国教科文组织世界遗产高出丛林200米，山脚下有镜墙壁画和水上花园。","カッサパ王の古代の岩の宮殿に登りましょう。ジャングルから200メートルそびえるユネスコ世界遺産で、鏡の壁のフレスコ画や麓の水の庭園が見どころです。","राजा कश्यप के प्राचीन चट्टानी महल पर चढ़ें — जंगल से 200 मीटर ऊँची यह यूनेस्को विश्व धरोहर स्थल है, जिसकी तलहटी में दर्पण दीवार के भित्तिचित्र और जल उद्यान हैं।","Sube al antiguo palacio sobre la roca del rey Kasyapa, Patrimonio de la Humanidad de la UNESCO que se alza 200 metros sobre la selva, con frescos en el muro espejo y jardines acuáticos a sus pies.","اصعد إلى قصر الملك كاشيابا القديم المشيَّد على الصخرة، وهو موقع تراث عالمي لليونسكو يرتفع 200 متر فوق الأدغال، وعند سفحه لوحات جدارية على الجدار المرآة وحدائق مائية."],
      ["Ride a jeep through Sri Lanka's most famous national park and meet elephants, leopards, crocodiles and hundreds of bird species in their natural home.","Отправляйтесь на джипе по самому известному национальному парку Шри-Ланки и встретьте слонов, леопардов, крокодилов и сотни видов птиц в их естественной среде.","乘吉普车穿越斯里兰卡最著名的国家公园，在大象、豹、鳄鱼和数百种鸟类的自然家园中与它们相遇。","スリランカで最も有名な国立公園をジープで巡り、ゾウ、ヒョウ、ワニ、数百種の鳥たちに自然の住処で出会いましょう。","श्रीलंका के सबसे प्रसिद्ध राष्ट्रीय उद्यान में जीप से सफ़र करें और हाथियों, तेंदुओं, मगरमच्छों व सैकड़ों पक्षी प्रजातियों से उनके प्राकृतिक घर में मिलें।","Recorre en jeep el parque nacional más famoso de Sri Lanka y conoce elefantes, leopardos, cocodrilos y cientos de especies de aves en su hábitat natural.","انطلق بسيارة جيب عبر أشهر متنزه وطني في سريلانكا وقابل الفيلة والفهود والتماسيح ومئات أنواع الطيور في موطنها الطبيعي."],
      ["Walk the historic ramparts of Galle Fort, a UNESCO World Heritage Site, with its lighthouse, boutique cafes, colonial streets and ocean sunsets.","Прогуляйтесь по историческим стенам форта Галле — объекта Всемирного наследия ЮНЕСКО: маяк, бутик-кафе, колониальные улочки и закаты над океаном.","漫步于加勒古堡的历史城墙，这座联合国教科文组织世界遗产拥有灯塔、精品咖啡馆、殖民地街巷和海上日落。","ユネスコ世界遺産ゴール要塞の歴史ある城壁を歩きましょう。灯台、おしゃれなカフェ、コロニアルな街並み、海に沈む夕日が待っています。","यूनेस्को विश्व धरोहर गाले क़िले की ऐतिहासिक प्राचीर पर टहलें — लाइटहाउस, बुटीक कैफ़े, औपनिवेशिक गलियाँ और समुद्र के सूर्यास्त के साथ।","Pasea por las históricas murallas del Fuerte de Galle, Patrimonio de la Humanidad de la UNESCO, con su faro, cafés con encanto, calles coloniales y atardeceres sobre el océano.","تجوّل على أسوار قلعة غالي التاريخية، موقع التراث العالمي لليونسكو، بمنارتها ومقاهيها الأنيقة وشوارعها الاستعمارية وغروب الشمس على المحيط."],
      ["Visit the golden-roofed Temple of the Tooth beside Kandy Lake, a UNESCO World Heritage Site, and enjoy traditional Kandyan dance, spice gardens and misty hill views.","Посетите храм Зуба Будды с золотой крышей у озера Канди — объект Всемирного наследия ЮНЕСКО — и насладитесь традиционными канди-танцами, садами специй и туманными видами холмов.","参观康提湖畔金顶的佛牙寺（联合国教科文组织世界遗产），欣赏传统康提舞蹈、香料园和雾气缭绕的山景。","キャンディ湖畔の金色の屋根の仏歯寺（ユネスコ世界遺産）を訪れ、伝統的なキャンディアン・ダンスやスパイスガーデン、霧に包まれた丘の景色をお楽しみください。","कैंडी झील के किनारे सुनहरी छत वाले दंत मंदिर (यूनेस्को विश्व धरोहर) के दर्शन करें और पारंपरिक कैंडियन नृत्य, मसाला बागानों व धुंधली पहाड़ियों के नज़ारों का आनंद लें।","Visita el Templo del Diente de techo dorado junto al lago Kandy, Patrimonio de la Humanidad de la UNESCO, y disfruta de la danza kandyana tradicional, jardines de especias y vistas de colinas envueltas en bruma.","زر معبد السن ذي السقف الذهبي بجوار بحيرة كاندي، موقع التراث العالمي لليونسكو، واستمتع بالرقص الكاندي التقليدي وحدائق التوابل وإطلالات التلال الضبابية."],
      ["Rolling emerald tea plantations, cool mountain air and scenic train rides around Nuwara Eliya and Ella. A green escape for hikers and dreamers.","Изумрудные чайные плантации, прохладный горный воздух и живописные поездки на поезде вокруг Нувара-Элии и Эллы. Зелёный уголок для туристов и мечтателей.","绵延起伏的翡翠色茶园、清凉的山间空气，以及努沃勒埃利耶和埃拉周边风景如画的火车之旅。徒步者与梦想家的绿色天地。","エメラルド色に広がる茶畑、涼しい山の空気、ヌワラエリヤとエラ周辺の景色の良い列車旅。ハイカーや夢想家のための緑の楽園です。","नुवारा एलिया और एला के आसपास लहराते पन्ना-हरे चाय बागान, ठंडी पहाड़ी हवा और सुंदर ट्रेन यात्राएँ। पैदल यात्रियों और सपने देखने वालों के लिए हरा-भरा ठिकाना।","Ondulantes plantaciones de té esmeralda, aire fresco de montaña y viajes panorámicos en tren por Nuwara Eliya y Ella. Un refugio verde para senderistas y soñadores.","مزارع شاي زمردية متموّجة وهواء جبلي منعش ورحلات قطار خلابة حول نوارا إليا وإيلا. ملاذ أخضر لمحبي المشي والحالمين."],
      ["Explore","Смотреть","探索","詳しく見る","देखें","Explorar","استكشف"],
      
      /* ---------- home: why travel with us ---------- */
      ["Why Travel With Us","Почему путешествовать с нами","为什么选择我们","当社が選ばれる理由","हमारे साथ यात्रा क्यों करें","Por qué viajar con nosotros","لماذا تسافر معنا"],
      ["Handpicked Destinations","Тщательно отобранные направления","精选目的地","厳選された旅先","चुनिंदा गंतव्य","Destinos seleccionados","وجهات مختارة بعناية"],
      ["Beaches, mountains, wildlife and culture chosen by local experts.","Пляжи, горы, дикая природа и культура — выбор местных экспертов.","由当地专家挑选的海滩、山地、野生动物和文化体验。","地元の専門家が選んだビーチ、山、野生動物、文化体験。","स्थानीय विशेषज्ञों द्वारा चुने गए समुद्र तट, पहाड़, वन्यजीव और संस्कृति।","Playas, montañas, fauna y cultura elegidas por expertos locales.","شواطئ وجبال وحياة برية وثقافة اختارها خبراء محليون."],
      ["Premium Yet Affordable","Премиум по доступной цене","品质上乘，价格实惠","上質なのに手頃","प्रीमियम फिर भी किफ़ायती","Premium pero asequible","فاخر وبسعر معقول"],
      ["Honest all-inclusive packages with no hidden costs.","Честные пакеты «всё включено» без скрытых платежей.","全包式套餐，价格透明，无隐藏费用。","追加料金のない、わかりやすいオールインクルーシブ・プラン。","बिना किसी छिपे शुल्क के ईमानदार ऑल-इन्क्लूसिव पैकेज।","Paquetes todo incluido, honestos y sin costes ocultos.","باقات شاملة بكل شيء وبأسعار صادقة دون رسوم خفية."],
      ["24/7 Support","Поддержка 24/7","24/7 全天候支持","24時間サポート","24/7 सहायता","Asistencia 24/7","دعم على مدار الساعة"],
      ["Our team is only a phone call away, anywhere you travel.","Наша команда на связи по телефону, куда бы вы ни поехали.","无论您身在何处，我们的团队只需一个电话即可联系。","どこへ旅しても、電話一本でスタッフにつながります。","आप जहाँ भी जाएँ, हमारी टीम बस एक फ़ोन कॉल की दूरी पर है।","Nuestro equipo está a una llamada de distancia, vayas donde vayas.","فريقنا على بُعد مكالمة هاتفية فقط أينما سافرت."],
      
      /* ---------- home + about: story block ---------- */
      ["About Hirusha Travels","О Hirusha Travels","关于 Hirusha Travels","Hirusha Travelsについて","Hirusha Travels के बारे में","Sobre Hirusha Travels","عن Hirusha Travels"],
      ["Your Island Story,","История вашего острова,","您的岛屿故事，","あなたの島の物語を、","आपकी द्वीप कहानी,","Tu historia de la isla,","قصتك على الجزيرة،"],
      ["Beautifully Planned","прекрасно спланированная","精心规划","美しくプランニング","खूबसूरती से नियोजित","bellamente planificada","مخطّطة بجمال"],
      ["Hirusha Travels is a family-run travel agency based in Kurunegala, Sri Lanka. For over 10 years we have helped thousands of travellers enjoy safe, comfortable and memorable holidays, with licensed guides, trusted hotels and personal service.","Hirusha Travels — семейное туристическое агентство из Курунегалы, Шри-Ланка. Более 10 лет мы помогаем тысячам путешественников проводить безопасный, комфортный и запоминающийся отпуск с лицензированными гидами, надёжными отелями и персональным сервисом.","Hirusha Travels 是一家总部位于斯里兰卡库鲁内加拉的家庭经营旅行社。十多年来，我们凭借持证导游、可靠酒店和贴心服务，帮助成千上万的旅客享受安全、舒适、难忘的假期。","Hirusha Travelsは、スリランカのクルネーガラを拠点とする家族経営の旅行会社です。10年以上にわたり、公認ガイド、信頼できるホテル、きめ細かなサービスで、何千人もの旅行者に安全で快適、思い出に残る休暇をお届けしてきました。","Hirusha Travels श्रीलंका के कुरुनेगला में स्थित एक पारिवारिक ट्रैवल एजेंसी है। 10 वर्षों से अधिक समय से हम लाइसेंस प्राप्त गाइड, भरोसेमंद होटल और व्यक्तिगत सेवा के साथ हज़ारों यात्रियों को सुरक्षित, आरामदायक और यादगार छुट्टियाँ दिलाने में मदद कर रहे हैं।","Hirusha Travels es una agencia de viajes familiar con sede en Kurunegala, Sri Lanka. Desde hace más de 10 años ayudamos a miles de viajeros a disfrutar de vacaciones seguras, cómodas e inolvidables, con guías autorizados, hoteles de confianza y atención personal.","Hirusha Travels وكالة سفر عائلية مقرها كوروناغالا في سريلانكا. منذ أكثر من 10 سنوات ساعدنا آلاف المسافرين على الاستمتاع بعطلات آمنة ومريحة لا تُنسى، مع مرشدين مرخّصين وفنادق موثوقة وخدمة شخصية."],
      ["From golden beaches and misty tea country to ancient cities and wild safaris, we plan every journey around you, with honest all-inclusive packages and a friendly team on call 24/7.","От золотых пляжей и туманных чайных гор до древних городов и диких сафари — мы планируем каждое путешествие вокруг вас: честные пакеты «всё включено» и дружная команда на связи 24/7.","从金色沙滩、云雾茶乡到古老城市和野外探险，我们围绕您来规划每一段旅程，提供透明的全包套餐和24小时待命的友好团队。","黄金色のビーチや霧の茶畑から古代都市、ワイルドなサファリまで、すべての旅をあなたに合わせて計画します。わかりやすいオールインクルーシブ・プランと、24時間対応のフレンドリーなチームがお待ちしています。","सुनहरे समुद्र तटों और धुंध भरे चाय बागानों से लेकर प्राचीन शहरों और जंगली सफ़ारी तक, हम हर यात्रा आपके इर्द-गिर्द योजनाबद्ध करते हैं — ईमानदार ऑल-इन्क्लूसिव पैकेज और 24/7 उपलब्ध मित्रवत टीम के साथ।","Desde playas doradas y brumosas tierras de té hasta ciudades antiguas y safaris salvajes, planificamos cada viaje a tu medida, con paquetes todo incluido honestos y un equipo amable disponible 24/7.","من الشواطئ الذهبية وأرض الشاي الضبابية إلى المدن القديمة والسفاري البرية، نخطط كل رحلة حولك، بباقات شاملة وأسعار صادقة وفريق ودود متاح على مدار الساعة."],
      ["SLTDA licensed agency","Агентство с лицензией SLTDA","SLTDA 持牌旅行社","SLTDA認可の旅行会社","SLTDA लाइसेंस प्राप्त एजेंसी","Agencia con licencia SLTDA","وكالة مرخّصة من SLTDA"],
      ["Licensed guides and trusted hotels","Лицензированные гиды и надёжные отели","持证导游与可靠酒店","公認ガイドと信頼できるホテル","लाइसेंस प्राप्त गाइड और भरोसेमंद होटल","Guías autorizados y hoteles de confianza","مرشدون مرخّصون وفنادق موثوقة"],
      ["Honest packages, no hidden costs","Честные пакеты без скрытых платежей","价格透明，无隐藏费用","追加料金なしの明朗プラン","ईमानदार पैकेज, कोई छिपा शुल्क नहीं","Paquetes honestos, sin costes ocultos","باقات صادقة دون رسوم خفية"],
      ["24/7 support wherever you travel","Поддержка 24/7, где бы вы ни были","无论身在何处，24/7 全程支持","どこにいても24時間サポート","आप जहाँ भी जाएँ, 24/7 सहायता","Asistencia 24/7 dondequiera que viajes","دعم على مدار الساعة أينما سافرت"],
      ["Personal, friendly service","Персональный и дружелюбный сервис","贴心友好的个性化服务","親身で温かいサービス","व्यक्तिगत, मित्रवत सेवा","Servicio personal y cercano","خدمة شخصية ودودة"],
      ["Our Story","Наша история","我们的故事","私たちの物語","हमारी कहानी","Nuestra historia","قصتنا"],
      ["Talk to Us","Связаться с нами","联系我们","ご相談ください","हमसे बात करें","Habla con nosotros","تحدث إلينا"],
      ["years of","лет","年","年の","वर्षों की","años de","سنوات من"],
      ["journeys","путешествий","旅程经验","旅の実績","यात्राएँ","viajes","الرحلات"],
      ["Years of experience","Лет опыта","年经验","年の経験","वर्षों का अनुभव","Años de experiencia","سنوات من الخبرة"],
      ["Happy travellers","Довольных путешественников","满意的旅客","満足したお客様","खुश यात्री","Viajeros felices","مسافر سعيد"],
      ["Countries covered","Стран в программе","覆盖国家","対応国数","कवर किए गए देश","Países cubiertos","دولة نغطيها"],
      ["Licensed agency","Лицензированное агентство","持牌旅行社","認可旅行会社","लाइसेंस प्राप्त एजेंसी","Agencia con licencia","وكالة مرخّصة"],
      
      /* ---------- home: explore by experience ---------- */
      ["Choose your mood","Выберите настроение","选择您的心情","気分で選ぶ","अपना मूड चुनें","Elige tu estado de ánimo","اختر مزاجك"],
      ["Explore by","Выбирайте по","按","体験から","अनुभव के अनुसार","Explora por","استكشف حسب"],
      ["Experience","впечатлениям","体验探索","さがす","खोजें","experiencia","التجربة"],
      ["Whether you crave sun, thrills, family time or ancient history, there is a Hirusha journey made for you.","Мечтаете о солнце, острых ощущениях, семейном отдыхе или древней истории — у Hirusha найдётся путешествие для вас.","无论您向往阳光、刺激、家庭时光还是古老历史，Hirusha 都有适合您的旅程。","太陽、スリル、家族の時間、古代の歴史。どんな願いにも、Hirushaにぴったりの旅があります。","चाहे आपको धूप, रोमांच, परिवार के साथ समय या प्राचीन इतिहास पसंद हो, आपके लिए Hirusha की एक यात्रा ज़रूर है।","Ya busques sol, emoción, tiempo en familia o historia antigua, hay un viaje de Hirusha hecho para ti.","سواء كنت تتوق إلى الشمس أو الإثارة أو الوقت مع العائلة أو التاريخ القديم، فهناك رحلة من Hirusha تناسبك."],
      ["Beach Escapes","Пляжный отдых","海滩度假","ビーチ休暇","बीच एस्केप","Escapadas de playa","عطلات الشاطئ"],
      ["Adventure","Приключения","探险","アドベンチャー","रोमांच","Aventura","مغامرة"],
      ["Family Trips","Семейные поездки","家庭旅行","ファミリー旅行","पारिवारिक यात्राएँ","Viajes en familia","رحلات عائلية"],
      ["Culture & Heritage","Культура и наследие","文化与遗产","文化と遺産","संस्कृति और विरासत","Cultura y patrimonio","الثقافة والتراث"],
      ["3 packages","3 тура","3 个套餐","3 パッケージ","3 पैकेज","3 paquetes","3 باقات"],
      
      /* ---------- home: popular packages ---------- */
      ["Fan favourites","Любимые туры","人气之选","人気ランキング","सबके पसंदीदा","Los favoritos","المفضلة لدى الجميع"],
      ["Popular","Популярные","热门","人気の","लोकप्रिय","Paquetes","الباقات"],
      ["Packages@SPAN","туры","套餐","パッケージ","पैकेज","populares","الأكثر طلبًا"],
      ["Hand-built itineraries with hotels, guides and transfers taken care of. Prices are in USD.","Маршруты ручной работы: отели, гиды и трансферы уже включены. Цены указаны в долларах США.","精心设计的行程，酒店、导游和接送均已安排妥当。价格以美元计。","ホテル、ガイド、送迎まで手配済みの手づくりプラン。料金は米ドル表示です。","हाथ से तैयार यात्रा-कार्यक्रम, जिनमें होटल, गाइड और ट्रांसफ़र शामिल हैं। कीमतें अमेरिकी डॉलर में हैं।","Itinerarios diseñados a mano, con hoteles, guías y traslados incluidos. Los precios están en USD.","برامج مصمَّمة يدويًا مع الفنادق والمرشدين والتنقلات. الأسعار بالدولار الأمريكي."],
      ["Beach","Пляж","海滩","ビーチ","बीच","Playa","شاطئ"],
      ["Family","Семья","家庭","ファミリー","परिवार","Familia","عائلي"],
      ["Culture","Культура","文化","文化","संस्कृति","Cultura","ثقافة"],
      ["from","от","起","から","से","desde","ابتداءً من"],
      ["3 days","3 дня","3天","3日間","3 दिन","3 días","3 أيام"],
      ["4 days","4 дня","4天","4日間","4 दिन","4 días","4 أيام"],
      ["7 days","7 дней","7天","7日間","7 दिन","7 días","7 أيام"],
      ["View package","Подробнее","查看套餐","詳細を見る","पैकेज देखें","Ver paquete","عرض الباقة"],
      ["View All Packages","Все туры","查看全部套餐","すべてのパッケージ","सभी पैकेज देखें","Ver todos los paquetes","عرض كل الباقات"],
      ["Galle Fort & South Coast","Форт Галле и южное побережье","加勒古堡与南海岸","ゴール要塞と南海岸","गाले क़िला और दक्षिणी तट","Fuerte de Galle y costa sur","قلعة غالي والساحل الجنوبي"],
      ["Mirissa Beach Escape","Пляжный отдых в Мириссе","米瑞莎海滩度假","ミリッサ・ビーチ休暇","मिरिस्सा बीच एस्केप","Escapada a la playa de Mirissa","عطلة شاطئ ميريسا"],
      ["Arugam Bay Surf Retreat","Сёрф-ретрит в Аругам-Бей","阿鲁甘湾冲浪度假营","アルガムベイ・サーフリトリート","अरुगम बे सर्फ़ रिट्रीट","Retiro de surf en Arugam Bay","ملاذ ركوب الأمواج في خليج أروغام"],
      ["Yala National Park Safari","Сафари в национальном парке Яла","亚拉国家公园野生动物游","ヤラ国立公園サファリ","यला राष्ट्रीय उद्यान सफ़ारी","Safari en el Parque Nacional de Yala","سفاري متنزه يالا الوطني"],
      ["Ella Train & Hike","Поезд и треккинг в Элле","埃拉火车与徒步","エラの列車旅とハイキング","एला ट्रेन और ट्रेक","Tren y senderismo en Ella","قطار إيلا والمشي"],
      ["Mirissa Whale Watching","Наблюдение за китами в Мириссе","米瑞莎观鲸","ミリッサ・ホエールウォッチング","मिरिस्सा व्हेल वॉचिंग","Avistamiento de ballenas en Mirissa","مشاهدة الحيتان في ميريسا"],
      ["Kandy Cultural Family Trip","Семейная культурная поездка в Канди","康提文化家庭之旅","キャンディ文化ファミリー旅行","कैंडी सांस्कृतिक पारिवारिक यात्रा","Viaje cultural en familia a Kandy","رحلة عائلية ثقافية إلى كاندي"],
      ["Nuwara Eliya Tea Country","Чайный край Нувара-Элия","努沃勒埃利耶茶乡","ヌワラエリヤ茶畑の旅","नुवारा एलिया चाय देश","Tierra de té de Nuwara Eliya","أرض الشاي في نوارا إليا"],
      ["Sigiriya & Dambulla Family Tour","Семейный тур: Сигирия и Дамбулла","锡吉里耶与丹布勒家庭之旅","シーギリヤ＆ダンブッラ ファミリーツアー","सिगिरिया और दांबुला पारिवारिक टूर","Tour familiar Sigiriya y Dambulla","جولة عائلية في سيجيريا ودامبولا"],
      ["Anuradhapura Sacred City","Священный город Анурадхапура","阿努拉德普勒圣城","聖地アヌラーダプラ","अनुराधापुरा पवित्र नगर","Ciudad sagrada de Anuradhapura","مدينة أنورادابورا المقدسة"],
      ["Sigiriya Rock & Dambulla Cave Temple","Скала Сигирия и пещерный храм Дамбулла","锡吉里耶岩与丹布勒石窟寺","シーギリヤ・ロックとダンブッラ石窟寺院","सिगिरिया रॉक और दांबुला गुफ़ा मंदिर","Roca de Sigiriya y templo de las cuevas de Dambulla","صخرة سيجيريا ومعبد كهف دامبولا"],
      ["Cultural Triangle Grand Tour","Большой тур по Культурному треугольнику","文化金三角环游","文化三角地帯グランドツアー","सांस्कृतिक त्रिकोण ग्रैंड टूर","Gran tour del Triángulo Cultural","الجولة الكبرى في المثلث الثقافي"],
      /* short descriptions (home cards) */
      ["Beach hotel, breakfast, Galle Fort walking tour and transport.","Пляжный отель, завтрак, пешая экскурсия по форту Галле и транспорт.","海滩酒店、早餐、加勒古堡徒步游览及交通。","ビーチホテル、朝食、ゴール要塞ウォーキングツアー、交通。","बीच होटल, नाश्ता, गाले क़िले का पैदल दौरा और परिवहन।","Hotel de playa, desayuno, visita a pie por el Fuerte de Galle y transporte.","فندق على الشاطئ، إفطار، جولة سيرًا على الأقدام في قلعة غالي ونقل."],
      ["Jeep safari, tented camp, all meals, park tickets and a ranger guide.","Джип-сафари, палаточный лагерь, всё питание, билеты в парк и гид-рейнджер.","吉普车野生动物游、帐篷营地、全部餐食、公园门票及护林员导游。","ジープサファリ、テントキャンプ、全食事、公園入場券、レンジャーガイド。","जीप सफ़ारी, टेंट कैंप, सभी भोजन, पार्क टिकट और रेंजर गाइड।","Safari en jeep, campamento con tiendas, todas las comidas, entradas al parque y guía guardabosques.","سفاري بسيارة جيب، مخيم خيام، جميع الوجبات، تذاكر المتنزه ومرشد حرّاس."],
      ["Scenic train ride, Nine Arches Bridge visit, hiking guide, hotel and breakfast.","Живописная поездка на поезде, посещение моста Девяти арок, гид для треккинга, отель и завтрак.","风景火车之旅、参观九拱桥、徒步向导、酒店和早餐。","景色の良い列車旅、ナインアーチ橋見学、ハイキングガイド、ホテルと朝食。","सुंदर ट्रेन यात्रा, नौ मेहराब पुल की सैर, ट्रेकिंग गाइड, होटल और नाश्ता।","Viaje panorámico en tren, visita al Puente de los Nueve Arcos, guía de senderismo, hotel y desayuno.","رحلة قطار خلابة، زيارة جسر الأقواس التسعة، مرشد للمشي، فندق وإفطار."],
      ["Temple of the Tooth visit, Kandyan dance show, lake walk, hotel and meals.","Посещение храма Зуба, шоу канди-танцев, прогулка по озеру, отель и питание.","参观佛牙寺、康提舞蹈表演、湖畔漫步、酒店和餐食。","仏歯寺見学、キャンディアン・ダンスショー、湖畔の散策、ホテルと食事。","दंत मंदिर दर्शन, कैंडियन नृत्य शो, झील की सैर, होटल और भोजन।","Visita al Templo del Diente, espectáculo de danza kandyana, paseo por el lago, hotel y comidas.","زيارة معبد السن، عرض الرقص الكاندي، نزهة بجانب البحيرة، فندق ووجبات."],
      ["Sigiriya rock climb guide, Dambulla Cave Temple tickets, hotel and meals.","Гид для подъёма на скалу Сигирия, билеты в пещерный храм Дамбулла, отель и питание.","锡吉里耶岩攀登向导、丹布勒石窟寺门票、酒店和餐食。","シーギリヤ・ロック登頂ガイド、ダンブッラ石窟寺院の入場券、ホテルと食事。","सिगिरिया रॉक चढ़ाई गाइड, दांबुला गुफ़ा मंदिर के टिकट, होटल और भोजन।","Guía para subir a la Roca de Sigiriya, entradas al templo de las cuevas de Dambulla, hotel y comidas.","مرشد لتسلق صخرة سيجيريا، تذاكر معبد كهف دامبولا، فندق ووجبات."],
      ["Anuradhapura, Dambulla, Sigiriya and Kandy with hotels, guide and all entry tickets.","Анурадхапура, Дамбулла, Сигирия и Канди: отели, гид и все входные билеты.","阿努拉德普勒、丹布勒、锡吉里耶和康提，含酒店、导游及全部门票。","アヌラーダプラ、ダンブッラ、シーギリヤ、キャンディ。ホテル、ガイド、全入場券付き。","अनुराधापुरा, दांबुला, सिगिरिया और कैंडी — होटल, गाइड और सभी प्रवेश टिकट सहित।","Anuradhapura, Dambulla, Sigiriya y Kandy con hoteles, guía y todas las entradas.","أنورادابورا ودامبولا وسيجيريا وكاندي مع الفنادق والمرشد وجميع تذاكر الدخول."],
      
      /* ---------- home: how it works + CTA ---------- */
      ["Simple & stress-free","Просто и без стресса","简单无忧","シンプルで安心","आसान और तनाव-मुक्त","Sencillo y sin estrés","بسيط وخالٍ من التوتر"],
      ["How It","Как это","预订","ご利用","यह कैसे","Cómo","كيف"],
      ["Works","работает","流程","の流れ","काम करता है","funciona","نعمل"],
      ["Pick your journey","Выберите путешествие","选择您的旅程","旅を選ぶ","अपनी यात्रा चुनें","Elige tu viaje","اختر رحلتك"],
      ["Browse our beach, adventure, family and heritage packages, or ask for a custom tour.","Выберите пляжный, приключенческий, семейный или культурный тур — или закажите индивидуальный.","浏览我们的海滩、探险、家庭和遗产套餐，或定制专属行程。","ビーチ、アドベンチャー、ファミリー、遺産のパッケージからお選びいただくか、オーダーメイドツアーもご相談ください。","हमारे बीच, एडवेंचर, फ़ैमिली और विरासत पैकेज देखें, या कस्टम टूर माँगें।","Explora nuestros paquetes de playa, aventura, familia y patrimonio, o pide un tour a medida.","تصفّح باقات الشاطئ والمغامرة والعائلة والتراث، أو اطلب جولة مخصصة."],
      ["Send a request","Отправьте заявку","发送请求","リクエストを送る","अनुरोध भेजें","Envía una solicitud","أرسل طلبًا"],
      ["Fill in the short booking form and we will reply within 24 hours with a personalised quote.","Заполните короткую форму бронирования — мы ответим в течение 24 часов с персональным предложением.","填写简短的预订表格，我们将在24小时内回复并提供个性化报价。","簡単な予約フォームにご記入ください。24時間以内に、お客様専用のお見積りをご返信します。","छोटा बुकिंग फ़ॉर्म भरें, हम 24 घंटे के भीतर आपके लिए व्यक्तिगत कोटेशन के साथ जवाब देंगे।","Rellena el breve formulario de reserva y te responderemos en 24 horas con un presupuesto personalizado.","املأ نموذج الحجز القصير وسنردّ خلال 24 ساعة بعرض سعر مخصص."],
      ["Pack & enjoy","Собирайте чемодан и наслаждайтесь","收拾行囊，尽情享受","荷造りして楽しむ","पैक करें और आनंद लें","Haz la maleta y disfruta","احزم حقيبتك واستمتع"],
      ["We handle hotels, guides and transport while you enjoy the trip, with support 24/7.","Отели, гиды и транспорт — наша забота, а вам остаётся наслаждаться поездкой. Поддержка 24/7.","酒店、导游和交通由我们负责，您只管尽情享受旅程，全程24小时支持。","ホテル、ガイド、交通はお任せください。旅をお楽しみいただく間も、24時間サポートします。","होटल, गाइड और परिवहन हम संभालते हैं, आप यात्रा का आनंद लें — 24/7 सहायता के साथ।","Nosotros nos encargamos de hoteles, guías y transporte mientras disfrutas del viaje, con asistencia 24/7.","نتولى الفنادق والمرشدين والنقل بينما تستمتع برحلتك، مع دعم على مدار الساعة."],
      ["Flights","Авиабилеты","机票","航空券","उड़ानें","Vuelos","رحلات جوية"],
      ["Hotels","Отели","酒店","ホテル","होटल","Hoteles","فنادق"],
      ["Transport","Транспорт","交通","交通手段","परिवहन","Transporte","النقل"],
      ["Visa help","Помощь с визой","签证协助","ビザサポート","वीज़ा सहायता","Ayuda con visados","مساعدة في التأشيرة"],
      ["Licensed guides","Лицензированные гиды","持证导游","公認ガイド","लाइसेंस प्राप्त गाइड","Guías autorizados","مرشدون مرخّصون"],
      ["Ready for your next adventure?","Готовы к новому приключению?","准备好迎接下一次冒险了吗？","次の冒険の準備はできましたか？","अपने अगले रोमांच के लिए तैयार हैं?","¿Listo para tu próxima aventura?","هل أنت مستعد لمغامرتك القادمة؟"],
      ["Send a booking request today and we will reply within 24 hours.","Отправьте заявку на бронирование сегодня — мы ответим в течение 24 часов.","今天就提交预订请求，我们将在24小时内回复。","本日ご予約リクエストを送信いただければ、24時間以内にご返信します。","आज ही बुकिंग अनुरोध भेजें, हम 24 घंटे के भीतर जवाब देंगे।","Envía hoy tu solicitud de reserva y te responderemos en 24 horas.","أرسل طلب حجز اليوم وسنردّ خلال 24 ساعة."],
      ["Plan My Trip","Спланировать поездку","规划我的旅行","旅行を計画する","मेरी यात्रा की योजना बनाएँ","Planear mi viaje","خطط لرحلتي"],
      ["Browse Packages","Смотреть туры","浏览套餐","パッケージを見る","पैकेज देखें","Ver paquetes","تصفّح الباقات"],
      
      /* ---------- about page ---------- */
      ["Our story","Наша история","我们的故事","私たちのストーリー","हमारी कहानी","Nuestra historia","قصتنا"],
      ["About@H1","О","关于","私たちに","हमारे","Sobre","من"],
      ["Us","нас","我们","ついて","बारे में","nosotros","نحن"],
      ["A family-run travel agency from Kurunegala, sharing the beauty of Sri Lanka and the world with every traveller.","Семейное туристическое агентство из Курунегалы, которое дарит каждому путешественнику красоту Шри-Ланки и всего мира.","一家来自库鲁内加拉的家庭旅行社，与每一位旅客分享斯里兰卡和世界的美好。","クルネーガラの家族経営の旅行会社。スリランカと世界の美しさを、すべての旅行者に。","कुरुनेगला की एक पारिवारिक ट्रैवल एजेंसी, जो हर यात्री के साथ श्रीलंका और दुनिया की खूबसूरती साझा करती है।","Una agencia de viajes familiar de Kurunegala que comparte la belleza de Sri Lanka y del mundo con cada viajero.","وكالة سفر عائلية من كوروناغالا تشارك جمال سريلانكا والعالم مع كل مسافر."],
      ["Who we are","Кто мы","我们是谁","私たちについて","हम कौन हैं","Quiénes somos","من نحن"],
      ["Family-Run,","Семейное дело,","家庭经营，","家族経営、","पारिवारिक संचालन,","Negocio familiar,","شركة عائلية،"],
      ["Traveller-Loved","любимое путешественниками","深受旅客喜爱","旅行者に愛される","यात्रियों का प्रिय","querido por los viajeros","يحبها المسافرون"],
      ["We know the island because we live here. That is why our packages, from golden beaches and misty tea country to ancient cities and wild safaris, are chosen by local experts and planned around you.","Мы знаем остров, потому что живём здесь. Поэтому наши туры — от золотых пляжей и туманных чайных гор до древних городов и диких сафари — подбирают местные эксперты и планируют вокруг вас.","我们了解这座岛屿，因为我们就生活在这里。因此，从金色沙滩、云雾茶乡到古老城市和野外探险，我们的每个套餐都由当地专家挑选，并围绕您来规划。","私たちはこの島に暮らしているからこそ、島を知り尽くしています。黄金色のビーチや霧の茶畑から古代都市、ワイルドなサファリまで、地元の専門家が選び、あなたに合わせて計画します。","हम इस द्वीप को जानते हैं क्योंकि हम यहीं रहते हैं। इसीलिए सुनहरे समुद्र तटों और धुंध भरे चाय बागानों से लेकर प्राचीन शहरों और जंगली सफ़ारी तक हमारे पैकेज स्थानीय विशेषज्ञों द्वारा चुने जाते हैं और आपके अनुसार तैयार किए जाते हैं।","Conocemos la isla porque vivimos aquí. Por eso nuestros paquetes, desde playas doradas y brumosas tierras de té hasta ciudades antiguas y safaris salvajes, los eligen expertos locales y se planifican a tu medida.","نعرف الجزيرة لأننا نعيش فيها. لهذا يختار خبراء محليون باقاتنا، من الشواطئ الذهبية وأرض الشاي الضبابية إلى المدن القديمة والسفاري البرية، ونخطّطها حولك."],
      ["See Our Packages","Смотреть наши туры","查看我们的套餐","パッケージを見る","हमारे पैकेज देखें","Ver nuestros paquetes","اطلع على باقاتنا"],
      ["What drives us","Что нас вдохновляет","我们的动力","私たちの原動力","हमें क्या प्रेरित करता है","Qué nos impulsa","ما يحرّكنا"],
      ["Our Vision &","Наше видение и","我们的愿景与","私たちのビジョンと","हमारा विज़न और","Nuestra visión y","رؤيتنا و"],
      ["Mission","миссия","使命","ミッション","मिशन","misión","رسالتنا"],
      ["Our Vision","Наше видение","我们的愿景","私たちのビジョン","हमारा विज़न","Nuestra visión","رؤيتنا"],
      ["To be Sri Lanka's most loved travel agency, sharing the beauty of our island and the world with every traveller.","Стать самым любимым туристическим агентством Шри-Ланки и делиться красотой нашего острова и всего мира с каждым путешественником.","成为斯里兰卡最受喜爱的旅行社，与每一位旅客分享我们岛屿和世界的美好。","スリランカで最も愛される旅行会社として、島と世界の美しさをすべての旅行者に届けること。","श्रीलंका की सबसे पसंदीदा ट्रैवल एजेंसी बनना, जो हर यात्री के साथ हमारे द्वीप और दुनिया की खूबसूरती साझा करे।","Ser la agencia de viajes más querida de Sri Lanka, compartiendo la belleza de nuestra isla y del mundo con cada viajero.","أن نكون وكالة السفر الأحب في سريلانكا، نشارك جمال جزيرتنا والعالم مع كل مسافر."],
      ["Our Mission","Наша миссия","我们的使命","私たちのミッション","हमारा मिशन","Nuestra misión","رسالتنا"],
      ["To deliver affordable, safe and personalised journeys while supporting local communities and protecting nature.","Дарить доступные, безопасные и персонализированные путешествия, поддерживая местные сообщества и защищая природу.","提供实惠、安全、个性化的旅程，同时支持当地社区并保护自然。","手頃で安全、一人ひとりに合わせた旅を提供し、地域社会を支え、自然を守ること。","किफ़ायती, सुरक्षित और व्यक्तिगत यात्राएँ देना, साथ ही स्थानीय समुदायों का समर्थन करना और प्रकृति की रक्षा करना।","Ofrecer viajes asequibles, seguros y personalizados, apoyando a las comunidades locales y protegiendo la naturaleza.","تقديم رحلات ميسورة وآمنة ومخصصة مع دعم المجتمعات المحلية وحماية الطبيعة."],
      ["What we stand for","Наши принципы","我们秉持的理念","私たちの信条","हम किन बातों के लिए खड़े हैं","Lo que defendemos","ما نؤمن به"],
      ["Our","Наши","我们的","私たちの","हमारे","Nuestros","قيمنا"],
      ["Values","ценности","价值观","価値観","मूल्य","valores","الأساسية"],
      ["Six simple promises we keep on every journey.","Шесть простых обещаний, которые мы выполняем в каждой поездке.","我们在每一次旅程中信守的六项承诺。","すべての旅でお約束する、6つのシンプルな約束。","छह सरल वादे जो हम हर यात्रा में निभाते हैं।","Seis promesas sencillas que cumplimos en cada viaje.","ست وعود بسيطة نلتزم بها في كل رحلة."],
      ["Safe & Secure","Безопасность и надёжность","安全有保障","安全・安心","सुरक्षित और भरोसेमंद","Seguro y protegido","آمن ومضمون"],
      ["Licensed guides, trusted hotels and a team that is always one phone call away.","Лицензированные гиды, надёжные отели и команда, которая всегда на расстоянии звонка.","持证导游、可靠酒店，团队随时一个电话即可联系。","公認ガイド、信頼できるホテル、そしていつでも電話一本でつながるチーム。","लाइसेंस प्राप्त गाइड, भरोसेमंद होटल और एक ऐसी टीम जो हमेशा बस एक फ़ोन कॉल दूर है।","Guías autorizados, hoteles de confianza y un equipo siempre a una llamada de distancia.","مرشدون مرخّصون وفنادق موثوقة وفريق على بُعد مكالمة هاتفية دائمًا."],
      ["Comfort You Can Trust","Комфорт, которому можно доверять","值得信赖的舒适","安心の快適さ","भरोसेमंद आराम","Comodidad en la que confiar","راحة تثق بها"],
      ["Comfortable stays and smooth transfers, so every holiday feels easy and memorable.","Комфортное проживание и удобные трансферы — чтобы каждый отпуск был лёгким и запоминающимся.","舒适的住宿和顺畅的接送，让每一次假期都轻松难忘。","快適な宿泊とスムーズな送迎で、どの休暇も気軽で思い出深いものに。","आरामदायक ठहराव और सुगम ट्रांसफ़र, ताकि हर छुट्टी आसान और यादगार लगे।","Alojamientos cómodos y traslados fluidos para que cada vacación sea fácil e inolvidable.","إقامة مريحة وتنقلات سلسة لتكون كل عطلة سهلة ولا تُنسى."],
      ["Personal Service","Персональный сервис","个性化服务","パーソナルなサービス","व्यक्तिगत सेवा","Servicio personal","خدمة شخصية"],
      ["As a family-run agency we shape every trip around you, not around a template.","Как семейное агентство, мы строим каждую поездку вокруг вас, а не по шаблону.","作为家庭经营的旅行社，我们围绕您来设计每一次旅行，而不是套用模板。","家族経営だからこそ、テンプレートではなくお客様に合わせて旅をつくります。","एक पारिवारिक एजेंसी के रूप में हम हर यात्रा आपके अनुसार ढालते हैं, किसी टेम्पलेट के अनुसार नहीं।","Como agencia familiar, diseñamos cada viaje a tu medida, no a partir de una plantilla.","بصفتنا وكالة عائلية، نصمّم كل رحلة حولك لا حول قالب جاهز."],
      ["Local Communities","Местные сообщества","本地社区","地域コミュニティ","स्थानीय समुदाय","Comunidades locales","المجتمعات المحلية"],
      ["We support local communities and share the island through the people who call it home.","Мы поддерживаем местные сообщества и показываем остров глазами тех, для кого он — дом.","我们支持当地社区，通过世代生活于此的人们来展现这座岛屿。","地域コミュニティを支え、この島を故郷とする人々を通して島の魅力をお伝えします。","हम स्थानीय समुदायों का समर्थन करते हैं और इस द्वीप को उन लोगों के माध्यम से दिखाते हैं जो इसे अपना घर कहते हैं।","Apoyamos a las comunidades locales y mostramos la isla a través de quienes la llaman hogar.","ندعم المجتمعات المحلية ونقدّم الجزيرة من خلال الناس الذين يعتبرونها وطنهم."],
      ["Protecting Nature","Защита природы","保护自然","自然の保護","प्रकृति की रक्षा","Protegemos la naturaleza","حماية الطبيعة"],
      ["From safaris to tea country, we help travellers enjoy nature while protecting it.","От сафари до чайных гор — мы помогаем путешественникам наслаждаться природой и беречь её.","从野生动物之旅到茶乡，我们帮助旅客在享受自然的同时保护自然。","サファリから茶畑まで、自然を楽しみながら守る旅をお手伝いします。","सफ़ारी से लेकर चाय बागानों तक, हम यात्रियों को प्रकृति का आनंद लेने के साथ उसकी रक्षा करने में मदद करते हैं।","Del safari a las tierras de té, ayudamos a los viajeros a disfrutar de la naturaleza protegiéndola.","من السفاري إلى أرض الشاي، نساعد المسافرين على الاستمتاع بالطبيعة مع حمايتها."],
      ["Honest Pricing","Честные цены","价格透明","明朗な料金","ईमानदार कीमतें","Precios honestos","أسعار صادقة"],
      ["Affordable all-inclusive packages with no hidden costs, quoted clearly up front.","Доступные пакеты «всё включено» без скрытых платежей — цена называется сразу.","实惠的全包套餐，无隐藏费用，报价一目了然。","追加料金のない手頃なオールインクルーシブ・プランを、最初に明確にお見積りします。","बिना छिपे शुल्क के किफ़ायती ऑल-इन्क्लूसिव पैकेज, जिनकी कीमत शुरू में ही साफ़ बता दी जाती है।","Paquetes todo incluido asequibles, sin costes ocultos y con precios claros desde el principio.","باقات شاملة وبأسعار مناسبة دون رسوم خفية، مع عرض سعر واضح منذ البداية."],
      ["Everything in one place","Всё в одном месте","一站式服务","すべてをひとつの窓口で","सब कुछ एक ही जगह","Todo en un solo lugar","كل شيء في مكان واحد"],
      ["What We Do","Что мы делаем","我们为您","私たちが","हम आपके लिए","Qué hacemos","ما نفعله"],
      ["For You","для вас","提供的服务","お手伝いできること","क्या करते हैं","por ti","من أجلك"],
      ["From the first idea to the last goodbye at the airport, our team has you covered.","От первой идеи до последнего прощания в аэропорту — наша команда рядом с вами.","从最初的构想到机场的最后道别，我们的团队全程为您服务。","最初のアイデアから空港での最後のお別れまで、チームがしっかりサポートします。","पहले विचार से लेकर हवाई अड्डे पर आख़िरी अलविदा तक, हमारी टीम आपके साथ है।","Desde la primera idea hasta la última despedida en el aeropuerto, nuestro equipo te acompaña.","من الفكرة الأولى حتى وداع المطار الأخير، فريقنا معك في كل خطوة."],
      ["Beach, adventure, family and culture & heritage packages across Sri Lanka.","Пляжные, приключенческие, семейные и культурные туры по всей Шри-Ланке.","遍布斯里兰卡的海滩、探险、家庭及文化遗产套餐。","スリランカ全土のビーチ、アドベンチャー、ファミリー、文化・遺産パッケージ。","पूरे श्रीलंका में बीच, एडवेंचर, फ़ैमिली और संस्कृति व विरासत पैकेज।","Paquetes de playa, aventura, familia y cultura y patrimonio por toda Sri Lanka.","باقات الشاطئ والمغامرة والعائلة والثقافة والتراث في أنحاء سريلانكا."],
      ["Flights & Hotels","Авиабилеты и отели","机票与酒店","航空券とホテル","उड़ानें और होटल","Vuelos y hoteles","الطيران والفنادق"],
      ["We can arrange your flights and hotels as part of a complete trip.","Мы можем организовать ваши перелёты и отели в рамках полного путешествия.","我们可为您安排机票和酒店，打造完整行程。","航空券とホテルの手配も、旅行全体の一部としてお任せいただけます。","हम एक संपूर्ण यात्रा के हिस्से के रूप में आपकी उड़ानें और होटल व्यवस्थित कर सकते हैं।","Podemos organizar tus vuelos y hoteles como parte de un viaje completo.","يمكننا ترتيب رحلات الطيران والفنادق كجزء من رحلة متكاملة."],
      ["Transport & Guides","Транспорт и гиды","交通与导游","交通とガイド","परिवहन और गाइड","Transporte y guías","النقل والمرشدون"],
      ["Comfortable transport and licensed guides for every day of your journey.","Комфортный транспорт и лицензированные гиды на каждый день поездки.","舒适的交通和持证导游，陪伴您旅程的每一天。","旅のすべての日に、快適な交通手段と公認ガイドをご用意します。","आपकी यात्रा के हर दिन के लिए आरामदायक परिवहन और लाइसेंस प्राप्त गाइड।","Transporte cómodo y guías autorizados para cada día de tu viaje.","وسائل نقل مريحة ومرشدون مرخّصون لكل يوم من رحلتك."],
      ["Visa Guidance","Визовая консультация","签证指导","ビザのご案内","वीज़ा मार्गदर्शन","Asesoría de visados","إرشادات التأشيرة"],
      ["Visa types, processing times and fees for popular destinations, confirmed by our team.","Типы виз, сроки оформления и сборы для популярных направлений — с подтверждением нашей команды.","热门目的地的签证类型、办理时间和费用，由我们的团队确认。","人気の渡航先のビザの種類、処理期間、手数料を、スタッフが確認してご案内します。","लोकप्रिय गंतव्यों के लिए वीज़ा के प्रकार, प्रोसेसिंग समय और शुल्क, जिनकी पुष्टि हमारी टीम करती है।","Tipos de visado, plazos y tarifas de los destinos más populares, confirmados por nuestro equipo.","أنواع التأشيرات ومدد المعالجة والرسوم للوجهات الشائعة، يؤكدها فريقنا."],
      ["Custom Tours","Индивидуальные туры","定制旅游","オーダーメイドツアー","कस्टम टूर","Tours a medida","جولات مخصصة"],
      ["Have your own plan in mind? Choose a Custom Tour and we will build it with you.","Есть своя идея? Выберите индивидуальный тур, и мы составим его вместе с вами.","心中已有计划？选择定制旅游，我们与您一起打造。","ご自身のプランがありますか？オーダーメイドツアーを選べば、一緒に作り上げます。","क्या आपके मन में अपनी योजना है? कस्टम टूर चुनें और हम इसे आपके साथ बनाएँगे।","¿Tienes tu propio plan? Elige un Tour a medida y lo construiremos contigo.","هل لديك خطة خاصة؟ اختر جولة مخصصة وسنبنيها معك."],
      ["Our emergency line is open around the clock for travellers needing urgent help.","Наша экстренная линия работает круглосуточно для путешественников, которым нужна срочная помощь.","我们的紧急热线全天候开放，为需要紧急帮助的旅客服务。","緊急のサポートが必要な旅行者のために、緊急ダイヤルは24時間対応しています。","तुरंत मदद चाहने वाले यात्रियों के लिए हमारी आपातकालीन लाइन चौबीसों घंटे खुली रहती है।","Nuestra línea de emergencias está abierta las 24 horas para viajeros que necesitan ayuda urgente.","خط الطوارئ لدينا مفتوح على مدار الساعة للمسافرين الذين يحتاجون إلى مساعدة عاجلة."],
      ["Come say hello","Заходите знакомиться","欢迎来访","お気軽にお越しください","आइए, नमस्ते कहें","Ven a saludarnos","تفضّل بزيارتنا"],
      ["Visit Our Office","Посетите наш офис","参观我们的办公室","オフィスへのご来訪","हमारे कार्यालय आएँ","Visita nuestra oficina","زر مكتبنا"],
      ["Get in Touch","Связаться с нами","联系我们","お問い合わせ","संपर्क करें","Ponte en contacto","تواصل معنا"],
      
      /* ---------- contact page ---------- */
      ["We'd love to hear from you","Будем рады услышать вас","期待您的来信","ご連絡をお待ちしております","हमें आपसे सुनकर खुशी होगी","Nos encantaría saber de ti","يسعدنا سماع رأيك"],
      ["Contact &","Контакты и","联系与","お問い合わせ・","संपर्क और","Contacto y","اتصل"],
      ["Booking","бронирование","预订","ご予約","बुकिंग","reservas","واحجز"],
      ["Tell us where you want to go and our team will reply within 24 hours with a personalised quote.","Расскажите, куда хотите поехать, и наша команда ответит в течение 24 часов с персональным предложением.","告诉我们您想去哪里，我们的团队将在24小时内回复并提供个性化报价。","行きたい場所をお知らせください。24時間以内に、お客様専用のお見積りをご返信します。","हमें बताएँ कि आप कहाँ जाना चाहते हैं, हमारी टीम 24 घंटे के भीतर व्यक्तिगत कोटेशन के साथ जवाब देगी।","Dinos adónde quieres ir y nuestro equipo te responderá en 24 horas con un presupuesto personalizado.","أخبرنا إلى أين تريد الذهاب وسيردّ فريقنا خلال 24 ساعة بعرض سعر مخصص."],
      ["Call us","Позвоните нам","致电我们","お電話","हमें कॉल करें","Llámanos","اتصل بنا"],
      ["Email us","Напишите нам","发邮件给我们","メール","हमें ईमेल करें","Escríbenos","راسلنا"],
      ["Opening hours","Часы работы","营业时间","営業時間","खुलने का समय","Horario de apertura","ساعات العمل"],
      ["Reserve your journey","Забронируйте путешествие","预订您的旅程","旅の予約","अपनी यात्रा आरक्षित करें","Reserva tu viaje","احجز رحلتك"],
      ["Booking Request","Заявка на бронирование","预订请求","ご予約リクエスト","बुकिंग अनुरोध","Solicitud de reserva","طلب حجز"],
      ["Fill in the form and our team will reply within 24 hours with a personalised quote.","Заполните форму — наша команда ответит в течение 24 часов с персональным предложением.","填写表格，我们的团队将在24小时内回复并提供个性化报价。","フォームにご記入ください。24時間以内に、お客様専用のお見積りをご返信します。","फ़ॉर्म भरें, हमारी टीम 24 घंटे के भीतर व्यक्तिगत कोटेशन के साथ जवाब देगी।","Rellena el formulario y nuestro equipo te responderá en 24 horas con un presupuesto personalizado.","املأ النموذج وسيردّ فريقنا خلال 24 ساعة بعرض سعر مخصص."],
      ["Your details","Ваши данные","您的信息","お客様情報","आपका विवरण","Tus datos","بياناتك"],
      ["Full Name","Полное имя","姓名","お名前","पूरा नाम","Nombre completo","الاسم الكامل"],
      ["Email Address","Адрес эл. почты","电子邮箱","メールアドレス","ईमेल पता","Correo electrónico","البريد الإلكتروني"],
      ["Phone / WhatsApp","Телефон / WhatsApp","电话 / WhatsApp","電話 / WhatsApp","फ़ोन / WhatsApp","Teléfono / WhatsApp","الهاتف / واتساب"],
      ["optional","необязательно","选填","任意","वैकल्पिक","opcional","اختياري"],
      ["Travel Date","Дата поездки","出行日期","旅行日","यात्रा की तारीख","Fecha de viaje","تاريخ السفر"],
      ["Your trip","Ваша поездка","您的行程","ご旅行について","आपकी यात्रा","Tu viaje","رحلتك"],
      ["Package Preference","Предпочтительный тур","套餐偏好","希望のパッケージ","पैकेज की पसंद","Paquete preferido","الباقة المفضلة"],
      ["Beach Package","Пляжный тур","海滩套餐","ビーチパッケージ","बीच पैकेज","Paquete de playa","باقة الشاطئ"],
      ["Adventure Package","Приключенческий тур","探险套餐","アドベンチャーパッケージ","एडवेंचर पैकेज","Paquete de aventura","باقة المغامرة"],
      ["Family Package","Семейный тур","家庭套餐","ファミリーパッケージ","फ़ैमिली पैकेज","Paquete familiar","باقة العائلة"],
      ["Custom Tour","Индивидуальный тур","定制旅游","オーダーメイドツアー","कस्टम टूर","Tour a medida","جولة مخصصة"],
      ["Travellers","Путешественники","旅客人数","旅行者数","यात्री","Viajeros","المسافرون"],
      ["Services Needed","Нужные услуги","所需服务","必要なサービス","आवश्यक सेवाएँ","Servicios necesarios","الخدمات المطلوبة"],
      ["Flight","Авиаперелёт","机票","航空券","उड़ान","Vuelo","طيران"],
      ["Hotel","Отель","酒店","ホテル","होटल","Hotel","فندق"],
      ["Anything else?","Что-то ещё?","还有其他需求吗？","その他ご要望は？","कुछ और?","¿Algo más?","هل من شيء آخر؟"],
      ["Message","Сообщение","留言","メッセージ","संदेश","Mensaje","الرسالة"],
      ["Tell us about your dream trip, special occasions or requests…","Расскажите о вашей поездке мечты, особых событиях или пожеланиях…","请告诉我们您的梦想之旅、特殊场合或需求……","理想の旅、特別な記念日、ご要望などをお聞かせください…","अपनी सपनों की यात्रा, विशेष अवसरों या अनुरोधों के बारे में बताएँ…","Cuéntanos sobre tu viaje soñado, ocasiones especiales o peticiones…","أخبرنا عن رحلة أحلامك أو مناسباتك الخاصة أو طلباتك…"],
      ["e.g. Nimal Perera","напр., Нимал Перера","例如：Nimal Perera","例：Nimal Perera","जैसे: निमल परेरा","p. ej., Nimal Perera","مثال: نيمال بيريرا"],
      ["Submit Request","Отправить заявку","提交请求","リクエストを送信","अनुरोध भेजें","Enviar solicitud","إرسال الطلب"],
      ["Reset","Сбросить","重置","リセット","रीसेट","Restablecer","إعادة تعيين"],
      ["Your details are only used to prepare your quote.","Ваши данные используются только для подготовки предложения.","您的信息仅用于准备报价。","お客様の情報はお見積り作成のみに使用します。","आपका विवरण केवल आपका कोटेशन तैयार करने के लिए उपयोग किया जाता है।","Tus datos solo se usan para preparar tu presupuesto.","تُستخدم بياناتك فقط لإعداد عرض السعر."],
      ["Reply within 24 hours","Ответим в течение 24 часов","24小时内回复","24時間以内にご返信","24 घंटे में जवाब","Respuesta en 24 horas","نردّ خلال 24 ساعة"],
      ["Personalised, all-inclusive quotes","Персональные предложения «всё включено»","个性化全包报价","オーダーメイドのオールインクルーシブ見積り","व्यक्तिगत, ऑल-इन्क्लूसिव कोटेशन","Presupuestos personalizados y todo incluido","عروض أسعار مخصصة وشاملة"],
      ["Local experts and licensed guides","Местные эксперты и лицензированные гиды","本地专家与持证导游","地元の専門家と公認ガイド","स्थानीय विशेषज्ञ और लाइसेंस प्राप्त गाइड","Expertos locales y guías autorizados","خبراء محليون ومرشدون مرخّصون"],
      ["10+ years of happy travellers","Более 10 лет довольных путешественников","10 多年的满意旅客口碑","10年以上の実績と満足のお客様","10+ वर्षों से खुश यात्री","Más de 10 años de viajeros felices","أكثر من 10 سنوات من المسافرين السعداء"],
      ["Chat on WhatsApp","Написать в WhatsApp","通过 WhatsApp 聊天","WhatsAppでチャット","WhatsApp पर चैट करें","Chatea por WhatsApp","تحدث عبر واتساب"],
      ["Find us","Как нас найти","找到我们","アクセス","हमें ढूँढें","Encuéntranos","اعثر علينا"],
      ["Get Directions","Построить маршрут","获取路线","経路を表示","दिशा-निर्देश पाएँ","Cómo llegar","احصل على الاتجاهات"],
      ["Good to know","Полезно знать","须知","ご案内","जानने योग्य बातें","Conviene saber","معلومات مفيدة"],
      ["Frequently Asked","Частые вопросы","常见问题","よくある質問","अक्सर पूछे जाने वाले प्रश्न","Preguntas frecuentes","الأسئلة الشائعة"],
      ["How soon will I hear back?","Как скоро вы мне ответите?","多久能收到回复？","どのくらいで返信がありますか？","मुझे जवाब कितनी जल्दी मिलेगा?","¿Cuándo recibiré respuesta?","متى سأتلقى ردًا؟"],
      ["Our team replies to every booking request within 24 hours with a personalised quote.","Наша команда отвечает на каждую заявку в течение 24 часов, присылая персональное предложение.","我们的团队会在24小时内回复每一份预订请求，并提供个性化报价。","すべての予約リクエストに、24時間以内にお客様専用のお見積りをご返信します。","हमारी टीम हर बुकिंग अनुरोध का 24 घंटे के भीतर व्यक्तिगत कोटेशन के साथ जवाब देती है।","Nuestro equipo responde a cada solicitud de reserva en 24 horas con un presupuesto personalizado.","يردّ فريقنا على كل طلب حجز خلال 24 ساعة بعرض سعر مخصص."],
      ["Can I customise a package?","Можно ли изменить тур под себя?","可以定制套餐吗？","パッケージはカスタマイズできますか？","क्या मैं पैकेज अपने अनुसार बदल सकता हूँ?","¿Puedo personalizar un paquete?","هل يمكنني تخصيص الباقة؟"],
      ["Yes. Choose “Custom Tour” in the form and tell us what you have in mind, and we will shape the trip around you.","Да. Выберите в форме «Индивидуальный тур» и расскажите, что вы задумали, — мы построим поездку вокруг вас.","可以。在表格中选择“定制旅游”并告诉我们您的想法，我们会围绕您来设计行程。","はい。フォームで「オーダーメイドツアー」を選び、ご希望をお聞かせください。お客様に合わせて旅を作ります。","हाँ। फ़ॉर्म में “कस्टम टूर” चुनें और बताएँ कि आपके मन में क्या है, हम यात्रा आपके अनुसार तैयार करेंगे।","Sí. Elige «Tour a medida» en el formulario y cuéntanos lo que tienes en mente; adaptaremos el viaje a ti.","نعم. اختر «جولة مخصصة» في النموذج وأخبرنا بما تفكر فيه، وسنصمّم الرحلة حولك."],
      ["Do you help with visas?","Вы помогаете с визами?","你们提供签证协助吗？","ビザのサポートはありますか？","क्या आप वीज़ा में मदद करते हैं?","¿Ayudan con los visados?","هل تساعدون في التأشيرات؟"],
      ["We can guide you on visa types, processing times and fees. Visa rules change often, so please confirm details with our team before you book.","Мы подскажем типы виз, сроки и сборы. Визовые правила часто меняются, поэтому перед бронированием уточните детали у нашей команды.","我们可以指导您了解签证类型、办理时间和费用。签证规定经常变化，预订前请与我们的团队确认详情。","ビザの種類、処理期間、手数料についてご案内します。ビザの規則はよく変わるため、ご予約前にスタッフへご確認ください。","हम वीज़ा के प्रकार, प्रोसेसिंग समय और शुल्क के बारे में मार्गदर्शन कर सकते हैं। वीज़ा नियम अक्सर बदलते हैं, इसलिए बुकिंग से पहले हमारी टीम से विवरण की पुष्टि कर लें।","Podemos orientarte sobre tipos de visado, plazos y tarifas. Las normas de visado cambian a menudo, así que confirma los detalles con nuestro equipo antes de reservar.","يمكننا إرشادك بشأن أنواع التأشيرات ومدد المعالجة والرسوم. تتغير قواعد التأشيرات كثيرًا، لذا يُرجى تأكيد التفاصيل مع فريقنا قبل الحجز."],
      ["What if I need help while travelling?","А если мне понадобится помощь в поездке?","旅途中需要帮助怎么办？","旅行中に助けが必要になったら？","यात्रा के दौरान मदद चाहिए तो?","¿Y si necesito ayuda durante el viaje?","ماذا لو احتجت إلى مساعدة أثناء السفر؟"],
      ["Our emergency line, +94 77 123 4567, is open 24/7 for travellers needing urgent help.","Наша экстренная линия +94 77 123 4567 работает 24/7 для путешественников, которым нужна срочная помощь.","我们的紧急热线 +94 77 123 4567 全天候开放，为需要紧急帮助的旅客服务。","緊急ダイヤル +94 77 123 4567 は、緊急のサポートが必要な旅行者のために24時間対応しています。","हमारी आपातकालीन लाइन +94 77 123 4567 तुरंत मदद चाहने वाले यात्रियों के लिए 24/7 खुली है।","Nuestra línea de emergencias, +94 77 123 4567, está abierta 24/7 para viajeros que necesitan ayuda urgente.","خط الطوارئ لدينا +94 77 123 4567 مفتوح على مدار الساعة للمسافرين الذين يحتاجون إلى مساعدة عاجلة."],
      
      /* ---------- packages page ---------- */
      ["Tour","Туристические","旅游","ツアー","टूर","Paquetes","باقات"],
      ["Packages","пакеты","套餐","パッケージ","पैकेज","turísticos","الرحلات"],
      ["Destination Gallery","Галерея направлений","目的地图集","旅先ギャラリー","गंतव्य गैलरी","Galería de destinos","معرض الوجهات"],
      ["Sigiriya Rock Fortress","Скальная крепость Сигирия","锡吉里耶岩石堡垒","シーギリヤ・ロック要塞","सिगिरिया रॉक क़िला","Fortaleza de la Roca de Sigiriya","قلعة صخرة سيجيريا"],
      ["Nine Arches Bridge, Ella","Мост Девяти арок, Элла","埃拉九拱桥","エラのナインアーチ橋","एला का नौ मेहराब पुल","Puente de los Nueve Arcos, Ella","جسر الأقواس التسعة، إيلا"],
      ["Galle Fort Ramparts","Крепостные стены Галле","加勒古堡城墙","ゴール要塞の城壁","गाले क़िले की प्राचीर","Murallas del Fuerte de Galle","أسوار قلعة غالي"],
      ["Temple of the Tooth, Kandy","Храм Зуба, Канди","康提佛牙寺","キャンディの仏歯寺","कैंडी का दंत मंदिर","Templo del Diente, Kandy","معبد السن، كاندي"],
      ["Coconut Tree Hill, Mirissa","Холм кокосовых пальм, Мирисса","米瑞莎椰子树山","ミリッサのココナッツツリーヒル","मिरिस्सा का कोकोनट ट्री हिल","Coconut Tree Hill, Mirissa","تلة أشجار جوز الهند، ميريسا"],
      ["Tea Country, Nuwara Eliya","Чайный край, Нувара-Элия","努沃勒埃利耶茶乡","ヌワラエリヤの茶畑","नुवारा एलिया का चाय देश","Tierra de té, Nuwara Eliya","أرض الشاي، نوارا إليا"],
      ["Ruwanweli Stupa, Anuradhapura","Ступа Руванвелисая, Анурадхапура","阿努拉德普勒鲁梵维利大塔","アヌラーダプラのルワンウェリサーヤ大塔","अनुराधापुरा का रुवानवेलिसाया स्तूप","Estupa Ruwanweli, Anuradhapura","ستوبا روانفيلي، أنورادابورا"],
      ["Dambulla Cave Temple","Пещерный храм Дамбулла","丹布勒石窟寺","ダンブッラ石窟寺院","दांबुला गुफ़ा मंदिर","Templo de las cuevas de Dambulla","معبد كهف دامبولا"],
      ["Whale Watching","Наблюдение за китами","观鲸","ホエールウォッチング","व्हेल वॉचिंग","Avistamiento de ballenas","مشاهدة الحيتان"],
      ["Golden Buddha, Dambulla","Золотой Будда, Дамбулла","丹布勒金佛","ダンブッラの黄金仏","दांबुला का सुनहरा बुद्ध","Buda Dorado, Dambulla","بوذا الذهبي، دامبولا"],
      ["Temple of the Tooth Bridge, Kandy","Мост храма Зуба, Канди","康提佛牙寺桥","キャンディ仏歯寺の橋","कैंडी दंत मंदिर का पुल","Puente del Templo del Diente, Kandy","جسر معبد السن، كاندي"],
      ["Kandyan Fire Dance","Огненный танец Канди","康提火舞","キャンディアン・ファイアダンス","कैंडियन फ़ायर डांस","Danza del fuego kandyana","رقصة النار الكاندية"],
      ["Kandy Lake","Озеро Канди","康提湖","キャンディ湖","कैंडी झील","Lago Kandy","بحيرة كاندي"],
      ["Giant Buddha, Kandy","Гигантский Будда, Канди","康提大佛","キャンディの大仏","कैंडी की विशाल बुद्ध प्रतिमा","Buda gigante, Kandy","بوذا العملاق، كاندي"],
      ["Our Packages","Наши туры","我们的套餐","当社のパッケージ","हमारे पैकेज","Nuestros paquetes","باقاتنا"],
      ["Beach Packages","Пляжные туры","海滩套餐","ビーチパッケージ","बीच पैकेज","Paquetes de playa","باقات الشاطئ"],
      ["Adventure Packages","Приключенческие туры","探险套餐","アドベンチャーパッケージ","एडवेंचर पैकेज","Paquetes de aventura","باقات المغامرة"],
      ["Family Packages","Семейные туры","家庭套餐","ファミリーパッケージ","फ़ैमिली पैकेज","Paquetes familiares","باقات العائلة"],
      ["Culture & Heritage Packages","Культурные и исторические туры","文化与遗产套餐","文化・遺産パッケージ","संस्कृति और विरासत पैकेज","Paquetes de cultura y patrimonio","باقات الثقافة والتراث"],
      ["Package","Тур","套餐","パッケージ","पैकेज","Paquete","الباقة"],
      ["Days","Дни","天数","日数","दिन","Días","الأيام"],
      ["Price (USD)","Цена (USD)","价格（美元）","料金（USD）","कीमत (USD)","Precio (USD)","السعر (دولار)"],
      ["Services & Facilities Included","Включённые услуги и удобства","包含的服务与设施","含まれるサービス・設備","शामिल सेवाएँ और सुविधाएँ","Servicios e instalaciones incluidos","الخدمات والمرافق المشمولة"],
      ["Beach hotel, breakfast, Galle Fort walking tour, transport","Пляжный отель, завтрак, пешая экскурсия по форту Галле, транспорт","海滩酒店、早餐、加勒古堡徒步游览、交通","ビーチホテル、朝食、ゴール要塞ウォーキングツアー、交通","बीच होटल, नाश्ता, गाले क़िले का पैदल दौरा, परिवहन","Hotel de playa, desayuno, visita a pie por el Fuerte de Galle, transporte","فندق على الشاطئ، إفطار، جولة سيرًا على الأقدام في قلعة غالي، نقل"],
      ["Beachfront stay, breakfast, Coconut Tree Hill sunset visit, airport transfer","Проживание на берегу, завтрак, закат на Coconut Tree Hill, трансфер из аэропорта","海滨住宿、早餐、椰子树山日落之旅、机场接送","ビーチフロント宿泊、朝食、ココナッツツリーヒルの夕日見学、空港送迎","समुद्र तट पर ठहराव, नाश्ता, कोकोनट ट्री हिल पर सूर्यास्त दर्शन, एयरपोर्ट ट्रांसफ़र","Alojamiento frente al mar, desayuno, visita al atardecer en Coconut Tree Hill, traslado al aeropuerto","إقامة على الشاطئ، إفطار، زيارة غروب الشمس في تلة جوز الهند، نقل من المطار"],
      ["Surf-camp stay, meals, surf lessons and board, lagoon boat tour","Проживание в сёрф-лагере, питание, уроки сёрфинга и доска, прогулка на лодке по лагуне","冲浪营住宿、餐食、冲浪课程及冲浪板、泻湖游船","サーフキャンプ宿泊、食事、サーフィンレッスンとボード、ラグーンボートツアー","सर्फ़-कैंप में ठहराव, भोजन, सर्फ़िंग पाठ और बोर्ड, लैगून बोट टूर","Alojamiento en campamento de surf, comidas, clases de surf y tabla, paseo en barca por la laguna","إقامة في مخيم ركوب الأمواج، وجبات، دروس ركوب الأمواج مع اللوح، جولة بالقارب في البحيرة"],
      ["Jeep safari, tented camp, all meals, park tickets, ranger guide","Джип-сафари, палаточный лагерь, всё питание, билеты в парк, гид-рейнджер","吉普车野生动物游、帐篷营地、全部餐食、公园门票、护林员导游","ジープサファリ、テントキャンプ、全食事、公園入場券、レンジャーガイド","जीप सफ़ारी, टेंट कैंप, सभी भोजन, पार्क टिकट, रेंजर गाइड","Safari en jeep, campamento con tiendas, todas las comidas, entradas al parque, guía guardabosques","سفاري بسيارة جيب، مخيم خيام، جميع الوجبات، تذاكر المتنزه، مرشد حرّاس"],
      ["Scenic train ride, Nine Arches Bridge visit, hiking guide, hotel, breakfast","Живописная поездка на поезде, посещение моста Девяти арок, гид для треккинга, отель, завтрак","风景火车之旅、参观九拱桥、徒步向导、酒店、早餐","景色の良い列車旅、ナインアーチ橋見学、ハイキングガイド、ホテル、朝食","सुंदर ट्रेन यात्रा, नौ मेहराब पुल की सैर, ट्रेकिंग गाइड, होटल, नाश्ता","Viaje panorámico en tren, visita al Puente de los Nueve Arcos, guía de senderismo, hotel, desayuno","رحلة قطار خلابة، زيارة جسر الأقواس التسعة، مرشد للمشي، فندق، إفطار"],
      ["Boat trip, breakfast on board, life jackets, beach hotel, transfers","Прогулка на лодке, завтрак на борту, спасательные жилеты, пляжный отель, трансферы","出海游船、船上早餐、救生衣、海滩酒店、接送","ボートトリップ、船上朝食、ライフジャケット、ビーチホテル、送迎","बोट यात्रा, जहाज़ पर नाश्ता, लाइफ़ जैकेट, बीच होटल, ट्रांसफ़र","Paseo en barco, desayuno a bordo, chalecos salvavidas, hotel de playa, traslados","رحلة بالقارب، إفطار على متن القارب، سترات نجاة، فندق على الشاطئ، تنقلات"],
      ["Temple of the Tooth visit, Kandyan dance show, lake walk, hotel, meals","Посещение храма Зуба, шоу канди-танцев, прогулка по озеру, отель, питание","参观佛牙寺、康提舞蹈表演、湖畔漫步、酒店、餐食","仏歯寺見学、キャンディアン・ダンスショー、湖畔の散策、ホテル、食事","दंत मंदिर दर्शन, कैंडियन नृत्य शो, झील की सैर, होटल, भोजन","Visita al Templo del Diente, espectáculo de danza kandyana, paseo por el lago, hotel, comidas","زيارة معبد السن، عرض الرقص الكاندي، نزهة بجانب البحيرة، فندق، وجبات"],
      ["Tea estate tour, family cottage, breakfast, boat ride, transport","Экскурсия по чайной плантации, семейный коттедж, завтрак, прогулка на лодке, транспорт","茶园参观、家庭小屋、早餐、划船、交通","茶園見学、ファミリーコテージ、朝食、ボート遊び、交通","चाय बागान का दौरा, पारिवारिक कॉटेज, नाश्ता, नौका सवारी, परिवहन","Visita a una plantación de té, cabaña familiar, desayuno, paseo en barca, transporte","جولة في مزرعة شاي، كوخ عائلي، إفطار، جولة بالقارب، نقل"],
      ["Sigiriya rock climb guide, Dambulla Cave Temple tickets, hotel, meals","Гид для подъёма на скалу Сигирия, билеты в пещерный храм Дамбулла, отель, питание","锡吉里耶岩攀登向导、丹布勒石窟寺门票、酒店、餐食","シーギリヤ・ロック登頂ガイド、ダンブッラ石窟寺院の入場券、ホテル、食事","सिगिरिया रॉक चढ़ाई गाइड, दांबुला गुफ़ा मंदिर के टिकट, होटल, भोजन","Guía para subir a la Roca de Sigiriya, entradas al templo de las cuevas de Dambulla, hotel, comidas","مرشد لتسلق صخرة سيجيريا، تذاكر معبد كهف دامبولا، فندق، وجبات"],
      ["Guided tour of stupas and Sri Maha Bodhi, hotel, breakfast, transport","Экскурсия с гидом по ступам и Шри-Маха-Бодхи, отель, завтрак, транспорт","导览参观佛塔与大菩提树、酒店、早餐、交通","ストゥーパとスリー・マハー菩提樹のガイドツアー、ホテル、朝食、交通","स्तूपों और श्री महा बोधि का गाइडेड टूर, होटल, नाश्ता, परिवहन","Visita guiada a las estupas y al Sri Maha Bodhi, hotel, desayuno, transporte","جولة بصحبة مرشد في الستوبات وشجرة سري مها بودي، فندق، إفطار، نقل"],
      ["Rock fortress and cave temple tickets, guide, hotel, breakfast","Билеты в скальную крепость и пещерный храм, гид, отель, завтрак","岩石堡垒与石窟寺门票、导游、酒店、早餐","岩の要塞と石窟寺院の入場券、ガイド、ホテル、朝食","चट्टानी क़िले और गुफ़ा मंदिर के टिकट, गाइड, होटल, नाश्ता","Entradas a la fortaleza de roca y al templo de las cuevas, guía, hotel, desayuno","تذاكر القلعة الصخرية ومعبد الكهف، مرشد، فندق، إفطار"],
      ["Anuradhapura, Dambulla, Sigiriya and Kandy, hotels, guide, all entry tickets","Анурадхапура, Дамбулла, Сигирия и Канди, отели, гид, все входные билеты","阿努拉德普勒、丹布勒、锡吉里耶和康提，酒店、导游、全部门票","アヌラーダプラ、ダンブッラ、シーギリヤ、キャンディ、ホテル、ガイド、全入場券","अनुराधापुरा, दांबुला, सिगिरिया और कैंडी, होटल, गाइड, सभी प्रवेश टिकट","Anuradhapura, Dambulla, Sigiriya y Kandy, hoteles, guía, todas las entradas","أنورادابورا ودامبولا وسيجيريا وكاندي، فنادق، مرشد، جميع تذاكر الدخول"],
      ["Visa Information","Информация о визах","签证信息","ビザ情報","वीज़ा जानकारी","Información de visados","معلومات التأشيرة"],
      ["Country","Страна","国家","国","देश","País","الدولة"],
      ["Visa Type","Тип визы","签证类型","ビザの種類","वीज़ा का प्रकार","Tipo de visado","نوع التأشيرة"],
      ["Processing Time","Срок оформления","办理时间","処理期間","प्रोसेसिंग समय","Plazo de tramitación","مدة المعالجة"],
      ["Fee (USD)","Сбор (USD)","费用（美元）","手数料（USD）","शुल्क (USD)","Tarifa (USD)","الرسوم (دولار)"],
      ["Maldives","Мальдивы","马尔代夫","モルディブ","मालदीव","Maldivas","جزر المالديف"],
      ["Thailand","Таиланд","泰国","タイ","थाईलैंड","Tailandia","تايلاند"],
      ["Dubai (UAE)","Дубай (ОАЭ)","迪拜（阿联酋）","ドバイ（UAE）","दुबई (UAE)","Dubái (EAU)","دبي (الإمارات)"],
      ["Singapore","Сингапур","新加坡","シンガポール","सिंगापुर","Singapur","سنغافورة"],
      ["India","Индия","印度","インド","भारत","India","الهند"],
      ["Free on arrival","Бесплатно по прибытии","落地免费","到着時無料","आगमन पर निःशुल्क","Gratis a la llegada","مجانية عند الوصول"],
      ["E-Visa","Электронная виза","电子签证","電子ビザ","ई-वीज़ा","e-Visa","تأشيرة إلكترونية"],
      ["Tourist Visa","Туристическая виза","旅游签证","観光ビザ","पर्यटक वीज़ा","Visado de turista","تأشيرة سياحية"],
      ["Instant","Мгновенно","即时","即時","तुरंत","Inmediato","فوري"],
      ["5–7 days","5–7 дней","5–7 天","5〜7日","5–7 दिन","5–7 días","5–7 أيام"],
      ["3–5 days","3–5 дней","3–5 天","3〜5日","3–5 दिन","3–5 días","3–5 أيام"],
      ["3–4 days","3–4 дня","3–4 天","3〜4日","3–4 दिन","3–4 días","3–4 أيام"],
      ["Visa rules change often. Please confirm details with our team before you book.","Визовые правила часто меняются. Пожалуйста, уточните детали у нашей команды перед бронированием.","签证规定经常变化，预订前请与我们的团队确认详情。","ビザの規則は頻繁に変わります。ご予約前にスタッフへご確認ください。","वीज़ा नियम अक्सर बदलते हैं। कृपया बुकिंग से पहले हमारी टीम से विवरण की पुष्टि करें।","Las normas de visado cambian a menudo. Confirma los detalles con nuestro equipo antes de reservar.","تتغير قواعد التأشيرات كثيرًا. يُرجى تأكيد التفاصيل مع فريقنا قبل الحجز."]
      ];
      /*R-END*/
      
      var D={};R.forEach(function(r){D[r[0]]=r});
      
      /* ---------- translation engine ---------- */
      var html=document.documentElement,cur="en",li=0;
      var SK={SCRIPT:1,STYLE:1,NOSCRIPT:1,HEAD:1,TITLE:1,SVG:1,IFRAME:1,TEXTAREA:0};
      var PRE=/^(?:[\u2190-\u2BFF\uFE0F\u200D\s]|[\uD83C-\uD83E][\uDC00-\uDFFF])+/;
      var ATTR=["placeholder","alt"];
      var orig=new WeakMap(),origA=new WeakMap();
      function norm(s){return s.replace(/&amp;/g,"&").replace(/\s+/g," ").trim()}
      function lookup(text,parent){
       var core=text.trim();if(!core)return null;
       var m=core.match(PRE),pre=m?m[0]:"",body=norm(core.slice(pre.length));
       if(!body)return null;
       var r=(parent&&D[body+"@"+parent.tagName])||D[body];
       if(!r||!r[li])return null;
       return text.match(/^\s*/)[0]+pre+r[li]+text.match(/\s*$/)[0];
      }
      function bad(e){return SK[e.tagName.toUpperCase()]===1||e.hasAttribute("data-notr")}
      function tNode(n){
       var p=n.parentNode;if(p&&p.nodeType===1&&bad(p))return;
       var o=orig.get(n);if(o===undefined){o=n.nodeValue;orig.set(n,o)}
       var v=o;if(li>0){var t=lookup(o,p);if(t)v=t}
       if(n.nodeValue!==v)n.nodeValue=v;
      }
      function tAttrs(el){
       for(var i=0;i<ATTR.length;i++){var a=ATTR[i];if(!el.hasAttribute(a))continue;
        var m=origA.get(el);if(!m){m={};origA.set(el,m)}
        if(!(a in m))m[a]=el.getAttribute(a);
        var v=m[a];if(li>0){var t=lookup(v,null);if(t)v=t}
        if(el.getAttribute(a)!==v)el.setAttribute(a,v);
       }
      }
      function walk(root){
       if(root.nodeType===3){tNode(root);return}
       if(root.nodeType!==1||bad(root))return;
       tAttrs(root);
       var w=document.createTreeWalker(root,5,{acceptNode:function(n){return n.nodeType===1&&bad(n)?2:1}}),n;
       while((n=w.nextNode())){if(n.nodeType===3)tNode(n);else tAttrs(n)}
      }
      var T0=document.title;
      function tTitle(){
       var p=T0.split("|"),r=D[norm(p[0])];
       if(li>0&&r&&r[li])p[0]=r[li]+" ";
       document.title=p.join("|");
      }
      
      /* ---------- styles (self-contained, no changes to style.css needed) ---------- */
      var css=[
      ".ht-lang{position:relative;margin-inline-start:22px;display:inline-block}",
      ".ht-lb{display:inline-flex;align-items:center;gap:7px;cursor:pointer;font:500 .8rem/1 inherit;font-family:inherit;color:#e6f1f5;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.25);border-radius:30px;padding:8px 13px;transition:.25s}",
      ".ht-lb:hover,.ht-lb[aria-expanded=true]{border-color:var(--gold,#ffb020);color:var(--gold,#ffb020)}",
      ".ht-lb svg{width:15px;height:15px;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;flex:none}",
      ".ht-lb .ht-c{width:11px;height:11px;transition:transform .25s}",
      ".ht-lb[aria-expanded=true] .ht-c{transform:rotate(180deg)}",
      ".ht-lm{position:absolute;top:calc(100% + 8px);inset-inline-end:0;min-width:168px;margin:0;padding:6px;list-style:none;background:#0b1f2b;border:1px solid rgba(255,255,255,.14);border-radius:16px;box-shadow:0 18px 40px rgba(0,0,0,.45);z-index:70;display:none}",
      ".ht-lm.open{display:block;animation:htin .18s ease-out}",
      "@keyframes htin{from{opacity:0;transform:translateY(-6px)}to{opacity:1;transform:none}}",
      ".ht-lm button{display:flex;width:100%;align-items:center;justify-content:space-between;gap:10px;text-align:start;background:none;border:0;cursor:pointer;color:#c9dbe2;font-family:inherit;font-size:.88rem;padding:9px 12px;border-radius:10px}",
      ".ht-lm button:hover,.ht-lm button:focus-visible{background:rgba(255,255,255,.08);color:#fff;outline:none}",
      ".ht-lm button[aria-selected=true]{color:var(--gold,#ffb020);font-weight:600}",
      ".ht-lm button[aria-selected=true]::after{content:'✓'}",
      "html[data-lang=ru] body{font-family:'Poppins','Segoe UI',Roboto,Arial,sans-serif}",
      "html[data-lang=zh] body{font-family:'Poppins','PingFang SC','Microsoft YaHei','Noto Sans SC',sans-serif}",
      "html[data-lang=ja] body{font-family:'Poppins','Hiragino Sans','Yu Gothic','Meiryo','Noto Sans JP',sans-serif}",
      "html[data-lang=hi] body{font-family:'Poppins','Noto Sans Devanagari','Nirmala UI',sans-serif}",
      "html[data-lang=ar] body{font-family:'Noto Sans Arabic','Segoe UI',Tahoma,Arial,sans-serif}",
      "html[data-lang]:not([data-lang=en]) :is(input,button,select,textarea){font-family:inherit}",
      "html[data-lang=ar] *{letter-spacing:0!important}",
      "html[dir=rtl] nav a{margin:0 0 0 14px}",
      "html[dir=rtl] :is(.btn,.hv-more,.hv-cat p) span{display:inline-block;transform:scaleX(-1)}",
      "html[dir=rtl] :is(.fx-plane,.fx-sky,.fx-beam,.fx-tag){direction:ltr}",
      "html[dir=rtl] .tbl,html[dir=rtl] table{direction:rtl}"
      ].join("\n");
      var st=document.createElement("style");st.textContent=css;document.head.appendChild(st);
      
      var FONTS={hi:"Noto+Sans+Devanagari:wght@400;500;600;700",ar:"Noto+Sans+Arabic:wght@400;500;600;700"},loaded={};
      function ensureFont(c){
       if(!FONTS[c]||loaded[c])return;loaded[c]=1;
       var l=document.createElement("link");l.rel="stylesheet";l.href="https://fonts.googleapis.com/css2?family="+FONTS[c]+"&display=swap";document.head.appendChild(l);
      }
      
      /* ---------- switcher UI ---------- */
      var box,btn,menu,label;
      function build(){
       var host=document.querySelector("header .wrap")||document.querySelector("header")||document.body;
       box=document.createElement("div");box.className="ht-lang";box.setAttribute("data-notr","");
       btn=document.createElement("button");btn.type="button";btn.className="ht-lb";
       btn.setAttribute("aria-haspopup","listbox");btn.setAttribute("aria-expanded","false");btn.setAttribute("aria-label","Language");
       btn.innerHTML='<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"/></svg><span class="ht-t"></span><svg class="ht-c" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg>';
       label=btn.querySelector(".ht-t");
       menu=document.createElement("ul");menu.className="ht-lm";menu.setAttribute("role","listbox");
       LANGS.forEach(function(l){
        var li_=document.createElement("li"),b=document.createElement("button");
        b.type="button";b.setAttribute("role","option");b.setAttribute("data-l",l[0]);b.textContent=l[1];
        b.setAttribute("lang",l[0]);
        b.addEventListener("click",function(){setLang(l[0]);close();btn.focus()});
        li_.appendChild(b);menu.appendChild(li_);
       });
       box.appendChild(btn);box.appendChild(menu);host.appendChild(box);
       btn.addEventListener("click",function(e){e.stopPropagation();menu.classList.contains("open")?close():open()});
       document.addEventListener("click",function(e){if(!box.contains(e.target))close()});
       document.addEventListener("keydown",function(e){if(e.key==="Escape"&&menu.classList.contains("open")){close();btn.focus()}});
      }
      function open(){
       menu.style.left=menu.style.right="";menu.classList.add("open");btn.setAttribute("aria-expanded","true");
       var r=menu.getBoundingClientRect();
       if(r.left<8){menu.style.left="0";menu.style.right="auto"}
       else if(r.right>innerWidth-8){menu.style.left="auto";menu.style.right="0"}
       var s=menu.querySelector('[aria-selected="true"]');if(s)s.focus();
      }
      function close(){menu.classList.remove("open");btn.setAttribute("aria-expanded","false");menu.style.left=menu.style.right="";}
      
      function setLang(c){
       var i=CODES.indexOf(c);if(i<0){c="en";i=0}
       cur=c;li=i;
       html.setAttribute("lang",c==="zh"?"zh-CN":c);
       html.setAttribute("dir",c==="ar"?"rtl":"ltr");
       html.setAttribute("data-lang",c);
       ensureFont(c);
       walk(html);tTitle();
       if(label){label.textContent=LANGS[i][1];
        [].forEach.call(menu.querySelectorAll("button"),function(b){b.setAttribute("aria-selected",b.getAttribute("data-l")===c?"true":"false")});}
       try{localStorage.setItem("ht_lang",c)}catch(e){}
      }
      
      /* translate anything added later (hero slider, toast, page-transition label) */
      new MutationObserver(function(ms){
       if(li===0)return;
       ms.forEach(function(m){[].forEach.call(m.addedNodes,walk)});
      }).observe(html,{childList:true,subtree:true});
      
      function init(){
       build();
       var c="en";
       try{var q=new URLSearchParams(location.search).get("lang");if(q&&CODES.indexOf(q)>-1)c=q;else c=localStorage.getItem("ht_lang")||"en"}catch(e){}
       setLang(CODES.indexOf(c)>-1?c:"en");
      }
      if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);else init();
      window.HTLang={set:setLang,get:function(){return cur}};
      })();