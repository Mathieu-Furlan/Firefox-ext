const liste = document.getElementById("SubLanguageID");
liste.selectedIndex = -1;
for(let elem of liste){
    if(elem.value === "eng"){
        elem.setAttribute("selected", "");
        break;
    }
}