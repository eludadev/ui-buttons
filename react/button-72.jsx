export default () => (
  <>
    <button class="btn-72">Click me</button>

    <style jsx>{`
      .btn-72 {
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
      .btn-72 {
  display: block;
  width: 100%;
  height: 80px;
  margin: 1rem auto;
  max-width: 250px;
  border-radius: 999px;

  position: relative;
  overflow: hidden;

  color: #0ea5e9;
  background: #fff;

  font-weight: 900;
  text-transform: uppercase;

  box-shadow: 5px 5px 10px #cee3f2, -5px -5px 10px #faffff;

  transition: 0.2s;
}

.btn-72:active {
  box-shadow: inset 5px 5px 10px #cee3f2, inset -5px -5px 10px #faffff;
}

    `}</style>
  </>
)