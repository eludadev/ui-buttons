export default () => (
  <>
    <button class="btn-6"><span>Button</span></button>

    <style jsx>{`
      .btn-6 {
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
      .btn-6 {
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

.btn-6 span {
  font-weight: 900;
  mix-blend-mode: difference;
}

.btn-6:before,
.btn-6:after {
  content: "";
  z-index: -1;
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  background: white;
  transition: transform 0.4s;
  will-change: transform;
}
.btn-6:before {
  left: -100%;
}
.btn-6:after {
  left: 100%;
}
.btn-6:hover:before {
  transform: translateX(100%);
}
.btn-6:hover:after {
  transform: translateX(-100%);
}

    `}</style>
  </>
)