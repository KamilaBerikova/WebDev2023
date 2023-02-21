export class Product {
    private _id: number;
    private _name: string;
    private _imageURL: string;
    private _description: string;
    private _rating: number;
    private _kaspiURL: string;
    private _images: Array<string>;

    constructor(
        id: number,
        name: string,
        imageURL: string,
        description: string,
        rating: number,
        kaspiURL: string,
        images: Array<string>
    ) {
        this._id = id;
        this._name = name;
        this._imageURL = imageURL;
        this._description = description;
        this._rating = rating;
        this._kaspiURL = kaspiURL;
        this._images = images;
    };

    public get id(): number {
        return this._id;
    };

    public get name(): string {
        return this._name;
    };

    public get imageURL(): string {
        return this._imageURL;
    };

    public get description(): string {
        return this._description;
    };

    public get rating(): number {
        return this._rating;
    };

    public get kaspiURL(): string {
        return this._kaspiURL;
    };

    public get images(): Array<string> {
        return this._images;
    };
};

export const KASPI_PRODUCTS: Array<Product> = [
    new Product(
        1,
        "Ноутбук Apple MacBook Air 13 MGN63 серый",
        "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd3/he8/33125684772894/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-1-Container.jpg",
        "Маленький чип. Грандиозный прорыв Первый чип, разработанный специально для Mac. Поразительно, но система на чипе Apple M1 вмещает 16 миллиардов транзис­торов и объединяет центральный и графи­ческий процессоры, систему Neural Engine, контроллеры ввода-вывода и множество других компонентов. Чип Apple M1 позволяет использовать на Mac уникальные технологии и обеспечивает невероятную производи­тельность в сочетании с лучшей в отрасли энергоэффективностью. Это не просто ещё один шаг для Mac — это принципиально новый уровень возможностей. 8‑ядерный процессор. Дольше работает. Меньше ест По скорости вычислений чип M1 превосходит все другие процессоры Apple. Такая производительность позволяет выполнять на MacBook Air самые ресурсоёмкие задачи, например редактировать фото и видео на профессиональном уровне или играть в игры со сложной графикой. Но 8‑ядерный процессор в чипе M1 не просто работает до 3.5 раза быстрее по сравнению c предыдущим поколением процессоров — он рационально распределяет задачи между ядрами производительности и ядрами эффективности. Ядра эффективности легко справляются с повседневными действиями, расходуя при этом в десять раз меньше энергии. Дисплей Retina. Нереально. Реалистичные цвета На дисплее Retina с диагональю 13.3 дюйма и разрешением 2560×1600 пикселей изображения выглядят более детально и реалистично. Тексты стали ещё чётче, а цвета — ярче. Стекло дисплея доходит до самого края корпуса, поэтому ничто не отвлекает от великолепного изображения. Технология True Tone Глаз отдыхает и радуется. MacBook Air автоматически подстраивает баланс белого под окружающее освещение, чтобы изображение на экране выглядело более естественно. Камера и микрофоны. Это чтобы лучше видеть и слышать вас Процессор обработки сигнала изображения, встроенный в чип M1, обеспечит отличную картинку во время видеоконференций и видеозвонков по FaceTime. А благодаря трём встроенным микрофонам ваши слова будут отчётливо слышны, когда вы звоните, диктуете заметку или обращаетесь к Siri. Magic Keyboard. Клавиатура — высший класс На этой клавиатуре не только легко и приятно печатать. Все её возможности — настоящее чудо. Заранее заданные сочетания клавиш обеспечивают быстрый доступ к полезным функциям. Обращайтесь к Siri, переключайте язык клавиатуры, выбирайте подходящие эмодзи, находите документы при помощи Spotlight — всё в одно касание. А подсветка клавиш и датчик внешней освещённости помогут печатать, когда станет темно. Touch ID Блокируйте и разблокируйте MacBook Air одним касанием. Используйте аутенти­фикацию по отпечатку пальца, чтобы взять напрокат фильм, купить приложение или получить доступ к защищённому контенту — например, документам или настройкам устройства. Вводить пароль не понадобится. А когда вы оплачиваете онлайн-покупки с Apple Pay, при использовании Touch ID ваши платёжные данные и адрес доставки подставляются в нужные поля автоматически. При этом данные банковской карты никуда не передаются. ",
        4.97,
        "https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/?c=750000000#!/item",
        [
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h25/h3a/52177862524958/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-2-Container.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h0a/he0/68378825261086/apple-macbook-pro-16-2023-mnw83-108645654-3.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf7/h94/50489392758814/apple-macbook-air-13-mgn63-seryj-100797845-4.jpg",
        ],
    ),
    new Product(
        2,
        "Ноутбук Lenovo IdeaPad 3 15ITL6 82H8005GRK серебристый",
        "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb9/h11/66993674125342/lenovo-ideapad-3-15itl6-82h8005grk-serebristyi-108090705-1.jpg",
        "Ноутбук 82H8005GRK от компании Lenovo на базе процессора Intel Pentium Gold 7505 2,0 ГГц комплектуется оперативной памятью общим размером 8 ГБ. ",
        4.5,
        "https://kaspi.kz/shop/p/lenovo-ideapad-3-15itl6-82h8005grk-serebristyi-108090705/?c=750000000#!/item",
        [
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1f/h28/66993675173918/lenovo-ideapad-3-15itl6-82h8005grk-serebristyi-108090705-3.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h63/hda/66993675698206/lenovo-ideapad-3-15itl6-82h8005grk-serebristyi-108090705-4.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hac/h59/66993676222494/lenovo-ideapad-3-15itl6-82h8005grk-serebristyi-108090705-5.jpg",
        ],
    ),
    new Product(
        3,
        "Смарт-часы Apple Watch Series 8 45 мм Aluminum черный",
        "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h0b/h04/63158967959582/apple-watch-series-8-41-mm-cernyj-106362847-1.jpg",
        "pple Watch is a wearable smartwatch that allows users to accomplish a variety of tasks, including making phone calls, sending text messages and reading email.",
        5.0,
        "https://kaspi.kz/shop/p/apple-watch-series-8-45-mm-aluminum-chernyi-106362847/?c=750000000#!/item",
        [
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h0b/h04/63158967959582/apple-watch-series-8-41-mm-cernyj-106362847-1.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h95/hc8/63158968320030/apple-watch-series-8-41-mm-cernyj-106362847-2.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8a/h8f/62281248505886/apple-watch-series-8-41-mm-cernyj-106362847-3.jpg",
        ],
    ),
    new Product(
        4,
        "Ноутбук Apple MacBook Air 13 MLXW3 серый",
        "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hdf/h07/52679187824670/noutbuk-apple-macbook-air-m2-8-cpu-8-gpu-256gb-space-gray-105933794-1.jpg",
        "Меньше таскать. MacBook Air, переработанный на базе чипа M2 нового поколения, поразительно тонкий и обеспечивает исключительную скорость и энергоэффективность в прочном полностью алюминиевом корпусе. Это сверхбыстрый и сверхмощный ноутбук, который позволяет вам работать, играть или создавать что угодно — где угодно. Подготовьтесь к взлету. Чип M2 запускает новое поколение кремния Apple, обладая еще большей скоростью и энергоэффективностью, чем M1. Таким образом, вы можете делать больше и быстрее благодаря более мощному 8-ядерному процессору. Создавайте захватывающие изображения и анимацию с помощью 10-ядерного графического процессора. Работайте с большим количеством потоков видео 4K и 8K ProRes с помощью высокопроизводительного медиадвижка. И продолжайте работать — или играть — весь день и всю ночь благодаря до 18 часов автономной работы. Больше скорости для всех ваших приложений. Все ваши популярные приложения работают в macOS молниеносно, включая Microsoft 365 и многие из ваших любимых приложений для iOS. Более 10 000 приложений и подключаемых модулей, оптимизированных для Apple Silicon, откроют для вас творческое будущее. Все вместе сейчас. Совершайте и принимайте звонки с iPhone на своем Mac. Используйте свой iPad в качестве второго дисплея. Разблокируйте свой Mac с помощью Apple Watch. Они как будто созданы друг для друга. Потому что они были. Чтобы было ясно, это великолепно. Потрясающий 13,6-дюймовый дисплей Liquid Retina — самый большой и самый яркий из когда-либо существовавших на MacBook Air с поддержкой 1 миллиарда цветов. Текст становится сверхчетким, а фотографии и видеоролики — более яркими и яркими, с высоким контрастом и четкими деталями. Великолепно звучат. Произведите наилучшее впечатление во время видеозвонков с HD-камерой FaceTime 1080p и массивом из трех микрофонов. Окружите себя обширной звуковой сценой, дополняющей звуковую систему с четырьмя динамиками и функцией Spatial Audio. MacBook Air был создан, чтобы будоражить чувства. Пусть ваши пальцы летают. Удобная и тихая клавиатура Magic Keyboard теперь имеет ряд функциональных клавиш во всю высоту для быстрого доступа к любимым элементам управления и сочетаниям клавиш. Touch ID позволяет легко разблокировать Mac, вводить пароли и совершать безопасные покупки или платежи — и все это одним касанием пальца. А с большим трекпадом Force Touch остается еще больше места для точной работы. ",
        3.5,
        "https://kaspi.kz/shop/p/apple-macbook-air-13-mlxw3-seryi-105933794/?c=750000000#!/item",
        [
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb6/hfc/52679191756830/noutbuk-apple-macbook-air-m2-8-cpu-8-gpu-256gb-space-gray-105933794-2.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h54/h36/52679191986206/noutbuk-apple-macbook-air-m2-8-cpu-8-gpu-256gb-space-gray-105933794-3.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h32/h04/52679192215582/noutbuk-apple-macbook-air-m2-8-cpu-8-gpu-256gb-space-gray-105933794-4.jpg",
        ],
    ),
    new Product(
        5,
        "Ноутбук Apple MacBook Pro 16 2023 MNW83 серый",
        "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h73/h7f/68378824278046/apple-macbook-pro-16-2023-mnw83-108645654-1.jpg",
        "Диагональ экрана: 16.2 дюй; Процессор: Apple M2 Pro; Видеокарта: Apple M2 Pro 19-Core; Размер оперативной памяти: 16 ГБ; Тип жесткого диска: SSD; Общий объем накопителей: 512 ГБ",
        4.1,
        "https://kaspi.kz/shop/p/apple-macbook-pro-16-2023-mnw83-seryi-108645654/?c=750000000#!/item",
        [
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h89/hbe/68378824736798/apple-macbook-pro-16-2023-mnw83-108645654-2.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h0a/he0/68378825261086/apple-macbook-pro-16-2023-mnw83-108645654-3.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h38/hcb/68378825785374/apple-macbook-pro-16-2023-mnw83-108645654-4.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h35/h0f/68378826309662/apple-macbook-pro-16-2023-mnw83-108645654-5.jpg",
        ],
    ),
    new Product(
        6,
        "Ноутбук Apple MacBook Pro 14 MKGT3 серебристый",
        "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h34/h63/47906720841758/apple-macbook-pro-14-mkgr3-serebristyj-103267697-1.jpg",
        "Диагональ экрана: 14.2 дюйм; Процессор: Apple M1 Pro; Видеокарта: Apple M1 Pro; Размер оперативной памяти: 16 ГБ; Тип жесткого диска: SSD; Общий объем накопителей: 1024 ГБ",
        4.99,
        "https://kaspi.kz/shop/p/apple-macbook-pro-14-mkgt3-serebristyi-103267697/?c=750000000#!/item",
        [
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h22/h8c/47906721234974/apple-macbook-pro-14-mkgr3-serebristyj-103267697-2.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h2a/h55/47906721693726/apple-macbook-pro-14-mkgr3-serebristyj-103267697-3.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hec/ha9/47906722152478/apple-macbook-pro-14-mkgr3-serebristyj-103267697-4.jpg",
        ],
    ),
    new Product(
        7,
        "Ноутбук Apple MacBook Pro 13 Z11C0013E серый",
        "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6c/h53/34126422212638/apple-macbook-pro-2020-13-3-z11c0013e-seryj-101694768-1-Container.jpg",
        "Диагональ экрана: 13.3 дюйм; Процессор: Apple M1; Видеокарта: Apple M1 Graphics; Размер оперативной памяти: 16 ГБ; Тип жесткого диска: SSD; Общий объем накопителей: 512 ГБ",
        4.3,
        "https://kaspi.kz/shop/p/apple-macbook-pro-13-z11c0013e-seryi-101694768/?c=750000000#!/item",
        [
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h84/h79/34126426079262/apple-macbook-pro-2020-13-3-z11c0013e-seryj-101694768-2-Container.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h2f/h10/34126430011422/apple-macbook-pro-2020-13-3-z11c0013e-seryj-101694768-3-Container.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb7/h6e/34126433550366/apple-macbook-pro-2020-13-3-z11c0013e-seryj-101694768-4-Container.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha1/h37/34126438006814/apple-macbook-pro-2020-13-3-z11c0013e-seryj-101694768-5-Container.jpg",
        ],
    ),
    new Product(
        8,
        "Ноутбук ASUS X515EA-BQ3144W I385SUW1 90NB0TY1-M02ZL0 темно-серый",
        "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb8/hbd/65953424277534/asus-x515ea-bq3144w-i385suw1-90nb0ty1-m02zl0-temno-seryi-107650928-1.jpg",
        "Диагональ экрана: 15.6 дюйм; Процессор: Intel Core i3 1115G4; Видеокарта: Intel UHD Graphics; Размер оперативной памяти: 8 ГБ; Тип жесткого диска: SSD; Общий объем накопителей: 512 ГБ",
        4.2,
        "https://kaspi.kz/shop/p/asus-x515ea-bq3144w-i385suw1-90nb0ty1-m02zl0-temno-seryi-107650928/?c=750000000#!/item",
        [
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h02/h4b/65953422278686/asus-x515ea-bq3144w-i385suw1-90nb0ty1-m02zl0-temno-seryi-107650928-2.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h19/h98/65953422802974/asus-x515ea-bq3144w-i385suw1-90nb0ty1-m02zl0-temno-seryi-107650928-3.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h75/h7e/65953423327262/asus-x515ea-bq3144w-i385suw1-90nb0ty1-m02zl0-temno-seryi-107650928-4.jpg",
        ],
    ),
    new Product(
        9,
        "Ноутбук ASUS X515EA-BQ3269 90NB0TY1-M038L0 серый",
        "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h58/h23/66428285354014/asus-x515ea-bq3269-90nb0ty1-m038l0-seryi-107847924-1.jpg",
        "Диагональ экрана: 15.6 дюйм; Процессор: Intel Core i3 1115G4; Видеокарта: Intel UHD Graphics; Размер оперативной памяти: 8 ГБ; Тип жесткого диска: SSD; Общий объем накопителей: 256 ГБ",
        2.0,
        "https://kaspi.kz/shop/p/asus-x515ea-bq3269-90nb0ty1-m038l0-seryi-107847924/?c=750000000#!/item",
        [
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h86/haf/66428285288478/asus-x515ea-bq3269-90nb0ty1-m038l0-seryi-107847924-1.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6f/h62/66428285812766/asus-x515ea-bq3269-90nb0ty1-m038l0-seryi-107847924-2.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h01/h87/66428286337054/asus-x515ea-bq3269-90nb0ty1-m038l0-seryi-107847924-3.jpg",
        ],
    ),
    new Product(
        10,
        "Xiaomi Mi Smart Kettle Pro MJHWSH02YM белый",
        "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h3b/h9b/33290678272030/xiaomi-mi-smart-kettle-pro-mjhwsh02ym-belyi-100719609-1.jpg",
        "Чайник оборудован OLED дисплеем, на котором в реальном времени отображается температура воды. Вы можете выбрать температуру для поддержания, и она отобразится на экране. Mi Smart Kettle Pro оснащен эффективным кольцевым нагревателем мощностью 1800 Вт, который может вскипятить целый чайник воды всего за 5 минут. В чайнике Xiaomi используется высокоточный английский контроллер температуры, который следит за закипанием воды и вовремя отключает питание. Все элементы чайника, соприкасающиеся с водой, а именно, внутренняя поверхность, крышка и датчик температуры изготовлены из нержавеющей стали 304. Этот материал абсолютно безопасен для здоровья, поэтому широко используется в медицинской и пищевой отраслях, не образует налет, накипь, не имеет запахов и легко моется. ",
        5.0,
        "https://kaspi.kz/shop/p/xiaomi-mi-smart-kettle-pro-mjhwsh02ym-belyi-100719609/?c=750000000#!/item",
        [
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h3b/h9b/33290678272030/xiaomi-mi-smart-kettle-pro-mjhwsh02ym-belyi-100719609-1.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h27/hdf/33290692952094/xiaomi-mi-smart-kettle-pro-mjhwsh02ym-belyi-100719609-2.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc0/h1f/33290707533854/xiaomi-mi-smart-kettle-pro-mjhwsh02ym-belyi-100719609-3.jpg",
        ],
    ),
];