export{createPost, addPost, noPost, edit}
function createPost(dialog, save, cancel, title, date, summary, list,esave){
    dialog.show();
    esave.style.display="none";
    save.style.display="block";
    title.value = "";
    date.value = "";
    summary.value = "";
}

function addPost(dialog, save, cancel, title, date, summary, list, esave, titles, dates, summaries, add){
    const post = document.createElement("li");
    const text = document.createElement("div");
    const p = document.createElement("p");
    p.innerHTML = title.value+"-"+date.value+"-"+summary.value;
    const edit = document.createElement("button");
    const del = document.createElement("button");
    edit.innerHTML = "Edit";
    del.innerHTML = "Delete";
    text.appendChild(p);
    text.appendChild(edit);
    text.appendChild(del);
    post.appendChild(text);
    list.appendChild(post);
    dialog.close();
    //titles.push(title.value);
    //dates.push(dates.value);
    //summaries.push(summary.value);
    if(add == -1){
    edit.addEventListener("click", ()=>{editFunc(p,dialog, save, cancel, title, date, summary, list,esave,titles, dates, summaries, titles.length)});
    del.addEventListener("click", ()=>{delFunc(list, post,titles.length, titles, dates, summaries)});
    titles[titles.length] = title.value;
    dates[dates.length] = date.value;
    summaries[summaries.length] = summary.value;
    window.localStorage.setItem("titles", JSON.stringify(titles));
    window.localStorage.setItem("dates", JSON.stringify(dates));
    window.localStorage.setItem("summaries", JSON.stringify(summaries));
    }
    else{
        del.addEventListener("click", ()=>{delFunc(list, post,add, titles, dates, summaries)});
        edit.addEventListener("click", ()=>{editFunc(p,dialog, save, cancel, title, date, summary, list,esave,titles, dates, summaries, add)});
    }


    
}
function noPost(dialog, save, cancel){
    dialog.close();
}
function editFunc(p,dialog, save, cancel, title, date, summary, list,esave,titles, dates, summaries,index){
    dialog.show()
    esave.style.display="block";
    save.style.display="none";
    esave.addEventListener("click", function listener(){edit(p,dialog, save, cancel, title, date, summary, list,esave,titles, dates, summaries,index)},{once:true});

    
}

function edit(p,dialog, save, cancel, title, date, summary, list,esave,titles, dates, summaries, index){
    titles[index] = title.value;
    dates[index] = date.value;
    summaries[index] = summary.value;
    window.localStorage.setItem("titles", JSON.stringify(titles));
    window.localStorage.setItem("dates", JSON.stringify(dates));
    window.localStorage.setItem("summaries", JSON.stringify(summaries));
    p.innerHTML=title.value+"-"+date.value+"-"+summary.value;
    dialog.close();
}
function delFunc(list,post, index,titles, dates, summaries){
    titles.splice(index,1);
    dates.splice(index,1);
    summaries.splice(index,1);
    window.localStorage.setItem("titles", JSON.stringify(titles));
    window.localStorage.setItem("dates", JSON.stringify(dates));
    window.localStorage.setItem("summaries", JSON.stringify(summaries));
    list.removeChild(post);
}