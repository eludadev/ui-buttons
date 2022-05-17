export default () => (
  <>
    <button class="btn-63">Button</button>

    <style jsx>{`
      .btn-63 {
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
      .btn-63 {
  display: block;
  width: 100%;
  height: 80px;
  margin: 1rem auto;
  max-width: 250px;
  border-radius: 999px;

  position: relative;
  overflow: hidden;

  background: white;
  color: black;

  font-weight: 900;
  text-transform: uppercase;
  border: 1px solid currentColor;
}

/* From animate.css */

.btn-63:hover {
  animation: headShake 0.8s;
}

@keyframes headShake {
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }
  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }
  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }
  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }
  50% {
    transform: translateX(0);
  }
}

    `}</style>
  </>
)