import { ChangeEvent } from 'react';
import './search-box.styles.css';

// typically if you are writing more of functional style of coding then you do types 
// for object orienting style you use interfaces 

// type allows us to do something that is called a union 
type SearchBoxProps = {
  className: string;
  placeholder?: string;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox = ({ className, placeholder, onChangeHandler }: SearchBoxProps) => (
  <input
    className={`search-box ${className}`}
    type='search'
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

export default SearchBox;
