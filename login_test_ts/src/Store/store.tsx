import {createContext} from 'react';
import {IValue} from "../Types";

const Store = createContext<IValue>({
    logged:false,
    onLogin:()=>{},
    onLogout:()=>{}
});

const {Consumer: LoginConsumer}=Store;
export {LoginConsumer};

export default Store;