export default () => (
  <>
    <button class="btn-79"><span>Button</span></button>

    <style jsx>{`
      .btn-79 {
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
      .btn-79 {
  --height: 80px;

  display: block;
  height: var(--height);
  padding: 0 2rem;
  max-width: 250px;
  border-radius: 999px;

  position: relative;

  text-transform: uppercase;
}

.btn-79 span {
  font-weight: 900;
  mix-blend-mode: difference;
}

.btn-79:before {
  pointer-events: none;

  content: "";
  height: calc(var(--height) / 1.7);
  width: calc(var(--height) / 1.7);

  border-radius: 20px;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  background: white;
  transition: 0.2s;
}
.btn-79:hover:before {
  width: 100%;
  left: 0;
}

    `}</style>
  </>
)