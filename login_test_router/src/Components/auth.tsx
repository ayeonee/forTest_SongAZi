interface User{
    userId : string,
    userName : string,
    provider : string
  }

const users : User[] =[
    {
        userId : "115066686759720403740",
        userName : "김아연",
        provider : "google"
    },
    {
        userId : "0000",
        userName : "test",
        provider : "google"
    }
]

export function signIn(userId : string) : User{
    console.log(userId);
    const user = users.find((user) => user.userId === userId)
    if(user===undefined) throw alert("회원정보 없음");
    return user;
}