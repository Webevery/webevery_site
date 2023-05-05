import styles from './PricesPage.module.scss';
import landingSite from './pricesImgs/landingSite.png';
import visitSite from './pricesImgs/visitSite.png';
import corporativeSite from './pricesImgs/corporativeSite.png';
import shoppingSite from './pricesImgs/shoppingSite.png';
import catalogSite from './pricesImgs/catalogSite.png';
import individualProject from './pricesImgs/individualProject.png';

import { Link } from 'react-router-dom';

const PricesPage = () => {
  return (
    <article className={styles.pricesPage}>
      <ul>
        <li>
          <div className={styles.textWrapper}>
            <h3>Landing Page</h3>
            <p>
              Landing Page - це посадкова сторінки з барвистим дизайном, що
              продає, закликами до дії і зручним розташуванням блоків. Створення
              односторінкового сайту призначене для запуску реклами, продажу
              товарів та послуг, збирання контактних даних. Основною перевагою
              LP є його націленість на потенційного клієнта. Інформація,
              розміщена на подібному ресурсі, відповідає на всі можливі
              запитання потенційного замовника товару чи послуги.
            </p>

            <Link className={styles.pricesPage__link} to={'/'}>
              Learn more
            </Link>
          </div>
          <img src={landingSite} alt="Landing page" />
        </li>
        <li>
          <div className={styles.textWrapper}>
            <h3>Сайт-візитка</h3>
            <p>
              Сайт-візитка – невеликий веб-проект, розрахований на 3-5 сторінок
              і містить основну інформацію про організацію, приватну особу,
              послуги, фотогалерею та контактні дані. Розробку сайту візитки
              можуть замовити невеликі компанії. Відмінно підійде сайту
              візитівка фрілансерам, художникам, приватним викладачам та всім,
              хто бажає запропонувати низку своїх послуг в інтернеті.
            </p>
          </div>
          <img src={visitSite} alt="Visit site" />
        </li>
        <li>
          <div className={styles.textWrapper}>
            <h3>Корпоративний сайт</h3>
            <p>
              Корпоративний сайт є офіційним сайтом компанії, фірми, закладу чи
              будь-якого бізнесу. Створення сайту для бізнесу – це
              найоптимальніший вид сайту для представлення компанії в інтернеті.
              Він виконує кілька функцій, включаючи: надання послуг, залучення
              клієнтів, розширення географії продажів, формування позитивного
              іміджу компанії. Головними перевагами такого сайту є дизайн,
              контент та функціонал.
            </p>
          </div>
          <img src={corporativeSite} alt="Corporative site" />
        </li>
        <li>
          <div className={styles.textWrapper}>
            <h3>Інтернет-магазин</h3>
            <p>
              Створення інтернет-магазину – це найкраще рішення для продажу
              товарів в інтернеті, дозволить збільшити обсяги продажів,
              розширити базу клієнтів, вийти на нові рівень та регіони. Подібні
              майданчики можуть включати від десятка до кількох сотень тисяч
              товарів. Інтернет-магазини оснащені широким функціоналом,
              адаптивною версткою, всім необхідним функціоналом, включаючи
              сервіси онлайн-оплати та доставки. Це найкраще рішення для
              онлайн-торгівлі.
            </p>
          </div>
          <img src={shoppingSite} alt="Shopping site" />
        </li>
        <li>
          <div className={styles.textWrapper}>
            <h3>Сайт каталог</h3>
            <p>
              Основною метою створення сайту каталогу є представлення інформації
              про компанію, перелік послуг та товарів в електронному вигляді і
              може складатися з десятків, сотень, а то й тисяч сторінок.
              Відвідувачі сайту можуть ознайомитися з прайс-листами та описом
              товарів та послуг, переглянути фотографії та звернутися до
              компанії для здійснення покупки. Такий сайт може збільшувати
              кількість продажів за рахунок доступу до повної інформації про
              продукцію та послуги.
            </p>
          </div>
          <img src={catalogSite} alt="Catalog site" />
        </li>{' '}
        <li>
          <div className={styles.textWrapper}>
            <h3>Індивідуальний проект</h3>
            <p>
              Розробка сайту під ключ із індивідуальними вимогами. В основному
              всі сайти, створені за персональними проектами замовників,
              виконують ряд функцій, властивих одразу декількома типами
              веб-сервісів. Такі проекти здатні підвищити рівень продажів,
              сформувати позитивний імідж компанії у клієнтів, розширити
              географію продажів, збирати заявки та особисті дані користувачів
              тощо.
            </p>
          </div>
          <img src={individualProject} alt="Individual project " />
        </li>
      </ul>
    </article>
  );
};
export default PricesPage;
