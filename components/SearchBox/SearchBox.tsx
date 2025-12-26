import css from "./SearchBox.module.css";

interface SearchBoxProps {
  readonly search: string,
  readonly onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

function SearchBox({search, onChange}: SearchBoxProps) {
    return (
    <input
      className={css.input}
      defaultValue={search}
      type="text"
      placeholder="Search notes"
      onChange={onChange}
    />
  );
}

export default SearchBox;
