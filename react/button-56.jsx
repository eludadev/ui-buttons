export default () => (
  <>
    <button class="btn-56">Button</button>

    <style jsx>{`
      .btn-56 {
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
      .btn-56 {
  display: block;
  width: 100%;
  height: 80px;
  margin: 1rem auto;
  max-width: 250px;
  border-radius: 999px;

  position: relative;
  overflow: hidden;

  font-weight: 900;
  text-transform: uppercase;
  border: 1px solid currentColor;
}

.btn-56:hover {
  animation: pulse 0.5s;
  box-shadow: 0 0 0 2em transparent;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 white;
  }
}

    `}</style>
  </>
)