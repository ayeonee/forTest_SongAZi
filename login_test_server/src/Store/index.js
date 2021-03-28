import React from 'react';
const Store = React.createContext({
    isAuth: false,
    _id: '',
    userId: '',
    name: '',
});

const { Consumer: LoginConsumer } = Store;
export { LoginConsumer };

export default Store;
