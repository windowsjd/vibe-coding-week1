class LottoGenerator extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.numbers = [];
  }

  connectedCallback() {
    this.render();
  }

  generateNumbers() {
    const set = new Set();
    while (set.size < 6) {
      set.add(Math.floor(Math.random() * 45) + 1);
    }
    this.numbers = Array.from(set).sort((a, b) => a - b);
    this.updateDisplay();
  }

  getBallColor(num) {
    if (num <= 10) return 'oklch(75% 0.15 80)'; // Yellowish
    if (num <= 20) return 'oklch(60% 0.15 250)'; // Blue
    if (num <= 30) return 'oklch(55% 0.2 30)';   // Reddish
    if (num <= 40) return 'oklch(50% 0.05 260)'; // Grayish
    return 'oklch(70% 0.2 150)';               // Greenish
  }

  updateDisplay() {
    const container = this.shadowRoot.getElementById('balls-container');
    container.innerHTML = '';
    
    this.numbers.forEach((num, index) => {
      const ball = document.createElement('div');
      ball.className = 'ball';
      ball.textContent = num;
      ball.style.backgroundColor = this.getBallColor(num);
      ball.style.animationDelay = `${index * 0.1}s`;
      container.appendChild(ball);
    });
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          background: var(--surface-color);
          backdrop-filter: blur(10px);
          border-radius: 2rem;
          padding: 2.5rem;
          box-shadow: var(--shadow-lg);
          text-align: center;
          border: 1px solid var(--border-color);
          transition: all 0.3s ease;
        }

        h1 {
          font-size: 2rem;
          margin-bottom: 2rem;
          font-weight: 800;
          letter-spacing: -0.025em;
          color: var(--text-color);
          transition: color 0.3s ease;
        }

        #balls-container {
          display: flex;
          justify-content: center;
          gap: 0.75rem;
          margin-bottom: 2.5rem;
          flex-wrap: wrap;
          min-height: 4rem;
        }

        .status-text {
          color: var(--text-color);
          opacity: 0.6;
          font-style: italic;
        }

        .ball {
          width: 3.5rem;
          height: 3.5rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 700;
          font-size: 1.25rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), inset 0 2px 4px rgba(255,255,255,0.3);
          animation: popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
          text-shadow: 0 1px 2px rgba(0,0,0,0.2);
        }

        @keyframes popIn {
          from { transform: scale(0); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        .generate-btn {
          background-color: var(--accent-blue);
          color: white;
          border: none;
          padding: 1rem 2rem;
          font-size: 1.125rem;
          font-weight: 600;
          border-radius: 1rem;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 4px 14px 0 rgba(0, 118, 255, 0.3);
        }

        .generate-btn:hover {
          filter: brightness(1.1);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0, 118, 255, 0.23);
        }

        .generate-btn:active {
          transform: translateY(0);
        }

        @media (max-width: 480px) {
          #balls-container {
            gap: 0.5rem;
          }
          .ball {
            width: 3rem;
            height: 3rem;
            font-size: 1.1rem;
          }
          :host {
            padding: 1.5rem;
          }
        }
      </style>
      <div class="card">
        <h1>로또 번호 추첨기</h1>
        <div id="balls-container">
          <p class="status-text">버튼을 눌러 번호를 생성하세요</p>
        </div>
        <button class="generate-btn" id="generate-btn">번호 생성하기</button>
      </div>
    `;

    this.shadowRoot.getElementById('generate-btn').addEventListener('click', () => this.generateNumbers());
  }
}

customElements.define('lotto-generator', LottoGenerator);
