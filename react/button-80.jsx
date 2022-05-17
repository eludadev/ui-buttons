export default () => (
  <>
    <button class="btn-80"><span>Button</span></button>

    <style jsx>{`
      .btn-80 {
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
      .btn-80 {
  display: block;
  width: 100%;
  height: 80px;
  margin: 1rem auto;
  max-width: 250px;
  border-radius: 999px;

  position: relative;
  overflow: hidden;

  text-transform: uppercase;
  border: 2px solid currentColor;
}

.btn-80 span {
  font-weight: 900;
  mix-blend-mode: difference;
}

.btn-80:before {
  content: "";
  z-index: -1;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;
  background: white;
}

.btn-80:hover:before {
  animation: progress-bar 1.2s;
}
@keyframes progress-bar {
  0% {
    width: 0%;
    opacity: 1;
  }
  10% {
    width: 15%;
    opacity: 1;
  }
  25% {
    width: 25%;
    opacity: 1;
  }
  40% {
    width: 35%;
    opacity: 1;
  }
  55% {
    width: 75%;
    opacity: 1;
  }
  60% {
    width: 100%;
    opacity: 1;
  }
  100% {
    width: 100%;
    opacity: 0;
  }
}

    `}</style>
  </>
)