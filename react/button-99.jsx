export default () => (
  <>
    <button class="btn-99">Button</button>

    <style jsx>{`
      .btn-99 {
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
      .btn-99 {
  --margin: 20%;

  position: relative;

  font-weight: 900;
  text-transform: uppercase;

  clip-path: polygon(
    calc(-1 * var(--margin)) 0,
    calc(100% + var(--margin)) 0,
    calc(100% + var(--margin)) 100%,
    calc(-1 * var(--margin)) 100%
  );

  transition: 0.2s;
}

.btn-99:hover {
  transform: scale(1.1);
}

.btn-99:before {
  content: "";
  width: calc(100% + 2 * var(--margin));
  height: 2px;

  transform: translate(-50%, -50%);
  position: absolute;
  top: 50%;
  left: -100%;

  background: white;
  transition: 0.2s;
}
.btn-99:hover:before {
  transform: translate(calc(100% - 2 * var(--margin)), -50%);
}

    `}</style>
  </>
)