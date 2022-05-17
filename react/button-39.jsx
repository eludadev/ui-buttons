export default () => (
  <>
    <button class="btn-39">
  <span class="new">New</span>
  <span class="old">Old</span>
</button>

    <style jsx>{`
      .btn-39 {
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
      .btn-39 {
  display: block;
  width: 100%;
  height: 80px;
  margin: 1rem auto;
  max-width: 250px;

  position: relative;
  overflow: hidden;

  text-transform: uppercase;
  border: 1px solid currentColor;

  font-weight: 900;
  mix-blend-mode: difference;
}

.btn-39 .new {
  pointer-events: none;
  position: absolute;
  inset: 0;

  display: grid;
  place-content: center;

  background: white;
  color: black;

  transform: translateX(-100%);

  transition: transform 0.2s;
}
.btn-39:hover .new {
  transform: translateX(0);
}

    `}</style>
  </>
)