/* ==================================================================== */
/* Import Charadex
======================================================================= */
import { charadex } from '../charadex.js';


/* ==================================================================== */
/* Load
======================================================================= */
document.addEventListener("DOMContentLoaded", async () => {


  /* Designs
  ===================================================================== */
  let designs = await charadex.initialize.page(null, charadex.page.index.designs, (arr) => {
  // Force sliceAmount to 8
  let sliceAmount = 8;

  // Get the last 8 (or fewer if less than 8 exist)
  let recent = arr.slice(-sliceAmount);

  // Overwrite original array in-place
  arr.length = 0;
  arr.push(...recent);

  // Reverse the thing
  let designs = arr.reverse();

  });



  /* Load Page
  ===================================================================== */
  charadex.tools.loadPage('.softload', 500);

});
