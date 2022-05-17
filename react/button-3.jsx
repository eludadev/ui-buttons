export default () => (
  <>
    <button class="btn-3"><span>Button</span></button>

    <style jsx>{`
      .btn-3 {
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
      .btn-3 {
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

.btn-3 span {
  font-weight: 900;
  mix-blend-mode: difference;
}

.btn-3:before {
  content: "";
  z-index: -1;
  width: 100%;
  height: 100%;

  position: absolute;
  top: -100%;
  left: 0;

  background: white;
  transition: transform 0.2s;
  will-change: transform;
}
.btn-3:hover:before {
  transform: translateY(100%);
}

    `}</style>
  </>
)