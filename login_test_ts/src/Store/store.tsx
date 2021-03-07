import {createContext} from 'react';

interface IValue{
    logged : boolean,
    onLogin : Function,
    onLogout : Function
}

const Store = createContext<IValue>({
    logged:false,
    onLogin:()=>{},
    onLogout:()=> {},
});

export default Store;