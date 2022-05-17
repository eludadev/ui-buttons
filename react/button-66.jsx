export default () => (
  <>
    <button class="btn-66">Button</button>

    <style jsx>{`
      .btn-66 {
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
      .btn-66 {
  --height: 40px;

  display: block;
  width: 100%;
  font-size: 2rem;
  line-height: var(--height);
  margin: 1rem auto;
  max-width: 250px;
  border-radius: 999px;

  position: relative;
  overflow: hidden;

  color: transparent;
  --progress: 0px;

  font-weight: 900;
  text-transform: uppercase;
  border: 2px solid white;

  text-shadow: 0 calc(-1 * var(--progress)) white,
    0 calc(var(--height) - var(--progress)) wheat;

  transition: 0.2s;
}

.btn-66:hover {
  --progress: var(--height);
  border-color: wheat;
}

    `}</style>
  </>
)