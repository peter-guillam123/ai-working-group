/* Fairford explainer - progressive enhancement. With no JavaScript every
   panel, timeline entry and answer is visible; this file only adds the
   stepping, filtering and motion. */
(function () {
  const root = document.documentElement;
  root.classList.add('js');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');

  /* ---------- theme ---------- */
  const themeBtn = document.getElementById('theme-btn');
  function currentTheme() {
    const set = root.getAttribute('data-theme');
    if (set) return set;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  function paintThemeBtn() {
    const t = currentTheme();
    themeBtn.textContent = t === 'dark' ? 'Light mode' : 'Dark mode';
    themeBtn.setAttribute('aria-label', t === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  }
  try { const saved = localStorage.getItem('fairford-theme'); if (saved) root.setAttribute('data-theme', saved); } catch (e) {}
  if (themeBtn) {
    paintThemeBtn();
    themeBtn.addEventListener('click', () => {
      const next = currentTheme() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('fairford-theme', next); } catch (e) {}
      paintThemeBtn();
      document.dispatchEvent(new CustomEvent('themechange'));
    });
  }

  /* ---------- reveal on scroll ---------- */
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduce.matches) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -8% 0px' });
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add('in'));
  }

  /* ---------- national map: stepped zoom ---------- */
  const mapView = document.getElementById('map-view');
  const mapBtns = document.querySelectorAll('[data-map-step]');
  const mapLive = document.getElementById('map-live');
  const views = window.FAIRFORD_MAP_VIEWS || {};
  function setMap(step) {
    const v = views[step];
    if (!v || !mapView) return;
    mapView.style.transform = `translate(${v.tx}px, ${v.ty}px) scale(${v.k})`;
    mapView.style.setProperty('--k', v.k);
    document.querySelectorAll('[data-show]').forEach((el) => {
      const on = el.getAttribute('data-show').split(' ').includes(step);
      el.style.opacity = on ? 1 : 0;
    });
    mapBtns.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.mapStep === step)));
    const btn = document.querySelector(`[data-map-step="${step}"] b`);
    if (mapLive && btn) mapLive.textContent = 'Map now shows: ' + btn.textContent;
  }
  mapBtns.forEach((b) => b.addEventListener('click', () => setMap(b.dataset.mapStep)));
  if (mapBtns.length) setMap(mapBtns[0].dataset.mapStep);

  /* ---------- local map (Leaflet, optional) ---------- */
  const local = document.getElementById('local-map');
  if (local && window.L) {
    const L = window.L;
    const map = L.map(local, { scrollWheelZoom: false, zoomControl: true, attributionControl: true }).setView([51.692, -1.786], 13);
    let tiles;
    function tileLayer() {
      if (tiles) return;
      tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' }).addTo(map);
    }
    tileLayer();
    document.addEventListener('themechange', tileLayer);
    (window.FAIRFORD_LOCAL || []).forEach((p) => {
      L.circleMarker([p.lat, p.lon], { radius: p.r || 7, color: p.colour || '#c70000', weight: 3, fillColor: '#fff', fillOpacity: 1 })
        .addTo(map).bindTooltip(p.label, { permanent: true, direction: p.dir || 'right', className: 'lf-label' });
    });
    local.setAttribute('tabindex', '0');
  } else if (local) {
    local.innerHTML = '<p style="padding:16px;font-family:var(--sans)">The street map did not load. RAF Fairford sits just south of the town of Fairford, Gloucestershire, about 80 miles west of central London.</p>';
  }

  /* ---------- timeline: filter + spine ---------- */
  const tl = document.getElementById('timeline');
  if (tl) {
    const chips = document.querySelectorAll('[data-tl-filter]');
    const count = document.getElementById('tl-count');
    chips.forEach((c) => c.addEventListener('click', () => {
      chips.forEach((x) => x.setAttribute('aria-pressed', String(x === c)));
      const f = c.dataset.tlFilter;
      let shown = 0;
      tl.querySelectorAll('.tl-item').forEach((it) => {
        const on = f === 'all' || it.classList.contains(f);
        it.hidden = !on; if (on) shown++;
      });
      tl.querySelectorAll('.tl-day').forEach((d) => {
        let n = d.nextElementSibling, any = false;
        while (n && !n.classList.contains('tl-day')) { if (n.classList.contains('tl-item') && !n.hidden) any = true; n = n.nextElementSibling; }
        d.hidden = !any;
      });
      if (count) count.textContent = `Showing ${shown} ${shown === 1 ? 'entry' : 'entries'}`;
    }));
    const spine = tl.querySelector('.spine');
    if (spine && !reduce.matches) {
      const onScroll = () => {
        const r = tl.getBoundingClientRect();
        const vh = window.innerHeight;
        const p = Math.min(1, Math.max(0, (vh * 0.6 - r.top) / r.height));
        spine.style.height = (p * 100).toFixed(1) + '%';
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    } else if (spine) { spine.style.height = '100%'; }
  }

  /* ---------- legal journey stepper ---------- */
  const jBtns = document.querySelectorAll('[data-j]');
  const jPanels = document.querySelectorAll('.journey-panel');
  function setJourney(id, focus) {
    let reached = false;
    jBtns.forEach((b) => {
      const me = b.dataset.j === id;
      if (me) { b.setAttribute('aria-current', 'step'); reached = true; }
      else b.removeAttribute('aria-current');
      b.classList.toggle('done', !reached && !me);
    });
    jPanels.forEach((p) => { p.hidden = p.id !== 'j-' + id; });
    const panel = document.getElementById('j-' + id);
    if (panel) {
      const needle = panel.querySelector('.g-needle');
      if (needle) { needle.style.left = '0%'; requestAnimationFrame(() => requestAnimationFrame(() => { needle.style.left = needle.dataset.g; })); }
      if (focus) panel.querySelector('h3').focus();
    }
  }
  if (jBtns.length) {
    jBtns.forEach((b, i) => {
      b.addEventListener('click', () => setJourney(b.dataset.j, true));
      b.addEventListener('keydown', (e) => {
        if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
        const n = jBtns[(i + (e.key === 'ArrowRight' ? 1 : jBtns.length - 1)) % jBtns.length];
        n.focus(); setJourney(n.dataset.j, false);
      });
    });
    const start = document.querySelector('[data-j].now') || jBtns[0];
    setJourney(start.dataset.j, false);
  }

  /* ---------- clocks: fill bars when seen ---------- */
  const bars = document.querySelectorAll('.clock .bar i');
  if ('IntersectionObserver' in window) {
    const io2 = new IntersectionObserver((es) => es.forEach((e) => {
      if (e.isIntersecting) { e.target.style.width = e.target.dataset.w; io2.unobserve(e.target); }
    }), { threshold: 0.4 });
    bars.forEach((b) => io2.observe(b));
  } else bars.forEach((b) => { b.style.width = b.dataset.w; });

  /* ---------- claim tester ---------- */
  const T = window.FAIRFORD_TESTER;
  const box = document.getElementById('tester');
  if (T && box) {
    const q = box.querySelector('.q'), opts = box.querySelector('.opts'), verdict = box.querySelector('.verdict');
    const score = box.querySelector('.score'), next = box.querySelector('.next');
    let i = 0, right = 0, answered = false;
    const labels = { official: 'Confirmed by police', claim: 'Claimed, not confirmed', unknown: 'Nobody knows yet' };
    function show() {
      answered = false;
      const item = T[i];
      q.textContent = '“' + item.text + '”';
      verdict.innerHTML = '';
      opts.innerHTML = '';
      Object.keys(labels).forEach((k) => {
        const b = document.createElement('button');
        b.type = 'button'; b.textContent = labels[k]; b.dataset.k = k;
        b.addEventListener('click', () => answer(k, b));
        opts.appendChild(b);
      });
      next.textContent = i === T.length - 1 ? 'Start again' : 'Next statement';
      score.textContent = `Statement ${i + 1} of ${T.length} · ${right} right so far`;
    }
    function answer(k, b) {
      if (answered) return;
      answered = true;
      const item = T[i];
      const ok = k === item.answer;
      if (ok) right++;
      opts.querySelectorAll('button').forEach((x) => {
        x.disabled = true;
        if (x.dataset.k === item.answer) x.classList.add('right');
        else if (x === b) x.classList.add('wrong');
      });
      verdict.innerHTML = `<strong>${ok ? 'Right.' : 'Not quite.'} ${labels[item.answer]}.</strong> ${item.why}`;
      score.textContent = `Statement ${i + 1} of ${T.length} · ${right} right so far`;
      verdict.focus();
    }
    next.addEventListener('click', () => {
      if (i === T.length - 1) { i = 0; right = 0; } else i++;
      show();
      q.focus();
    });
    box.hidden = false;
    const fallback = document.getElementById('tester-fallback');
    if (fallback) fallback.hidden = true;
    show();
  }

  /* ---------- count-ups ---------- */
  document.querySelectorAll('[data-count]').forEach((el) => {
    const end = parseFloat(el.dataset.count);
    if (reduce.matches || !('IntersectionObserver' in window)) { el.textContent = el.dataset.count; return; }
    const io3 = new IntersectionObserver((es) => es.forEach((e) => {
      if (!e.isIntersecting) return;
      io3.unobserve(el);
      const t0 = performance.now(), dur = 1200;
      const tick = (t) => {
        const p = Math.min(1, (t - t0) / dur), eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(end * eased);
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }), { threshold: 0.6 });
    io3.observe(el);
  });
})();
