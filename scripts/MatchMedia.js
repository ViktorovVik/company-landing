import pxToPrem from "./utils/pxToPrem.js";

const MatchMedia = {
  mobile: window.matchMedia(`(width <= ${pxToPrem(767.98)}rem)`)
}

export default MatchMedia