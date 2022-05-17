export default () => (
  <>
    <button class="btn-13">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <div class="text">Button</div>
</button>

    <style jsx>{`
      .btn-13 {
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
      .btn-13 {
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

  transition: color 0.6s;
}

.btn-13 .text {
  font-weight: 900;
  mix-blend-mode: difference;
}

.btn-13 span {
  display: block;
  width: 100%;
  height: 100%;
  z-index: -1;

  position: absolute;
  background: white;

  transition: transform 0.6s;
  will-change: transform;
}
.btn-13 span:nth-child(1) {
  top: -100%;
  left: -100%;
}
.btn-13 span:nth-child(2) {
  top: -100%;
  left: 100%;
}
.btn-13 span:nth-child(3) {
  top: 100%;
  left: 100%;
}
.btn-13 span:nth-child(4) {
  top: 100%;
  left: -100%;
}
.btn-13:hover span:nth-child(1) {
  transform: translate(100%, 100%);
}
.btn-13:hover span:nth-child(2) {
  transform: translate(-100%, 100%);
}
.btn-13:hover span:nth-child(3) {
  transform: translate(-100%, -100%);
}
.btn-13:hover span:nth-child(4) {
  transform: translate(100%, -100%);
}

    `}</style>
  </>
)