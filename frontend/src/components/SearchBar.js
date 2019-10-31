import React from "react";
import { useHistory } from "react-router-dom";
import { useLazyQuery } from "react-apollo";
import Downshift from "downshift";
import debounce from "lodash.debounce";

import {
  Box,
  List,
  ListItem,
  InputBase,
  makeStyles,
  ListItemAvatar,
  ListItemText,
  Avatar,
  useTheme,
} from "@material-ui/core";
import { fade } from "@material-ui/core/styles";
import { Search } from "@material-ui/icons";
import { SEARCH_ITEMS_QUERY } from "../reslovers/Query";

const useStyles = makeStyles(theme => ({
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  root: {
    color: "inherit",
  },
  input: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 200,
      "&:focus": {
        width: 260,
      },
    },
  },
}));

const SearchBar = () => {
  const { search, root, input } = useStyles();
  const history = useHistory();
  const { spacing } = useTheme();
  const [searchItems, { data, loading }] = useLazyQuery(SEARCH_ITEMS_QUERY);

  const onChange = debounce(async ({ target }) => {
    await searchItems({ variables: { searchTerm: target.value } });
  }, 350);

  return (
    <Downshift
      itemToString={item => (item === null ? "" : item.title)}
      onChange={item => {
        history.push(`/item/${item.id}`);
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
            <Box className={search} mb={3} position="relative">
              <Box
                alignItems="center"
                display="flex"
                height="100%"
                justifyContent="center"
                pointerEvents="none"
                position="absolute"
                width={spacing(7)}
              >
                <Search />
              </Box>
              <InputBase
                {...getInputProps({
                  type: "search",
                  placeholder: "Search For An Item",
                  id: "search",
                  classes: {
                    root,
                    input,
                  },
                  inputProps: { "aria-label": "search" },
                  disabled: loading,
                  onChange: e => {
                    e.persist();
                    onChange(e);
                  },
                })}
              />
            </Box>
            {isOpen && data && (
              <List>
                {data.items.map((item, index) => (
                  <ListItem
                    key={item.id}
                    button
                    divider
                    selected={index === highlightedIndex}
                    {...getItemProps({
                      item,
                      index,
                    })}
                  >
                    <ListItemAvatar>
                      <Avatar alt={item.title} src={item.image} />
                    </ListItemAvatar>
                    <ListItemText primary={item.title} />
                  </ListItem>
                ))}
                {!data.items.length && !loading && (
                  <ListItem> Nothing Found {inputValue}</ListItem>
                )}
              </List>
            )}
          </div>
        );
      }}
    </Downshift>
  );
};

export default SearchBar;
