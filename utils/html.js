/**
 * @param {HTMLSelectElement} select 
 */
function clearOptions(select) {
  let index = select.options.length;

  while(index > 1) {
    index--;
    select.remove(index);
  }  
}
