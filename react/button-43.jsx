export default () => (
  <>
    <button class="btn-43">
  <span class="old">Old</span>
  <span class="new">New</span>
</button>

    <style jsx>{`
      .btn-43 {
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
      .btn-43 {
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

.btn-43 .new,
.btn-43 .old {
  font-weight: 900;
}

.btn-43 .new {
  content: "";
  z-index: -1;
  position: absolute;
  inset: 0;

  display: grid;
  place-items: center;

  background: white;
  color: black;

  opacity: 0;
  transform-origin: bottom left;
  transform: rotate(90deg) translateY(100%);
  transition: transform 0.2s, opacity 0.2s;
}
.btn-43:hover .new {
  opacity: 1;
  transform: rotate(0deg);
}
.btn-43 .old {
  transition: opacity 0.2s;
}
.btn-43:hover .old {
  opacity: 0;
}

    `}</style>
  </>
)