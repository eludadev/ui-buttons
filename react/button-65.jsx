export default () => (
  <>
    <button class="btn-65">Button</button>

    <style jsx>{`
      .btn-65 {
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
      .btn-65 {
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

.btn-65:hover {
  animation: flash 0.8s;
}

@keyframes flash {
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
}

    `}</style>
  </>
)