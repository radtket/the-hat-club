import React from "react";
import clsx from "clsx";
import { useHistory } from "react-router-dom";
import { useLazyQuery } from "react-apollo";
import Downshift, { resetIdCounter } from "downshift";
import debounce from "lodash.debounce";
import { SEARCH_ITEMS_QUERY } from "../reslovers/Query";
import { DropDown, DropDownItem, SearchStyles } from "../styles/DropDown";

const SearchBar = () => {
  const { push } = useHistory();
  const [searchItems, { data, loading }] = useLazyQuery(SEARCH_ITEMS_QUERY);

  const onChange = debounce(async ({ target }) => {
    await searchItems({ variables: { searchTerm: target.value } });
  }, 350);

  resetIdCounter();
  return (
    <SearchStyles>
      <Downshift
        itemToString={item => (item === null ? "" : item.title)}
        onChange={item => {
          push(`/item/${item.id}`);
        }}
      >
        {({
          getInputProps,
          getItemProps,
          isOpen,
          inputValue,
          highlightedIndex,
        }) => {
          return (
            <div>
              <input
                {...getInputProps({
                  type: "search",
                  placeholder: "Search For An Item",
                  id: "search",
                  className: clsx(loading && "loading"),
                  onChange: e => {
                    e.persist();
                    onChange(e);
                  },
                })}
              />

              {isOpen && data && (
                <DropDown>
                  {data.items.map((item, index) => (
                    <DropDownItem
                      {...getItemProps({ item })}
                      key={item.id}
                      highlighted={index === highlightedIndex}
                    >
                      <img alt={item.title} src={item.image} width="50" />
                      {item.title}
                    </DropDownItem>
                  ))}
                  {!data.items.length && !loading && (
                    <DropDownItem> Nothing Found {inputValue}</DropDownItem>
                  )}
                </DropDown>
              )}
            </div>
          );
        }}
      </Downshift>
    </SearchStyles>
  );
};

export default SearchBar;
