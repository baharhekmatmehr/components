import React from 'react';
import ReactDom from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App= ()=>{
    return (
      <div className="ui container comments">
          <ApprovalCard>
                <CommentDetail 
                author="BAHAR"
                time="today at 4:45pm"
                content=" i wana go out"
                />
          </ApprovalCard>

       <ApprovalCard>
                <CommentDetail 
                author="SHABNAM"
                time="today at 10pm"
                content=" i wana go vacation"
                />
          </ApprovalCard>

        
        <ApprovalCard>
                <CommentDetail 
                author="ARSALAN"
                time="today at 7:00am"
                content=" i wana go to work"
                />
          </ApprovalCard>

        
          
      </div>

    );
};

ReactDom.render(<App /> , document.querySelector('#root'))