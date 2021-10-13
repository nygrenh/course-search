import { connectSearchBox } from "react-instantsearch-core";
import styles from "../styles/CustomSearchBox.module.css";

interface SearchBoxProps {
  isSearchStalled: boolean;
  refine: (query: string) => void;
  currentRefinement: string;
}

const SearchBox = ({ currentRefinement, isSearchStalled, refine }: SearchBoxProps) => (
  <form noValidate action="" role="search">
    <input
      className={styles.search}
      type="search"
      placeholder="Course name or teacher name"
      value={currentRefinement}
      onChange={event => refine(event.currentTarget.value)}
    />
    {isSearchStalled && <div>Searching...</div>}
  </form>
);

// 2. Connect the component using the connector
const CustomSearchBox = connectSearchBox(SearchBox);

export default CustomSearchBox;
