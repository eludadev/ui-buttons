export default () => (
  <>
    <button class="btn-26">
  <div class="text-container">
    <span class="text">Button</span>
  </div>
</button>

    <style jsx>{`
      .btn-26 {
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
      .btn-26 {
  --width: 100px;
  box-sizing: border-box;
  display: block;
  width: var(--width);
  height: 40px;
  margin: 1rem auto;
  max-width: 250px;

  position: relative;

  text-transform: uppercase;
}

.btn-26 .text-container {
  display: block;
  position: relative;
  overflow: hidden;
}

.btn-26 .text {
  display: block;
  position: relative;

  font-weight: 900;
  mix-blend-mode: difference;
}

.btn-26:hover .text {
  animation: move-up-alternate 0.3s forwards;
  will-change: transform;
}
@keyframes move-up-alternate {
  from {
    transform: translateY(0%);
  }
  50% {
    transform: translateY(80%);
  }
  51% {
    transform: translateY(-80%);
  }
  100% {
    transform: translateY(0%);
  }
}
.btn-26 span {
  font-size: 0.8rem;
  font-weight: 900;
  mix-blend-mode: difference;
}
.btn-26:before,
.btn-26:after {
  content: "";
  z-index: -1;
  width: 100%;
  height: 100%;

  position: absolute;
  top: 50%;
  left: 0;
  background: white;
  --progress: 0%;
  clip-path: polygon(
    0 50%,
    var(--progress) 0,
    100% 0,
    calc(100% - var(--progress)) 50%,
    100% 100%,
    var(--progress) 100%
  );
  transform: translateY(-50%);
  transition: height 0.4s, transform 0.4s, clip-path 0.4s 0.1s;
}
.btn-26:after {
  transform: rotate(180deg) translateY(50%);
}
.btn-26:hover:before {
  height: calc(var(--width) / 1.4);
  top: 50%;
  transform: translateY(-50%) translateX(35%);
  --progress: 50%;
}
.btn-26:hover:after {
  height: calc(var(--width) / 1.4);
  top: 50%;
  transform: rotate(180deg) translateY(50%) translateX(35%);
  --progress: 50%;
}

    `}</style>
  </>
)