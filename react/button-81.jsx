export default () => (
  <>
    <button class="btn-81"><span>Button</span></button>

    <style jsx>{`
      .btn-81 {
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
      .btn-81 {
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

.btn-81 span {
  font-weight: 900;
  mix-blend-mode: difference;
}

.btn-81:before {
  content: "";
  z-index: -1;
  width: 100%;

  position: absolute;
  bottom: 0;
  left: 0;

  background: white;
}
.btn-81:hover:before {
  animation: progress-bar 1.2s;
}
@keyframes progress-bar {
  0% {
    height: 0%;
    opacity: 1;
  }
  10% {
    height: 15%;
    opacity: 1;
  }
  25% {
    height: 25%;
    opacity: 1;
  }
  40% {
    height: 35%;
    opacity: 1;
  }
  55% {
    height: 75%;
    opacity: 1;
  }
  60% {
    height: 100%;
    opacity: 1;
  }
  100% {
    height: 100%;
    opacity: 0;
  }
}

    `}</style>
  </>
)