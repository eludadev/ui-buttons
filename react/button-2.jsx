export default () => (
  <>
    <button class="btn-2"><span>Button</span></button>

    <style jsx>{`
      .btn-2 {
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
      .btn-2 {
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

.btn-2 span {
  font-weight: 900;
  mix-blend-mode: difference;
}

.btn-2:before {
  content: "";
  z-index: -1;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: -100%;

  background: white;
  transition: transform 0.2s;
  will-change: transform;
}
.btn-2:hover:before {
  transform: translateX(100%);
}

    `}</style>
  </>
)