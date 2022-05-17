export default () => (
  <>
    <button class="btn-38">
  <span class="new">New</span>
  <div class="old">
    <span>Old</span>
    <span aria-hidden>Old</span>
  </div>
</button>

    <style jsx>{`
      .btn-38 {
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
      .btn-38 {
  display: block;
  width: 100%;
  height: 80px;
  margin: 1rem auto;
  max-width: 250px;

  position: relative;
  overflow: hidden;

  text-transform: uppercase;
  border: 1px solid currentColor;
}

.btn-38 .new,
.btn-38 .old span {
  font-weight: 900;
  mix-blend-mode: difference;
  transition: transform 0.2s;
}

.btn-38 .new {
  display: block;
  transform: scale(0);
}

.btn-38:hover .new {
  transform: scale(1);
}

.btn-38 .old {
  position: absolute;
  inset: 0;
}
.btn-38 .old span {
  display: block;
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  background: white;
  color: black;
}
.btn-38 .old span:nth-child(1) {
  clip-path: polygon(0 0, 50% 0, 50% 100%, 0 100%);
}
.btn-38 .old span:nth-child(2) {
  clip-path: polygon(50% 0, 100% 0, 100% 100%, 50% 100%);
}

.btn-38:hover .old span:nth-child(1) {
  transform: translateX(-100%);
}
.btn-38:hover .old span:nth-child(2) {
  transform: translateX(100%);
}

    `}</style>
  </>
)