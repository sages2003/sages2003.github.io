$("#edit_profile").submit(function(e) {
    e.preventDefault();
    
    var namechange = document.getElementById("newnameinput").value;
    var photochange = document.getElementById("newphotoinput").value;
    var biochange = document.getElementById("newbioinput").value;
    var save = document.getElementById("savebutton").value;

    document.getElementById("og-name-text").innerHTML = document.getElementById("newnameinput").value;
    document.getElementById("og-profile-pic").src = document.getElementById("newphotoinput").value;
    document.getElementById("og-bio").innerHTML = document.getElementById("newbioinput").value;

    newnameinput.value="";
    newphotoinput.value="";
    newbioinput.value="";

});