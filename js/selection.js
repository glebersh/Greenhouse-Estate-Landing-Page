function selectedOptionDisplay() {
  let options = document.querySelectorAll('.fh-select');
  let downInfo = document.querySelectorAll('.fh-select-result');

  for (let i = 0; i < options.length; i++) {
    options[i].onchange = function () {
      downInfo[i].innerHTML = this.value;
    }
  }
}
selectedOptionDisplay();