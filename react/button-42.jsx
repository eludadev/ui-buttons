export default () => (
  <>
    <button class="btn-42"><span>Button</span></button>

    <style jsx>{`
      .btn-42 {
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
      .btn-42 {
  display: block;
  width: 100%;
  height: 80px;
  margin: 1rem auto;
  max-width: 250px;
  border-radius: 999px;

  position: relative;

  font-weight: 900;
  text-transform: uppercase;
}

.btn-42 span {
  mix-blend-mode: difference;
}

.btn-42:before {
  --thickness: 4px;

  pointer-events: none;
  content: "";
  position: absolute;
  inset: calc(-1 * var(--thickness));

  border: var(--thickness) solid #fff;
  border-radius: 999px;

  transform: scale(2);
  opacity: 0;

  transition: transform 0.2s, opacity 0.2s;
}
.btn-42:after {
  pointer-events: none;
  content: "";
  z-index: -1;
  position: absolute;
  inset: 0;
  background: white;
  mix-blend-mode: difference;
  border-radius: 999px;

  transition: opacity 0.2s;
}

.btn-42:hover:after {
  opacity: 0;
}

.btn-42:hover:before {
  transform: scale(1);
  opacity: 1;
}

.btn-42:hover {
  background-color: transparent;
}

    `}</style>
  </>
)