var todoInsert = document.getElementById("todoInsert");

function addItems(){
    var inputVal = document.getElementById("inputVal");
    var inputtimeVal = document.getElementById("inputtimeVal");
    var liGet = document.createElement("li");
    var liVal = document.createTextNode(inputVal.value + " ");
    liGet.appendChild(liVal);
    var liVal = document.createTextNode(" " + " " + inputtimeVal.value);
    liGet.appendChild(liVal);
    liGet.setAttribute("class","liclas");
    inputVal.value = " ";
    inputtimeVal.value = " ";
    todoInsert.appendChild(liGet);
    
    

    var delBtn = document.createElement("Button");
    var delText = document.createTextNode("Delete");
    delBtn.appendChild(delText);
    liGet.appendChild(delBtn);
    delBtn.setAttribute("class","btnclas");
    delBtn.setAttribute("onclick","delLi(this)");
    var editBtn = document.createElement("Button");
    var editTxt = document.createTextNode("Edit");
    editBtn.setAttribute("onclick","editbtnAll(this)")
    editBtn.appendChild(editTxt);
    liGet.appendChild(editBtn);
    editBtn.setAttribute("class","btnclas");
}

function delLi(a){
    a.parentNode.remove();
}

function deleteAll(){
    todoInsert.innerHTML = " ";
}

function editbtnAll(b){
     var val = b.parentNode.firstChild.nodeValue
     var editVal = prompt("edit",val);
     b.parentNode.firstChild.nodeValue = editVal;
}




