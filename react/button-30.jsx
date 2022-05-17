export default () => (
  <>
    <button class="btn-30">
  <span class="text-container">
    <span class="text">Button</span>
  </span>
</button>

    <style jsx>{`
      .btn-30 {
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
      .btn-30 {
  display: block;
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

.btn-30 span {
  font-weight: 900;
  mix-blend-mode: difference;
}

.btn-30:before {
  content: "";
  height: 0;
  aspect-ratio: 1;

  transform: translateX(-50%);
  position: absolute;
  top: -200%;
  left: 50%;
  background: white;
  border-radius: 50%;
  transition: height 0.3s;
}
.btn-30:hover:before {
  height: 400%;
}
.btn-30 .text-container {
  display: block;
  position: relative;
  overflow: hidden;
}
.btn-30 .text {
  display: block;
  position: relative;
  font-weight: 900;
  mix-blend-mode: difference;
}
.btn-30:hover .text {
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