export default () => (
  <>
    <button class="btn-89">
  <svg viewBox="0 0 45.917 45.917">
    <path
      d="M33.523,28.334c-0.717,1.155-1.498,2.358-2.344,3.608c7.121,1.065,10.766,3.347,10.766,4.481
			c0,1.511-6.459,5.054-18.986,5.054c-12.528,0-18.988-3.543-18.988-5.054c0-1.135,3.645-3.416,10.768-4.481
			c-0.847-1.25-1.628-2.453-2.345-3.608C5.365,29.661,0,32.385,0,36.424c0,5.925,11.551,9.024,22.959,9.024s22.958-3.1,22.958-9.024
			C45.917,32.385,40.553,29.661,33.523,28.334z"
    ></path>
    <path
      d="M22.96,36.047c1.032,0,2.003-0.491,2.613-1.325c3.905-5.33,10.813-15.508,10.813-20.827
			c0-7.416-6.012-13.427-13.427-13.427c-7.417,0-13.427,6.011-13.427,13.427c0,5.318,6.906,15.497,10.812,20.827
			C20.957,35.556,21.928,36.047,22.96,36.047z M17.374,13.63c0-3.084,2.5-5.584,5.585-5.584c3.084,0,5.584,2.5,5.584,5.584
			s-2.5,5.584-5.584,5.584C19.874,19.215,17.374,16.715,17.374,13.63z"
    ></path>
  </svg>
</button>

    <style jsx>{`
      .btn-89 {
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
      .btn-89 {
  display: block;
  height: 90px;
  aspect-ratio: 1;

  margin: 1rem auto;

  border-radius: 50%;

  position: relative;
  overflow: hidden;

  text-transform: uppercase;
  outline: 2px solid currentColor;
}

.btn-89:hover {
  animation: pulse 0.6s;
  box-shadow: 0 0 0 2em transparent;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 white;
  }
}

.btn-89 svg {
  display: block;

  position: absolute;
  inset: 0;
  padding: 15px;
}
.btn-89:before {
  content: "";
  z-index: -1;
  position: absolute;
  inset: 2px;
  background: white;
  border-radius: 50%;
}
.btn-89:hover:before,
.btn-89:hover svg {
  animation: move 0.5s;
}
@keyframes move {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(100%);
  }
  51% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
}

    `}</style>
  </>
)