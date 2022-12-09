import React from "react";
import { withTheme } from "styled-components";

import Select from "react-select";

const defaultOptions = [
  { value: "", label: "Select End Point" },
  {
    value: "{lat: 13.0306, lng: 77.5649}",
    label: "M S Ramaiah Institute of Technology",
  },
  { value: "{lat: 13.0328, lng: 77.5697}", label: "Milano's" },
  { value: "{lat: 12.973826, lng: 77.590591}", label: "Cubbon Park" },
];

const getCustomStyles = (theme) => {
  return {
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? theme.colors.secondary : theme.colors.dark,
      backgroundColor: theme.colors.white,
    }),
    control: (provided, state) => {
      return {
        ...provided,
        border:
          state.menuIsOpen || state.isFocused
            ? `1px solid ${theme.colors.secondary} !important`
            : `1px solid ${theme.colors.border} !important`,
        borderRadius: 10,
        padding: "1rem 1rem",
        outline: "none",
        boxShadow: "none",
      };
    },
  };
};

const SelectStyled = ({
  theme,
  name = "item",
  options = defaultOptions,
  ...rest
}) => {
  return (
    <Select
      styles={getCustomStyles(theme)}
      defaultValue={options[0]}
      name={name}
      options={options}
      {...rest}
    />
  );
};

export default withTheme(SelectStyled);
