// =============================================================
// CONTENT — edit here to update the site. Save + redeploy.
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

// =============================================================
// HOW TO ADD A PROJECT — copy one block ({ ... },) to the bottom
//
//  title:              name of the work
//  year:               year
//  medium:             material
//  size:               dimensions
//  images:             list of image URLs (first = shown on page)
//  installationPhotos: photographer credit (leave '' if none)
//  vimeoID:            Vimeo video ID only (leave '' if none)
// =============================================================

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



// ---- GLOBAL CIRCLE CURSOR ----
(function() {
  var cur = document.createElement('div');
  cur.id = 'site-cursor';
  document.body.appendChild(cur);

  document.addEventListener('mousemove', function(e) {
    cur.style.left = e.clientX + 'px';
    cur.style.top  = e.clientY + 'px';
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
    '<div class="gallery-left" id="gallery-text"></div>' +
    '<div class="gallery-right">' +
      '<img id="gallery-img" src="" alt="">' +
    '</div>' +
    '<div class="gallery-zone gallery-zone-left"  id="gz-left"></div>' +
    '<div class="gallery-zone gallery-zone-right" id="gz-right"></div>';

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
    galleryCursor.style.left = e.clientX + 'px';
    galleryCursor.style.top  = e.clientY + 'px';
    galleryCursor.textContent = e.clientX < window.innerWidth / 2 ? '\u2190' : '\u2192';
    galleryCursor.style.opacity = '1';
  });
  el.addEventListener('mouseleave', function() { galleryCursor.style.opacity = '0'; });

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

  if (fade) {
    galleryImgEl.style.opacity = '0';
    galleryTextEl.style.opacity = '0';
    setTimeout(function() {
      render();
      galleryImgEl.style.opacity  = '1';
      galleryTextEl.style.opacity = '1';
    }, 200);
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
  document.body.classList.remove('gallery-open');
  document.body.style.overflow = '';
  galleryCursor.style.opacity = '0';
  loupeHide();
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
  var size = 150;
  var overlays = new WeakMap();

  function getOverlay(imgEl) {
    if (overlays.has(imgEl)) return overlays.get(imgEl);

    // Create an overlay div that sits exactly on top of the image
    var ov = document.createElement('div');
    ov.style.position       = 'absolute';
    ov.style.inset          = '0';
    ov.style.backgroundImage = 'url(' + imgEl.src + ')';
    ov.style.backgroundSize  = '100% 100%';
    ov.style.filter          = 'invert(1)';
    ov.style.pointerEvents   = 'none';
    ov.style.opacity         = '0';
    ov.style.zIndex          = '10';

    // parent must be position:relative
    var parent = imgEl.parentElement;
    if (getComputedStyle(parent).position === 'static') {
      parent.style.position = 'relative';
    }
    parent.appendChild(ov);
    overlays.set(imgEl, ov);
    return ov;
  }

  function showLoupe(e, imgEl) {
    if (!imgEl || !imgEl.src) return;
    var ov  = getOverlay(imgEl);
    var r   = imgEl.getBoundingClientRect();
    var pr  = imgEl.parentElement.getBoundingClientRect();
    var lx  = e.clientX - pr.left;
    var ly  = e.clientY - pr.top;
    // adjust for image position within parent
    var ix  = r.left - pr.left;
    var iy  = r.top  - pr.top;

    ov.style.left   = ix + 'px';
    ov.style.top    = iy + 'px';
    ov.style.width  = r.width  + 'px';
    ov.style.height = r.height + 'px';
    ov.style.backgroundSize = r.width + 'px ' + r.height + 'px';
    ov.style.clipPath = 'circle(' + (size/2) + 'px at ' + (lx - ix) + 'px ' + (ly - iy) + 'px)';
    ov.style.webkitClipPath = ov.style.clipPath;
    ov.style.opacity = '1';
  }

  function hideLoupe(imgEl) {
    if (!imgEl || !overlays.has(imgEl)) return;
    overlays.get(imgEl).style.opacity = '0';
  }

  function attach(el, getImg) {
    el.addEventListener('mouseleave', function() { hideLoupe(getImg()); });
    el.addEventListener('mousemove',  function(e) { showLoupe(e, getImg()); });
  }

  function attachToWorks() {
    document.querySelectorAll('.work-image').forEach(function(el) {
      attach(el, function() { return el.querySelector('.stored-img'); });
    });
  }

  function attachToSlideshow() {
    var body = document.body;
    body.addEventListener('mousemove', function(e) {
      if (!document.getElementById('home').classList.contains('active')) return;
      var ss  = document.getElementById('slideshow');
      var img = ss ? ss.querySelector('.slide.active .stored-img') : null;
      if (!img) return;
      var r = img.getBoundingClientRect();
      if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) {
        hideLoupe(img);
      } else {
        showLoupe(e, img);
      }
    });
  }

  function attachToGallery() {
    var gr = document.querySelector('.gallery-right');
    if (!gr) return;
    attach(gr, function() { return document.getElementById('gallery-img'); });
  }

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

  var _origGalleryOpen = window.galleryOpen;
  window.galleryOpen = function(wi, ii) {
    _origGalleryOpen(wi, ii);
    setTimeout(attachToGallery, 150);
  };

  var origShowPage = window.showPage;
  if (origShowPage) {
    window.showPage = function(id) {
      origShowPage(id);
      if (id === 'works') setTimeout(attachToWorks, 100);
      if (id === 'home')  setTimeout(attachToSlideshow, 100);
      if (id === 'info')  setTimeout(attachToInfo, 100);
    };
  }
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
    '<div class="gallery-left" id="gallery-text"></div>' +
    '<div class="gallery-right">' +
      '<img id="gallery-img" src="" alt="">' +
    '</div>' +
    '<div class="gallery-zone gallery-zone-left"  id="gz-left"></div>' +
    '<div class="gallery-zone gallery-zone-right" id="gz-right"></div>';

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
    galleryCursor.style.left = e.clientX + 'px';
    galleryCursor.style.top  = e.clientY + 'px';
    galleryCursor.textContent = e.clientX < window.innerWidth / 2 ? '\u2190' : '\u2192';
    galleryCursor.style.opacity = '1';
  });
  el.addEventListener('mouseleave', function() { galleryCursor.style.opacity = '0'; });

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

  if (fade) {
    galleryImgEl.style.opacity = '0';
    galleryTextEl.style.opacity = '0';
    setTimeout(function() {
      render();
      galleryImgEl.style.opacity  = '1';
      galleryTextEl.style.opacity = '1';
    }, 200);
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
  document.body.classList.remove('gallery-open');
  document.body.style.overflow = '';
  galleryCursor.style.opacity = '0';
  loupeHide();
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


// ---- CSS LOUPE (works on works page, cross-origin safe) ----
(function() {
  var loupe     = null;
  var loupeImg  = null;
  var zoom      = 1.0;
  var size      = 150;
  var active    = false;

  function init() {
    if (loupe) return;
    loupe = document.createElement('div');
    loupe.id = 'css-loupe';
    loupeImg = document.createElement('img');
    loupe.appendChild(loupeImg);
    document.body.appendChild(loupe);
  }

  function moveLoupe(e, imgEl) {
    if (!active || !loupe || !imgEl) return;
    if (loupeImg.src !== imgEl.src) {
      loupeImg.src = imgEl.src;
    }
    loupe.style.left = e.clientX + 'px';
    loupe.style.top  = e.clientY + 'px';

    var r  = imgEl.getBoundingClientRect();
    var px = (e.clientX - r.left);
    var py = (e.clientY - r.top);

    // image is exactly the same size as displayed — 1:1
    loupeImg.style.width  = r.width  + 'px';
    loupeImg.style.height = r.height + 'px';
    // offset so the cursor position aligns with center of loupe
    loupeImg.style.left   = -(px - size / 2) + 'px';
    loupeImg.style.top    = -(py - size / 2) + 'px';
    loupeImg.style.filter = 'invert(1)';
  }

  function attachLoupe(el, getImg) {
    el.addEventListener('mouseenter', function() {
      var img = getImg();
      if (!img || !img.src) return;
      init();
      loupeImg.src = img.src;
      active = true;
      loupe.style.opacity = '1';
    });
    el.addEventListener('mouseleave', function() {
      active = false;
      if (loupe) loupe.style.opacity = '0';
    });
    el.addEventListener('mousemove', function(e) {
      moveLoupe(e, getImg());
    });
  }

  function attachToWorks() {
    document.querySelectorAll('.work-image').forEach(function(el) {
      attachLoupe(el, function() { return el.querySelector('.stored-img'); });
    });
  }

  function attachToSlideshow() {
    var ss = document.getElementById('slideshow');
    if (!ss) return;
    attachLoupe(ss, function() {
      var active = ss.querySelector('.slide.active .stored-img');
      return active;
    });
  }

  function attachToGallery() {
    // attach only to the image area, not the whole overlay
    var galleryRight = document.querySelector('.gallery-right');
    if (!galleryRight) return;
    attachLoupe(galleryRight, function() {
      return document.getElementById('gallery-img');
    });
  }

  function attachToInfo() {
    var infoPhoto = document.querySelector('.info-photo');
    if (!infoPhoto) return;
    attachLoupe(infoPhoto, function() {
      return infoPhoto.querySelector('.stored-img');
    });
  }

  // attach after render
  document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
      attachToWorks();
      attachToSlideshow();
      attachToInfo();
    }, 300);
  });

  // re-attach when gallery opens
  var _origGalleryOpen = window.galleryOpen;
  window.galleryOpen = function(wi, ii) {
    _origGalleryOpen(wi, ii);
    setTimeout(attachToGallery, 100);
  };

  var origShowPage = window.showPage;
  if (origShowPage) {
    window.showPage = function(id) {
      origShowPage(id);
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
