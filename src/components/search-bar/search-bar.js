import styles from "./searchbar.module.css";
const SearchBar = (props) => {
  return (
    <input
      placeholder="Search Names, Emails, or Numbers"
      onChange={props.onChange}
    />
  );
};
export default SearchBar;
