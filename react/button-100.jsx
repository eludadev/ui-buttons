export default () => (
  <>
    <button class="btn-100">Button</button>

    <style jsx>{`
      .btn-100 {
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
      .btn-100 {
  --thickness: 4px;
  --margin: 5px;

  display: block;
  margin: 1rem auto;

  position: relative;

  font-weight: 900;
  text-transform: uppercase;
}

.btn-100:before {
  pointer-events: none;
  content: "";

  width: 100%;
  height: var(--thickness);

  position: absolute;
  bottom: calc(-1 * var(--thickness));
  left: 0;

  background: white;
  animation: uncover 0.5s forwards;
}
.btn-100:hover:before {
  animation: cover 0.5s forwards;
}
@keyframes cover {
  0% {
    bottom: calc(-1 * var(--margin));
    height: var(--thickness);
  }
  50% {
    bottom: calc(-1 * var(--margin));
    height: 100%;
  }
  100% {
    bottom: 100%;
    height: var(--thickness);
  }
}

@keyframes uncover {
  100% {
    bottom: calc(-1 * var(--margin));
    height: var(--thickness);
  }
  50% {
    bottom: calc(-1 * var(--margin));
    height: 100%;
  }
  0% {
    bottom: 100%;
    height: var(--thickness);
  }
}

    `}</style>
  </>
)