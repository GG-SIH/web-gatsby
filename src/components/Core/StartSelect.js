import React from "react";
import { withTheme } from "styled-components";
import { rgba } from "polished";
import Select from "react-select";

const defaultOptions = [
  { value: "", label: "Select Starting Point" },
  { value: "{13.0283,77.5731}", label: "Truffles" },
  { value: "{13.0665,77.5980}", label: "Skyline Beverly Park Apartments" },
  { value: "{13.0147,77.5810}", label: "Mekhri Circle" },
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
        padding: "1.275rem 1rem",
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
