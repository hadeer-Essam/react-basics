function Test(props){
    const {list} = props;
    const newList=list.map((ele)=>{
      if(ele.age>0){
        return(
            <div key={ele.id}>
              <p>My name is : {ele.name}</p>
              <p>My age is : {ele.age}</p>
              <p>My gender is : {ele.gender}</p>
              <button className="btn btn-danger" onClick={()=>{props.removeUser(ele.id)}}>Delete</button>
              <hr/>
            </div>
           );
      }else{return(null);}
    });
    return(
        <div className="test-content container-fluid">
            {newList}
        </div>
    );
}

export default Test;