export default () => (
  <>
    <button class="btn-41">Button</button>

    <style jsx>{`
      .btn-41 {
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
      .btn-41 {
  display: block;
  width: 100%;
  height: 80px;
  margin: 1rem auto;
  max-width: 250px;
  border-radius: 999px;

  position: relative;
  overflow: hidden;

  mix-blend-mode: difference;
  text-transform: uppercase;
  border: 2px solid white;

  font-weight: 900;
  color: black;
}

.btn-41:before {
  content: "";
  z-index: -1;
  position: absolute;
  inset: 0;

  background: white;

  border-radius: 999px;

  transition: transform 0.2s;
}
.btn-41:hover:before {
  transform: scale(0.7);
}

    `}</style>
  </>
)