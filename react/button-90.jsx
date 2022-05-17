export default () => (
  <>
    <button class="btn-90">
  <span>Button</span>
  <div class="blobs"></div>
</button>

<svg width="0">
  <defs>
    <filter id="goo">
      <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
      <feColorMatrix
        in="blur"
        type="matrix"
        values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
        result="goo"
      />
      <feBlend in="SourceGraphic" in2="goo" />
    </filter>
  </defs>
</svg>

    <style jsx>{`
      .btn-90 {
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
      .btn-90 {
  --size: 60px;

  display: block;
  height: 80px;
  margin: 1rem auto;
  border-radius: 999px;

  position: relative;

  text-transform: uppercase;
}

.btn-90 span {
  font-weight: 900;
  mix-blend-mode: difference;
}

.btn-90 .blobs {
  pointer-events: none;
  z-index: -1;
  filter: url("#goo");
  position: absolute;
  inset: 0;
}

.btn-90 .blobs:before,
.btn-90 .blobs:after {
  content: "";
  width: var(--size);
  height: var(--size);
  transform: translateY(-50%);
  position: absolute;
  top: 50%;
  background: white;
  border-radius: 50%;
  transition: transform 0.8s;
}
.btn-90 .blobs:before {
  left: calc(var(--size) * 1.3);
}
.btn-90 .blobs:after {
  right: calc(var(--size) * 1.3);
}
.btn-90:hover .blobs:before {
  transform: translateY(-50%) translateX(calc(-100% + var(--size) / 4));
}
.btn-90:hover .blobs:after {
  transform: translateY(-50%) translateX(calc(100% - var(--size) / 4));
}

    `}</style>
  </>
)