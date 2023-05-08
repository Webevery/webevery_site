import React from 'react';
import styles from './HowWeWorkPage.module.scss';
import img from './weic2205a.jpg';
import img1 from './Cosmic_‘Winter’_Wonderland.jpg';

const HowWeWorkPage = () => {
  return (
    <div className={styles.main}>
      <section className={styles.hero}>
        <h1>ЯК МИ ПРАЦЮЄМО</h1>
        <h2>ПРОЦЕС РОЗРОБКИ В 9 КРОКІВ</h2>
        <p>
          Ось що означає розробити проєкт разом із нами. Процес динамічний,
          гнучкий та завжди адаптований до ваших потреб.
        </p>
      </section>
      <section className={styles.sectionStages}>
        <div className={styles.sectionStages__stages}>
          <div className={`${styles.sectionContainer} ${styles.firstSection}`}>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <div className={styles.container1}>
                  <img
                    className={styles.img}
                    src={img}
                    alt="cosmic"
                    width="1000"
                    height="500"
                  />
                </div>
                <div className={styles.container2}>
                  <span className={styles.listItemNumber}>01.</span>
                  <h3 className={styles.listItemTitle}>Стадія відкриття</h3>
                  <p className={styles.listItemText}>
                    Ми розробляємо, підтверджуємо та перевіряємо вимоги, додаючи
                    додаткові деталі, якщо необхідно. Починаючи новий проект,
                    етап відкриття — це перше, що ми робимо. Клієнт своїми
                    словами описує ідею або проблему. Ми не надаємо
                    стандартизований бриф для заповнення. Для нас ніколи не
                    проблема витратити 30-60 хвилин на те, щоб вислухати
                    клієнта, щоб одразу запропонувати швидкі поради, варіанти
                    розвитку, рішення чи думки щодо вдосконалення існуючої ідеї.
                  </p>
                </div>
              </li>
              <li className={styles.listItem}>
                <div className={styles.container1}>
                  <img
                    className={styles.img}
                    src={img1}
                    alt="cosmic"
                    width="1000"
                    height="500"
                  />
                </div>
                <div className={styles.container2}>
                  <span className={styles.listItemNumber}>02.</span>
                  <h3 className={styles.listItemTitle}>
                    Обговорення процесу розробки, технології, термінів і
                    вартості
                  </h3>
                  <p className={styles.listItemText}>
                    На початковому етапі надаємо приблизний план розробки,
                    терміни та вартість. У разі складання детального технічного
                    опису на розробку, відсоток похибки значно знижується, що
                    дозволяє уникнути можливих непорозумінь у майбутньому.
                  </p>
                </div>
              </li>
              <li className={styles.listItem}>
                <span className={styles.listItemNumber}>03.</span>
                <h3 className={styles.listItemTitle}>
                  Будівництво дорожньої карти проєкту, планування, технології та
                  стек рішень, команда
                </h3>
                <p className={styles.listItemText}>
                  У проекті ми зазвичай використовуємо методології Agile/Scrum.
                  У разі значного зростання розміру проєкту (кількості людей,
                  які працюють над платформою та додатками), ми можемо перейти
                  на SAFe.
                </p>
              </li>
            </ul>
          </div>
          <div className={`${styles.sectionContainer} ${styles.secondSection}`}>
            <span className={styles.listItemNumber}>04.</span>
            <h3 className={styles.listItemTitle}>Реалізація рішення</h3>
            <p className={styles.listItemText}>
              Кожне з наших рішень вимагає ретельного поводження з
              конфіденційними даними:
            </p>
            <ul className={styles.list}>
              <li className={`${styles.listItem} ${styles.listItem1}`}>
                <p className={styles.listItemText}>
                  Ми працюємо лише зі стабільними та захищеними серверами,
                  такими як Amazon і Azure, із запровадженими високими
                  стандартами.
                </p>
              </li>
              <li className={`${styles.listItem} ${styles.listItem1}`}>
                <p className={styles.listItemText}>
                  Ми взаємодіємо зі сторонніми клієнтами тільки через стандарт
                  HTTPS.
                </p>
              </li>
              <li className={`${styles.listItem} ${styles.listItem1}`}>
                <p className={styles.listItemText}>
                  Системи, які ми використовуємо або де ми зберігаємо
                  конфіденційну інформацію, розгортаються окремо (різні облікові
                  записи AWS), щоб зменшити поверхню атаки та спростити
                  перевірку безпеки.
                </p>
              </li>
              <li className={`${styles.listItem} ${styles.listItem1}`}>
                <p className={styles.listItemText}>
                  Лише команда розробників згідно з NDA має доступ до сховища та
                  сховища даних.
                </p>
              </li>
              <li className={`${styles.listItem} ${styles.listItem1}`}>
                <p className={styles.listItemText}>
                  Обліковими даними доступу до сховища керують спеціальні члени
                  команди.
                </p>
              </li>
              <li className={`${styles.listItem} ${styles.listItem1}`}>
                <p className={styles.listItemText}>
                  Повідомлення логів перевіряються, щоб уникнути витоку
                  конфіденційних даних. Це робиться під час перегляду
                  пул-запитів, а також під час тестування в середовищі розробки.
                </p>
              </li>
              <li className={`${styles.listItem} ${styles.listItem1}`}>
                <p className={styles.listItemText}>
                  Ми використовуємо найновіше програмне забезпечення та
                  слідкуємо за будь-якими оновленнями, які можуть змінити
                  ефективність процесу розробки та доступ до даних.
                </p>
              </li>
              <li className={`${styles.listItem} ${styles.listItem1}`}>
                <p className={styles.listItemText}>
                  Ми відстежуємо всю обробку даних, щоб зберегти їх у безпеці.
                </p>
              </li>
              <li className={`${styles.listItem} ${styles.listItem1}`}>
                <p className={styles.listItemText}>
                  Якщо якась частина даних потрібна для відтворення помилки,
                  персональна та конфіденційна інформація видаляється.
                </p>
              </li>
            </ul>
          </div>
          <div className={`${styles.sectionContainer} ${styles.thirdSection}`}>
            <span className={styles.listItemNumber}>05.</span>
            <h3 className={styles.listItemTitle}>
              Залучення та контроль за роботою додаткових спеціалістів
            </h3>
            <p className={styles.listItemText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis, eos assumenda ratione ea iste unde pariatur velit
              recusandae perspiciatis quia officiis quisquam labore eaque nisi
              dolores alias deleniti veniam. Molestiae!
            </p>
          </div>
          <div className={`${styles.sectionContainer} ${styles.fourthSection}`}>
            <span className={styles.listItemNumber}>06.</span>
            <h3 className={styles.listItemTitle}>Повне тестування продукту</h3>
            <p className={styles.listItemText}>
              {' '}
              Тестування кінцевого продукту відбувається в кожному циклі
              розробки (раз на 1-3 тижні), що складається із зовнішнього
              функціонального тестування, перевірки працездатності продукту під
              навантаженням і профілювання основних модулів. Цей процес має
              вирішальне значення, орієнтований на деталі та важливий для
              забезпечення успіху всього тестування.
            </p>
            <ul className={styles.list}>
              <li className={`${styles.listItem} ${styles.listItem1}`}>
                Створення та підтримка інформації про випуск/цикл
                проекту/компонент.
              </li>
              <li className={`${styles.listItem} ${styles.listItem1}`}>
                Створення та підтримка тестові артефакти, специфічні для кожного
                випуску/циклу, для яких у нас є вимоги, тестові приклади тощо.
              </li>
              <li className={`${styles.listItem} ${styles.listItem1}`}>
                Встановлення відстеження та охоплення тестових активів.
              </li>
              <li className={`${styles.listItem} ${styles.listItem1}`}>
                Підтримка виконання тестів – створення набору тестів, запис
                статусу виконання тесту тощо.
              </li>
              <li className={`${styles.listItem} ${styles.listItem1}`}>
                Збір метричних даних/генерація t-графіків для аналізу.
              </li>
              <li className={`${styles.listItem} ${styles.listItem1}`}>
                Відстеження помилок/управління дефектами
              </li>
            </ul>
          </div>
          <div className={`${styles.sectionContainer} ${styles.firstSection}`}>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <span className={styles.listItemNumber}>07.</span>
                <h3 className={styles.listItemTitle}>
                  Підсумкова документація виробу
                </h3>
                <p className={styles.listItemText}>
                  Під час кожного з циклів розробки продукту клієнт має повний
                  доступ до вихідного коду, а також до інструкцій щодо
                  встановлення продукту для інших розробників. Таким чином,
                  клієнт може в будь-який час надати код для перевірки
                  сторонніми особами. Ми підтримуємо повну документацію щодо
                  плану розвитку, функцій та інструкцій з експлуатації, якщо це
                  необхідно.
                </p>
              </li>
              <li className={styles.listItem}>
                <span className={styles.listItemNumber}>08.</span>
                <h3 className={styles.listItemTitle}>Готовність виробництва</h3>
                <p className={styles.listItemText}>
                  Коли продукт буде повністю протестований і документація
                  остаточно підготовлена, ми запустимо продукт. За потреби ми
                  супроводжуватимемося підтримкою та обслуговуванням.
                </p>
              </li>
              <li className={styles.listItem}>
                <span className={styles.listItemNumber}>09.</span>
                <h3 className={styles.listItemTitle}>
                  Подальша підтримка та обслуговування продукту
                </h3>
                <p className={styles.listItemText}>
                  Ми надаємо 2-й та 3-й рівень підтримки продукту, 1-й рівень
                  підтримки може бути наданий за вимогою. Ми ніколи не обходимо
                  короткими шляхами, особливо коли йдеться про безпеку. Наше
                  керівництво та персонал постійно перевіряють закони GDPR, щоб
                  забезпечити найкращі можливі практики. Ми працюємо в повній
                  відповідності до законодавства Європейського Союзу в усіх
                  аспектах, включаючи безпеку персональних даних.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className={styles.sectionFAQ}>
        <div className={styles.titleFAQ}>
          <h2>FAQ</h2>
        </div>
        <div className={styles.containerFAQ}>
          <div className={styles.questionsFAQ}>
            <ul>
              <li>
                <a href="#answer1">
                  01.Скільки коштує розробка програмного продукту?
                </a>
              </li>
              <li>
                <a href="#answer2">
                  02.Скільки часу знадобиться, щоб доставити мій продукт?
                </a>
              </li>
              <li>
                <a href="#answer3">
                  03.Чи потрібно мені бути технічно підкованим, щоб працювати з
                  вами?
                </a>
              </li>
              <li>
                <a href="#answer4">04.Як ви гарантуєте якість продукції?</a>
              </li>
              <li>
                <a href="#answer5">
                  05.Що, якщо я хочу брати повну участь у процесі розробки?
                </a>
              </li>
              <li>
                <a href="#answer6">
                  06.Чи можете ви подвоїти розмір команди, яка бере участь у
                  проекті, якщо виникне потреба?
                </a>
              </li>
              <li>
                <a href="#answer7">
                  07.Чи можна оновити програмне забезпечення в майбутньому, коли
                  з’являться нові технології?
                </a>
              </li>
              <li>
                <a href="#answer8">
                  08.Що, якщо я прийду до вас із продуктом, який хочу
                  вдосконалити?
                </a>
              </li>
              <li>
                <a href="#answer9">
                  09.Що станеться після того, як ви закінчите мій продукт?
                </a>
              </li>
              <li>
                <a href="#answer10">
                  10.Чи гарантуєте ви безпеку та конфіденційність нашої
                  інтелектуальної власності?
                </a>
              </li>
              <li>
                <a href="#answer11">
                  11.Як ви обробляєте запити клієнтів на зміни?
                </a>
              </li>
              <li>
                <a href="#answer12">
                  12.Чи надаєте Ви послуги тестування програмного забезпечення?
                </a>
              </li>
              <li>
                <a href="#answer13">
                  13.Ви працюєте тільки віддалено чи можете приїхати до мене за
                  потреби?
                </a>
              </li>
              <li>
                <a href="#answer14">
                  14.Яка процедура початку процесу розробки?
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.answersFAQ}>
            <ul>
              <li className={styles.answersFAQ__listItem}>
                <h3 className={styles.answersFAQ__listItemTitle} id="answer1">
                  Скільки коштує розробка програмного продукту?
                </h3>
                <p>
                  Наш досвід дозволяє проконсультувати та розрахувати бюджет і
                  терміни саме під ваші потреби, враховуючи всі можливі ризики.
                  Для цього зв’яжіться з нами та поділіться своїми ідеями.
                </p>
              </li>
              <li className={styles.answersFAQ__listItem}>
                <h3 className={styles.answersFAQ__listItemTitle} id="answer2">
                  Скільки часу знадобиться, щоб доставити мій продукт?
                </h3>
                <p>
                  Необхідні часові рамки повністю залежать від вашого проекту.
                  Першим кроком після звернення до нас є організація
                  безкоштовної онлайн-зустрічі, яка дозволить нам зрозуміти
                  складність вашого проекту. Коли ми зрозуміємо ваші вимоги до
                  програмного забезпечення, ми зможемо надати попередню
                  інформацію про витрати. Проте початкові терміни не завжди
                  дотримуються, оскільки зовнішні обставини можуть змінити
                  випуск кінцевого продукту. Потім ми надамо план реалізації
                  вашого проекту та кроки, які ми пропонуємо виконати, перш ніж
                  фактично почати роботу над вашим програмним рішенням. Це може
                  включати онлайн-семінари, документацію та поглиблені
                  обговорення, які дозволять нам представити остаточний точний
                  підсумок витрат і часу впровадження.
                </p>
              </li>
              <li className={styles.answersFAQ__listItem}>
                <h3 className={styles.answersFAQ__listItemTitle} id="answer3">
                  Чи потрібно мені бути технічно підкованим, щоб працювати з
                  вами?
                </h3>
                <p>
                  Звісно ж ні. Ми тут, щоб допомогти вам технічно реалізувати
                  будь-які потреби вашого бізнесу, навіть без вашого технічного
                  досвіду. Наявність технічного спеціаліста на вашому боці
                  вітається, але не обов’язково. В «Акрополіумі» можна простою
                  мовою отримати поради щодо складних речей. Ми надаємо повну
                  підтримку від першої зустрічі до кінцевого продукту і можемо
                  навіть підтримувати його після.
                </p>
              </li>
              <li className={styles.answersFAQ__listItem}>
                <h3 className={styles.answersFAQ__listItemTitle} id="answer4">
                  Як ви гарантуєте якість продукції?
                </h3>
                <p>
                  Ми ділимо весь етап розробки на спринти, які зазвичай тривають
                  два тижні. Після кожного спринту ви можете побачити готові
                  частини продукту, перевірити їх і висловити свої думки та
                  пропозиції. У нас також є спрощений процес тестування та
                  забезпечення якості кожного продукту. Ви отримаєте проміжні
                  результати і побачите, за що платите протягом усього періоду
                  розробки.
                </p>
              </li>
              <li className={styles.answersFAQ__listItem}>
                <h3 className={styles.answersFAQ__listItemTitle} id="answer5">
                  Що, якщо я хочу брати повну участь у процесі розробки?
                </h3>
                <p>
                  Можна і навіть потрібно. Разом ми створимо продукт, який,
                  безсумнівно, вирішить ваші проблеми та допоможе бізнесу. У нас
                  прозорі процеси, ви знаєте кожного члена команди, який працює
                  над тим, щоб зробити ваш продукт реальним. Ви також можете
                  брати участь у наших плануваннях, ретроспективах і отримувати
                  проміжні звіти про етапи розробки, перевіряти їх і пропонувати
                  свої ідеї в процесі розробки.
                </p>
              </li>
              <li className={styles.answersFAQ__listItem}>
                <h3 className={styles.answersFAQ__listItemTitle} id="answer6">
                  Чи можете ви подвоїти розмір команди, яка бере участь у
                  проекті, якщо виникне потреба?
                </h3>
                <p>
                  Так, багато наших продуктів і підприємств невпинно
                  масштабуються та розвиваються. Ми, у свою чергу, забезпечуємо
                  органічне зростання команди в залежності від ваших поточних
                  потреб. !!!З багатьма нашими клієнтами ми працюємо більше 5
                  років.!!! Вам не потрібно турбуватися про масштабованість. Ми
                  забезпечимо повний цикл розробки та створимо унікальну команду
                  «під ключ».
                </p>
              </li>
              <li className={styles.answersFAQ__listItem}>
                <h3 className={styles.answersFAQ__listItemTitle} id="answer7">
                  Чи можна оновити програмне забезпечення в майбутньому, коли
                  з’являться нові технології?
                </h3>
                <p>
                  Звичайно! Крім того, наші фахівці мають колосальний досвід у
                  таких справах. Ми проконсультуємо вас щодо низки технологій і
                  необхідних рішень, щоб ваш продукт відповідав вимогам ринку та
                  залишався сучасним.
                </p>
              </li>
              <li className={styles.answersFAQ__listItem}>
                <h3 className={styles.answersFAQ__listItemTitle} id="answer8">
                  Що, якщо я прийду до вас із продуктом, який хочу вдосконалити?
                </h3>
                <p>
                  Якщо у вас уже є продукт і ви хочете його вдосконалити,
                  розкажіть нам про ваші основні цілі та причини вашого
                  звернення. Ми обговоримо ваші потреби, вивчимо ваш продукт,
                  проведемо аудит і складемо план вдосконалення всього продукту
                  або його окремих компонентів і, нарешті, приступимо до роботи.
                </p>
              </li>
              <li className={styles.answersFAQ__listItem}>
                <h3 className={styles.answersFAQ__listItemTitle} id="answer9">
                  Що станеться після того, як ви закінчите мій продукт?
                </h3>
                <p>
                  Продовження роботи над проектом залежить від ваших подальших
                  цілей. Ми завжди пропонуємо послуги підтримки та
                  обслуговування продукту, якщо клієнт зацікавлений. Коли
                  продукт стане масштабованим, ми можемо організувати для вас
                  спеціальну команду, яка розробить продукт і забезпечить його
                  високу якість.
                </p>
              </li>
              <li className={styles.answersFAQ__listItem}>
                <h3 className={styles.answersFAQ__listItemTitle} id="answer10">
                  Чи гарантуєте ви безпеку та конфіденційність нашої
                  інтелектуальної власності?
                </h3>
                <p>
                  Так, саме тому наші клієнти довіряють нам. Ми прописуємо всі
                  пункти щодо безпеки конфіденційності та інтелектуальної
                  власності в Основних угодах про надання послуг і
                  нерозголошення між Acropolium і вашою компанією. Ми також
                  укладаємо такі угоди з кожним членом команди та регулярно
                  проводимо навчальні курси на цю тему. Причин для хвилювання
                  немає. Конфіденційність, приватність і захист вашої
                  інтелектуальної власності є для нас пріоритетом номер один.
                </p>
              </li>
              <li className={styles.answersFAQ__listItem}>
                <h3 className={styles.answersFAQ__listItemTitle} id="answer11">
                  Як ви обробляєте запити клієнтів на зміни?
                </h3>
                <p>
                  Ми маємо стандартну процедуру обробки запитів на зміни від
                  наших клієнтів. Перш за все, ми просимо їх схвалити будь-які
                  запити на зміни. Після того, як клієнт схвалив запит, ми
                  проводимо аналіз впливу. Це дозволяє нам надати замовнику
                  терміни та кошторис. Після затвердження кошторису замовником
                  ми вносимо зміни.
                </p>
              </li>
              <li className={styles.answersFAQ__listItem}>
                <h3 className={styles.answersFAQ__listItemTitle} id="answer12">
                  Чи надаєте Ви послуги тестування програмного забезпечення?
                </h3>
                <p>
                  Звичайно! У нас налагоджені всі процеси тестування. Кожен
                  продукт проходить ретельну перевірку як під час розробки, так
                  і на завершальному етапі.
                </p>
              </li>
              <li className={styles.answersFAQ__listItem}>
                <h3 className={styles.answersFAQ__listItemTitle} id="answer13">
                  Ви працюєте тільки віддалено чи можете приїхати до мене за
                  потреби?
                </h3>
                <p>
                  Зазвичай ми працюємо віддалено і маємо для цього налаштовані
                  всі необхідні процеси. Також можливий виїзд наших спеціалістів
                  до Вас в офіс. Плануємо поїздку заздалегідь, обговорюємо
                  вартість і починаємо подорож.
                </p>
              </li>
              <li className={styles.answersFAQ__listItem}>
                <h3 className={styles.answersFAQ__listItemTitle} id="answer14">
                  Яка процедура початку процесу розробки?
                </h3>
                <p>
                  Перш за все, ми вивчаємо ваші вимоги і пропонуємо приблизну
                  вартість і терміни. Отримавши підтвердження з вашого боку, ми
                  підписуємо договір, формуємо команду, яка буде працювати над
                  вашим проектом, пишемо дорожню карту і починаємо власне процес
                  розробки.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowWeWorkPage;
