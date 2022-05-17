export default () => (
  <>
    <button class="btn-64">Button</button>

    <style jsx>{`
      .btn-64 {
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
      .btn-64 {
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

.btn-64:hover {
  animation: heartBeat 0.8s;
}

@keyframes heartBeat {
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }
  28% {
    transform: scale(1);
  }
  42% {
    transform: scale(1.3);
  }
  70% {
    transform: scale(1);
  }
}

    `}</style>
  </>
)