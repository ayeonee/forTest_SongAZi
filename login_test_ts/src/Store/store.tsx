import {createContext} from 'react';

interface Props{
    logged : boolean;
    onLogin : Function;
    onLogout : Function;
}

const Store = createContext<Props>({
    logged:false,
    onLogin:()=>{},
    onLogout:()=>{}
});

const {Consumer: LoginConsumer}=Store;
export {LoginConsumer};

export default Store;