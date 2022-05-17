export default () => (
  <>
    <button class="btn-22"><span>Button</span></button>

    <style jsx>{`
      .btn-22 {
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
      .btn-22 {
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

.btn-22 span {
  font-weight: 900;
  mix-blend-mode: difference;
}

.btn-22:before {
  content: "";
  width: 0;
  aspect-ratio: 1;

  transform: translateY(-50%);
  position: absolute;
  top: 50%;
  left: -100%;

  background: white;
  border-radius: 50%;
  transition: width 0.3s;
}
.btn-22:hover:before {
  width: 200%;
}

    `}</style>
  </>
)