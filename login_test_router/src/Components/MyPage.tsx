interface Props{
    user : any,
    logout : ()=>void
}

const Mypage : React.FC<Props> = ({user, logout}) =>{
    var userName;
    if(user.userName){
        userName=user.userName;
    }
    else{
        userName="에러";
    }
    
    return (
        <div>
            <p>{userName}님 환영합니다</p>
            <button onClick={logout}>로그아웃</button>
        </div>
    )
}

export default Mypage;