export default () => (
  <>
    <button class="btn-11"><span>Button</span></button>

    <style jsx>{`
      .btn-11 {
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
      .btn-11 {
  display: block;
  width: 100%;
  height: 80px;
  max-width: 250px;
  margin: 1rem auto;
  border-radius: 999px;

  position: relative;
  overflow: hidden;

  text-transform: uppercase;
  border: 1px solid currentColor;
}

.btn-11 span {
  font-weight: 900;
  transition: color 0.2s;
}

.btn-11:active span {
  color: black;
}

.btn-11:before {
  content: "";
  width: 300%;
  height: 100%;
  z-index: -1;

  position: absolute;
  top: 0;
  left: -100%;
  background: repeating-linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.2),
    rgba(255, 255, 255, 0.2) 5px,
    transparent 5px,
    transparent 25px
  );
  animation: bg-scroll linear 3s infinite;
  opacity: 0;
  transition: opacity 0.3s, background-color 0.2s;
}
.btn-11:hover:before {
  opacity: 1;
}
.btn-11:active:before {
  background-color: white;
}
@keyframes bg-scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(33%);
  }
}

    `}</style>
  </>
)