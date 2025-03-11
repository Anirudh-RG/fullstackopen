const Content = ({props}) => {
  // console.log(props);
  try{
    return(
      <ul>
        {props && props.map((val,id) =>(
          <p key={id}>
            {val.part} {val.excercise}
          </p>
        ))}
      </ul>
    )
  }catch(err){
    console.log(err);
  }
}

export default Content