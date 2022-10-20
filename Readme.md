В этом репозитории я хочу создать мини приложение (SPA) для помощи при принятии решении о покупке.
Что то наподобие этого https://www.tsenazakg.com/
Уточню: вот приходим мы в крупный супермаркет, нам нужно выбрать растворимый кофе. У нас критериев по выбору кофе несколько. Среди них насколько кофе крепкий, я например люблю двойку по пятибальной шкале, а моя жена любит очень крепкий это четверка или пятерка, цена чтобы он был не самым дешевым (потому что самые дешевые варианты не раз убеждался это самые плохие варианты для покупки для себя любимого), но и не самым дорогим.
Так вот продолжим с того места как мы зашли в супермаркет и подошли к витрине с кофе. Перед нами: 
- Кофе растворимый BUSHIDO Kodo сублимированный, интенсивность не известна, но я думаю стоит попробовать 95г, 519 ₽
- Кофе растворимый NESCAFE Gold Aroma сублимированный с добавлением натурального жареного молотого, интенсивность 8 из 10, 85г, 200 ₽
- Кофе растворимый JARDIN Colombia Medellin сублимированный, интенсивность 5 из 5, 240г, 790 ₽
- Кофе растворимый JARDIN kenya Kilimanjaro сублимированный, интенсивность 3 из 5, 95г, 305 ₽

И так далее, там может до 10 видов быть и более, между которыми мне предстоит сделать выбор.
Мы создадим приложение для браузера, в котором пользователь заполняет 5 полей: название, интенсивность указанная на упаковке, максимально возможная интенсивность, вес нетто, цена (в рублях без учета копеек).
Нажимает кнопку отправить и после каждого такого действия внизу на странице формируется таблица в виде списка автоматически отсортированного по цене.
Цена рассчитывается исходя из цены на кофе и его веса, а интенсивность рассчитывается исходя из интенсивности указанной на упаковке и максимально возможной интенсивности для кофе данного производителя.
Ну и чтобы эта таблица была не просто серая, чтобы разные по цене строки выделялись по градации красного. Например самое дешевое предложение розовым, самое дорогое темно красным, среднее просто красным.

**Я сам себе придумал такую задачу, для обучения (изучаю фронтенд веб разработку), как примерно это сделать я представляю, если кто прочитает это и для него эта задача покажется простой прошу присылать пул реквесты.**