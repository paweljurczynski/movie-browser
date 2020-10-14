import styled from "styled-components";

const Loading = styled.span`
  color: var(--electron-blue);
  font-size: 2rem;
`;

const Error = styled.span`
  color: var(--danger);
  font-size: 2rem;
`;

export const Status = {
  Loading,
  Error,
};
