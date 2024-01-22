const Parent = (props) => {
  console.log(props);
  //   return <h1>Parent</h1>;
  if (props.auth === "admin") {
    return props.children;
  } else {
    return <h>not auth to see</h>;
  }
};

export default Parent;
