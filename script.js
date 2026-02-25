// =============================================================
// CONTENT — edit here to update the site. Save + redeploy.
// =============================================================

var PORTRAIT_URL = '';  // Info page portrait photo

// INFO PAGE — edit here
var INFO_BIO = [
  'Daniel Kep is a visual artist based in Tel Aviv. His work explores the relationship between memory and materiality, drawing on everyday objects and intimate spaces.',
  'He has exhibited in galleries across Israel and Europe.',
];

var INFO_EMAIL     = 'danielkep@gmail.com';
var INFO_INSTAGRAM = 'danielkep';  // just the username, without instagram.com/

var SLIDE_DURATION   = 4000;  // ms — how long each slide stays visible
var SLIDE_TRANSITION = 1400;  // ms — fade duration between slides

var WORKS = [
  {
    title:  'Untitled I',
    year:   '2024',
    medium: 'Oil on canvas',
    size:   '120 × 90 cm',
    url:    'https://i.imgflip.com/9jqyru.jpg',
  },
  {
    title:  'Untitled II',
    year:   '2024',
    medium: 'Mixed media on paper',
    size:   '80 × 60 cm',
    url:    'https://i.imgflip.com/9jt6e7.jpg',
  },
  {
    title:  'Study III',
    year:   '2023',
    medium: 'Charcoal on paper',
    size:   '100 × 70 cm',
    url:    'https://i.imgflip.com/9juj6s.jpg',
  },
  {
    title:  'Composition IV',
    year:   '2023',
    medium: 'Acrylic on canvas',
    size:   '150 × 110 cm',
    url:    'https://i.imgflip.com/288cnn.jpg',
  },
  {
    title:  'Fragment V',
    year:   '2022',
    medium: 'Oil on linen',
    size:   '90 × 90 cm',
    url:    'https://i.imgflip.com/9jqyru.jpg',
  },
  {
    title:  'Fragment V',
    year:   '2022',
    medium: 'Oil on linen',
    size:   '90 × 90 cm',
    url:    'https://i.imgflip.com/9jqyru.jpg',
  },
  {
    title:  'Fragment V',
    year:   '2022',
    medium: 'Oil on linen',
    size:   '90 × 90 cm',
    url:    'https://i.imgflip.com/9jqyru.jpg',
  },
  {
    title:  'Fragment V',
    year:   '2022',
    medium: 'Oil on linen',
    size:   '90 × 90 cm',
    url:    'https://i.imgflip.com/9jqyru.jpg',
  },
  {
    title:  'Fragment V',
    year:   '2022',
    medium: 'Oil on linen',
    size:   '90 × 90 cm',
    url:    'https://i.imgflip.com/9jqyru.jpg',
  },
  {
    title:  'Fragment V',
    year:   '2022',
    medium: 'Oil on linen',
    size:   '90 × 90 cm',
    url:    'https://i.imgflip.com/9jqyru.jpg',
  },
  {
    title:  'Fragment V',
    year:   '2022',
    medium: 'Oil on linen',
    size:   '90 × 90 cm',
    url:    'https://i.imgflip.com/9jqyru.jpg',
  },
  {
    title:  'Fragment V',
    year:   '2022',
    medium: 'Oil on linen',
    size:   '90 × 90 cm',
    url:    'https://i.imgflip.com/9jqyru.jpg',
  },
  {
    title:  'Fragment V',
    year:   '2022',
    medium: 'Oil on linen',
    size:   '90 × 90 cm',
    url:    'https://i.imgflip.com/9jqyru.jpg',
  },
  {
    title:  'Fragment V',
    year:   '2022',
    medium: 'Oil on linen',
    size:   '90 × 90 cm',
    url:    'https://i.imgflip.com/9jqyru.jpg',
  },
];

var SLIDES = [
  'https://i.imgur.com/E0VZ7vA.jpeg', // Slide 1,
'https://i.imgur.com/AnjJBsK.jpeg', // Slide 2

 
];

// =============================================================
// FIREBASE (optional — enables live in-browser editing)
// Setup: console.firebase.google.com → Realtime Database → test mode
// Admin: open browser console → localStorage.setItem('kep_admin', '1')
//        to exit             → localStorage.removeItem('kep_admin')
// =============================================================

var FIREBASE_URL = 'YOUR_FIREBASE_DATABASE_URL';

// ---- RENDERING ----

var SLIDE_BG = ['#d9d6d0', '#ccc9c3', '#dddbd7', '#d2cfc9', '#e0ddd8'];

function renderWorks() {
  document.getElementById('works-list').innerHTML = WORKS.map(function(work, i) {
    var ph = work.url ? ' style="display:none"' : '';
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
            '<img class="stored-img" src="' + (work.url || '') + '" alt="' + work.title + '">' +
            '<div class="img-placeholder"' + ph + '>Image</div>' +
            '<button class="admin-edit-btn" onclick="editImage(event,\'work-' + i + '\')">edit</button>' +
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
          '<button class="admin-edit-btn" onclick="editImage(event,\'slide-' + i + '\')">edit</button>' +
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
  // Pre-populate imageStore from WORKS and SLIDES
  WORKS.forEach(function(work, i) {
    if (work.url) imageStore['work-' + i] = work.url;
  });
  SLIDES.forEach(function(url, i) {
    if (url) imageStore['slide-' + i] = url;
  });
  if (PORTRAIT_URL) applyImage('portrait', PORTRAIT_URL);

  // Firebase overrides (only runs if FIREBASE_URL is configured)
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

function saveImage(key, url) {
  applyImage(key, url);  // always preview locally
  if (lbEl.classList.contains('open') && key === 'work-' + lbIndex) renderLightbox(false);
  if (FIREBASE_URL === 'YOUR_FIREBASE_DATABASE_URL') return;  // no persistence without Firebase
  fetch(FIREBASE_URL + '/images/' + key + '.json', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(url)
  })
  .then(function(r) { if (!r.ok) throw new Error('HTTP ' + r.status); })
  .catch(function() { alert('Could not save to Firebase. Check URL and rules.'); });
}

function editImage(e, key) {
  e.stopPropagation();
  var url = prompt('Paste image URL:', imageStore[key] || '');
  if (url !== null && url.trim() !== '') saveImage(key, url.trim());
}

function editLightboxImage() {
  editImage({ stopPropagation: function() {} }, 'work-' + lbIndex);
}

function checkAdminMode() {
  document.body.classList.toggle('admin-mode', localStorage.getItem('kep_admin') === '1');
}

// ---- LIGHTBOX ----

// Derived from WORKS — no need to edit this directly
var works = WORKS.map(function(w) {
  return { title: w.title, meta: w.medium + ' \u00b7 ' + w.size + ' \u00b7 ' + w.year };
});

var lbIndex = 0;
var lbEl    = document.getElementById('lightbox');
var cursor  = document.getElementById('lb-cursor');

function openLightbox(index) {
  lbIndex = index;
  renderLightbox(false);
  lbEl.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function renderLightbox(fade) {
  var imgEl = document.getElementById('lightbox-img');
  var cap   = document.getElementById('lightbox-caption');

  function render() {
    var url = imageStore['work-' + lbIndex];
    imgEl.innerHTML = '';
    if (url) {
      imgEl.style.position = 'relative';
      var img = document.createElement('img');
      img.src = url;
      img.alt = works[lbIndex].title;
      img.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;object-fit:contain;display:block;';
      imgEl.appendChild(img);
    } else {
      imgEl.style.position = '';
      imgEl.textContent = works[lbIndex].title;
    }
    cap.textContent = works[lbIndex].meta;
  }

  if (fade) {
    imgEl.classList.add('fade');
    setTimeout(function() { render(); imgEl.classList.remove('fade'); }, 200);
  } else {
    render();
  }
}

function lbNavigate(dir) {
  lbIndex = (lbIndex + dir + works.length) % works.length;
  renderLightbox(true);
}

function closeLightbox() {
  lbEl.classList.remove('open');
  document.body.style.overflow = '';
  cursor.style.opacity = '0';
}

document.addEventListener('mousemove', function(e) {
  if (!lbEl.classList.contains('open')) return;
  cursor.style.left = e.clientX + 'px';
  cursor.style.top  = e.clientY + 'px';
  cursor.textContent = e.clientX < window.innerWidth / 2 ? '\u2190' : '\u2192';
  cursor.style.opacity = '1';
});

lbEl.addEventListener('mouseleave', function() { cursor.style.opacity = '0'; });

document.addEventListener('keydown', function(e) {
  if (!lbEl.classList.contains('open')) return;
  if (e.key === 'Escape')     closeLightbox();
  if (e.key === 'ArrowRight') lbNavigate(1);
  if (e.key === 'ArrowLeft')  lbNavigate(-1);
});

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
var slides;  // assigned after renderSlideshow() builds the DOM

function goToSlide(n) {
  slides[current].classList.remove('active');
  current = n;
  slides[current].classList.add('active');
}

// ---- INIT ----

renderWorks();
renderSlideshow();
renderInfo();
slides = document.querySelectorAll('.slide');  // query after DOM is built

checkAdminMode();
loadImages();

setInterval(function() { goToSlide((current + 1) % slides.length); }, SLIDE_DURATION);
