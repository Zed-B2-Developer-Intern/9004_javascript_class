function getUserRole(name,role){
    switch(role){
        case "admin":
            return `${name} is admin with all access`;
            break;
        case "subadmin":
            return `${name} is subadmin with  access to create`;
            break;
        case "guest":
            return `${name} is guest only can view `;
            break;
        default:
            return`${name} enter valid user`;
            break;
    }
}

console.log(getUserRole("david","guest"));