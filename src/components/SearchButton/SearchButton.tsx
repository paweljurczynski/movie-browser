import React from "react";
import styled from "styled-components";
import { SearchIcon } from "../../icons/SearchIcon";

const Button = styled.button`
  padding: 1rem 3rem;
  background: var(--electron-blue);
  color: var(--white);
  border: 0;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: opacity 0.3s;
  flex-shrink: 0;
  font-weight: 400;

  :hover {
    opacity: 0.9;
  }
`;

const Text = styled.span`
  margin-left: 1rem;
`;

export const SearchButton = () => (
  <Button>
    <SearchIcon />
    <Text>Search</Text>
  </Button>
);
