export default () => (
  <>
    <button class="btn-51">Click me</button>

    <style jsx>{`
      .btn-51 {
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
      .btn-51 {
  display: block;
  width: 100%;
  height: 80px;
  margin: 1rem auto;
  max-width: 250px;

  position: relative;
  bottom: var(--progress);

  font-weight: 900;
  text-transform: uppercase;

  background: #fff;
  color: #000;

  perspective: 800px;

  transform-style: preserve-3d;
  transform: rotateX(55deg) rotateZ(25deg);
  transition: bottom 0.2s;

  --progress: 15px;
}

.btn-51:before,
.btn-51:after {
  content: "";
  z-index: -1;
  display: block;
  position: absolute;
  transform-origin: 0% 0%;
}
.btn-51:before {
  width: 100%;
  height: var(--progress);
  background: #eee;
  top: 100%;
  left: 0;
  transform: rotateX(-90deg);
  transition: height 0.2s;
}
.btn-51:after {
  width: var(--progress);
  height: 100%;
  background: #ccc;
  top: 0;
  left: 100%;

  transform: rotateY(90deg);
  transition: width 0.2s;
}

.btn-51:active {
  --progress: 0px;
}

    `}</style>
  </>
)