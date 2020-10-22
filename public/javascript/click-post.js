function postClickHandler(event) {


    console.log(document.location)

    const id = event.target.closest("article").id;
    if(document.location.href.includes("dashboard"))
    {
        document.location.replace("dashboard/edit/"+id);
    }
    else {  document.location.replace("/post/"+id); }
}

document.querySelector(".post-list").addEventListener("click",postClickHandler);