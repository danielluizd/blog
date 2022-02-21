var accordionItem = document.getElementsByClassName("accordionItem");
var accordionHD = document.getElementsByClassName("accordionItemTitle");

for (i = 0; i < accordionHD.length; i++) {
  accordionHD[i].addEventListener("click", toggleItem, false);
}

function toggleItem() {
  var itemClass = this.parentNode.className;
  for (i = 0; i < accordionItem.length; i++) {
    accordionItem[i].className = "accordionItem hidden";
  }
  if (itemClass == "accordionItem hidden") {
    this.parentNode.className = "accordionItem visible";
  }
}
