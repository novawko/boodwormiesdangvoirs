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

  // Splice the silly little array
  let sliceAmount = charadex.page.index.designs.amount || 6;
  arr.splice(sliceAmount, arr.length);

  // Reverse the thing
  let designs = arr.reverse();

  });



  /* Load Page
  ===================================================================== */
  charadex.tools.loadPage('.softload', 500);

});
