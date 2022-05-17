export default () => (
  <>
    <button class="btn-98">Button</button>

    <style jsx>{`
      .btn-98 {
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
      .btn-98 {
  --thickness: 4px;

  display: block;
  margin: 1rem auto;

  position: relative;

  font-weight: 900;
  text-transform: uppercase;

  clip-path: polygon(
    0 0,
    100% 0,
    100% calc(100% + var(--thickness)),
    0 calc(100% + var(--thickness))
  );
}

.btn-98:before {
  pointer-events: none;
  content: "";

  width: 100%;
  height: var(--thickness);

  position: absolute;
  bottom: calc(-1 * var(--thickness));
  left: 0;

  background: white;
}

.btn-98:hover:before {
  animation: slide 0.5s;
}
@keyframes slide {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(100%);
  }
  51% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}

    `}</style>
  </>
)