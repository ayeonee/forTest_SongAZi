import React from 'react';
import { LoginConsumer } from '../Store';

const Mypage = () => (
    <LoginConsumer>
        {(value) => {
            <p>{value.name}님 안녕하세요</p>;
        }}
    </LoginConsumer>
);

export default Mypage;
