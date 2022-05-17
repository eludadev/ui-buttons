export default () => (
  <>
    <button class="btn-50">Button</button>

    <style jsx>{`
      .btn-50 {
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
      .btn-50 {
  display: block;
  width: 100%;
  height: 80px;
  margin: 1rem auto;
  max-width: 250px;

  position: relative;

  font-weight: 900;
  text-transform: uppercase;

  transform-style: preserve-3d;
  perspective: 800px;

  border-radius: 10px;
  background: #fff;
  color: black;

  transform: rotateX(32deg);

  box-shadow: 0 1px 2px 2px #eee;

  transition: transform 0.2s;
}

.btn-50:hover {
  transform: rotateX(38deg) translateY(7px);
}

.btn-50:before {
  pointer-events: none;
  content: "";
  z-index: -1;
  width: 200%;
  height: 400%;
  position: absolute;
  top: 0;
  left: -50%;
  transform: translate(0, 50px);
  background: rgba(255, 255, 255, 0.3);
  filter: blur(80px);
}

    `}</style>
  </>
)