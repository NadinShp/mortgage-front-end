
function SearchBar({value, handleChange}){
    return(
        <input id="query" type="text" name="query" value={value} onChange={handleChange} placeholder="Enter bank name"/>
    );
};
export default SearchBar;