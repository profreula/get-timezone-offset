window.function = function (now) {

  now = now.value ?? "";
  
  const date1 = new Date(now);
  return date1.getTimezoneOffset()/-60;
}
