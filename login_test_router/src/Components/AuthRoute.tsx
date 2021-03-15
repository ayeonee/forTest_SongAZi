import React from "react";
import {Route, Redirect} from "react-router-dom";

interface Props{
    path? : string | string[],
    render : Function,
    exact? : boolean,
    authenticated : boolean
}

export const AuthRoute : React.FC<Props> =({
    render : render,
    authenticated : authenticated,
    ...parentProps
})=>{
    return(
        <Route
        {...parentProps}
        render={(props)=>
        authenticated ?(
            render
        ) : (
            <Redirect 
                to={{pathname : "/", state : {from: props.location}}}
            />
        )}
        />
    )
}