const Quote = (props) => {
  if (!props.quotesinfo) {
    // Return null or a placeholder if quotesinfo is not available
    return null;
  }
  const { quote, author } = props.quotesinfo;
  return (
    <div>
      <h1>{author}</h1>
      <p>{quote}</p>
    </div>
  );
};

export default Quote;
