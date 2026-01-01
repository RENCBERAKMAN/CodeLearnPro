import { DATA } from './data.js';

export class GameEngine {
    constructor(ui) {
        this.ui = ui;
        this.settings = {
            category: 'linux',
            time: 60
        };
        this.state = {
            isPlaying: false,
            timer: null,
            timeLeft: 60,
            elapsedTime: 0,
            currentText: "",
            charIndex: 0,
            mistakes: 0,
            totalTyped: 0,
            correctTyped: 0
        };
    }

    setCategory(cat) {
        this.settings.category = cat;
        this.updateCount();
        this.resetGame();
    }

    setTime(time) {
        this.settings.time = time;
        this.resetGame();
    }

    updateCount() {
        const count = DATA[this.settings.category].length;
        this.ui.updateBadge(count);
    }

    getRandomText() {
        const list = DATA[this.settings.category];
        return list[Math.floor(Math.random() * list.length)];
    }

    resetGame() {
        if (this.state.timer) clearInterval(this.state.timer);
        
        this.state = {
            isPlaying: false,
            timer: null,
            timeLeft: (this.settings.time === 'infinity' ? 60 : parseInt(this.settings.time)),
            elapsedTime: 0,
            currentText: this.getRandomText(),
            charIndex: 0,
            mistakes: 0,
            totalTyped: 0,
            correctTyped: 0
        };

        this.ui.resetUI(
            this.state.currentText, 
            this.settings.time === 'infinity' ? '∞' : this.settings.time
        );
    }

    handleInput(inputVal) {
        if (!this.state.isPlaying && inputVal.length > 0) {
            this.startGame();
        }

        // Backspace Kontrolü
        if (inputVal.length < this.state.charIndex) {
            this.state.charIndex--;
            if (this.state.charIndex >= 0) {
                this.ui.updateCursor(this.state.charIndex);
                this.ui.removeCharStyle(this.state.charIndex);
            }
            return;
        }

        const typedChar = inputVal.slice(-1);
        const targetChar = this.state.currentText[this.state.charIndex];

        // Doğruluk Kontrolü
        if (typedChar === targetChar) {
            this.ui.setCharStatus(this.state.charIndex, 'correct');
            this.state.correctTyped++;
        } else {
            this.state.mistakes++;
            if (targetChar === " ") this.ui.setCharStatus(this.state.charIndex, 'space-error');
            else this.ui.setCharStatus(this.state.charIndex, 'wrong');
        }

        this.state.totalTyped++;
        this.state.charIndex++;
        this.ui.updateCursor(this.state.charIndex);

        // Satır Bitti mi?
        if (this.state.charIndex === this.state.currentText.length) {
            setTimeout(() => {
                this.state.currentText = this.getRandomText();
                this.state.charIndex = 0;
                this.ui.nextLevel(this.state.currentText);
            }, 100);
        }
    }

    startGame() {
        this.state.isPlaying = true;
        const isEndless = (this.settings.time === 'infinity');
        
        this.ui.onStart(isEndless);

        this.state.timer = setInterval(() => {
            if (isEndless) {
                this.state.elapsedTime++;
                this.calculateStats(this.state.elapsedTime);
            } else {
                this.state.timeLeft--;
                this.ui.updateTimer(this.state.timeLeft);
                
                const passed = parseInt(this.settings.time) - this.state.timeLeft;
                this.calculateStats(passed);

                if (this.state.timeLeft <= 0) {
                    this.endGame();
                }
            }
        }, 1000);
    }

    calculateStats(seconds) {
        if (seconds === 0) return;
        const wpm = Math.round((this.state.correctTyped / 5) / (seconds / 60));
        this.ui.updateWpm(wpm);
        return wpm;
    }

    endGame() {
        if (this.state.timer) clearInterval(this.state.timer);
        this.state.isPlaying = false;
        
        const seconds = this.settings.time === 'infinity' ? this.state.elapsedTime : parseInt(this.settings.time);
        const wpm = this.calculateStats(seconds);
        const acc = this.state.totalTyped > 0 
            ? Math.round((this.state.correctTyped / this.state.totalTyped) * 100) 
            : 0;

        this.ui.showResult(wpm, acc, this.settings.category);
    }
}