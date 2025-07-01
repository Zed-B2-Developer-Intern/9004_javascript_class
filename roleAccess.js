var user = "Hod";

switch(user){
    case"principal":
    console.log("Grant/ cancel permission to All");
    break;
    case"Hod":
    console.log("issue  permission to All");
    break;
    case"staff":
    console.log("issue permission to students only");
    break;
    default:
    console.log("guest user");
    break;
}