// =============================================================
// ██████╗  ██████╗ ███╗   ██╗███████╗██╗  ██╗    ██╗  ██╗███████╗██████╗
// ██╔══██╗██╔═══██╗████╗  ██║██╔════╝██║  ██║    ██║ ██╔╝██╔════╝██╔══██╗
// ██║  ██║██║   ██║██╔██╗ ██║█████╗  ███████║    █████╔╝ █████╗  ██████╔╝
// ██║  ██║██║   ██║██║╚██╗██║██╔══╝  ██╔══██║    ██╔═██╗ ██╔══╝  ██╔═══╝
// ██████╔╝╚██████╔╝██║ ╚████║███████╗██║  ██║    ██║  ██╗███████╗██║
// ╚═════╝  ╚═════╝ ╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝    ╚═╝  ╚═╝╚══════╝╚═╝
//
//  כל השינויים בתוכן האתר נעשים כאן בלבד — שמור ופרוס מחדש.
// =============================================================


// =============================================================
// ┌─────────────────────────────────────────────────────────┐
// │                    דף הבית — מצגת                       │
// └─────────────────────────────────────────────────────────┘
// =============================================================

// -- תמונות מצגת — מחשב --
// הוסף / הסר כתובות URL. הסדר = סדר ההצגה.
var SLIDES = [
  'https://i.imgur.com/AnjJBsK.jpeg',
  'https://i.imgur.com/3DoFWV7.jpeg',
  'https://i.imgur.com/fbL1RQd.jpeg',
  'https://i.imgur.com/qNvRIlb.jpeg',
  'https://i.imgur.com/giReJN8.jpeg',
  'https://i.imgur.com/E0VZ7vA.jpeg',
  'https://i.imgur.com/8qCh6u1.jpeg',
  'https://i.imgur.com/faEHdFO.jpeg',
  'https://i.imgur.com/UydPxyo.jpeg',
];

// זמן הצגה לכל תמונה במחשב (אלפיות שנייה)
var SLIDE_DURATION = 5000;

// זמן מעבר בין תמונות במחשב (אלפיות שנייה)
var SLIDE_TRANSITION = 1400;


// -- תמונות מצגת — פלאפון --
// השאר ריק [] כדי להשתמש באותן תמונות כמו במחשב.
// מומלץ: תמונות אנכיות לתצוגה טובה יותר בנייד.
var MOBILE_SLIDES = [
  'https://i.imgur.com/DQ0SwTQ.jpeg',
'https://i.imgur.com/KYWT5qb.jpeg',
  'https://i.imgur.com/PAJwlx4.jpeg',
  'https://i.imgur.com/LqViV7T.jpeg',
'https://i.imgur.com/0WA29yy.jpeg',
  'https://i.imgur.com/uCEToaz.jpeg',

];

// זמן הצגה לכל תמונה בפלאפון (אלפיות שנייה)
var SLIDE_DURATION_MOBILE = 3500;


// =============================================================
// ┌─────────────────────────────────────────────────────────┐
// │                    עבודות — תוכן                        │
// └─────────────────────────────────────────────────────────┘
// =============================================================

// -- כיצד להוסיף עבודה חדשה --
//
//   1. העתק בלוק שלם (מ-{ עד },) לתחתית הרשימה
//   2. מלא את הפרטים:
//      title:              שם העבודה
//      year:               שנה
//      medium:             חומר / טכניקה
//      size:               מידות
//      images:             רשימת כתובות תמונות או GIF
//                          - תמונה ראשונה = מה שיוצג בדף העבודות
//                          - שאר התמונות = גלריה בלחיצה
//                          - תמונה יחידה: images: ['https://...']
//                          - GIF נתמך: פשוט הכנס כתובת של קובץ .gif
//                            לדוגמה: images: ['https://i.imgur.com/xxxxx.gif']
//      installationPhotos: קרדיט צלם (השאר '' אם אין)
//      vimeoID:            מספר הסרטון ב-Vimeo בלבד (השאר '' אם אין)
//
var WORKS = [
  {
    title:              'Tzirim (Axes)',
    year:               '2024',
    medium:             'Oak wood',
    size:               '327 × 467 cm (Dimensions variable)',
    images: [
      'https://i.imgur.com/FIL60lB.jpeg',
      'https://i.imgur.com/VGxrsrb.jpeg',
      'https://i.imgur.com/YRC5Q9E.jpeg',
      'https://i.imgur.com/AnjJBsK.jpeg',
    ],
    installationPhotos: 'Daniel Hanoch',
    vimeoID:            '',
  },
  {
    title:              'Clinging (Shemi)',
    year:               '2023',
    medium:             'Archival Inkjet',
    size:               '70 × 100 cm',
    images: [
      'https://i.imgur.com/zIbKQfA.jpeg',
    ],
    installationPhotos: '',
    vimeoID:            '',
  },
  {
    title:              'Clinging (Tumarkin)',
    year:               '2025',
    medium:             'Archival Inkjet',
    size:               '70 × 100 cm',
    images: [
      'https://i.imgur.com/CnuMs10.jpeg',
    ],
    installationPhotos: '',
    vimeoID:            '',
  },
  {
    title:              'Clinging (Kadishman)',
    year:               '2025',
    medium:             'Archival Inkjet',
    size:               '70 × 100 cm',
    images: [
      'https://i.imgur.com/bWjd6Db.jpeg',
    ],
    installationPhotos: '',
    vimeoID:            '',
  },
  {
    title:              'Golden Jackal',
    year:               '2025',
    medium:             'Umbrella, candle, taxidermied jackal leg',
    size:               '90 × 90 cm',
    images: [
      'https://i.imgur.com/EUanBpY.jpeg',
      'https://i.imgur.com/DQ0SwTQ.jpeg',
      'https://i.imgur.com/TJKOuYw.jpeg',
      'https://i.imgur.com/1eR59pN.jpeg',
    ],
    installationPhotos: 'Daniel Hanoch',
    vimeoID:            '',
  },
  {
    title:              'Grey Heron',
    year:               '2025',
    medium:             'Bronze and wood (walking stick)',
    size:               'Dimensions variable (according to ceiling height)',
    images: [
      'https://i.imgur.com/KFhxmpz.jpeg',
      'https://i.imgur.com/EDU4a3R.jpeg',
    ],
    installationPhotos: 'Daniel Hanoch',
    vimeoID:            '',
  },
{
    title:              'Protome (Gehazi)',
    year:               '2023',
    medium:             'Video (loop)',
    size:               'Dimensions variable (according to ceiling height)',
    images: [
      'https://i.imgur.com/oV1Jn94.jpeg',
'https://i.imgur.com/ARlHTb7.jpeg',

    ],
    installationPhotos: 'Daniel Hanoch',
    vimeoID:            'https://vimeo.com/1055671442?fl=ip&fe=ec',
  },
{
    title:               'Butterfly',
    year:               '2025',
    medium:             'Silver-plated aluminum casting, knife blades, chair',
    size:               '42 x 59 x 90',
    images: [
      'https://i.imgur.com/Wr8UomW.jpeg',
'https://i.imgur.com/Mm9A9UU.jpeg',
'https://i.imgur.com/tzpJAIX.jpeg',


    ],
    installationPhotos: 'Tziki Eisenberg',
    vimeoID:            '',
  },
{
    title:              'Leg and Stone',
    year:               '2020',
    medium:             'Inkjet print',
    size:               '150 x 75 cm',
    images: [
      'https://i.imgur.com/a0usuHL.jpeg ',
'https://i.imgur.com/uCEToaz.jpeg',
    ],
    installationPhotos: 'Tziki Eisenberg',
    vimeoID:            '',
  },
{
    title:                'Portrait of Father in a Car',
    year:               '2021',
    medium:             'Inkjet print, Citroën BX car window, dust, wood',
    size:               '51 x 62 cm',
    images: [
      'https://i.imgur.com/3jEZMPT.jpeg',
'https://i.imgur.com/5szztqc.jpeg',
    ],
    installationPhotos: 'Shai Halevi',
    vimeoID:            '',
  },
{
    title:              'East of Eden (Bezalel Gates)',
    year:               '2024',
    medium:             'inkjet print on archival paper (diptych)',
    size:               '227 x 100 cm',
    images: [
      'https://i.imgur.com/9ZsOBCb.jpeg',
'https://i.imgur.com/qKslWs5.jpeg',
'https://i.imgur.com/v9RYTbT.jpeg',
'https://i.imgur.com/PAJwlx4.jpeg',
    ],
    installationPhotos: 'Daniel Hanoch',
    vimeoID:            '',
  },
{
    title:             'Still Life',
    year:               '2025',
    medium:             'Inkjet print on vinyl, Dibond, wooden poles',
    size:               'Dimensions variable',
    images: [
      'https://i.imgur.com/DBxF19V.jpeg',
      'https://i.imgur.com/zQru6wX.jpeg',
'https://i.imgur.com/1M3762Y.jpeg',

    ],
    installationPhotos: 'Noga Greenberg',
    vimeoID:            '',
  },
{
    title:              'Self-portrait with candles',
    year:               '2021',
    medium:             'video (4:25)',
    size:               '',
    images: [
      'https://i.imgur.com/sabA0ce.jpeg',
    ],
    installationPhotos: '',
    vimeoID:            'https://vimeo.com/1059126078',
  },
{
    title:              'Totem',
    year:               '2021',
    medium:             'Inkjet print',
    size:               '290 x 107 cm',
    images: ['https://i.imgur.com/KYWT5qb.jpeg',
'https://i.imgur.com/lfx21ja.jpeg',
'https://i.imgur.com/k2rH49r.jpeg',
      'https://i.imgur.com/KYWT5qb.jpeg',
    ],
    installationPhotos: 'Neta Cones',
    vimeoID:            '',
  },
{
    title:              'Roof',
    year:               '2021',
    medium:             'Marseille roof tiles from HaMiffal roof, lichens, oil paint, motor oil, plastic wrap, and bucket',
    size:               '420 x 120 x 300 cm',
    images: [
      'https://i.imgur.com/LqViV7T.jpeg',
'https://i.imgur.com/SGkGsev.jpeg',
'https://i.imgur.com/4bGt4oW.jpeg',
    ],
    installationPhotos: 'Ishai Halevy',
    vimeoID:            '',
  },
{
    title:              'Hercules/Masking Tape',
    year:               '2021',
    medium:             'Inkjet print',
    size:               '260 x 120 cm',
    images: [
      'https://i.imgur.com/kKOmIoV.jpeg',
'https://i.imgur.com/M1n6fa3.jpeg',
'https://i.imgur.com/L8qPljc.jpeg',
    ],
    installationPhotos: 'Ishay Halevy, Aharon Paz ',
    vimeoID:            '',
  },
{
    title:              'Untitled',
    year:               '2019',
    medium:             'Brass, electrical cables, plugs, and cable clips',
    size:               '',
    images: [
      'https://i.imgur.com/OddXKhl.jpeg',
'https://i.imgur.com/Hc7OJvZ.jpeg',
    ],
    installationPhotos: '',
    vimeoID:            '',
  },
{
    title:              'Ear',
    year:               '2020',
    medium:             'Silicone casting, helix earrings, metal, fabric',
    size:               '',
    images: [
      'https://i.imgur.com/9Yye3v1.jpeg',
'https://i.imgur.com/dXe5jJk.jpeg',
'https://i.imgur.com/OXYMLWT.jpeg',
    ],
    installationPhotos: '',
    vimeoID:            '',

  },
{
    title:              'Self-Portrait with Pen',
    year:               '2020',
    medium:             'Inkjet print on paper, tissue, pen, and ink',
    size:               '34 x 51 cm',
    images: [
      'https://i.imgur.com/L1qgTs3.jpeg',
'https://i.imgur.com/Gw5QoTt.jpeg',
    ],
    installationPhotos: '',
    vimeoID:            '',
  },
{
    title:              'Bird',
    year:               '2020',
    medium:             'Silver-plated casting, Buteo talons, thread, and yellow balloons',
    size:               '',
    images: [
      'https://i.imgur.com/R14AOWM.jpeg',
'https://i.imgur.com/0WA29yy.jpeg',
    ],
    installationPhotos: 'Oded Yones',
    vimeoID:            '',
  },
{
    title:              'Mouse',
    year:               '2020',
    medium:             "Video installation on 43'' monitor",
    size:               '',
    images: [
      'https://i.imgur.com/WGf7bTN.jpeg',
'https://i.imgur.com/JK49WTw.jpeg',
    ],
    installationPhotos: 'Lena Gomon',
    vimeoID:            'https://vimeo.com/manage/videos/458109823',
  },
{
    title:              'Crutches',
    year:               '2020',
    medium:             'Inkjet print',
    size:               'Dimensions variable',
    images: ['https://i.imgur.com/zhhCSQw.jpeg',
'https://i.imgur.com/rJpJ5Yg.jpeg',
    ],
    installationPhotos: 'Tal Nisim',
    vimeoID:            '',
  },

];

// -- מעברים בגלריה המלאה --
// זמנים באלפיות שנייה
var GALLERY_FADE_SAME_PROJECT  = 0;    // מהירות היעלמות — מעבר בין תמונות באותה עבודה
var GALLERY_FADE_DIFF_PROJECT  = 400;  // מהירות היעלמות — מעבר בין עבודות שונות
var GALLERY_CROSS_SAME_PROJECT = 0;   // מהירות הופעה    — מעבר בין תמונות באותה עבודה
var GALLERY_CROSS_DIFF_PROJECT = 600; // מהירות הופעה    — מעבר בין עבודות שונות


// =============================================================
// ┌─────────────────────────────────────────────────────────┐
// │                    מידע — תוכן                          │
// └─────────────────────────────────────────────────────────┘
// =============================================================

// -- תמונת הפורטרט --
var PORTRAIT_URL = 'https://i.imgur.com/fn6Pybq.jpeg';

// -- ביוגרפיה --
// כל פריט ברשימה = פסקה אחת. הוסף פסקאות לפי הצורך.
var INFO_BIO = [
  'Daniel Kep (b. 1993) is an artist living and working in Jerusalem. He holds a BFA from the Department of Fine Arts at Bezalel Academy of Arts and Design (2020) and is currently an MFA candidate at Bezalel.',
  "Kep\u2019s work explores sculptural arrangements in which living bodies and inanimate objects are fused together. These imagery systems are stretched to the point of a tremor, struggling to maintain their stability and the integrity of their limbs. Through subtle movements, whiteness, and fragility in sculpture, still photography, and video, his works embody effort and physical presence.",
  'He is the recipient of the Eileen Cooper Award for Excellence from the Bezalel Art Department, the America-Israel Cultural Foundation (AICF) Prize, and the Michael and Pauline Lukman Excellence Scholarship as part of his MFA studies.',
  'Selected Exhibitions:',
  'Clinging (Solo Exhibition), Dana Gallery, Kibbutz Yad Mordechai. Curator: Ravit Harari (2024; scheduled to travel to Tel Aviv later this year).',
  "Bad Root, Jerusalem Artists\u2019 House. Curator: Sally Haftel Naveh (2023).",
  'Untitled, Edmond de Rothschild Center, Tel Aviv. Curator: Hadas Maor (2022).',
  'Slight Tremor (Solo Exhibition), Gallery of Contemporary Art, Ramat Hasharon (2021). Curator: Ravit Harari',
  'Room (Artist-in-Residence concluding exhibition), HaMiffal Gallery, Jerusalem. Curator: Meydad Eliyahu (2021).',
];

// -- פרטי קשר --
var INFO_EMAIL     = 'kep.dan@gmail.com';
var INFO_INSTAGRAM = '_kep_daniel';        // שם המשתמש בלבד, ללא @


// =============================================================
// ┌─────────────────────────────────────────────────────────┐
// │              Firebase — אחסון תמונות (אופציונלי)        │
// └─────────────────────────────────────────────────────────┘
// =============================================================
// אם אין Firebase — השאר כפי שהוא. האתר יעבוד מהכתובות למעלה.
var FIREBASE_URL = 'YOUR_FIREBASE_DATABASE_URL';


// =============================================================
//  קוד — אל תשנה מכאן ומטה
// =============================================================


function imgurResize(url) {
  return url; // full size
}

function imgurResizeThumb(url) {
  if (!url) return url;
  return url.replace(/(i\.imgur\.com\/[^.]+)(\.\w+)/, '$1h$2');
}

function getImages(work) {
  if (work.images && work.images.length > 0) return work.images;
  if (work.url) return [work.url];
  return [];
}

function getVimeoId(v) {
  if (!v) return '';
  var m = v.match(/vimeo\.com\/(\d+)/);
  return m ? m[1] : v.replace(/\D/g,'').slice(0,10);
}

function openVideoPlayer(vimeoId) {
  var overlay = document.getElementById('video-player-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'video-player-overlay';
    overlay.innerHTML =
      '<button class="video-back-btn" onclick="closeVideoPlayer()">← Back</button>' +
      '<div class="video-player-inner"><iframe id="video-iframe" src="" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>';
    document.body.appendChild(overlay);
    overlay.querySelector('.video-back-btn').addEventListener('click', closeVideoPlayer);
  }
  var iframe = overlay.querySelector('#video-iframe');
  iframe.src = 'https://player.vimeo.com/video/' + vimeoId + '?autoplay=1';
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeVideoPlayer() {
  var overlay = document.getElementById('video-player-overlay');
  if (overlay) {
    overlay.classList.remove('open');
    var iframe = overlay.querySelector('#video-iframe');
    if (iframe) iframe.src = '';
  }
  document.body.style.overflow = '';
}

// ---- RENDERING ----

var SLIDE_BG = ['#d9d6d0', '#ccc9c3', '#dddbd7', '#d2cfc9', '#e0ddd8'];

function renderWorks() {
  document.getElementById('works-list').innerHTML = WORKS.map(function(work, i) {
    var imgs       = getImages(work);
    var firstImg   = imgs[0] || '';
    var extraCount = imgs.length - 1;
    var ph         = firstImg ? ' style="display:none"' : '';
    var countBadge = extraCount > 0
      ? '<span class="work-image-count">+' + extraCount + '</span>'
      : '';
    var vid = getVimeoId(work.vimeoID);
    var videoBtn = vid
      ? '<button class="work-video-btn" onclick="event.stopPropagation();openVideoPlayer(\'' + vid + '\')">' +
          '<span class="work-video-play">&#9654;</span>' +
          '<span class="work-video-label">Watch here</span>' +
        '</button>'
      : '';
    return (
      '<div class="work-item">' +
        '<div class="work-text">' +
          '<div class="work-title">' + work.title + '</div>' +
          '<div class="work-meta">' +
            '<span>' + work.medium + '</span>' +
            '<span>' + work.size + '</span>' +
            '<span style="margin-top:6px;">' + work.year + '</span>' +
          '</div>' +
          videoBtn +
        '</div>' +
        '<div class="work-image" onclick="galleryOpen(' + i + ', 0)">' +
          '<div class="img-wrapper" data-key="work-' + i + '">' +
            '<img class="stored-img" crossorigin="anonymous" src="' + imgurResizeThumb(firstImg) + '" alt="' + work.title + '">' +
            '<div class="img-placeholder"' + ph + '>Image</div>' +
            countBadge +
          '</div>' +
        '</div>' +
      '</div>'
    );
  }).join('');
}

function renderSlideshow() {
  var isMobile = window.innerWidth <= 768;
  var src = (isMobile && MOBILE_SLIDES && MOBILE_SLIDES.length > 0) ? MOBILE_SLIDES : SLIDES;
  document.getElementById('slideshow').innerHTML = src.map(function(url, i) {
    var ph = url ? ' style="display:none"' : '';
    return (
      '<div class="slide' + (i === 0 ? ' active' : '') + '">' +
        '<div class="slide-inner" data-key="slide-' + i + '" style="background:' + (SLIDE_BG[i] || '#e0ddd9') + ';">' +
          '<img class="stored-img" crossorigin="anonymous" src="' + imgurResize(url || '') + '" alt="">' +
          '<span class="img-placeholder"' + ph + '>Slide ' + (i + 1) + '</span>' +
        '</div>' +
      '</div>'
    );
  }).join('');
}

function renderInfo() {
  document.getElementById('info-bio').innerHTML = INFO_BIO.map(function(p) {
    return '<p>' + p + '</p>';
  }).join('');
  document.getElementById('info-email').href        = 'mailto:' + INFO_EMAIL;
  document.getElementById('info-email').textContent  = INFO_EMAIL;
  document.getElementById('info-instagram').href        = 'https://instagram.com/' + INFO_INSTAGRAM;
  document.getElementById('info-instagram').textContent = 'instagram.com/' + INFO_INSTAGRAM;
}

// ---- IMAGE STORE ----

var imageStore = {};

function loadImages() {
  WORKS.forEach(function(work, i) {
    var first = getImages(work)[0];
    if (first) imageStore['work-' + i] = first;
  });
  SLIDES.forEach(function(url, i) {
    if (url) imageStore['slide-' + i] = url;
  });
  if (PORTRAIT_URL) applyImage('portrait', PORTRAIT_URL);

  if (FIREBASE_URL === 'YOUR_FIREBASE_DATABASE_URL') return;
  fetch(FIREBASE_URL + '/images.json')
    .then(function(r) { return r.json(); })
    .then(function(data) {
      if (!data) return;
      Object.keys(data).forEach(function(key) {
        if (data[key]) applyImage(key, data[key]);
      });
    })
    .catch(function() {});
}

function applyImage(key, url) {
  imageStore[key] = url;
  if (!url) return;
  var wrapper = document.querySelector('[data-key="' + key + '"]');
  if (!wrapper) return;
  var img = wrapper.querySelector('.stored-img');
  if (img) { img.crossOrigin = 'anonymous'; img.src = url; }
  var ph = wrapper.querySelector('.img-placeholder');
  if (ph) ph.style.display = 'none';
}

function checkAdminMode() {
  document.body.classList.toggle('admin-mode', localStorage.getItem('kep_admin') === '1');
}

// ---- NAV ----

function openMobileMenu() {
  document.getElementById('mobile-menu').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
  document.getElementById('mobile-menu').classList.remove('open');
  document.body.style.overflow = '';
}

function mobileNav(id) { closeMobileMenu(); showPage(id); }

var navEl = document.querySelector('nav');
// nav always shows white box

function showPage(id) {
  var currentEl = document.querySelector('.page.active');
  var next = document.getElementById(id);
  if (currentEl === next) return;

  var fromHome = currentEl && currentEl.id === 'home';

  if (currentEl) currentEl.classList.remove('active');

  document.querySelectorAll('.nav-links a, .nav-right a').forEach(function(a) { a.classList.remove('active'); });
  next.classList.add('active');
  next.classList.remove('fading-in', 'fading-in-slow');
  void next.offsetWidth;
  next.classList.add(fromHome ? 'fading-in-slow' : 'fading-in');
  var link = document.getElementById('nav-' + id);
  if (link) link.classList.add('active');
  window.scrollTo(0, 0);
  var _lp = document.getElementById('mri-loupe');
  if (_lp) _lp.style.opacity = '0';
  var _sc = document.getElementById('site-cursor');
  if (_sc && _sc.show) _sc.show();
  document.body.classList.toggle('page-works', id === 'works');
}

// ---- SLIDESHOW ----

var current = 0;
var slides;

function goToSlide(n) {
  slides[current].classList.remove('active');
  current = n;
  slides[current].classList.add('active');
}

// ---- INIT ----

// קו תחתון בנאב בר כשגוללים
window.addEventListener('scroll', function() {
  document.querySelector('.nav-bar').classList.toggle('scrolled', window.scrollY > 10);
}, { passive: true });

renderWorks();
renderSlideshow();
renderInfo();
slides = document.querySelectorAll('.slide');

checkAdminMode();
loadImages();

// לחיצה או גלילה בדף הבית — מעבר לעבודות
(function() {
  var homeEl = document.getElementById('home');
  homeEl.addEventListener('click', function() {
    showPage('works');
  });
  homeEl.addEventListener('wheel', function(e) {
    if (e.deltaY > 0) {
      if (homeEl._scrollTimer) return;
      homeEl._scrollTimer = setTimeout(function() {
        showPage('works');
        homeEl._scrollTimer = null;
      }, 300);
    }
  }, { passive: true });
  homeEl.addEventListener('touchstart', function(e) {
    homeEl._touchY = e.touches[0].clientY;
  }, { passive: true });
  homeEl.addEventListener('touchend', function(e) {
    if (homeEl._touchY - e.changedTouches[0].clientY > 40) showPage('works');
  }, { passive: true });
})();

// מצגת — שקופית ראשונה מהירה במובייל (שניה אחת), השאר בקצב רגיל
(function() {
  var isMobile = window.innerWidth <= 768;
  var duration = isMobile ? SLIDE_DURATION_MOBILE : SLIDE_DURATION;

  if (isMobile) {
    // שקופית ראשונה — שניה אחת בלבד
    setTimeout(function() {
      goToSlide(1 % slides.length);
      // המשך בקצב רגיל
      setInterval(function() {
        goToSlide((current + 1) % slides.length);
      }, duration);
    }, 1000);
  } else {
    setInterval(function() {
      goToSlide((current + 1) % slides.length);
    }, duration);
  }
})();

// ---- HISTORY API — ניווט Back באנדרואיד לכל האתר ----
(function() {
  var pages = ['home', 'works', 'info'];
  var currentPage = 'home';

  // push state בכל מעבר דף
  var origShowPage = window.showPage;
  window.showPage = function(id) {
    origShowPage(id);
    if (id !== currentPage) {
      history.pushState({ page: id }, '');
      currentPage = id;
    }
  };

  // push state ראשוני
  history.replaceState({ page: 'home' }, '');

  window.addEventListener('popstate', function(e) {
    // אם גלריה פתוחה — סגור אותה
    var go = document.getElementById('gallery-overlay');
    if (go && go.classList.contains('open')) {
      if (typeof galleryClose === 'function') galleryClose();
      return;
    }
    // אחרת — חזור לדף הקודם
    if (e.state && e.state.page) {
      origShowPage(e.state.page);
      currentPage = e.state.page;
    }
  });
})();



// ---- GLOBAL CIRCLE CURSOR (desktop / mouse only) ----
(function() {
  // Only activate on devices with a real pointer (mouse/trackpad), not touch
  if (!window.matchMedia('(pointer: fine)').matches) return;

  var cur = document.createElement('div');
  cur.id = 'site-cursor';
  cur.style.cssText = [
    'position:fixed','pointer-events:none','z-index:9999',
    'width:28px','height:28px','border-radius:50%',
    'border:1.5px solid rgba(0,0,0,0.6)','background:transparent',
    'transform:translate(-50%,-50%)',
    'transition:opacity 0.15s, background 0.2s, border-color 0.2s',
    'top:-100px','left:-100px'
  ].join(';');
  document.body.appendChild(cur);

  document.addEventListener('mousemove', function(e) {
    cur.style.left = e.clientX + 'px';
    cur.style.top  = e.clientY + 'px';
    if (!cur._hidden) cur.style.opacity = '1';
  });
  document.addEventListener('mouseleave', function() {
    cur.style.opacity = '0';
  });

  // helpers used by other modules
  cur.hide = function() { cur._hidden = true;  cur.style.opacity = '0'; };
  cur.show = function() { cur._hidden = false; cur.style.opacity = '1'; };
})();

// ---- HISTORY API: Fix mobile back button ----
(function() {
  var galleryWasOpen = false;

  function pushGalleryState() {
    history.pushState({ gallery: true }, '');
  }

  // Intercept galleryOpen to push state
  var origGalleryOpen = window.galleryOpen;
  window.galleryOpen = function(workIndex, imgIndex) {
    origGalleryOpen(workIndex, imgIndex);
    pushGalleryState();
    galleryWasOpen = true;
  };

  // Intercept galleryClose to clean up flag
  var origGalleryClose = window.galleryClose;
  window.galleryClose = function() {
    origGalleryClose();
    galleryWasOpen = false;
  };

  window.addEventListener('popstate', function(e) {
    var go = document.getElementById('gallery-overlay');
    if (go && go.classList.contains('open')) {
      // Close gallery instead of navigating away
      if (typeof galleryClose === 'function') galleryClose();
    }
  });
})();

// =============================================================
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//   גלריה — אל תיגע כאן
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// =============================================================

// בונה רשימה שטוחה של כל התמונות מכל הפרויקטים ברצף
// כל פריט: { url, workIndex, imgIndex }
function buildFlatList() {
  var list = [];
  WORKS.forEach(function(work, wi) {
    getImages(work).forEach(function(url, ii) {
      list.push({ url: url, workIndex: wi, imgIndex: ii });
    });
  });
  return list;
}

var galleryEl      = null;
var galleryImgEl   = null;
var galleryTextEl  = null;
var galleryCursor  = null;
var galleryList    = [];
var galleryIndex   = 0;
var galleryTouchX  = 0;

function galleryBuild() {
  if (document.getElementById('gallery-overlay')) return;

  var el = document.createElement('div');
  el.id = 'gallery-overlay';
  el.innerHTML =
    '<button class="gallery-back-btn" onclick="galleryClose()">← Back</button>' +
    '<div class="gallery-left" id="gallery-text"></div>' +
    '<div class="gallery-right">' +
      '<img id="gallery-img" crossorigin="anonymous" src="" alt="">' +
    '</div>' +
    '<div class="gallery-zone gallery-zone-left"  id="gz-left"></div>' +
    '<div class="gallery-zone gallery-zone-right" id="gz-right"></div>' +
    '<div class="gallery-mobile-nav">' +
      '<button class="gallery-mobile-prev" onclick="galleryNav(-1)">&#8592;</button>' +
      '<span class="gallery-mobile-counter" id="gallery-mobile-counter"></span>' +
      '<button class="gallery-mobile-next" onclick="galleryNav(1)">&#8594;</button>' +
    '</div>';

  document.body.appendChild(el);

  // cursor lives outside overlay so z-index works cleanly
  var cur = document.createElement('div');
  cur.className = 'lb-cursor';
  cur.id = 'gallery-cursor';
  document.body.appendChild(cur);

  galleryEl     = el;
  galleryImgEl  = document.getElementById('gallery-img');
  galleryTextEl = document.getElementById('gallery-text');
  galleryCursor = document.getElementById('gallery-cursor');

  document.getElementById('gz-left').addEventListener('click',  function() { galleryNav(1); });
  document.getElementById('gz-right').addEventListener('click', function() { galleryNav(-1); });

  // fallback: click anywhere on overlay navigates based on cursor X position
  el.addEventListener('click', function(e) {
    // ignore clicks on buttons only
    if (e.target.closest('button')) return;
    if (e.clientX < window.innerWidth / 2) galleryNav(1);
    else galleryNav(-1);
  });

  // keyboard
  document.addEventListener('keydown', function(e) {
    if (!galleryEl || !galleryEl.classList.contains('open')) return;
    if (e.key === 'Escape')     galleryClose();
    if (e.key === 'ArrowLeft')  galleryNav(1);
    if (e.key === 'ArrowRight') galleryNav(-1);
  });

  // cursor
  el.addEventListener('mousemove', function(e) {
    var sc = document.getElementById('site-cursor');

    // כפתורי Back / Watch — רק העיגול הרגיל
    var overWatch = e.target && (e.target.classList.contains('gallery-watch-btn') || (e.target.closest && e.target.closest('.gallery-watch-btn')));
    var overBack  = e.target && (e.target.classList.contains('gallery-back-btn')  || (e.target.closest && e.target.closest('.gallery-back-btn')));
    if (overWatch || overBack) {
      if (sc) { sc.style.left = e.clientX + 'px'; sc.style.top = e.clientY + 'px'; if (sc.show) sc.show(); else sc.style.opacity = '1'; }
      galleryCursor.style.opacity = '0';
      if (window._mriHideFn) window._mriHideFn();
      return;
    }

    // בגלריה — העיגול הרגיל תמיד מוסתר
    if (sc) { sc.style.left = e.clientX + 'px'; sc.style.top = e.clientY + 'px'; if (sc.hide) sc.hide(); else sc.style.opacity = '0'; }

    var onImg = isOnImage(e);
    if (onImg) {
      // מעל תמונה — רק MRI loupe, ללא חץ וללא עיגול
      galleryCursor.style.opacity = '0';
      if (window._mriHideFn) window._mriHideFn(); // מנקה frame קודם
      var imgEl = document.getElementById('gallery-img');
      if (imgEl && imgEl.complete && imgEl.naturalWidth) {
        if (window._mriShowFn) window._mriShowFn(e, imgEl);
      }
    } else {
      // מחוץ לתמונה — רק חץ טקסט, ללא MRI וללא עיגול
      if (window._mriHideFn) window._mriHideFn();
      galleryCursor.textContent   = e.clientX < window.innerWidth / 2 ? '\u2190' : '\u2192';
      galleryCursor.style.left    = e.clientX + 'px';
      galleryCursor.style.top     = e.clientY + 'px';
      galleryCursor.style.opacity = '1';
    }
  });
  el.addEventListener('mouseleave', function() {
    galleryCursor.style.opacity = '0';
    if (window._mriHideFn) window._mriHideFn();
    var sc = document.getElementById('site-cursor');
    if (sc && sc.show) sc.show(); else if (sc) sc.style.opacity = '1';
  });

  // swipe
  el.addEventListener('touchstart', function(e) {
    galleryTouchX = e.touches[0].clientX;
  }, { passive: true });
  el.addEventListener('touchend', function(e) {
    var diff = galleryTouchX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) galleryNav(diff > 0 ? 1 : -1);
  }, { passive: true });
}

function galleryOpen(workIndex, imgIndex) {
  galleryBuild();
  galleryList  = buildFlatList();
  // מצא את האינדקס הגלובלי המתאים
  galleryIndex = 0;
  for (var k = 0; k < galleryList.length; k++) {
    if (galleryList[k].workIndex === workIndex && galleryList[k].imgIndex === (imgIndex || 0)) {
      galleryIndex = k;
      break;
    }
  }
  galleryRender(false);
  galleryPreload();
  galleryEl.classList.add('open');
  document.body.classList.add('gallery-open');
  document.body.style.overflow = 'hidden';
  // hide site cursor in gallery
  var sc = document.getElementById('site-cursor');
  if (sc && sc.hide) sc.hide(); else if (sc) sc.style.opacity = '0';
}

function galleryRender(fade) {
  var item = galleryList[galleryIndex];
  var work = WORKS[item.workIndex];
  var imgs = getImages(work);

  function render() {
    galleryImgEl.src = imgurResize(item.url);

    var titleHtml  = work.title  ? '<div class="gallery-title">'  + work.title  + '</div>' : '';
    var mediumHtml = work.medium ? '<div class="gallery-meta-line">' + work.medium + '</div>' : '';
    var sizeHtml   = work.size   ? '<div class="gallery-meta-line">' + work.size   + '</div>' : '';
    var yearHtml   = work.year   ? '<div class="gallery-meta-line gallery-year">' + work.year + '</div>' : '';
    var counter    = imgs.length > 1
      ? '<div class="gallery-counter">' + (item.imgIndex + 1) + ' \u2014 ' + imgs.length + '</div>'
      : '';

    var creditHtml = (work.installationPhotos)
      ? '<div class="gallery-meta-line gallery-credit">Installation photography: ' + work.installationPhotos + '</div>' : '';
    var watchHtml = getVimeoId(work.vimeoID)
      ? '<button class="gallery-watch-btn" onclick="openVideoPlayer(\'' + getVimeoId(work.vimeoID) + '\')">' +
          '<span class="gallery-watch-play">&#9654;</span> Watch here' +
        '</button>'
      : '';
    galleryTextEl.innerHTML = titleHtml + mediumHtml + sizeHtml + yearHtml + creditHtml + watchHtml + counter;

    // update mobile counter
    var mc = document.getElementById('gallery-mobile-counter');
    if (mc) mc.textContent = imgs.length > 1 ? (item.imgIndex + 1) + ' / ' + imgs.length : '';
    // update mobile title+meta in bottom bar
    var mobileNav = document.querySelector('.gallery-mobile-nav');
    if (mobileNav) {
      var infoEl = mobileNav.querySelector('.gallery-mobile-info');
      if (!infoEl) {
        infoEl = document.createElement('div');
        infoEl.className = 'gallery-mobile-info';
        var prevBtn = mobileNav.querySelector('.gallery-mobile-prev');
        mobileNav.insertBefore(infoEl, mobileNav.querySelector('.gallery-mobile-counter'));
      }
      var titleStr = work.title || '';
      var metaStr  = [work.medium, work.size, work.year].filter(Boolean).join(' · ');
      var mobileWatchHtml = getVimeoId(work.vimeoID)
        ? '<button class="gallery-mobile-watch" onclick="openVideoPlayer(\'' + getVimeoId(work.vimeoID) + '\')">&#9654; Watch here</button>'
        : '';
      infoEl.innerHTML =
        (titleStr ? '<div class="gallery-mobile-title">' + titleStr + '</div>' : '') +
        (metaStr  ? '<div class="gallery-mobile-meta">'  + metaStr  + '</div>' : '') +
        mobileWatchHtml;
    }

    // detect orientation after image loads
    var tempImg = new Image();
    tempImg.onload = function() {
      var isLandscape = tempImg.naturalWidth > tempImg.naturalHeight;
      galleryEl.classList.toggle('landscape', isLandscape);

      // wait for browser to finish layout before measuring
      requestAnimationFrame(function() {
        var imgEl = document.getElementById('gallery-img');
        var r = imgEl.getBoundingClientRect();

        if (isLandscape) {
          var spaceLeft = r.left;
          if (spaceLeft < 180) {
            // no white space — hide text entirely
            galleryTextEl.style.visibility = 'hidden';
          } else {
            galleryTextEl.style.visibility = 'visible';
            galleryTextEl.style.position = 'absolute';
            galleryTextEl.style.left     = '0';
            galleryTextEl.style.top      = '0';
            galleryTextEl.style.bottom   = '0';
            galleryTextEl.style.right    = (window.innerWidth - spaceLeft) + 'px';
            galleryTextEl.style.width    = 'auto';
            galleryTextEl.style.padding  = '80px 40px 60px 60px';
          }
        } else {
          galleryTextEl.style.position   = '';
          galleryTextEl.style.left       = '';
          galleryTextEl.style.top        = '';
          galleryTextEl.style.bottom     = '';
          galleryTextEl.style.right      = '';
          galleryTextEl.style.width      = '';
          galleryTextEl.style.padding    = '';
          var panelW = window.innerWidth * 0.3;
          galleryTextEl.style.visibility = panelW < 180 ? 'hidden' : 'visible';
        }
      });
    };
    tempImg.src = imgurResize(item.url);
  }

  if (fade === 'same' || fade === 'diff') {
    var fadeOut = fade === 'same' ? GALLERY_FADE_SAME_PROJECT : GALLERY_FADE_DIFF_PROJECT;
    var crossMs = fade === 'same' ? GALLERY_CROSS_SAME_PROJECT : GALLERY_CROSS_DIFF_PROJECT;
    galleryImgEl.style.transition = 'opacity ' + (crossMs/1000).toFixed(2) + 's ease';
    galleryTextEl.style.transition = 'opacity ' + (crossMs/1000).toFixed(2) + 's ease';
    galleryImgEl.style.opacity = '0';
    galleryTextEl.style.opacity = '0';

    setTimeout(function() {
      galleryImgEl.src = '';  // clear old image so it doesn't flash
      render();
      galleryImgEl.style.opacity = '1';
      galleryTextEl.style.opacity = '1';
    }, fadeOut);
  } else {
    galleryImgEl.style.transition = '';
    galleryTextEl.style.transition = '';
    render();
  }
}

function galleryPreload() {
  var indices = [
    (galleryIndex + 1) % galleryList.length,
    (galleryIndex - 1 + galleryList.length) % galleryList.length,
    (galleryIndex + 2) % galleryList.length,
  ];
  indices.forEach(function(i) {
    var img = new Image();
    img.src = imgurResize(galleryList[i].url);
  });
}

function galleryNav(dir) {
  var prevWorkIndex = galleryList[galleryIndex].workIndex;
  galleryIndex = (galleryIndex + dir + galleryList.length) % galleryList.length;
  var sameProject = galleryList[galleryIndex].workIndex === prevWorkIndex;
  galleryRender(sameProject ? 'same' : 'diff');
  galleryPreload();
}

function galleryClose() {
  if (!galleryEl) return;
  galleryEl.classList.remove('open');
  document.body.classList.remove('gallery-open');
  document.body.style.overflow = '';
  galleryCursor.style.opacity = '0';
  loupeHide();
  var sc = document.getElementById('site-cursor');
  if (sc && sc.show) sc.show(); else if (sc) sc.style.opacity = '1';
}

// כפתור Back הקיים — עובד גם לסגירת הגלריה
var origCloseLightbox = window.closeLightbox;
window.closeLightbox = function() {
  if (galleryEl && galleryEl.classList.contains('open')) {
    galleryClose();
  } else if (origCloseLightbox) {
    origCloseLightbox();
  }
};


// ---- LOUPE (magnifying glass) ----

var loupeCanvas  = null;
var loupeSize    = 180;
var loupeZoom    = 3.0;

function isOnImage(e) {
  if (!galleryImgEl) return false;
  var r = galleryImgEl.getBoundingClientRect();
  return e.clientX >= r.left && e.clientX <= r.right &&
         e.clientY >= r.top  && e.clientY <= r.bottom;
}

function loupeInit() {
  if (loupeCanvas) return;
  loupeCanvas = document.createElement('canvas');
  loupeCanvas.id     = 'gallery-loupe';
  loupeCanvas.width  = loupeSize;
  loupeCanvas.height = loupeSize;
  document.body.appendChild(loupeCanvas);
}

function loupeShow(e) {
  loupeInit();
  var r  = galleryImgEl.getBoundingClientRect();
  var mx = e.clientX;
  var my = e.clientY;

  // position loupe offset from cursor
  var half = loupeSize / 2;
  var lx = mx + half + 16;
  var ly = my - half - 16;
  if (lx + loupeSize > window.innerWidth)  lx = mx - half - 16 - loupeSize;
  if (ly < 0) ly = my + 16;

  loupeCanvas.style.left    = lx + 'px';
  loupeCanvas.style.top     = ly + 'px';
  loupeCanvas.style.opacity = '1';

  var ctx = loupeCanvas.getContext('2d');
  ctx.clearRect(0, 0, loupeSize, loupeSize);

  // clip circle
  ctx.save();
  ctx.beginPath();
  ctx.arc(half, half, half, 0, Math.PI * 2);
  ctx.clip();

  // cursor relative position on displayed image
  var px = (mx - r.left) / r.width;
  var py = (my - r.top)  / r.height;

  // source area size in natural pixels
  var natW = galleryImgEl.naturalWidth;
  var natH = galleryImgEl.naturalHeight;
  var srcW = (r.width  / loupeZoom) * (natW / r.width);
  var srcH = (r.height / loupeZoom) * (natH / r.height);

  var sx = px * natW - srcW / 2;
  var sy = py * natH - srcH / 2;
  sx = Math.max(0, Math.min(sx, natW - srcW));
  sy = Math.max(0, Math.min(sy, natH - srcH));

  try {
    ctx.drawImage(galleryImgEl, sx, sy, srcW, srcH, 0, 0, loupeSize, loupeSize);
  } catch(err) {}

  ctx.restore();

  // draw circle border
  ctx.beginPath();
  ctx.arc(half, half, half - 1, 0, Math.PI * 2);
  ctx.strokeStyle = 'rgba(0,0,0,0.15)';
  ctx.lineWidth   = 1.5;
  ctx.stroke();
}

function loupeHide() {
  if (loupeCanvas) loupeCanvas.style.opacity = '0';
}


// ---- MRI LOUPE (true canvas pixel-mapping) ----
// Maps each pixel's luminance through the classic MRI thermal palette.
// Requires crossOrigin="anonymous" on all <img> elements (set above).
// Fade: smooth radial alpha falloff per pixel — no visible circle edge.
(function() {
  // על מובייל/טאץ' — לא מפעילים בכלל
  if (!window.matchMedia('(pointer: fine)').matches) return;

  var sizeSmall = 75;
  var sizeLarge = 150;

  // Classic MRI thermal palette — [luminance 0-1, r, g, b]
  var STOPS = [
    [0.00,   0,   0,   0],   // black
    [0.12,   0,   0, 160],   // deep blue
    [0.25,   0,  60, 220],   // blue
    [0.38,   0, 180, 210],   // cyan
    [0.50,   0, 210,  80],   // green
    [0.63, 180, 220,   0],   // yellow-green
    [0.75, 255, 200,   0],   // yellow
    [0.85, 255, 100,   0],   // orange
    [0.93, 240,  20,   0],   // red
    [1.00, 255, 255, 255],   // white
  ];

  function mriRGB(v) {
    if (v <= 0) return [STOPS[0][1], STOPS[0][2], STOPS[0][3]];
    if (v >= 1) return [255, 255, 255];
    for (var i = 1; i < STOPS.length; i++) {
      if (v <= STOPS[i][0]) {
        var t = (v - STOPS[i-1][0]) / (STOPS[i][0] - STOPS[i-1][0]);
        return [
          Math.round(STOPS[i-1][1] + t * (STOPS[i][1] - STOPS[i-1][1])),
          Math.round(STOPS[i-1][2] + t * (STOPS[i][2] - STOPS[i-1][2])),
          Math.round(STOPS[i-1][3] + t * (STOPS[i][3] - STOPS[i-1][3])),
        ];
      }
    }
    return [255, 255, 255];
  }

  // Pre-build a 256-entry lookup table for speed
  var LUT_R = new Uint8Array(256);
  var LUT_G = new Uint8Array(256);
  var LUT_B = new Uint8Array(256);
  for (var i = 0; i < 256; i++) {
    var c = mriRGB(i / 255);
    LUT_R[i] = c[0]; LUT_G[i] = c[1]; LUT_B[i] = c[2];
  }

  var offCanvas = document.createElement('canvas');
  var offCtx    = offCanvas.getContext('2d');
  var mriCanvas = null;

  function initCanvas(size) {
    if (!mriCanvas) {
      mriCanvas = document.createElement('canvas');
      mriCanvas.id = 'mri-loupe';
      mriCanvas.style.cssText = [
        'position:fixed','pointer-events:none','z-index:9998',
        'border-radius:50%','opacity:0',
        'transform:translate(-50%,-50%)',
        'transition:opacity 0.10s'
      ].join(';');
      document.body.appendChild(mriCanvas);
    }
    if (mriCanvas.width !== size) {
      mriCanvas.width  = size;
      mriCanvas.height = size;
      mriCanvas.style.width  = size + 'px';
      mriCanvas.style.height = size + 'px';
    }
  }

  function drawMRI(e, imgEl, size) {
    if (!imgEl || !imgEl.complete || !imgEl.naturalWidth) return;
    size = size || sizeSmall;
    initCanvas(size);

    var half  = size / 2;
    var r     = imgEl.getBoundingClientRect();
    var natW  = imgEl.naturalWidth,  natH  = imgEl.naturalHeight;
    var dispW = r.width,             dispH = r.height;
    var natR  = natW / natH,         dispR = dispW / dispH;
    var rendW, rendH, offX, offY;
    if (natR > dispR) {
      rendH = dispH; rendW = dispH * natR; offX = (dispW - rendW) / 2; offY = 0;
    } else {
      rendW = dispW; rendH = dispW / natR; offX = 0; offY = (dispH - rendH) / 2;
    }

    // cursor in rendered-image coordinates
    var cx = e.clientX - r.left - offX;
    var cy = e.clientY - r.top  - offY;

    // source rectangle in natural pixels
    var scaleX = natW / rendW, scaleY = natH / rendH;
    var srcW   = half * scaleX,  srcH  = half * scaleY;
    var sx     = cx * scaleX - srcW;
    var sy     = cy * scaleY - srcH;

    // draw source patch to offscreen canvas
    offCanvas.width  = size;
    offCanvas.height = size;
    offCtx.clearRect(0, 0, size, size);
    try {
      offCtx.drawImage(imgEl, sx, sy, srcW * 2, srcH * 2, 0, 0, size, size);
    } catch(err) {
      // CORS not yet ready — silently skip this frame
      return;
    }

    var imgData = offCtx.getImageData(0, 0, size, size);
    var d       = imgData.data;

    for (var p = 0; p < d.length; p += 4) {
      var idx = p >> 2;
      var px  = idx % size;
      var py  = (idx - px) / size;
      var dx  = (px - half) / half;
      var dy  = (py - half) / half;
      var dist = Math.sqrt(dx * dx + dy * dy); // 0=centre 1=edge

      if (dist >= 1) { d[p+3] = 0; continue; }

      // luminance
      var lum = (d[p] * 77 + d[p+1] * 150 + d[p+2] * 29) >> 8; // 0-255

      // MRI remap via LUT
      d[p]   = LUT_R[lum];
      d[p+1] = LUT_G[lum];
      d[p+2] = LUT_B[lum];

      // radial fade: full at centre, smooth-step to 0 at edge
      // fade zone starts at 40% of radius
      var alpha = 1;
      if (dist > 0.4) {
        var t = (dist - 0.4) / 0.6;
        alpha = 1 - t * t * (3 - 2 * t); // smoothstep
      }
      d[p+3] = Math.round(255 * alpha);
    }

    var ctx = mriCanvas.getContext('2d');
    ctx.putImageData(imgData, 0, 0);

    mriCanvas.style.left    = e.clientX + 'px';
    mriCanvas.style.top     = e.clientY + 'px';
    mriCanvas.style.opacity = '1';

    var sc = document.getElementById('site-cursor');
    if (sc && sc.hide) sc.hide(); else if (sc) sc.style.opacity = '0';
  }

  function hideMRI() {
    if (mriCanvas) mriCanvas.style.opacity = '0';
    var sc = document.getElementById('site-cursor');
    if (sc && sc.show) sc.show(); else if (sc) sc.style.opacity = '1';
  }

  function hideCursor() {
    var sc = document.getElementById('site-cursor');
    if (sc && sc.hide) sc.hide(); else if (sc) sc.style.opacity = '0';
  }
  function showCursor() {
    var sc = document.getElementById('site-cursor');
    if (sc && sc.show) sc.show(); else if (sc) sc.style.opacity = '1';
  }

  function attach(el, getImg, size) {
    el.addEventListener('mouseenter', hideCursor);
    el.addEventListener('mouseleave', function() { hideMRI(); showCursor(); });
    el.addEventListener('mousemove',  function(e) { drawMRI(e, getImg(), size); });
  }

  function attachToWorks() {
    document.querySelectorAll('.work-image').forEach(function(el) {
      attach(el, function() { return el.querySelector('.stored-img'); }, sizeSmall);
    });
  }
  function attachToSlideshow() { /* no-op */ }
  function attachToInfo() {
    var ip = document.querySelector('.info-photo');
    if (!ip) return;
    attach(ip, function() { return ip.querySelector('.stored-img'); }, sizeLarge);
  }

  document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
      attachToWorks();
      attachToSlideshow();
      attachToInfo();
    }, 300);
  });

  var origShowPage = window.showPage;
  if (origShowPage) {
    window.showPage = function(id) {
      origShowPage(id);
      hideMRI();
      showCursor();
      if (id === 'works') setTimeout(attachToWorks, 100);
      if (id === 'home')  setTimeout(attachToSlideshow, 100);
      if (id === 'info')  setTimeout(attachToInfo, 100);
    };
  }

  // gallery uses sizeLarge
  window._mriShowFn = function(e, imgEl) { drawMRI(e, imgEl, sizeLarge); };
  window._mriHideFn = hideMRI;
})();

// =============================================================
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//   סוף הגלריה — אל תיגע כאן
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// =============================================================
