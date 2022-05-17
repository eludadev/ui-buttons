export default () => (
  <>
    <button class="btn-32">Button</button>

    <style jsx>{`
      .btn-32 {
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
      .btn-32 {
  display: block;
  width: 100%;
  height: 80px;
  margin: 1rem auto;
  max-width: 250px;

  position: relative;

  color: black;
  font-weight: 900;
  background: white;
  text-transform: uppercase;
  outline: 1px solid white;

  border: 0px solid transparent;
  transition: border 0.2s;
}

.btn-32:hover {
  border: 12px solid rgb(30 41 59);
}

    `}</style>
  </>
)