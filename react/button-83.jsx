export default () => (
  <>
    <button class="btn-83"><span>Button</span></button>

    <style jsx>{`
      .btn-83 {
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
      .btn-83 {
  display: block;
  width: 100%;
  height: 80px;
  margin: 1rem auto;
  max-width: 250px;
  border-radius: 999px;

  position: relative;
  overflow: hidden;

  text-transform: uppercase;
}

.btn-83 span {
  font-weight: 900;
  mix-blend-mode: difference;

  transition: opacity 0.2s;
}

.btn-83:hover span {
  opacity: 0;
  animation: text-reset 0.2s forwards 0.8s;
}

.btn-83:before,
.btn-83:after {
  content: "";
  z-index: -1;
  width: 100%;
  height: 100%;
  border-radius: 999px;
  transform: translateX(-50%);
  position: absolute;
  bottom: 0;
  border: 4px solid white;
  left: 50%;
  transition: width 0.2s;
}
.btn-83:after {
  height: 0;
  background: white;
  border: none;
  width: 2rem;
}
.btn-83:hover:before {
  width: 2rem;
  animation: border-reset 0.2s linear 0.78s forwards;
}
.btn-83:hover:after {
  animation: progress-bar 1s;
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
@keyframes border-reset {
  0% {
    width: 2rem;
  }
  100% {
    width: 100%;
  }
}
@keyframes text-reset {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

    `}</style>
  </>
)