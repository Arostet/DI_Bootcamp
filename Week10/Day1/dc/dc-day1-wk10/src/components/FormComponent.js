const FormComponent = (props) => {
  if (
    !props.info ||
    !props.info.name ||
    !props.info.email ||
    !props.info.password ||
    !props.info.status
  ) {
    return null;
  }
  const { name, email, password, status } = props.info;

  return (
    <div>
      <h1>Name: {name}</h1>
      <h1>email: {email}</h1>
      <h1>password: {password} shhhhhhhhh!</h1>
      <h1>status: {status}</h1>
    </div>
  );
};

export default FormComponent;
