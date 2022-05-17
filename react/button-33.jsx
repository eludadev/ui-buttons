export default () => (
  <>
    <button class="btn-33" data-text="Button">
  <span class="marquee">Button</span>
</button>

    <style jsx>{`
      .btn-33 {
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
      .btn-33 {
  display: block;
  width: 100%;
  height: 80px;
  margin: 1rem auto;
  max-width: 250px;
  border-radius: 999px;

  position: relative;
  overflow: hidden;

  text-transform: uppercase;
  border: 1px solid currentColor;
}

.btn-33:before {
  content: attr(data-text);

  font-weight: 900;
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;

  transition: opacity 0.2s;
}

.btn-33:hover:before {
  opacity: 0;
}
.btn-33 .marquee {
  height: 100%;
  display: block;
  font-weight: 400;
  font-style: italic;
  position: relative;
  opacity: 0;
  animation: marquee-vertical 0.15s linear infinite;
  animation-play-state: paused;
}
.btn-33:hover .marquee {
  opacity: 1;
  animation-play-state: running;
}

@keyframes marquee-vertical {
  from {
    transform: translateY(-1rem);
  }
  to {
    transform: translateY(100%);
  }
}

    `}</style>
  </>
)