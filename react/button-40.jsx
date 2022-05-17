export default () => (
  <>
    <button class="btn-40">
  <span class="new">New</span>
  <span class="old">Old</span>
</button>

    <style jsx>{`
      .btn-40 {
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
      .btn-40 {
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

.btn-40 .old,
.btn-40 .new {
  transition: transform 0.2s;
}

.btn-40 .old {
  position: absolute;
  inset: 0;

  display: grid;
  place-content: center;
}

.btn-40:hover .old {
  transform: translateY(100%);
}
.btn-40 .new {
  pointer-events: none;
  position: absolute;
  inset: 0;
  display: grid;
  place-content: center;
  background: white;
  color: black;
  transform: translateX(-100%);
}
.btn-40:hover .new {
  transform: translateX(0);
}

    `}</style>
  </>
)