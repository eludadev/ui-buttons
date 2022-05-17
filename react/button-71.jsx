export default () => (
  <>
    <button class="btn-71">Button</button>

    <style jsx>{`
      .btn-71 {
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
      .btn-71 {
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

.btn-71:before {
  --opacity: 0.2;

  content: "";
  z-index: -1;
  width: 100%;
  aspect-ratio: 1;

  border-radius: 50%;
  background: white;

  opacity: var(--opacity);
  transform: translate(-50%, -50%) scale(0);

  position: absolute;
  top: 50%;
  left: 50%;
}
.btn-71:hover:before {
  animation: enlarge 1s forwards;
}
@keyframes enlarge {
  to {
    transform: translate(-50%, -50%) scale(4);
    opacity: 0;
  }
}

    `}</style>
  </>
)