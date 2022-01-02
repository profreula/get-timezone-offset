window.function = function (arrayIP, keyIP) {

  if (arrayIP.value === undefined) return undefined;

  keyIP = keyIP.value ?? "";
  let tab = arrayIP.value;
  
  let countOP = 0;
  for(var i = 0; i < tab.length; ++i){
    if(tab[i] === keyIP)
        countOP++;
        }

  return countOP;
}