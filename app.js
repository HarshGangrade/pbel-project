/* ════════════════════════════════════════
   ZEST 4.0 — app.js  (emoji-safe build)
════════════════════════════════════════ */

/* ── DATA ── */
const FOODS = [
  { id:1,  name:'Margherita Royale',      img:'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&h=400&fit=crop',  desc:'San Marzano tomatoes, buffalo mozzarella, fresh basil, EVOO, sea salt flakes.',          price:349, rating:4.8, time:18, cat:'pizza',   badge:'Bestseller', bStyle:'',          moods:['cozy','party'],   tags:['Vegetarian','Classic'] },
  { id:2,  name:'BBQ Smoke Burger',       img:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=400&fit=crop',  desc:'Double smash patty, aged cheddar, crispy onions, smoky BBQ sauce, brioche bun.',         price:289, rating:4.7, time:15, cat:'burger',  badge:'Hot',         bStyle:'',          moods:['spicy','party'],  tags:['Beef','Spicy'] },
  { id:4,  name:'Ramen Tonkotsu',         img:'https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=500&h=400&fit=crop',  desc:'18-hour pork broth, chashu belly, soft egg, nori, bamboo shoots, spring onion.',         price:379, rating:4.8, time:20, cat:'noodles', badge:"Chef's Pick",  bStyle:'sage-badge', moods:['cozy','spicy'],   tags:['Pork','Comfort'] },
  { id:5,  name:'Tacos Al Pastor',        img:'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=500&h=400&fit=crop',  desc:'Slow-roasted pork, pineapple, cilantro, white onion, red salsa, lime.',                 price:249, rating:4.6, time:12, cat:'tacos',   badge:'',            bStyle:'',          moods:['spicy','party'],  tags:['Mexican','Street'] },
  { id:6,  name:'Nutella Lava Cake',      img:'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=500&h=400&fit=crop',  desc:'Warm chocolate sponge, molten Nutella core, cocoa dust, vanilla gelato.',               price:199, rating:4.9, time:14, cat:'dessert', badge:'New',         bStyle:'sage-badge', moods:['sweet','cozy'],   tags:['Chocolate','Vegetarian'] },
  { id:7,  name:'Spicy Pepperoni',        img:'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500&h=400&fit=crop',  desc:'Sourdough base, pepperoni, jalapenos, mozzarella, chilli oil, organic honey.',           price:399, rating:4.7, time:20, cat:'pizza',   badge:'Spicy',       bStyle:'',          moods:['spicy','party'],  tags:['Spicy','Pork'] },
  { id:8,  name:'Truffle Chicken Burger', img:'https://images.unsplash.com/photo-1550317138-10000687a72b?w=500&h=400&fit=crop',     desc:'Crispy chicken thigh, black truffle aioli, aged cheddar, butter lettuce, brioche.',      price:329, rating:4.8, time:16, cat:'burger',  badge:'Popular',     bStyle:'',          moods:['cozy','party'],   tags:['Chicken','Truffle'] },
  { id:9,  name:'Salmon Sashimi',         img:'https://images.unsplash.com/photo-1534482421-64566f976cfa?w=500&h=400&fit=crop',     desc:'Norwegian salmon, yuzu-soy ponzu, microgreens, toasted sesame, pickled ginger.',         price:529, rating:4.9, time:10, cat:'sushi',   badge:'',            bStyle:'',          moods:['healthy'],        tags:['Seafood','Raw'] },
  { id:10, name:'Pad Thai Noodles',       img:'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=500&h=400&fit=crop',     desc:'Rice noodles, crispy tofu, peanuts, tamarind, lime, bean sprouts, chilli.',              price:299, rating:4.6, time:17, cat:'noodles', badge:'',            bStyle:'',          moods:['cozy','healthy'], tags:['Vegetarian','Thai'] },
  { id:11, name:'Mango Taco Bowl',        img:'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=500&h=400&fit=crop',  desc:'Chipotle chicken, mango-avocado salsa, black beans, charred corn, crema.',              price:279, rating:4.7, time:13, cat:'tacos',   badge:'',            bStyle:'',          moods:['healthy','party'],tags:['Chicken','Fresh'] },
  { id:12, name:'Strawberry Cheesecake',  img:'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=500&h=400&fit=crop',  desc:'NY-style cheesecake, fresh strawberry compote, graham crust, vanilla cream.',           price:219, rating:4.8, time:5,  cat:'dessert', badge:'New',         bStyle:'sage-badge', moods:['sweet'],          tags:['Fruity','Vegetarian'] },
  { id:13, name:'Caesar Salad',           img:'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=500&h=400&fit=crop',     desc:'Crisp romaine, Caesar dressing, Parmigiano, house croutons, cracked pepper.',          price:239, rating:4.5, time:8,  cat:'salad',   badge:'',            bStyle:'',          moods:['healthy'],        tags:['Vegetarian','Classic'] },
  { id:14, name:'Greek Bowl',             img:'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500&h=400&fit=crop',  desc:'Grilled chicken, olives, tomatoes, cucumber, red onion, feta, lemon-herb dressing.',   price:269, rating:4.6, time:10, cat:'salad',   badge:'Healthy',     bStyle:'sage-badge', moods:['healthy'],        tags:['Mediterranean','Fresh'] },
  { id:15, name:'Brownie Sundae',         img:'https://images.unsplash.com/photo-1564355808539-22fda35bed7e?w=500&h=400&fit=crop',  desc:'Warm fudge brownie, vanilla ice cream, hot chocolate sauce, whipped cream.',           price:179, rating:4.7, time:7,  cat:'dessert', badge:'',            bStyle:'',          moods:['sweet','cozy'],   tags:['Chocolate','Ice Cream'] },
  { id:16, name:'Kimchi Ramen',           img:'https://images.unsplash.com/photo-1570275239925-4af0aa93a0dc?w=500&h=400&fit=crop',  desc:'Kimchi broth, pork belly, soft egg, corn, nori, sesame oil.',                          price:349, rating:4.7, time:18, cat:'noodles', badge:'Spicy',       bStyle:'',          moods:['spicy'],          tags:['Korean','Spicy'] },
];

const CATS = [
  {key:'all',     label:'All',      icon:'&#x1F37D;'},
  {key:'pizza',   label:'Pizza',    icon:'&#x1F355;'},
  {key:'burger',  label:'Burgers',  icon:'&#x1F354;'},
  {key:'sushi',   label:'Sushi',    icon:'&#x1F363;'},
  {key:'noodles', label:'Noodles',  icon:'&#x1F35C;'},
  {key:'tacos',   label:'Tacos',    icon:'&#x1F32E;'},
  {key:'dessert', label:'Desserts', icon:'&#x1F370;'},
  {key:'salad',   label:'Salads',   icon:'&#x1F957;'},
];

const MOOD_META = {
  cozy:    { label:'Cozy & Lazy',    msg:'Perfect for a lazy day in' },
  spicy:   { label:'Spice Me Up',    msg:'Buckle up, these are fiery hot' },
  healthy: { label:'Clean & Fresh',  msg:'Feel good food, feel amazing' },
  party:   { label:'Party Mode',     msg:'Load up, share with the squad' },
  sweet:   { label:'Sweet Tooth',    msg:'Treat yourself, you deserve it' },
};

const PROMOS = {
  'ZEST30':   {type:'pct',  val:30, msg:'30% discount applied!'},
  'FIRST50':  {type:'flat', val:50, msg:'Rs.50 off your order!'},
  'ZESTFREE': {type:'del',  val:40, msg:'Free delivery unlocked!'},
  'SAVE20':   {type:'pct',  val:20, msg:'20% off applied!'},
};

const T_STEPS = [
  {e:'&#x1F4CB;', l:'Confirmed'},
  {e:'&#x1F373;', l:'Preparing'},
  {e:'&#x1F6F5;', l:'On the way'},
  {e:'&#x1F3E0;', l:'Delivered'}
];
const T_ETAS = ['Arriving in ~20 min','Arriving in ~14 min','Arriving in ~6 min','Delivered! Enjoy!'];

/* ── STATE ── */
function safeGet(key) {
  try { return JSON.parse(localStorage.getItem(key) || '[]'); } catch(e) { return []; }
}
let cart        = safeGet('zest_cart');
let wishlist    = safeGet('zest_wish');
let currentCat  = 'all';
let currentSort = 'default';
let currentView = 'grid';
let promo       = null;
let showWish    = false;
let mItem       = null;
let mQtyVal     = 1;

/* ── HELPERS ── */
function $id(id) { return document.getElementById(id); }
function saveCart() {
  try { localStorage.setItem('zest_cart', JSON.stringify(cart)); } catch(e) {}
}

/* ══════════════════════════════
   BOOT
══════════════════════════════ */
document.addEventListener('DOMContentLoaded', function() {
  buildCats();
  renderGrid();
  updateCartUI();
  updateWishUI();
  initSearch();
  initCounters();
  initReveal();
  initNavScroll();
  initCursor();
});

/* ══════════════════════════════
   MOOD SELECTOR
══════════════════════════════ */
function selectMood(el, mood) {
  if (el.classList.contains('active')) {
    el.classList.remove('active');
    $id('moodResult').innerHTML = '';
    return;
  }
  document.querySelectorAll('.mood-card').forEach(function(c) { c.classList.remove('active'); });
  el.classList.add('active');

  var meta  = MOOD_META[mood];
  var picks = FOODS.filter(function(f) { return f.moods.indexOf(mood) > -1; }).slice(0, 4);
  var result = $id('moodResult');

  var html = '<div class="mood-result-inner">';
  html += '<div class="mr-heading"><em>' + meta.label + '</em> &mdash; ' + meta.msg + '</div>';
  html += '<div class="mr-grid">';
  picks.forEach(function(f) {
    html += '<div class="mr-card" onclick="openModal(' + f.id + ')">';
    html += '<div class="mr-img"><img src="' + f.img + '" alt="' + f.name + '" loading="lazy"></div>';
    html += '<div class="mr-info">';
    html += '<div class="mr-name">' + f.name + '</div>';
    html += '<div class="mr-row">';
    html += '<div class="mr-price">&#x20B9;' + f.price + '</div>';
    html += '<button class="mr-add" onclick="event.stopPropagation();addItem(' + f.id + ',1)">+</button>';
    html += '</div></div></div>';
  });
  html += '</div></div>';
  result.innerHTML = html;
  result.scrollIntoView({behavior:'smooth', block:'nearest'});
}

/* ══════════════════════════════
   CATEGORIES
══════════════════════════════ */
function buildCats() {
  var el = $id('catList');
  if (!el) return;
  var html = '';
  CATS.forEach(function(c) {
    html += '<div class="cat-chip ' + (c.key === 'all' ? 'active' : '') + '" onclick="setcat(\'' + c.key + '\',this)">';
    html += '<span>' + c.icon + '</span> ' + c.label;
    html += '</div>';
  });
  el.innerHTML = html;
}

function setcat(cat, el) {
  currentCat = cat;
  showWish = false;
  document.querySelectorAll('.cat-chip').forEach(function(c) { c.classList.remove('active'); });
  el.classList.add('active');
  renderGrid();
}

/* ══════════════════════════════
   SORT / VIEW
══════════════════════════════ */
function applySort() {
  currentSort = $id('sortSelect').value;
  renderGrid();
}

function setView(v) {
  currentView = v;
  var grid = $id('foodGrid');
  if (v === 'list') grid.classList.add('list-view');
  else grid.classList.remove('list-view');
  $id('gbtn').classList.toggle('active', v === 'grid');
  $id('lbtn').classList.toggle('active', v === 'list');
}

function showWishlist() {
  showWish = true;
  document.querySelectorAll('.cat-chip').forEach(function(c) { c.classList.remove('active'); });
  var menu = $id('menu');
  if (menu) menu.scrollIntoView({behavior:'smooth'});
  renderGrid();
}

/* ══════════════════════════════
   RENDER GRID
══════════════════════════════ */
function renderGrid() {
  var grid = $id('foodGrid');
  if (!grid) return;

  var items = showWish
    ? FOODS.filter(function(f) { return wishlist.indexOf(f.id) > -1; })
    : (currentCat === 'all' ? FOODS.slice() : FOODS.filter(function(f) { return f.cat === currentCat; }));

  if (currentSort === 'price-asc')  items.sort(function(a,b){return a.price-b.price;});
  if (currentSort === 'price-desc') items.sort(function(a,b){return b.price-a.price;});
  if (currentSort === 'rating')     items.sort(function(a,b){return b.rating-a.rating;});
  if (currentSort === 'fast')       items.sort(function(a,b){return a.time-b.time;});
  if (currentSort === 'az')         items.sort(function(a,b){return a.name.localeCompare(b.name);});

  if (!items.length) {
    grid.innerHTML = '<div class="no-results"><div class="no-icon">' + (showWish ? '&#x1F494;' : '&#x1F37D;') + '</div><div>' + (showWish ? 'No saved items yet.' : 'No items here.') + '</div></div>';
    return;
  }

  var html = '';
  items.forEach(function(f) {
    var wished = wishlist.indexOf(f.id) > -1;
    var inCart = cart.find(function(c){return c.id===f.id;});
    html += '<div class="food-card" onclick="openModal(' + f.id + ')">';
    html += '<div class="food-img-wrap">';
    html += '<img src="' + f.img + '" alt="' + f.name + '" loading="lazy" onerror="this.src=\'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=400&fit=crop\'">';
    if (f.badge) html += '<div class="food-badge ' + f.bStyle + '">' + f.badge + '</div>';
    html += '<button class="wish-btn' + (wished ? ' wished' : '') + '" onclick="toggleWish(event,' + f.id + ')">' + (wished ? '&#x2665;' : '&#x2661;') + '</button>';
    html += '</div>';
    html += '<div class="food-body">';
    html += '<div class="food-name">' + f.name + '</div>';
    html += '<div class="food-desc">' + f.desc + '</div>';
    html += '<div class="food-foot">';
    html += '<div>';
    html += '<div class="food-price">&#x20B9;' + f.price + '</div>';
    html += '<div class="food-meta"><span class="star">&#x2605;</span> ' + f.rating + ' &middot; ' + f.time + ' min</div>';
    html += '</div>';
    html += '<button class="add-btn' + (inCart ? ' added' : '') + '" id="ab' + f.id + '" onclick="quickAdd(event,' + f.id + ')">' + (inCart ? '&#x2713;' : '+') + '</button>';
    html += '</div></div></div>';
  });

  grid.innerHTML = html;
  if (currentView === 'list') grid.classList.add('list-view');
  else grid.classList.remove('list-view');

  /* staggered entrance */
  var cards = grid.querySelectorAll('.food-card');
  cards.forEach(function(el, i) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.4s ease ' + (i * 0.055) + 's, transform 0.4s ease ' + (i * 0.055) + 's';
  });
  requestAnimationFrame(function() {
    requestAnimationFrame(function() {
      cards.forEach(function(el) {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      });
    });
  });
}

/* ══════════════════════════════
   WISHLIST
══════════════════════════════ */
function toggleWish(e, id) {
  e.stopPropagation();
  var idx = wishlist.indexOf(id);
  if (idx > -1) {
    wishlist.splice(idx, 1);
    toast('Removed from saved');
  } else {
    wishlist.push(id);
    toast('Saved to wishlist!');
  }
  try { localStorage.setItem('zest_wish', JSON.stringify(wishlist)); } catch(err) {}
  updateWishUI();
  renderGrid();
}

function updateWishUI() {
  var n = wishlist.length;
  var wc = $id('wishCount'); if (wc) wc.textContent = n;
  var wl = $id('wishlistCount'); if (wl) wl.textContent = n;
}

/* ══════════════════════════════
   QUICK ADD
══════════════════════════════ */
function quickAdd(e, id) {
  e.stopPropagation();
  addItem(id, 1);
  var btn = $id('ab' + id);
  if (btn) {
    btn.classList.add('added');
    btn.innerHTML = '&#x2713;';
    btn.style.animation = 'pop 0.3s ease';
    setTimeout(function() { btn.style.animation = ''; }, 400);
  }
}

/* ══════════════════════════════
   MODAL
══════════════════════════════ */
function openModal(id) {
  mItem = FOODS.find(function(f) { return f.id === id; });
  if (!mItem) return;
  mQtyVal = 1;
  $id('modalImg').innerHTML = '<img src="' + mItem.img + '" alt="' + mItem.name + '">';
  $id('mName').textContent  = mItem.name;
  $id('mPrice').textContent = '\u20B9' + mItem.price;
  $id('mStats').innerHTML   = '<span>&#x2605;</span> ' + mItem.rating + ' &middot; ' + mItem.time + ' min';
  $id('mDesc').textContent  = mItem.desc;
  $id('mTags').innerHTML    = mItem.tags.map(function(t) { return '<span class="mc-tag">' + t + '</span>'; }).join('');
  $id('mQtyNum').textContent = 1;
  $id('mTotal').textContent  = mItem.price;
  $id('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeMbg(e) {
  if (e.target === $id('modalOverlay')) closeModal();
}

function closeModal() {
  $id('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

function mQty(d) {
  mQtyVal = Math.max(1, mQtyVal + d);
  $id('mQtyNum').textContent = mQtyVal;
  $id('mTotal').textContent  = mItem.price * mQtyVal;
}

function modalAdd() { addItem(mItem.id, mQtyVal); closeModal(); }

/* ══════════════════════════════
   CART
══════════════════════════════ */
function addItem(id, qty) {
  var f  = FOODS.find(function(x) { return x.id === id; });
  if (!f) return;
  var ex = cart.find(function(c) { return c.id === id; });
  if (ex) ex.qty += qty;
  else cart.push({id:f.id, name:f.name, img:f.img, price:f.price, qty:qty});
  saveCart();
  updateCartUI();
  bumpBadge();
  toast(f.name + ' added to cart!');
}

function changeQty(id, d) {
  var item = cart.find(function(c) { return c.id === id; });
  if (!item) return;
  item.qty += d;
  if (item.qty <= 0) cart = cart.filter(function(c) { return c.id !== id; });
  saveCart();
  updateCartUI();
}

function updateCartUI() {
  var total = cart.reduce(function(a,c){return a+c.qty;}, 0);
  var cc = $id('cartCount');
  if (cc) cc.textContent = total;

  var itemsEl  = $id('cartItems');
  var footerEl = $id('cartFooter');
  var promoEl  = $id('promoSection');
  if (!itemsEl) return;

  if (!cart.length) {
    itemsEl.innerHTML = '<div class="cd-empty"><div class="cde-img">&#x1F6D2;</div><div class="cde-text">Nothing here yet!<br>Find something delicious.</div><button class="cde-cta" onclick="toggleCart();document.getElementById(\'menu\').scrollIntoView({behavior:\'smooth\'})">Browse Menu</button></div>';
    if (footerEl) footerEl.style.display = 'none';
    if (promoEl)  promoEl.style.display  = 'none';
    renderGrid();
    return;
  }

  var html = '';
  cart.forEach(function(item) {
    html += '<div class="cart-item">';
    html += '<img class="ci-img" src="' + item.img + '" alt="' + item.name + '" onerror="this.src=\'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=100&h=100&fit=crop\'">';
    html += '<div class="ci-info"><div class="ci-name">' + item.name + '</div>';
    html += '<div class="ci-price">&#x20B9;' + (item.price * item.qty) + '</div></div>';
    html += '<div class="qty-ctrl">';
    html += '<button class="qty-btn" onclick="changeQty(' + item.id + ',-1)">&#x2212;</button>';
    html += '<span class="qty-num">' + item.qty + '</span>';
    html += '<button class="qty-btn" onclick="changeQty(' + item.id + ',1)">+</button>';
    html += '</div></div>';
  });
  itemsEl.innerHTML = html;

  var sub = cart.reduce(function(a,c){return a+c.price*c.qty;}, 0);
  var disc = 0, deliv = 40;
  if (promo) {
    if (promo.type === 'pct')  disc  = Math.round(sub * promo.val / 100);
    if (promo.type === 'flat') disc  = Math.min(promo.val, sub);
    if (promo.type === 'del')  deliv = 0;
  }
  var tax = Math.round((sub - disc) * 0.05);
  var tot = sub - disc + deliv + tax;

  var s=$id('sub'); if(s) s.textContent='\u20B9'+sub;
  var t=$id('taxAmt'); if(t) t.textContent='\u20B9'+tax;
  var ta=$id('totalAmt'); if(ta) ta.textContent='\u20B9'+tot;
  var da=$id('delivAmt'); if(da) da.textContent='\u20B9'+deliv;
  var dr=$id('discRow'); if(dr) dr.style.display = disc>0?'flex':'none';
  var damt=$id('discAmt'); if(damt) damt.textContent='-\u20B9'+disc;

  if (footerEl) footerEl.style.display = 'block';
  if (promoEl)  promoEl.style.display  = 'block';
  renderGrid();
}

function toggleCart() {
  $id('cartOverlay').classList.toggle('open');
  $id('cartSidebar').classList.toggle('open');
}

function bumpBadge() {
  var el = $id('cartCount');
  if (!el) return;
  el.classList.add('bump');
  setTimeout(function() { el.classList.remove('bump'); }, 400);
}

/* ══════════════════════════════
   PROMO
══════════════════════════════ */
function applyPromo() {
  var code = $id('promoInput').value.trim().toUpperCase();
  var msg  = $id('promoMsg');
  if (PROMOS[code]) {
    promo = PROMOS[code];
    msg.className = 'cdp-msg ok';
    msg.textContent = PROMOS[code].msg;
    updateCartUI();
    toast(PROMOS[code].msg);
  } else {
    msg.className = 'cdp-msg err';
    msg.textContent = 'Invalid. Try ZEST30, FIRST50, ZESTFREE, SAVE20';
  }
}

function copyCode(code) {
  try { navigator.clipboard.writeText(code); } catch(e) {}
  var inp = $id('promoInput');
  if (inp) inp.value = code;
  toast('Code "' + code + '" copied!');
  if (!$id('cartSidebar').classList.contains('open')) toggleCart();
}

/* ══════════════════════════════
   CHECKOUT & TRACKER
══════════════════════════════ */
function goToPayment() {
  if (!cart.length) {
    toast('Your cart is empty! Add something first.');
    return;
  }
  /* cart is already saved in localStorage — payment.html will read it */
  saveCart();
  window.location.href = 'payment.html';
}

function checkout() {
  if (!cart.length) return;
  toggleCart();
  startTracker();
  cart = []; promo = null;
  var pi = $id('promoInput'); if(pi) pi.value='';
  var pm = $id('promoMsg');   if(pm) pm.textContent='';
  saveCart();
  updateCartUI();
}

function startTracker() {
  var step = 0;
  var overlay = $id('trackerOverlay');
  var stepsEl = $id('tSteps');
  var etaEl   = $id('tEta');
  var emojiEl = $id('tEmoji');

  function draw() {
    var html = '';
    T_STEPS.forEach(function(s, i) {
      var cls = i < step ? 'done' : i === step ? 'active' : '';
      html += '<div class="t-step ' + cls + '">';
      html += '<div class="t-step-line"></div>';
      html += '<div class="t-step-circle">' + (i < step ? '&#x2713;' : s.e) + '</div>';
      html += '<div class="t-step-label">' + s.l + '</div>';
      html += '</div>';
    });
    stepsEl.innerHTML = html;
  }

  draw();
  emojiEl.innerHTML = T_STEPS[0].e;
  etaEl.textContent = T_ETAS[0];
  overlay.classList.add('open');

  [2200, 3800, 5200].forEach(function(delay, i) {
    setTimeout(function() {
      step = i + 1;
      draw();
      emojiEl.innerHTML = T_STEPS[Math.min(step, 3)].e;
      etaEl.textContent = T_ETAS[step];
    }, delay);
  });
}

function closeTracker() {
  $id('trackerOverlay').classList.remove('open');
  renderGrid();
}

/* ══════════════════════════════
   SEARCH
══════════════════════════════ */
function initSearch() {
  var inp = $id('searchInput');
  var res = $id('searchResults');
  if (!inp || !res) return;

  inp.addEventListener('input', function() {
    var q = inp.value.trim().toLowerCase();
    if (!q) { res.classList.remove('show'); return; }
    var matches = FOODS.filter(function(f) {
      return f.name.toLowerCase().indexOf(q) > -1 ||
             f.cat.indexOf(q) > -1 ||
             f.tags.some(function(t){return t.toLowerCase().indexOf(q)>-1;}) ||
             f.desc.toLowerCase().indexOf(q) > -1;
    }).slice(0, 6);
    if (!matches.length) { res.classList.remove('show'); return; }
    var html = '';
    matches.forEach(function(f) {
      var name = f.name.replace(new RegExp('(' + q + ')', 'gi'), '<strong style="color:var(--terra)">$1</strong>');
      html += '<div class="sr-item" onclick="openModal(' + f.id + ');clearSearch()">';
      html += '<img class="sr-img" src="' + f.img + '" alt="' + f.name + '">';
      html += '<div><div class="sr-name">' + name + '</div>';
      html += '<div class="sr-meta">&#x20B9;' + f.price + ' &middot; &#x2605;' + f.rating + ' &middot; ' + f.time + ' min</div></div>';
      html += '</div>';
    });
    res.innerHTML = html;
    res.classList.add('show');
  });

  document.addEventListener('click', function(e) {
    if (!e.target.closest('.nav-search')) clearSearch();
  });
  inp.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') clearSearch();
  });
}

function clearSearch() {
  var res=$id('searchResults'); if(res) res.classList.remove('show');
  var inp=$id('searchInput');   if(inp) inp.value='';
}

/* ══════════════════════════════
   COUNTERS
══════════════════════════════ */
function initCounters() {
  var els = document.querySelectorAll('[data-target]');
  var co = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (!e.isIntersecting) return;
      co.unobserve(e.target);
      var el = e.target;
      var target = parseFloat(el.dataset.target);
      var dec    = parseInt(el.dataset.dec || '0');
      var suffix = el.dataset.suffix || '';
      var steps  = 60, dur = 1600, s = 0;
      var t = setInterval(function() {
        s++;
        var p = 1 - Math.pow(1 - s/steps, 3);
        el.textContent = (target * p).toFixed(dec) + suffix;
        if (s >= steps) { el.textContent = target.toFixed(dec) + suffix; clearInterval(t); }
      }, dur / steps);
    });
  }, {threshold: 0.5});
  els.forEach(function(el) { co.observe(el); });
}

/* ══════════════════════════════
   SCROLL REVEAL
══════════════════════════════ */
function initReveal() {
  var obs = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, {threshold: 0.08});
  document.querySelectorAll('.reveal').forEach(function(el) { obs.observe(el); });
}

/* ══════════════════════════════
   NAV SCROLL
══════════════════════════════ */
function initNavScroll() {
  var nav = $id('nav');
  if (!nav) return;
  window.addEventListener('scroll', function() {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }, {passive:true});
}

/* ══════════════════════════════
   TOAST
══════════════════════════════ */
var tTimer;
function toast(msg) {
  clearTimeout(tTimer);
  var el = $id('toast');
  if (!el) return;
  el.textContent = msg;
  el.classList.add('show');
  tTimer = setTimeout(function() { el.classList.remove('show'); }, 2800);
}

/* ══════════════════════════════
   CURSOR
══════════════════════════════ */
function initCursor() {
  var curEl = $id('cursor');
  if (!curEl) return;
  var mx=0, my=0, cx=0, cy=0;
  document.addEventListener('mousemove', function(e) { mx=e.clientX; my=e.clientY; });
  (function loop() {
    cx += (mx-cx) * 0.14;
    cy += (my-cy) * 0.14;
    curEl.style.left = cx + 'px';
    curEl.style.top  = cy + 'px';
    requestAnimationFrame(loop);
  })();
}