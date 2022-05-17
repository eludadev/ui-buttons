export default () => (
  <>
    <button class="btn-46">Button</button>

    <style jsx>{`
      .btn-46 {
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
      .btn-46 {
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

  background: #fff;
  color: black;

  transform: rotateX(8deg);

  transition: transform 0.2s;
}

.btn-46:before {
  position: absolute;
  content: "";
  z-index: -1;
  top: 100%;
  left: 0;

  display: block;
  width: 100%;
  height: 20%;
  background: #eee;
  transform-origin: 0% 0%;
  transform: rotateX(-90deg);
}
.btn-46:hover {
  transform: rotateX(25deg);
}

    `}</style>
  </>
)