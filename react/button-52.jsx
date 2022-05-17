export default () => (
  <>
    <button class="btn-52">
  <div class="original">Button</div>
  <div class="letters">
    <span>B</span>
    <span>U</span>
    <span>T</span>
    <span>T</span>
    <span>O</span>
    <span>N</span>
  </div>
</button>

    <style jsx>{`
      .btn-52 {
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
      .btn-52 {
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
  border: 1px solid currentColor;
}

.btn-52 .original {
  position: absolute;
  inset: 0;

  display: grid;
  place-content: center;

  background: #fff;
  color: #000;

  transition: transform 0.2s;
}

.btn-52:hover .original {
  transform: translateY(100%);
}
.btn-52 .letters {
  display: inline-flex;
}
.btn-52 span {
  opacity: 0;
  transform: translateY(-15px);
  transition: transform 0.2s, opacity 0.2s;
}
.btn-52:hover span {
  opacity: 1;
  transform: translateY(0px);
}
.btn-52:hover span:nth-child(2) {
  transition-delay: 0.1s;
}
.btn-52:hover span:nth-child(3) {
  transition-delay: 0.2s;
}
.btn-52:hover span:nth-child(4) {
  transition-delay: 0.3s;
}
.btn-52:hover span:nth-child(5) {
  transition-delay: 0.4s;
}
.btn-52:hover span:nth-child(6) {
  transition-delay: 0.5s;
}

    `}</style>
  </>
)