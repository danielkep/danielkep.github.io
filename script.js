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

// -- תמונות המצגת (דסקטופ) --
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

// -- תמונות המצגת (פלאפון) --
// השאר ריק [] כדי להשתמש באותן תמונות כמו בדסקטופ.
// מומלץ: תמונות בפורמט אנכי (portrait) לתצוגה טובה יותר בנייד.
var MOBILE_SLIDES = [
  //'https://i.imgur.com/uCEToaz.jpeg',
'https://i.imgur.com/uCEToaz.jpeg',
'https://i.imgur.com/DQ0SwTQ.jpeg',
'https://i.imgur.com/PAJwlx4.jpeg',
'https://i.imgur.com/LqViV7T.jpeg',
];

// -- תזמון המצגת --
var SLIDE_DURATION   = 6000;  // זמן הצגה לכל תמונה (אלפיות שנייה). ברירת מחדל: 6000
var SLIDE_TRANSITION = 1400;  // זמן מעבר בין תמונות (אלפיות שנייה). ברירת מחדל: 1400


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
//      images:             רשימת כתובות תמונות
//                          - תמונה ראשונה = מה שיוצג בדף העבודות
//                          - שאר התמונות = גלריה בלחיצה
//                          - תמונה יחידה: images: ['https://...']
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
    installationPhotos: '',
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
    installationPhotos: '',
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
    installationPhotos: '',
    vimeoID:            '',
  },
{
    title:              'Protome (Gehazi)',
    year:               '2023',
    medium:             'Video (loop)',
    size:               'Dimensions variable (according to ceiling height)',
    images: [
      'https://i.imgur.com/oV1Jn94.jpeg',
    ],
    installationPhotos: '',
    vimeoID:            'https://vimeo.com/1055671442?fl=ip&fe=ec',
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
          '<span class="work-video-label">Video</span>' +
        '</button>'
      : '';
    return (
      '<div class="work-item">' +
        '<div class="work-text">' +
          '<div class="work-title">' + work.title + '</div>' +
          '<div class="work-meta">' +
            '<span>' + work.medium + '</span>' +
            '<span>' + work.size + '</span>' +
            '<span style="margin-top:6px;color:#bbb;">' + work.year + '</span>' +
          '</div>' +
          videoBtn +
        '</div>' +
        '<div class="work-image" onclick="galleryOpen(' + i + ', 0)">' +
          '<div class="img-wrapper" data-key="work-' + i + '">' +
            '<img class="stored-img" src="' + firstImg + '" alt="' + work.title + '">' +
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
          '<img class="stored-img" src="' + (url || '') + '" alt="">' +
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
  if (img) img.src = url;
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
  document.querySelectorAll('.page').forEach(function(p) { p.classList.remove('active'); });
  document.querySelectorAll('.nav-links a, .nav-right a').forEach(function(a) { a.classList.remove('active'); });
  document.getElementById(id).classList.add('active');
  var link = document.getElementById('nav-' + id);
  if (link) link.classList.add('active');
  window.scrollTo(0, 0);
  // hide loupe + restore cursor on page change
  var _lp = document.getElementById('invert-loupe');
  if (_lp) _lp.style.opacity = '0';
  var _sc = document.getElementById('site-cursor');
  if (_sc && _sc.show) _sc.show();
  // nav always white — no transparent mode
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

renderWorks();
renderSlideshow();
renderInfo();
slides = document.querySelectorAll('.slide');

checkAdminMode();
loadImages();

setInterval(function() { goToSlide((current + 1) % slides.length); }, SLIDE_DURATION);



// ---- GLOBAL CIRCLE CURSOR (mix-blend-mode: difference) ----
(function() {
  var cur = document.createElement('div');
  cur.id = 'site-cursor';
  cur.style.cssText = [
    'position:fixed','pointer-events:none','z-index:9999',
    'width:28px','height:28px','border-radius:50%',
    'background:#000000',
    'transform:translate(-50%,-50%)',
    'transition:opacity 0.15s',
    'mix-blend-mode:difference',
    'top:-100px','left:-100px',
    'opacity:0'
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
      '<img id="gallery-img" src="" alt="">' +
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

  // keyboard
  document.addEventListener('keydown', function(e) {
    if (!galleryEl || !galleryEl.classList.contains('open')) return;
    if (e.key === 'Escape')     galleryClose();
    if (e.key === 'ArrowLeft')  galleryNav(1);
    if (e.key === 'ArrowRight') galleryNav(-1);
  });

  // cursor
  el.addEventListener('mousemove', function(e) {
    var onImg = isOnImage(e);
    galleryCursor.style.left = e.clientX + 'px';
    galleryCursor.style.top  = e.clientY + 'px';
    // always hide the circle cursor in gallery
    var sc = document.getElementById('site-cursor');
    if (sc) { sc.style.left = e.clientX + 'px'; sc.style.top = e.clientY + 'px'; if (sc.hide) sc.hide(); else sc.style.opacity = '0'; }

    if (onImg) {
      // on image: show invert loupe, hide arrow cursor
      galleryCursor.style.opacity = '0';
      var imgEl = document.getElementById('gallery-img');
      if (imgEl && imgEl.complete && imgEl.naturalWidth) {
        var invertEl = document.getElementById('invert-loupe');
        if (!invertEl) {
          invertEl = document.createElement('div');
          invertEl.id = 'invert-loupe';
          invertEl.style.cssText = [
            'position:fixed','pointer-events:none','z-index:9998',
            'width:150px','height:150px',
            'border-radius:50%','overflow:hidden','opacity:0',
            'transform:translate(-50%,-50%)'
          ].join(';');
          document.body.appendChild(invertEl);
        }
        var r    = imgEl.getBoundingClientRect();
        var natW = imgEl.naturalWidth, natH = imgEl.naturalHeight;
        var dispW = r.width, dispH = r.height;
        var natR  = natW / natH, dispR = dispW / dispH;
        var rendW, rendH, offX, offY;
        if (natR > dispR) {
          rendH = dispH; rendW = dispH * natR; offX = (dispW - rendW) / 2; offY = 0;
        } else {
          rendW = dispW; rendH = dispW / natR; offX = 0; offY = (dispH - rendH) / 2;
        }
        var cx = e.clientX - r.left - offX;
        var cy = e.clientY - r.top  - offY;
        invertEl.style.left               = e.clientX + 'px';
        invertEl.style.top                = e.clientY + 'px';
        invertEl.style.opacity            = '1';
        invertEl.style.backgroundImage    = 'url(' + imgEl.src + ')';
        invertEl.style.backgroundSize     = rendW + 'px ' + rendH + 'px';
        invertEl.style.backgroundPosition = (75 - cx) + 'px ' + (75 - cy) + 'px';
        invertEl.style.filter             = 'invert(1)';
      }
    } else {
      // outside image: show arrow text cursor only (no circle)
      galleryCursor.textContent   = e.clientX < window.innerWidth / 2 ? '\u2190' : '\u2192';
      galleryCursor.style.opacity = '1';
      var invertEl2 = document.getElementById('invert-loupe');
      if (invertEl2) invertEl2.style.opacity = '0';
    }
  });
  el.addEventListener('mouseleave', function() {
    galleryCursor.style.opacity = '0';
    var invertEl = document.getElementById('invert-loupe');
    if (invertEl) invertEl.style.opacity = '0';
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
    galleryImgEl.src = item.url;

    var titleHtml  = work.title  ? '<div class="gallery-title">'  + work.title  + '</div>' : '';
    var mediumHtml = work.medium ? '<div class="gallery-meta-line">' + work.medium + '</div>' : '';
    var sizeHtml   = work.size   ? '<div class="gallery-meta-line">' + work.size   + '</div>' : '';
    var yearHtml   = work.year   ? '<div class="gallery-meta-line gallery-year">' + work.year + '</div>' : '';
    var counter    = imgs.length > 1
      ? '<div class="gallery-counter">' + (item.imgIndex + 1) + ' \u2014 ' + imgs.length + '</div>'
      : '';

    var creditHtml = (work.installationPhotos)
      ? '<div class="gallery-photo-credit">' + work.installationPhotos + '</div>' : '';
    galleryTextEl.innerHTML = titleHtml + mediumHtml + sizeHtml + yearHtml + creditHtml + counter;

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
      infoEl.innerHTML =
        (titleStr ? '<div class="gallery-mobile-title">' + titleStr + '</div>' : '') +
        (metaStr  ? '<div class="gallery-mobile-meta">'  + metaStr  + '</div>' : '');
    }

    // detect orientation after image loads
    var tempImg = new Image();
    tempImg.onload = function() {
      var isLandscape = tempImg.naturalWidth > tempImg.naturalHeight;
      galleryEl.classList.toggle('landscape', isLandscape);

      if (isLandscape) {
        // position text in white space left of image
        var imgEl = document.getElementById('gallery-img');
        var r = imgEl.getBoundingClientRect();
        galleryTextEl.style.position = 'absolute';
        galleryTextEl.style.left     = '0';
        galleryTextEl.style.top      = '0';
        galleryTextEl.style.bottom   = '0';
        galleryTextEl.style.right    = (window.innerWidth - r.left) + 'px';
        galleryTextEl.style.width    = 'auto';
        galleryTextEl.style.padding  = '80px 40px 60px 60px';
      } else {
        galleryTextEl.style.position = '';
        galleryTextEl.style.left     = '';
        galleryTextEl.style.top      = '';
        galleryTextEl.style.bottom   = '';
        galleryTextEl.style.right    = '';
        galleryTextEl.style.width    = '';
        galleryTextEl.style.padding  = '';
      }
    };
    tempImg.src = item.url;
  }

  if (fade === 'same' || fade === 'diff') {
    var fadeOut = fade === 'same' ? GALLERY_FADE_SAME_PROJECT : GALLERY_FADE_DIFF_PROJECT;
    var crossMs = fade === 'same' ? GALLERY_CROSS_SAME_PROJECT : GALLERY_CROSS_DIFF_PROJECT;
    galleryImgEl.style.transition = 'opacity ' + (crossMs/1000).toFixed(2) + 's ease';
    galleryTextEl.style.transition = 'opacity ' + (crossMs/1000).toFixed(2) + 's ease';
    galleryImgEl.style.opacity = '0';
    galleryTextEl.style.opacity = '0';

    setTimeout(function() {
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

function galleryNav(dir) {
  var prevWorkIndex = galleryList[galleryIndex].workIndex;
  galleryIndex = (galleryIndex + dir + galleryList.length) % galleryList.length;
  var sameProject = galleryList[galleryIndex].workIndex === prevWorkIndex;
  galleryRender(sameProject ? 'same' : 'diff');
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


// ---- INVERT LOUPE ----
(function() {
  var size    = 150;
  var loupeEl = null;

  function init() {
    if (loupeEl) return;
    loupeEl = document.createElement('div');
    loupeEl.id = 'invert-loupe';
    loupeEl.style.cssText = [
      'position:fixed','pointer-events:none','z-index:9998',
      'width:' + size + 'px','height:' + size + 'px',
      'border-radius:50%','overflow:hidden','opacity:0',
      'transform:translate(-50%,-50%)'
    ].join(';');
    document.body.appendChild(loupeEl);
  }

  function showInvert(e, imgEl) {
    if (!imgEl || !imgEl.complete || !imgEl.naturalWidth) return;
    init();
    var r    = imgEl.getBoundingClientRect();
    var natW = imgEl.naturalWidth, natH = imgEl.naturalHeight;
    var dispW = r.width, dispH = r.height;
    var natR  = natW / natH, dispR = dispW / dispH;
    var rendW, rendH, offX, offY;
    if (natR > dispR) {
      rendH = dispH; rendW = dispH * natR; offX = (dispW - rendW) / 2; offY = 0;
    } else {
      rendW = dispW; rendH = dispW / natR; offX = 0; offY = (dispH - rendH) / 2;
    }
    var cx = e.clientX - r.left - offX;
    var cy = e.clientY - r.top  - offY;
    loupeEl.style.left            = e.clientX + 'px';
    loupeEl.style.top             = e.clientY + 'px';
    loupeEl.style.opacity         = '1';
    loupeEl.style.backgroundImage = 'url(' + imgEl.src + ')';
    loupeEl.style.backgroundSize  = rendW + 'px ' + rendH + 'px';
    loupeEl.style.backgroundPosition = (size/2 - cx) + 'px ' + (size/2 - cy) + 'px';
    loupeEl.style.filter          = 'invert(1)';
    // hide site cursor
    var sc = document.getElementById('site-cursor');
    if (sc && sc.hide) sc.hide(); else if (sc) sc.style.opacity = '0';
  }

  function hideInvert() {
    if (loupeEl) loupeEl.style.opacity = '0';
    // restore site cursor
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

  function attach(el, getImg) {
    el.addEventListener('mouseenter', hideCursor);
    el.addEventListener('mouseleave', function() { hideInvert(); showCursor(); });
    el.addEventListener('mousemove', function(e) { showInvert(e, getImg()); });
  }

  // Works page — invert only on images
  function attachToWorks() {
    document.querySelectorAll('.work-image').forEach(function(el) {
      attach(el, function() { return el.querySelector('.stored-img'); });
    });
  }

  // Home page — cursor stays visible (no invert on slideshow)
  function attachToSlideshow() {
    // no-op: circle cursor remains visible on home page
  }

  // Full gallery handled directly in galleryBuild mousemove — NOT here

  // Info page — invert on portrait
  function attachToInfo() {
    var ip = document.querySelector('.info-photo');
    if (!ip) return;
    attach(ip, function() { return ip.querySelector('.stored-img'); });
  }

  document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
      attachToWorks();
      attachToSlideshow();
      attachToInfo();
    }, 300);
  });

  // gallery handled in galleryBuild — no wrapping needed here

  var origShowPage = window.showPage;
  if (origShowPage) {
    window.showPage = function(id) {
      origShowPage(id);
      hideInvert();
      showCursor();
      if (id === 'works') setTimeout(attachToWorks, 100);
      if (id === 'home')  setTimeout(attachToSlideshow, 100);
      if (id === 'info')  setTimeout(attachToInfo, 100);
    };
  }
})();

// =============================================================
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//   סוף הגלריה — אל תיגע כאן
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// =============================================================
