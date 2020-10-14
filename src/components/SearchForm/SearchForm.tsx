import React from "react";
import styled from "styled-components";
import { SearchButton } from "../SearchButton/SearchButton";

const SearchField = styled.input`
  padding: 2rem;
  flex-grow: 1;
  border: 0;
  box-shadow: 0 0 1.5rem 0 rgba(0, 0, 0, 0.05);
  font-family: inherit;
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  column-gap: 1rem;
  font-size: 2rem;
`;

type Props = {
  onSubmit: (phrase: string) => void;
  className?: string;
};

export const SearchForm = ({ onSubmit, className }: Props) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const onFormSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    if (inputRef.current) {
        const phrase = inputRef.current.value;
        onSubmit(phrase);
    }
  };

  return (
    <Form onSubmit={onFormSubmit} className={className}>
      <SearchField
        type="text"
        placeholder="Search Movies..."
        name="search"
        ref={inputRef}
      />
      <SearchButton />
    </Form>
  );
};
