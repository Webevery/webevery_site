import landingSite from 'images/pricesImgs/landingSite.png';
import visitSite from 'images/pricesImgs/visitSite.png';
import corporativeSite from 'images/pricesImgs/corporativeSite.png';

import shoppingSite from 'images/pricesImgs/shoppingSite.png';
import catalogSite from 'images/pricesImgs/catalogSite.png';
import individualProject from 'images/pricesImgs/individualProject.png';

import { nanoid } from 'nanoid';

export const prices = [
  {
    id: nanoid(),
    title: 'Landing Page',
    describton:
      ' Landing Page - це посадкова сторінки з барвистим дизайном, щопродає, закликами до дії і зручним розташуванням блоків. Створення односторінкового сайту призначене для запуску реклами, продажу товарів та послуг, збирання контактних даних. Основною перевагою LP є його націленість на потенційного клієнта. Інформація,розміщена на подібному ресурсі, відповідає на всі можливі запитання потенційного замовника товару чи послуги. ',
    image: landingSite,
    details:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis explicabo provident incidunt, quaerat totam nostrum sunt sit distinctio est, iure asperiores aspernatur quasi debitis autem tempora cum esse, accusantium praesentium.',
  },

  {
    id: nanoid(),
    title: 'Сайт-візитка',
    describton:
      '  Сайт-візитка – невеликий веб-проект, розрахований на 3-5 сторінок і містить основну інформацію про організацію, приватну особу, послуги, фотогалерею та контактні дані. Розробку сайту візитки можуть замовити невеликі компанії. Відмінно підійде сайту візитівка фрілансерам, художникам, приватним викладачам та всім, хто бажає запропонувати низку своїх послуг в інтернеті. ',
    image: visitSite,
    details:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis explicabo provident incidunt, quaerat totam nostrum sunt sit distinctio est, iure asperiores aspernatur quasi debitis autem tempora cum esse, accusantium praesentium.',
  },

  {
    id: nanoid(),
    title: 'Корпоративний сайт',
    describton:
      '  Корпоративний сайт є офіційним сайтом компанії, фірми, закладу чи будь-якого бізнесу. Створення сайту для бізнесу – це  найоптимальніший вид сайту для представлення компанії в інтернеті. Він виконує кілька функцій, включаючи: надання послуг, залучення клієнтів, розширення географії продажів, формування позитивного іміджу компанії. Головними перевагами такого сайту є дизайн, контент та функціонал. ',
    image: corporativeSite,
    details:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis explicabo provident incidunt, quaerat totam nostrum sunt sit distinctio est, iure asperiores aspernatur quasi debitis autem tempora cum esse, accusantium praesentium.',
  },

  {
    id: nanoid(),
    title: 'Інтернет-магазин',
    describton:
      '  Створення інтернет-магазину – це найкраще рішення для продажу товарів в інтернеті, дозволить збільшити обсяги продажів, розширити базу клієнтів, вийти на нові рівень та регіони. Подібні майданчики можуть включати від десятка до кількох сотень тисяч товарів. Інтернет-магазини оснащені широким функціоналом, адаптивною версткою, всім необхідним функціоналом, включаючи сервіси онлайн-оплати та доставки. Це найкраще рішення для онлайн-торгівлі. ',
    image: shoppingSite,
    details:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis explicabo provident incidunt, quaerat totam nostrum sunt sit distinctio est, iure asperiores aspernatur quasi debitis autem tempora cum esse, accusantium praesentium.',
  },

  {
    id: nanoid(),
    title: 'Сайт каталог',
    describton:
      '   Основною метою створення сайту каталогу є представлення інформації про компанію, перелік послуг та товарів в  електронному вигляді і може складатися з десятків, сотень, а то й тисяч сторінок. Відвідувачі сайту можуть ознайомитися з прайс-листами та описом   товарів та послуг, переглянути фотографії та звернутися до компанії для здійснення покупки. Такий сайт може збільшувати кількість продажів за рахунок доступу до повної інформації про продукцію та послуги. ',
    image: catalogSite,
    details:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis explicabo provident incidunt, quaerat totam nostrum sunt sit distinctio est, iure asperiores aspernatur quasi debitis autem tempora cum esse, accusantium praesentium.',
  },

  {
    id: nanoid(),
    title: 'Індивідуальний проект',
    describton:
      '   Розробка сайту під ключ із індивідуальними вимогами. В основному всі сайти, створені за персональними проектами замовників, конують ряд функцій, властивих одразу декількома типами веб-сервісів. Такі проекти здатні підвищити рівень продажів сформувати позитивний імідж компанії у клієнтів, розширити географію продажів, збирати заявки та особисті дані користувачів тощо. ',
    image: individualProject,
    details:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis explicabo provident incidunt, quaerat totam nostrum sunt sit distinctio est, iure asperiores aspernatur quasi debitis autem tempora cum esse, accusantium praesentium.',
  },
];
