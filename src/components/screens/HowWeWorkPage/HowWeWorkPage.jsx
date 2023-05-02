import React from 'react';
import styles from './HowWeWorkPage.module.scss';

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
                <span className={styles.listItemNumber}>01.</span>
                <h3 className={styles.listItemTitle}>Стадія відкриття</h3>
                <p className={styles.listItemText}>
                  Ми розробляємо, підтверджуємо та перевіряємо вимоги, додаючи
                  додаткові деталі, якщо необхідно. Починаючи новий проект, етап
                  відкриття — це перше, що ми робимо. Клієнт своїми словами
                  описує ідею або проблему. Ми не надаємо стандартизований бриф
                  для заповнення. Для нас ніколи не проблема витратити 30-60
                  хвилин на те, щоб вислухати клієнта, щоб одразу запропонувати
                  швидкі поради, варіанти розвитку, рішення чи думки щодо
                  вдосконалення існуючої ідеї.
                </p>
              </li>
              <li className={styles.listItem}>
                <span className={styles.listItemNumber}>02.</span>
                <h3 className={styles.listItemTitle}>
                  Обговорення процесу розробки, технології, термінів і вартості
                </h3>
                <p className={styles.listItemText}>
                  На початковому етапі надаємо приблизний план розробки, терміни
                  та вартість. У разі складання детального технічного опису на
                  розробку, відсоток похибки значно знижується, що дозволяє
                  уникнути можливих непорозумінь у майбутньому.
                </p>
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
        <h2>FAQ</h2>\
        <div>
          <ul>
            <li>01.</li>
            <li>02.</li>
            <li>03.</li>
            <li>04.</li>
            <li>05.</li>
            <li>06.</li>
            <li>07.</li>
            <li>08.</li>
            <li>09.</li>
            <li>10.</li>
            <li>11.</li>
            <li>12.</li>
            <li>13.</li>
            <li>14.</li>
            <input type="text" pattern="" />
          </ul>
        </div>
        <div>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default HowWeWorkPage;
