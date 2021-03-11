const users=[
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

export function signIn(userId : any){
    const user = users.find((user) => user.userId === userId)
    if(user===undefined) throw new Error()
    return user;
}