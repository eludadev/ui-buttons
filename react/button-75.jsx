export default () => (
  <>
    <button class="btn-75">Click me</button>

    <style jsx>{`
      .btn-75 {
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
      .btn-75 {
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

  background: #e0e5ec;
  color: #000;

  box-shadow: inset 2px 2px 2px 0px rgb(255 255 255 / 50%),
    7px 7px 20px 0px rgb(0 0 0 / 10%), 4px 4px 5px 0px rgb(0 0 0 / 10%);
}

.btn-75:active {
  transform: translateY(3px);
}

    `}</style>
  </>
)