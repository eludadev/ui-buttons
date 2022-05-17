export default () => (
  <>
    <button class="btn-1">Button</button>

    <style jsx>{`
      .btn-1 {
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
      .btn-1 {
  display: block;
  width: 100%;
  height: 80px;
  margin: 1rem auto;
  max-width: 250px;
  border-radius: 999px;

  position: relative;
  font-weight: 900;
  overflow: hidden;
  text-transform: uppercase;
  border: 1px solid currentColor;
}

.btn-1:hover {
  color: #ddd;
}

    `}</style>
  </>
)