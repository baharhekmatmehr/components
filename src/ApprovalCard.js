import React from "react" ;

const AbortController = props => {
    
    return(
<div className="ui card">
        <div className="content">{props.children}</div>
        <div className="extera content">
            <div className="ui two buttons">
                <div className="ui basic green button">Approve</div>
                <div className="ui basic red button">Reject</div>
            </div>
        </div>
</div>
    );
}
export default AbortController;