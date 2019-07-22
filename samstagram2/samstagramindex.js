$("#post").submit(function (e) {
    e.preventDefault();
    console.log("posted!!");

    var image_input = document.getElementById("urlimage_input");
    var image_post = image_input.value;
    var image_cap = document.getElementById("caption_input");
    var cap_text = image_cap.value;


    var post_input = document.createElement("div");
    post_input.classList.add("post_input");
    var cap_text_elem = document.createElement("p");
    cap_text_elem.innerHTML = caption_input.value;
    var image = document.createElement("img");
    image.src = image_post;
    console.log(image);
    var x = document.createElement("p");
    x.id = "a";
    x.innerHTML = "X";
    post_input.appendChild(x);
    post_input.appendChild(image);
    post_input.appendChild(cap_text_elem); ///the troublesome line///
    document.getElementById("container").appendChild(post_input);
    x.addEventListener("click", function (){
        var container_id = String(Math.random());
        post_input.id = container_id;
        document.getElementById(container_id).remove();
    });


    
});
