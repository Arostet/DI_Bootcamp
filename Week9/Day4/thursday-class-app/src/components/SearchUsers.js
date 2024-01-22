import { useState } from "react";

const SearchUsers = (props) => {
  const [serachText, setSearchText] = useState("");
  return (
    <div>
      <input onChange={(e) => props.search(e.target.value)} />
    </div>
  );
};

export default SearchUsers;
