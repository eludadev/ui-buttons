export default () => (
  <>
    <button class="btn-35"><span>Button</span></button>

    <style jsx>{`
      .btn-35 {
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
      .btn-35 {
  --height: 50px;

  display: block;
  width: 100%;
  height: var(--height);
  margin: 1rem auto;
  max-width: 250px;

  position: relative;
  overflow: hidden;

  text-transform: uppercase;
  border: 1px solid currentColor;
}

.btn-35 span {
  font-weight: 900;
  mix-blend-mode: difference;
}

.btn-35:before {
  content: "";
  z-index: -1;
  height: 100%;
  width: calc(100% + var(--height));

  position: absolute;
  top: 0;
  left: calc(-1 * var(--height));
  background: white;
  --middle: calc(var(--height) / 2);
  transform-origin: var(--middle) var(--middle);
  transform: rotate(-90deg);
  transition: transform 0.3s;
}
.btn-35:hover:before {
  transform: rotate(0deg);
}

    `}</style>
  </>
)