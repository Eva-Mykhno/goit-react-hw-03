import s from "./SearchBox.module.css";

const SearchBox = ({ name, value, onSearch }) => {
  return (
    <div className={s.searchContainer}>
      <p className={s.title}> Find contacts by name</p>
      <input
        className={s.input}
        name="name"
        type="text"
        value={value}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
