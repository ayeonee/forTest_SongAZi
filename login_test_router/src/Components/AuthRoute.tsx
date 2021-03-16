/* 인증이 필요한 컴포넌트를 위한 전용 라우터 */

import React from "react";
import {Route, Redirect} from "react-router-dom";

type RoutePageComponent =
  | React.ComponentType<any>;

interface Props {
    page: RoutePageComponent;
    authenticated :boolean;
    path : string;
    exact? : boolean
}


export const AuthRoute : React.FC<Props> = props =>{
    const Page : RoutePageComponent = props.page;
    const authenticated = props.authenticated;
    return(
        <Route
        {...props}
        render={(props)=>
        authenticated ?(
            <Page {...props}/>
        ) : (
            <Redirect 
                to={{pathname : "/", state : {from: props.location}}}
            />
        )}
        />
    )
}