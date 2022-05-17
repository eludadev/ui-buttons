export default () => (
  <>
    <button class="btn-29">
  <span class="text-container">
    <span class="text">Button</span>
  </span>
</button>

    <style jsx>{`
      .btn-29 {
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
      .btn-29 {
  --tilt: 30px;

  display: grid;
  place-content: center;
  width: 100%;
  height: 80px;
  margin: 1rem auto;
  max-width: 250px;
  border-radius: 999px;

  position: relative;
  overflow: hidden;

  text-transform: uppercase;
  border: 1px solid currentColor;
}

.btn-29 .text-container {
  display: block;
  width: fit-content;
  position: relative;
  overflow: hidden;
}

.btn-29 .text {
  display: block;
  position: relative;

  font-weight: 900;
  mix-blend-mode: difference;
}
.btn-29:hover .text {
  animation: move-up-alternate 0.3s forwards;
  will-change: transform;
}
@keyframes move-up-alternate {
  from {
    transform: translateX(0%);
  }
  50% {
    transform: translateX(80%);
  }
  51% {
    transform: translateX(-80%);
  }
  100% {
    transform: translateX(0%);
  }
}
.btn-29:before {
  content: "";
  z-index: -1;
  width: calc(100% + var(--tilt));
  height: 100%;
  position: absolute;
  top: 0;
  left: calc(-100% - var(--tilt));
  background: white;
  clip-path: polygon(
    0 0,
    calc(100% - var(--tilt)) 0,
    100% 50%,
    calc(100% - var(--tilt)) 100%,
    0 100%
  );
  animation: move-out 0.3s;
  will-change: transform;
}
.btn-29:hover:before {
  animation: move-in 0.3s forwards;
}
@keyframes move-in {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
}
@keyframes move-out {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(200%);
  }
}

    `}</style>
  </>
)