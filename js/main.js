import { GameEngine } from './GameEngine.js';

// DOM Seçiciler
const dom = {
    input: document.getElementById('input-field'),
    display: document.getElementById('display-code'),
    timer: document.getElementById('timer-display'),
    wpm: document.getElementById('wpm-display'),
    container: document.querySelector('.typing-container'),
    
    // Header
    catTitle: document.getElementById('current-cat-title'),
    badge: document.getElementById('item-count-badge'),
    
    // Modal
    modal: document.getElementById('result-modal'),
    mWpm: document.getElementById('modal-wpm'),
    mAcc: document.getElementById('modal-acc'),
    mCat: document.getElementById('modal-cat'),
    restartBtn: document.getElementById('restart-btn'),
    
    // Buton Grupları
    navBtns: document.querySelectorAll('.nav-btn'),
    timeBtns: document.querySelectorAll('.time-btn'),
    stopBtn: document.getElementById('stop-endless-btn')
};

// UI İşlemleri (Engine'e enjekte edilecek)
const uiMethods = {
    updateBadge: (count) => {
        dom.badge.innerText = `${count} Komut`;
    },

    resetUI: (text, timeText) => {
        dom.input.value = "";
        dom.timer.innerText = timeText;
        dom.wpm.innerText = 0;
        dom.stopBtn.style.display = 'none';
        dom.modal.classList.remove('show');
        renderText(text);
        dom.input.focus();
        dom.container.classList.remove('active');
    },

    setCharStatus: (index, status) => {
        const spans = dom.display.querySelectorAll('span');
        if (spans[index]) spans[index].classList.add(status);
    },

    removeCharStyle: (index) => {
        const spans = dom.display.querySelectorAll('span');
        if (spans[index]) spans[index].classList.remove('correct', 'wrong', 'space-error');
    },

    updateCursor: (index) => {
        const spans = dom.display.querySelectorAll('span');
        spans.forEach(s => s.classList.remove('current'));
        if (index < spans.length) spans[index].classList.add('current');
    },

    nextLevel: (text) => {
        renderText(text);
        dom.input.value = "";
    },

    onStart: (isEndless) => {
        dom.container.classList.add('active');
        if (isEndless) dom.stopBtn.style.display = 'inline-block';
    },

    updateTimer: (val) => { dom.timer.innerText = val; },
    updateWpm: (val) => { dom.wpm.innerText = val; },

    showResult: (wpm, acc, cat) => {
        dom.mWpm.innerText = wpm;
        dom.mAcc.innerText = acc + "%";
        dom.mCat.innerText = cat.toUpperCase();
        dom.modal.classList.add('show');
        dom.input.blur();
    }
};

// Yardımcı Fonksiyon: Metni Ekrana Bas
function renderText(text) {
    dom.display.innerHTML = "";
    text.split("").forEach(char => {
        const span = document.createElement("span");
        span.innerText = char;
        span.className = "char";
        if (char === ":") span.classList.add("separator-char");
        dom.display.appendChild(span);
    });
    if (dom.display.firstChild) dom.display.firstChild.classList.add("current");
}

// Oyunu Başlat
const game = new GameEngine(uiMethods);

// --- EVENT LISTENERS (TIKLAMA OLAYLARI) ---
// Bu kısım sayesinde HTML içinde onclick yazmaya gerek kalmaz.

// 1. Kategori Seçimi
dom.navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Görsel aktiflik
        dom.navBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Başlığı güncelle
        dom.catTitle.innerText = btn.innerText;
        
        // Oyuna bildir
        game.setCategory(btn.dataset.category);
    });
});

// 2. Süre Seçimi
dom.timeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        dom.timeBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        game.setTime(btn.dataset.time);
    });
});

// 3. Yazma Olayı
dom.input.addEventListener('input', (e) => game.handleInput(e.target.value));

// 4. Input Odaklanma (Kutuya tıklayınca inputa odaklan)
dom.container.addEventListener('click', () => dom.input.focus());
dom.input.addEventListener('focus', () => dom.container.classList.add('active'));
dom.input.addEventListener('blur', () => dom.container.classList.remove('active'));

// 5. Butonlar
dom.restartBtn.addEventListener('click', () => game.resetGame());
dom.stopBtn.addEventListener('click', () => game.endGame());

// İlk Başlangıç Verilerini Yükle
game.updateCount();
game.resetGame();