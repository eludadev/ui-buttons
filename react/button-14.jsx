export default () => (
  <>
    <button class="btn-14">Button</button>

    <style jsx>{`
      .btn-14 {
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
      .btn-14 {
  display: block;
  width: 100%;
  height: 80px;
  margin: 1rem auto;
  max-width: 250px;
  border-radius: 999px;

  position: relative;
  overflow: hidden;

  background: white;
  font-weight: 900;
  color: black;

  text-transform: uppercase;

  transition: transform 0.2s, box-shadow 0.2s;
}

.btn-14:hover {
  box-shadow: 0 20px 100px 1px rgba(255, 255, 255, 0.4);
  transform: translateY(-4px);
}

    `}</style>
  </>
)