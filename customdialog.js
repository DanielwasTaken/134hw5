export{aFunc, cFunc, pFunc}

function aClose(ok){
    dialog.close()
    ok.removeEventListener("click", aClose);
}
function cClose(tf, output, ok, cancel){
    dialog.close();
    output.innerHTML = `Confirm result: ${tf}`;
    ok.removeEventListener("click", ()=>{cClose(true)});
    cancel.removeEventListener("click", ()=>{cClose(false)});

}
function pClose(response, output, ok, cancel,name){
    dialog.close();
    if(response == null||response==""){
        output.innerHTML = "User didn't enter anything";
    }
    else{
        var clean= DOMPurify.sanitize(response);
        output.innerHTML = `Prompt result: ${clean}`;
    }
    ok.removeEventListener("click", ()=>{pClose(name.value)});
    cancel.removeEventListener("click", ()=>{pClose(name.value)});
}

function aFunc(text,ok,cancel,name,dialog,output){
    text.innerHTML = "Alert pressed!";
    ok.style.display = "block";
    cancel.style.display = "none";
    name.style.display = "none";
    dialog.show();
    ok.addEventListener("click", ()=>{aClose(ok)});

}
function cFunc(text,ok,cancel,name,dialog,output){
    text.innerHTML = "Do you confirm this?";
    ok.style.display = "block";
    cancel.style.display = "block";
    name.style.display = "none";
    dialog.show();
    ok.addEventListener("click", ()=>{cClose(true, output, ok, cancel)});
    cancel.addEventListener("click", ()=>{cClose(false, output, ok, cancel)});
}
function pFunc(text,ok,cancel,name,dialog,output){
    text.innerHTML = "What is your name?";
    ok.style.display = "block";
    cancel.style.display = "block";
    name.style.display = "block";
    dialog.show();
    ok.addEventListener("click", ()=>{pClose(name.value, output, ok, cancel,name)});
    cancel.addEventListener("click", ()=>{pClose(null, output, ok, cancel,name)});
}