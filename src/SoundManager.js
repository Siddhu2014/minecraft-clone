export default class SoundManager {
    constructor() {
        try {
            this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        } catch (e) {
            console.warn("Web Audio API not supported", e);
            this.ctx = null;
        }
    }

    playOscillator(type, freqStart, freqEnd, duration, volume) {
        if (!this.ctx) return;
        
        // Resume audio context if it was suspended (autoplay policy)
        if (this.ctx.state === 'suspended') {
            this.ctx.resume();
        }

        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = type;
        osc.connect(gain);
        gain.connect(this.ctx.destination);

        const now = this.ctx.currentTime;
        osc.frequency.setValueAtTime(freqStart, now);
        if (freqEnd) {
            osc.frequency.exponentialRampToValueAtTime(freqEnd, now + duration);
        }

        gain.gain.setValueAtTime(volume, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + duration);

        osc.start(now);
        osc.stop(now + duration);
    }

    jump() {
        this.playOscillator('square', 150, 300, 0.15, 0.05);
    }

    breakBlock() {
        // Quick noise-like sound
        this.playOscillator('sawtooth', 100, 50, 0.1, 0.1);
    }

    placeBlock() {
        // Soft pop
        this.playOscillator('sine', 300, 200, 0.1, 0.1);
    }
}
