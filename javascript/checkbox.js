function checkedOnClick(el){

    // Select all checkboxes by class
    var checkboxesList = document.getElementsByClassName("checkoption");
    for (var i = 0; i < checkboxesList.length; i++) {
       checkboxesList.item(i).checked = false; // Uncheck all checkboxes
    }

    el.checked = true; // Checked clicked checkbox
 }