export default () => (
  <>
    <button class="btn-31">
  <span class="text-container">
    <span class="text">Button</span>
  </span>
</button>

    <style jsx>{`
      .btn-31 {
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
      .btn-31 {
  display: block;
  width: 100%;
  height: 80px;
  aspect-square: 1;
  margin: 1rem auto;
  max-width: 250px;

  position: relative;

  text-transform: uppercase;
  border: 1px solid currentColor;
}

.btn-31:before {
  content: "";
  z-index: -1;

  position: absolute;
  inset: 0;

  --progress: 100%;

  background: white;
  clip-path: polygon(
    100% 0,
    var(--progress) var(--progress),
    0 100%,
    100% 100%
  );
  transition: clip-path 0.2s;
}
.btn-31:hover:before {
  --progress: 0%;
}

.btn-31 .text-container {
  display: block;
  position: relative;
  overflow: hidden;
}
.btn-31 .text {
  display: block;
  position: relative;
  font-weight: 900;
  mix-blend-mode: difference;
}
.btn-31:hover .text {
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

    `}</style>
  </>
)