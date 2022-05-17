export default () => (
  <>
    <button class="btn-86">
  <div class="fallback">Button</div>
  <div class="letters" aria-hidden>
    <span>B</span>
    <span>U</span>
    <span>T</span>
    <span>T</span>
    <span>O</span>
    <span>N</span>
  </div>
</button>

    <style jsx>{`
      .btn-86 {
        all: unset;
        text-align: center;
        curosr: default;
        font-family: sans-serif;
        font-weight: 900;
        box-sizing: border-box;
        padding: 25px 50px;
        width: auto !important;
        height: auto !important;
      }
      .btn-86 {
  display: grid;
  place-items: center;

  width: 100%;
  height: 80px;
  margin: 1rem auto;
  max-width: 250px;
  border-radius: 999px;

  position: relative;
  overflow: hidden;

  font-weight: bold;
  text-transform: uppercase;
  border: 1px solid currentColor;
}

.btn-86 .fallback {
  display: none;
}

.btn-86 .letters {
  display: flex;
}

.btn-86 span {
  position: relative;
  mix-blend-mode: difference;
}
.btn-86 span:nth-child(1),
.btn-86 span:nth-child(6) {
  --mov: 0;
  --rot: 1;
}
.btn-86 span:nth-child(2),
.btn-86 span:nth-child(5) {
  --mov: 1/3;
  --rot: 2/3;
}
.btn-86 span:nth-child(3),
.btn-86 span:nth-child(4) {
  --mov: 2/3;
  --rot: 1/3;
}
.btn-86:hover span {
  animation: dance 0.7s linear forwards 0.18s;
}
@keyframes dance {
  30%,
  36% {
    transform: translateY(calc(-6px * var(--mov))) translateZ(0)
      rotate(calc(-13deg * var(--rot)));
  }
  50% {
    transform: translateY(calc(3px * var(--mov))) translateZ(0)
      rotate(calc(6deg * var(--rot)));
  }
  70% {
    transform: translateY(calc(-2px * var(--mov))) translateZ(0)
      rotate(calc(-3deg * var(--rot)));
  }
}

.btn-86:before,
.btn-86:after {
  content: "";
  z-index: -1;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 100%;
  left: 0;
  background: #000;
  transition: transform 0.2s cubic-bezier(0.76, 0, 0.24, 1);
  will-change: transform;
}
.btn-86:hover:before,
.btn-86:hover:after {
  transform: translateY(-100%);
}
.btn-86:after {
  transition-delay: 0.13s;
  background: #fff;
}

    `}</style>
  </>
)