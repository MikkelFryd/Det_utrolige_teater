import Style from "./search.module.scss";
import { useState } from "react";
import axios from "axios";

export const Search = (props) => {
  const [keyword, setKeyword] = useState("");

  const getSearchData = async (e) => {
    e.preventDefault();
    let result = await axios.get(
      `https://api.mediehuset.net/detutroligeteater/events/search/${keyword}`
    );
    props.setSearchData(result.data.items);
  };

  function handleInput(e) {
    setKeyword(e.target.value);
  }

  return (
    <form onSubmit={(e) => getSearchData(e)} className={Style.searchcontainer}>
      <input
        id="keyword"
        onKeyDown={handleInput}
        type="text"
        placeholder="INDTAST SØGEORD"
      />
      <button type="submit" />
    </form>
  );
};
