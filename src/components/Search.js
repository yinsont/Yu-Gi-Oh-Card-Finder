import {React} from "react";

function Search({search, onSearch}) {

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input onChange = {(e) => onSearch(e.target.value)} value = {search} placeholder='Card Name' className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
