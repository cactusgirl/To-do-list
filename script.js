function checkItem(value) {
  const item = document.getElementById(value);
  var label = document.getElementById(value + "text");
  if (item.checked == true) {
    label.style.textDecoration="line-through";
  } else if (item.checked == false) {
    label.style.textDecoration="none";
  }
  setTimeout(checkItem, 1, value);
}