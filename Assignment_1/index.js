var facebookword = document.querySelector("#facebook-word");

facebookword.onclick = function() {
  var content = facebookword.textContent;
  if (content != "Yeqi Wei") {
	facebookword.textContent = "Yeqi Wei";
  } else {
  	facebookword.textContent = "Facebook";
  }
}
