// =============================================================
//  EDIT ZONE — only edit this section
// =============================================================

var PORTRAIT_URL = 'https://i.imgur.com/fn6Pybq.jpeg';

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
var INFO_INSTAGRAM = '_kep_daniel';
var SLIDE_DURATION   = 6000;
var SLIDE_TRANSITION = 1400;

// -------------------------------------------------------------
//  HOW TO ADD A PROJECT:
//
//  Copy one block (from { to },) and paste it at the bottom
//  of the WORKS list. Then edit the values:
//
//  title:              name of the work
//  year:               year (string)
//  medium:             material / technique
//  size:               dimensions
//  images:             list of image URLs — first image shows
//                      on the Works page; all are in gallery
//  installationPhotos: (optional) photographer credit text
//                      e.g. 'Installation photos: John Smith'
//  vimeoID:            (optional) Vimeo video ID only
//                      e.g. for vimeo.com/123456789 write '123456789'
//                      leave as '' if no video
// -------------------------------------------------------------

var WORKS = [
  {
    title:              'Tzirim (Axes)',
    year:               '2024',
    medium:             'Oak wood',
    size:               '327 \u00d7 467 cm (Dimensions variable)',
    images: [
      'https://i.imgur.com/FIL60lB.jpeg',
      'https://i.imgur.com/VGxrsrb.jpeg',
      'https://i.imgur.com/YRC5Q9E.jpeg',
      'https://i.imgur.com/AnjJBsK.jpeg',
    ],
    installationPhotos: 'Installation photos: Daniel Hanoch',
    vimeoID:            '',
  },
  {
    title:              'Untitled II',
    year:               '2024',
    medium:             'Mixed media on paper',
    size:               '80 \u00d7 60 cm',
    images: [
      'https://i.imgflip.com/9jt6e7.jpg',
      'https://i.imgflip.com/9juj6s.jpg',
    ],
    installationPhotos: '',
    vimeoID:            '',
  },
  {
    title:              'Study III',
    year:               '2023',
    medium:             'Charcoal on paper',
    size:               '100 \u00d7 70 cm',
    images: [
      'https://i.imgflip.com/9juj6s.jpg',
    ],
    installationPhotos: '',
    vimeoID:            '',
  },
  {
    title:              'Composition IV',
    year:               '2023',
    medium:             'Acrylic on canvas',
    size:               '150 \u00d7 110 cm',
    images: [
      'https://i.imgflip.com/288cnn.jpg',
      'https://i.imgflip.com/9jqyru.jpg',
    ],
    installationPhotos: '',
    vimeoID:            '76979871',
  },
  {
    title:              'Fragment V',
    year:               '2022',
    medium:             'Oil on linen',
    size:               '90 \u00d7 90 cm',
    images: [
      'https://i.imgflip.com/9jqyru.jpg',
    ],
    installationPhotos: '',
    vimeoID:            '',
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
//  END OF EDIT ZONE
// =============================================================




// =============================================================
// !! DO NOT TOUCH — rendering, gallery, video logic below !!
// =============================================================

var FIREBASE_URL = 'YOUR_FIREBASE_DATABASE_URL';

function getImages(work) {
  if (work.images && work.images.length > 0) return work.images;
  if (work.url) return [work.url];
  return [];
}

var SLIDE_BG = ['#d9d6d0', '#ccc9c3', '#dddbd7', '#d2cfc9', '#e0ddd8'];

// ---- RENDER WORKS ----

function renderWorks() {
  document.getElementById('works-list').innerHTML = WORKS.map(function(work, i) {
    var imgs       = getImages(work);
    var firstImg   = imgs[0] || '';
    var extraCount = imgs.length - 1;
    var ph         = firstImg ? ' style="display:none"' : '';
    var countBadge = extraCount > 0
      ? '<span class="work-image-count">+' + extraCount + '</span>'
      : '';
    var videoLink = work.vimeoID
      ? '<div class="work-video-link" onclick="event.stopPropagation();videoOpen(\'' + work.vimeoID + '\')">View Here</div>'
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
          videoLink +
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

// ---- RENDER SLIDESHOW ----

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

// ---- RENDER INFO ----

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


// =============================================================
// !! DO NOT TOUCH — GALLERY !!
// =============================================================

function buildFlatList() {
  var list = [];
  WORKS.forEach(function(work, wi) {
    getImages(work).forEach(function(url, ii) {
      list.push({ url: url, workIndex: wi, imgIndex: ii });
    });
  });
  return list;
}

var galleryEl     = null;
var galleryImgEl  = null;
var galleryTextEl = null;
var galleryCursor = null;
var galleryList   = [];
var galleryIndex  = 0;
var galleryTouchX = 0;

function galleryBuild() {
  if (document.getElementById('gallery-overlay')) return;
  var el = document.createElement('div');
  el.id = 'gallery-overlay';
  el.innerHTML =
    '<button class="lightbox-back" id="gallery-back">&#8592; Back</button>' +
    '<div class="gallery-left" id="gallery-text"></div>' +
    '<div class="gallery-right"><img id="gallery-img" src="" alt=""></div>' +
    '<div class="gallery-zone gallery-zone-left"  id="gz-left"></div>' +
    '<div class="gallery-zone gallery-zone-right" id="gz-right"></div>' +
    '<div class="lb-cursor" id="gallery-cursor"></div>';
  document.body.appendChild(el);

  galleryEl     = el;
  galleryImgEl  = document.getElementById('gallery-img');
  galleryTextEl = document.getElementById('gallery-text');
  galleryCursor = document.getElementById('gallery-cursor');

  document.getElementById('gallery-back').addEventListener('click', galleryClose);
  document.getElementById('gz-left').addEventListener('click',  function() { galleryNav(1); });
  document.getElementById('gz-right').addEventListener('click', function() { galleryNav(-1); });

  document.addEventListener('keydown', function(e) {
    if (!galleryEl || !galleryEl.classList.contains('open')) return;
    if (e.key === 'Escape')     galleryClose();
    if (e.key === 'ArrowRight') galleryNav(-1);
    if (e.key === 'ArrowLeft')  galleryNav(1);
  });

  el.addEventListener('mousemove', function(e) {
    galleryCursor.style.left    = e.clientX + 'px';
    galleryCursor.style.top     = e.clientY + 'px';
    galleryCursor.textContent   = e.clientX < window.innerWidth / 2 ? '\u2192' : '\u2190';
    galleryCursor.style.opacity = '1';
  });
  el.addEventListener('mouseleave', function() { galleryCursor.style.opacity = '0'; });

  el.addEventListener('touchstart', function(e) {
    galleryTouchX = e.touches[0].clientX;
  }, { passive: true });
  el.addEventListener('touchend', function(e) {
    var diff = galleryTouchX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) galleryNav(diff > 0 ? -1 : 1);
  }, { passive: true });
}

function galleryOpen(workIndex, imgIndex) {
  galleryBuild();
  galleryList  = buildFlatList();
  galleryIndex = 0;
  for (var k = 0; k < galleryList.length; k++) {
    if (galleryList[k].workIndex === workIndex && galleryList[k].imgIndex === (imgIndex || 0)) {
      galleryIndex = k;
      break;
    }
  }
  galleryRender(false);
  galleryEl.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function galleryRender(fade) {
  var item = galleryList[galleryIndex];
  var work = WORKS[item.workIndex];
  var imgs = getImages(work);

  function render() {
    galleryImgEl.src = item.url;

    var html = '';
    if (work.title)  html += '<div class="gallery-title">'     + work.title  + '</div>';
    if (work.medium) html += '<div class="gallery-meta-line">' + work.medium + '</div>';
    if (work.size)   html += '<div class="gallery-meta-line">' + work.size   + '</div>';
    if (work.year)   html += '<div class="gallery-meta-line gallery-year">' + work.year + '</div>';
    if (work.installationPhotos) {
      html += '<div class="gallery-photo-credit">' + work.installationPhotos + '</div>';
    }
    if (work.vimeoID) {
      html += '<div class="gallery-video-link" onclick="videoOpen(\'' + work.vimeoID + '\')">View Here</div>';
    }
    if (imgs.length > 1) {
      html += '<div class="gallery-counter">' + (item.imgIndex + 1) + ' \u2014 ' + imgs.length + '</div>';
    }
    galleryTextEl.innerHTML = html;
  }

  if (fade) {
    galleryImgEl.style.opacity  = '0';
    galleryTextEl.style.opacity = '0';
    setTimeout(function() {
      render();
      galleryImgEl.style.opacity  = '1';
      galleryTextEl.style.opacity = '1';
    }, 180);
  } else {
    render();
  }
}

function galleryNav(dir) {
  galleryIndex = (galleryIndex + dir + galleryList.length) % galleryList.length;
  galleryRender(true);
}

function galleryClose() {
  if (!galleryEl) return;
  galleryEl.classList.remove('open');
  document.body.style.overflow = '';
  galleryCursor.style.opacity = '0';
}

// closeLightbox from HTML Back button also closes gallery
function closeLightbox() { galleryClose(); }


// =============================================================
// !! DO NOT TOUCH — VIDEO PLAYER !!
// =============================================================

var videoEl    = null;
var videoFrame = null;

function videoBuild() {
  if (document.getElementById('video-overlay')) return;
  var el = document.createElement('div');
  el.id = 'video-overlay';
  el.innerHTML =
    '<button class="lightbox-back" id="video-back">&#8592; Back</button>' +
    '<div class="video-inner">' +
      '<iframe id="video-frame" src="" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>' +
    '</div>';
  document.body.appendChild(el);
  videoEl    = el;
  videoFrame = document.getElementById('video-frame');
  document.getElementById('video-back').addEventListener('click', videoClose);
  document.addEventListener('keydown', function(e) {
    if (!videoEl || !videoEl.classList.contains('open')) return;
    if (e.key === 'Escape') videoClose();
  });
}

function videoOpen(vimeoID) {
  videoBuild();
  videoFrame.src = 'https://player.vimeo.com/video/' + vimeoID + '?autoplay=1';
  videoEl.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function videoClose() {
  if (!videoEl) return;
  videoFrame.src = '';
  videoEl.classList.remove('open');
  document.body.style.overflow = '';
}

// =============================================================
// !! DO NOT TOUCH END !!
// =============================================================