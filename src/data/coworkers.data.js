import defaultCoworker from '../images/ourTeamCompressed/defaultCoworker.webp';
import volodymyrKavun from '../images/ourTeamCompressed/volodymyrKavun.webp';
import maksPeltek from '../images/ourTeamCompressed/maksPeltek.webp';
import nataliiaBoiko from '../images/ourTeamCompressed/nataliiaBoiko.webp';
import ivikaDuda from '../images/ourTeamCompressed/ivikaDuda.webp';
import andriiTsapkov from '../images/ourTeamCompressed/andriiTsapkov.webp';
import dmytroKolodchenko from '../images/ourTeamCompressed/dmytroKolodchenko.webp';
import maksPadalka from '../images/ourTeamCompressed/maksPadalka.webp';
import vitaliiPavlovskyi from '../images/ourTeamCompressed/vitaliiPavlovskyi.webp';
import myroslavKozar from '../images/ourTeamCompressed/myroslavKozar.webp';
// import volodymurPolztyuk from '../images/ourTeam/volodymurPolztyuk.png';
// import maksymIgnatenko from '../images/ourTeam/maksymIgnatenko.png';
import oksanaRomanenko from '../images/ourTeamCompressed/oksanaRomanenko.webp';
import ivanGagaus from '../images/ourTeamCompressed/ivanGagaus.webp';
import denysKudriavets from '../images/ourTeamCompressed/denysKudriavets.webp';
import dmitroKotenev from '../images/ourTeamCompressed/dmitroKotenev.webp';

import defaultCoworkerSmall from '../images/ourTeamCompressed/defaultCoworkerSmall.webp';
import volodymyrKavunSmall from '../images/ourTeamCompressed/volodymyrKavunSmall.webp';
import maksPeltekSmall from '../images/ourTeamCompressed/maksPeltekSmall.webp';
import nataliiaBoikoSmall from '../images/ourTeamCompressed/nataliiaBoikoSmall.webp';
import ivikaDudaSmall from '../images/ourTeamCompressed/ivikaDudaSmall.webp';
import andriiTsapkovSmall from '../images/ourTeamCompressed/andriiTsapkovSmall.webp';
import dmytroKolodchenkoSmall from '../images/ourTeamCompressed/dmytroKolodchenkoSmall.webp';
import maksPadalkaSmall from '../images/ourTeamCompressed/maksPadalkaSmall.webp';
import vitaliiPavlovskyiSmall from '../images/ourTeamCompressed/vitaliiPavlovskyiSmall.webp';
import myroslavKozarSmall from '../images/ourTeamCompressed/myroslavKozarSmall.webp';
// import volodymurPolztyukSmall from '../images/ourTeam/volodymurPolztyukSmall.png';
// import maksymIgnatenkoSmall from '../images/ourTeam/maksymIgnatenkoSmall.png';
import oksanaRomanenkoSmall from '../images/ourTeamCompressed/oksanaRomanenkoSmall.webp';
import ivanGagausSmall from '../images/ourTeamCompressed/ivanGagausSmall.webp';
import denysKudriavetsSmall from '../images/ourTeamCompressed/denysKudriavetsSmall.webp';
import dmitroKotenevSmall from '../images/ourTeamCompressed/dmitroKotenevSmall.webp';

import mapGdansk from 'images/locationsMaps/mapGdansk.png';
import mapIvanoFrankivsk from 'images/locationsMaps/mapIvano-Frankivsk.png';
import mapKamianetsPodilskyi from 'images/locationsMaps/mapKamianets-Podilskyi.png';
import mapKharkiv from 'images/locationsMaps/mapKharkiv.png';
import mapKyiv from 'images/locationsMaps/mapKyiv.png';
import mapLandauinderPfalz from 'images/locationsMaps/mapLandau-in-der-Pfalz.png';
import mapLviv from 'images/locationsMaps/mapLviv.png';
import mapOdesa from 'images/locationsMaps/mapOdesa.png';
import mapOstrava from 'images/locationsMaps/mapOstrava.png';
import mapSumy from 'images/locationsMaps/mapSumy.png';
// import mapTallinn from 'images/locationsMaps/mapTallinn.png';
import mapTrenchin from 'images/locationsMaps/mapTrenchin.png';
import mapUjgorod from 'images/locationsMaps/mapUjgorod.png';
import mapZaporizhzhia from 'images/locationsMaps/mapZaporizhzhia.png';


export const coworkersData = [
  {
    id: '0',
    name: 'Наталія Бойко',
    photo: nataliiaBoiko,
    photoSmall: nataliiaBoikoSmall,
    profession: 'Full Stack Developer',
    quote: 'Варто пам’ятати, що частіше маленькі кроки, а не гігантські стрибки, призводять до найтриваліших змін.',
    humor: 'Можна ЦЮ КНІПКУ взяти і ПРИШПАНДЬОРИТИ ось ТУДИ і БУДЕ воно ДОБРЕ !',
    city: 'Івано-Франківськ',
    latitude: 48.92312,
    longitude: 24.71248,
    country: 'Україна',
    location: 'Ivano-Frankivsk',
    map: mapIvanoFrankivsk,
    email: 'natalabojko@gmail.com',
    phone: +380503738465,
  },

  {
    id: '1',
    name: 'Володимир Кавун',
    photo: volodymyrKavun,
    photoSmall: volodymyrKavunSmall,
    profession: 'Full Stack Developer',
    quote: 'Коли у Вас є мрія, Ви повинні схопити її та ніколи не відпускати, і кожного дня робити все можливе для її здійснення.',
    humor: 'Я ЛОНГУЮ, що треба ще трохи ПІДЛАМПІЧИТИ i ПІДРЕПЕТІРУВАТЬ.',
    city: 'Острава',
    latitude: 49.83465,
    longitude: 18.28204,
    country: 'Чехія',
    location: 'Ostrava',
    map: mapOstrava,
    email: 'volodymirkavun1@gmail.com',
    phone: +380636876176,
  },

  {
    id: '2',
    name: 'Максим Пельтек',
    photo: maksPeltek,
    photoSmall: maksPeltekSmall,
    profession: 'Full Stack Developer',
    quote: 'Не порівнюйте себе ні з ким. Тримайте голову високо і пам’ятайте: Ви не кращі, не гірші, Ви - це Ви, і ніхто не може цього заперечити.',
    humor: 'МАЮ знову СУМНІВИ. Може ТАК зробити? ЧИ може ОСЬ ТАК зробити ?',
    city: 'Одеса',
    latitude: 46.381806,
    longitude: 30.71039,
    country: 'Україна',
    location: 'Odesa',
    map: mapOdesa,
    email: 'peltek1985@gmail.com',
    phone: +380683396082,
  },

  {
    id: '3',
    name: 'Івіка Дуда',
    photo: ivikaDuda,
    photoSmall: ivikaDudaSmall,
    profession: 'Full Stack Developer',
    quote: 'Погана новина: час швидко летить. Хороша новина: Ви пілот, і все залежить тільки від Вас.',
    humor: 'Чим далі, тим гірше. То вже час змінювати напрям.',
    city: 'Ужгород',
    latitude: 48.6242,
    longitude: 22.2947,
    country: 'Україна',
    location: 'Ujgorod',
    map: mapUjgorod,
    email: 'kivikaivika@gmail.com',
    phone: +380955834998,
  },

  {
    id: '4',
    name: 'Андрій Цапков',
    photo: andriiTsapkov,
    photoSmall: andriiTsapkovSmall,
    profession: 'Full Stack Developer',
    quote: 'В житті існує багато речей, на які розумна людина не хотіла б звертати уваги.',
    humor: 'Заради грошей люди готові піти на все — навіть на роботу.',
    city: "Кам'янець-Подільський",
    latitude: 48.67882,
    longitude: 26.58516,
    country: 'Україна',
    location: 'Kamianets-Podilskyi',
    map: mapKamianetsPodilskyi,
    email: 'a.tsapkov.dev@gmail.com',
    phone: +380936452142,
  },

  {
    id: '5',
    name: 'Дмитро Колодченко',
    photo: dmytroKolodchenko,
    photoSmall: dmytroKolodchenkoSmall,
    profession: 'Full Stack Developer',
    quote: 'Завжди тримайтесь обличчям до сонячного світла, і тіні будуть падати позаду Вас.',
    humor: 'Мозком наділений кожен, але не всі розібралися з інструкцією.',
    city: 'Запоріжжя',
    latitude: 47.85167,
    longitude: 35.11714,
    country: 'Україна',
    location: 'Zaporizhzhia',
    map: mapZaporizhzhia,
    email: 'dima.kolod@gmail.com',
    phone: +380953907792,
  },

  {
    id: '6',
    name: 'Максим Падалка',
    photo: maksPadalka,
    photoSmall: maksPadalkaSmall,
    profession: 'Full Stack Developer',
    quote: 'Успіх не є остаточним, невдача не є фатальною. Важливою є сміливість продовжувати.',
    humor: 'Багато заробляю, але мало отримую.',
    city: 'Тренчин',
    latitude: 48.89452,
    longitude: 18.04436,
    country: 'Словаччина',
    location: 'Trenchin',
    map: mapTrenchin,
    email: 'sheihmaks@gmail.com',
    phone: +380671915300,
  },

  {
    id: '7',
    name: 'Віталій Павловський',
    photo: vitaliiPavlovskyi,
    photoSmall: vitaliiPavlovskyiSmall,
    profession: 'Full Stack Developer',
    quote: 'Пам’ятайте, що Ви є господарем свого життя. Ніколи не дозволяйте іншим людям писати ваш сценарій.',
    humor: 'Хороших людей багато, корисних мало.',
    city: 'Суми',
    latitude: 50.9077,
    longitude: 34.7981,
    country: 'Україна',
    location: 'Sumy',
    map: mapSumy,
    email: 'sledozar@gmail.com',
    phone: +380664710207,
  },

  {
    id: '8',
    name: 'Володимир Ползтюк',
    photo: defaultCoworker,
    photoSmall: defaultCoworkerSmall,
    profession: 'Full Stack Developer',
    quote: 'Ніколи не пізно поставити нову мету або помріяти про нову мрію. Все залежить тільки від Вас.',
    humor: 'Поки НЕ РОБЕ. Не знаю як, АЛЕ я РОЗБЕРУСЯ !',
    city: 'Львів',
    latitude: 49.83826,
    longitude: 24.02324,
    country: 'Україна',
    location: 'Lviv',
    map: mapLviv,
    email: 'wowa.pol@ukr.net',
    // phone: +380000000000,
  },

  {
    id: '9',
    name: 'Мирослав Козар',
    photo: myroslavKozar,
    photoSmall: myroslavKozarSmall,
    profession: 'Full Stack Developer',
    quote: 'Теорія під час навчання - це дуже добре, але повинно бути вісімдесят відсотків практики.',
    humor: 'ААААААА, я ЗРОЗУМІВ...',
    city: 'Ландау-ін-дер-Пфальц',
    latitude: 49.19844,
    longitude: 8.11692,
    country: 'Німеччина',
    location: 'Landau-in-der-Pfalz',
    map: mapLandauinderPfalz,
    email: 'myrkozar@gmail.com',
    phone: +380500172671,
  },

  {
    id: '10',
    name: 'Оксана Романенко',
    photo: oksanaRomanenko,
    photoSmall: oksanaRomanenkoSmall,
    profession: 'UX/UI Designer',
    quote: 'Коли квітка не цвіте, Ви виправляєте не квітку, а середовище, в якому вона росте.',
    humor: 'Там де ЖОВТЕНЬКИЙ. Тільки НЕ ТОЙ, що ЖОВТЕНЬКИЙ.',
    city: 'Гданськ',
    latitude: 54.372158,
    longitude: 18.638306,
    country: 'Польща',
    location: 'Gdansk',
    map: mapGdansk,
    email: 'oks.romanenkodesign@gmail.com',
    phone: +380676861493,
  },

  {
    id: '11',
    name: 'Іван Гагаус',
    photo: ivanGagaus,
    photoSmall: ivanGagausSmall,
    profession: 'UX/UI Designer',
    quote: 'Кожен день я встаю і переглядаю список Forbes найбагатших людей у світі. Якщо мене там немає, я йду на роботу.',
    humor: 'Кількість розуму на планеті – величина постійна. А населення зростає.',
    city: 'Одеса',
    latitude: 46.48572,
    longitude: 30.74383,
    country: 'Україна',
    location: 'Odesa',
    map: mapOdesa,
    // email: '',
    // phone: +3801111111,
  },

  {
    id: '12',
    name: 'Денис Кудрявець',
    photo: denysKudriavets,
    photoSmall: denysKudriavetsSmall,
    profession: 'QA Engineer',
    quote: 'Не завжди потрібен план. Іноді Вам просто потрібно вдихнути, довіритися, відпустити і подивитися, що станеться.',
    humor: 'Продаю нервову систему, в чудовому стані, заводиться з півоберта.',
    city: 'Харків',
    latitude: 50.00156,
    longitude: 36.231537,
    country: 'Україна',
    location: 'Kharkiv',
    map: mapKharkiv,
    email: 'kudriavetsdenis@gmail.com',
    phone: +380686345365,
  },

  {
    id: '13',
    name: 'Дмитро Котеньов',
    photo: dmitroKotenev,
    photoSmall: dmitroKotenevSmall,
    profession: 'UX/UI Designer',
    quote: 'Людське життя - це колекція різноманітних моментів. Тому збирайте їх, як найкращі фотографії.',
    humor: 'Йди проти вітру. І нехай тобі плюють у спину.',
    city: 'Київ',
    latitude: 50.450001,
    longitude: 30.523333,
    country: 'Україна',
    location: 'Kyiv',
    map: mapKyiv,
    email: 'kotenevdima1@gmail.com',
    phone: +380632468706,
  },
  // {
  //   id: '14',
  //   name: 'Максим Ігнатенко',
  //   // photo: maksymIgnatenko,
  //   // photoSmall: maksymIgnatenkoSmall,
  //   profession: 'Full Stack Developer',
  //   quote: 'Прокидайтесь рішучими, лягайте спати задоволеними.',
  // //   quoteEn: 'Wake up determined, go to bed satisfied.',
  //   humor: '',
  //   city: 'Таллінн',
  //  // cityEn: 'Tallinn',
  //   latitude: 59.436962,
  //   longitude: 24.753574,
  //   country: 'Естонія',
  // //   countryEn: 'Estonia',
  //   location: 'Tallinn',
  //   map: mapTallinn,
  //   email: 'cadillac.maxim@gmail.com',
  //   phone: +380664770959,
  // },
];
