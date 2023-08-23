/**
 * @param {string} cname 
 * @param {string} cvalue 
 * @param {number} exdays 
 */
function setCookie(cname, cvalue, exdays) {
  const d = new Date();

  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  
  let expires = "expires="+ d.toUTCString();
  
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
