type User = {
    name ?: string,
    email ?:string,
}
// type User2= Partial<User>
// type User2 = Required<User>
const user:Readonly<User>={
    name :"abhi",
    email:"jaihind@gail.com"
}
user.name="narasj";