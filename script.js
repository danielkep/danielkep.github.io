// =============================================================
// CONTENT — edit here to update the site. Save + redeploy.
// =============================================================

var PORTRAIT_URL = 'https://i.imgur.com/fn6Pybq.jpeg';  // Info page portrait photo

// INFO PAGE — edit here
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

var INFO_EMAIL     = 'kep.dan@gmail.com';
var INFO_INSTAGRAM = '_kep_daniel';  // just the username, without instagram.com/
var SLIDE_DURATION   = 6000;  // ms — how long each slide stays visible
var SLIDE_TRANSITION = 1400;  // ms — fade duration between slides

// =============================================================
// WORKS — כך מוסיפים פרויקט חדש:
//
//   1. העתק בלוק שלם (מ-{ עד },) לתחתית הרשימה
//   2. שנה את הטקסט (title, year, medium, size)
//   3. בתוך images: הכנס את כתובות התמונות שלך
//      - תמונה ראשונה = מה שיוצג בדף
//      - שאר התמונות = נגישות בגלריה בלחיצה
//      - אם יש תמונה אחת בלבד: images: ['https://...']
// =============================================================

var WORKS = [
  {
    title:  '',
    year:   '2024',
    medium: '',
    size:   '',
    images: [
      'https://i.imgur.com/FIL60lB.jpeg',
      'https://i.imgur.com/VGxrsrb.jpeg',
      'https://i.imgur.com/YRC5Q9E.jpeg',
      'https://i.imgur.com/AnjJBsK.jpeg',


    ],
  },
  {
    title:  'Untitled II',
    year:   '2024',
    medium: 'Mixed media on paper',
    size:   '80 \u00d7 60 cm',
    images: [
      'https://i.imgflip.com/9jt6e7.jpg',
      'https://i.imgflip.com/9juj6s.jpg',
      'https://i.imgflip.com/288cnn.jpg',
    ],
  },
  {
    title:  'Study III',
    year:   '2023',
    medium: 'Charcoal on paper',
    size:   '100 \u00d7 70 cm',
    images: [
      'https://i.imgflip.com/9juj6s.jpg',
    ],
  },
  {
    title:  'Composition IV',
    year:   '2023',
    medium: 'Acrylic on canvas',
    size:   '150 \u00d7 110 cm',
    images: [
      'https://i.imgflip.com/288cnn.jpg',
      'https://i.imgflip.com/9jqyru.jpg',
    ],
  },
  {
    title:  'Fragment V',
    year:   '2022',
    medium: 'Oil on linen',
    size:   '90 \u00d7 90 cm',
    images: [
      'https://i.imgflip.com/9jqyru.jpg',
    ],
  },
];

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

// =============================================================
// FIREBASE (optional)
// =============================================================
var FIREBASE_URL = 'YOUR_FIREBASE_DATABASE_URL';

// ---- HELPERS ----

function getImages(work) {
  if (work.images && work.images.length > 0) return work.images;
  if (work.url) return [work.url];
  return [];
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
    return (
      '<div class="work-item">' +
        '<div class="work-text">' +
          '<div class="work-title">' + work.title + '</div>' +
          '<div class="work-meta">' +
            '<span>' + work.medium + '</span>' +
            '<span>' + work.size + '</span>' +
            '<span style="margin-top:6px;color:#bbb;">' + work.year + '</span>' +
          '</div>' +
        '</div>' +
        '<div class="work-image" onclick="openLightbox(' + i + ')">' +
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
  document.getElementById('slideshow').innerHTML = SLIDES.map(function(url, i) {
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

// ---- LIGHTBOX ----

var lbWorkIndex = 0;
var lbImgIndex  = 0;
var lbEl   = document.getElementById('lightbox');
var cursor = document.getElementById('lb-cursor');

function openLightbox(workIndex) {
  lbWorkIndex = workIndex;
  lbImgIndex  = 0;
  renderLightbox(false);
  lbEl.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function renderLightbox(fade) {
  var imgEl = document.getElementById('lightbox-img');
  var cap   = document.getElementById('lightbox-caption');
  var work  = WORKS[lbWorkIndex];
  var imgs  = getImages(work);
  var total = imgs.length;

  function render() {
    var url = imgs[lbImgIndex];
    imgEl.innerHTML = '';
    if (url) {
      imgEl.style.position = 'relative';
      var img = document.createElement('img');
      img.src = url;
      img.alt = work.title;
      img.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;object-fit:contain;display:block;';
      imgEl.appendChild(img);
    } else {
      imgEl.style.position = '';
      imgEl.textContent = work.title;
    }
    var meta    = [work.medium, work.size, work.year].filter(Boolean).join(' \u00b7 ');
    var counter = total > 1 ? (lbImgIndex + 1) + ' \u2014 ' + total : '';
    cap.innerHTML =
      (meta    ? '<span>' + meta + '</span>' : '') +
      (counter ? '<span class="lb-counter">' + counter + '</span>' : '');
  }

  if (fade) {
    imgEl.classList.add('fade');
    setTimeout(function() { render(); imgEl.classList.remove('fade'); }, 200);
  } else {
    render();
  }
}

function lbNavigate(dir) {
  var imgs = getImages(WORKS[lbWorkIndex]);
  lbImgIndex = (lbImgIndex + dir + imgs.length) % imgs.length;
  renderLightbox(true);
}

function closeLightbox() {
  lbEl.classList.remove('open');
  document.body.style.overflow = '';
  cursor.style.opacity = '0';
}

// Keyboard
document.addEventListener('keydown', function(e) {
  if (!lbEl.classList.contains('open')) return;
  if (e.key === 'Escape')     closeLightbox();
  if (e.key === 'ArrowRight') lbNavigate(1);
  if (e.key === 'ArrowLeft')  lbNavigate(-1);
});

// Custom cursor
document.addEventListener('mousemove', function(e) {
  if (!lbEl.classList.contains('open')) return;
  cursor.style.left = e.clientX + 'px';
  cursor.style.top  = e.clientY + 'px';
  cursor.textContent = e.clientX < window.innerWidth / 2 ? '\u2190' : '\u2192';
  cursor.style.opacity = '1';
});
lbEl.addEventListener('mouseleave', function() { cursor.style.opacity = '0'; });

// Touch / swipe
var touchStartX = 0;
lbEl.addEventListener('touchstart', function(e) {
  touchStartX = e.touches[0].clientX;
}, { passive: true });
lbEl.addEventListener('touchend', function(e) {
  var diff = touchStartX - e.changedTouches[0].clientX;
  if (Math.abs(diff) > 40) lbNavigate(diff > 0 ? 1 : -1);
}, { passive: true });

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
navEl.classList.add('transparent');

function showPage(id) {
  document.querySelectorAll('.page').forEach(function(p) { p.classList.remove('active'); });
  document.querySelectorAll('.nav-links a, .nav-right a').forEach(function(a) { a.classList.remove('active'); });
  document.getElementById(id).classList.add('active');
  var link = document.getElementById('nav-' + id);
  if (link) link.classList.add('active');
  window.scrollTo(0, 0);
  navEl.classList.toggle('transparent', id === 'home');
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
