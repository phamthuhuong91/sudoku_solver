var form = document.getElementById("form");
form.addEventListener("submit", logSubmit);


function logSubmit(event) {
    
    event.preventDefault() //prevents the form from autosubmitting

    document.getElementById("sample").innerHTML=document.getElementById("name").value;
}



