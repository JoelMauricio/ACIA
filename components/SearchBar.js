const SearchBar = ({ keyword, text }) => {
  const BarStyle = { width: "20rem", background: "#F0F0F0", border: "none", padding: "0.5rem" };
  return (
    <input
      style={BarStyle}
      key="search-bar"
      value={keyword}
      placeholder={text}
    //onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default SearchBar;