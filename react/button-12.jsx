export default () => (
  <>
    <button class="btn-12"><span>Button</span></button>

    <style jsx>{`
      .btn-12 {
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
      .btn-12 {
  --width: 250px;

  display: block;
  box-sizing: border-box;
  width: var(--width);
  height: 80px;
  margin: 1rem auto;
  border-radius: 999px;

  position: relative;
  overflow: hidden;

  text-transform: uppercase;
  border: 1px solid currentColor;
}

.btn-12 span {
  font-weight: 900;
  mix-blend-mode: difference;
}

.btn-12:before,
.btn-12:after {
  --w: calc(var(--width) / 4);

  content: "";
  z-index: -1;
  height: 100%;
  width: var(--w);
  position: absolute;
  background: white;
  box-shadow: calc(2 * var(--w)) 0 0 0 white;
  transition: transform 0.2s;
  will-change: transform;
}
.btn-12:before {
  top: -100%;
  left: 0;
}
.btn-12:after {
  top: 100%;
  left: var(--w);
}
.btn-12:hover:before {
  transform: translateY(100%);
}
.btn-12:hover:after {
  transform: translateY(-100%);
}

    `}</style>
  </>
)