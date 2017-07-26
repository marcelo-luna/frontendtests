var trs = document.getElementsByTagName("tr");

percorreArray(trs, function(tr){
    tr.addEventListener("mouseover", function(){
    this.setAttribute("bgcolor","grey");
  })
  tr.addEventListener("mouseleave", function(){
  this.setAttribute("bgcolor","white");
  })
});
