export default () => (
  <>
    <button class="btn-57">Button</button>

    <style jsx>{`
      .btn-57 {
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
      .btn-57 {
  display: block;
  width: 100%;
  height: 80px;
  margin: 1rem auto;
  max-width: 250px;
  border-radius: 999px;

  color: black;

  position: relative;

  font-weight: 900;
  text-transform: uppercase;
  border: 3px solid currentColor;
}

.btn-57:before {
  content: "";
  z-index: -1;
  position: absolute;
  inset: 0;

  background: white;
  border-radius: 999px;

  transform: translate(10px, 10px);
  transition: transform 0.2s;
}

.btn-57:hover:before {
  transform: translate(0);
}

    `}</style>
  </>
)