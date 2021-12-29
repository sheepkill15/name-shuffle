import { FC } from 'react';
import styled from 'styled-components/macro';

export const NameListItem: FC<{ name?: string; index?: number }> = ({
  name,
  index,
}) => {
  if (name == null) {
    return null;
  }

  return (
    <Host>
      {index == null ? (
        <>{name}</>
      ) : (
        <>
          {index < 9 && <> &nbsp; </>}
          {index + 1} &nbsp; {name}
        </>
      )}
    </Host>
  );
};

const Host = styled.div`
  &:hover {
    outline-style: solid;
    outline-color: red;
    outline-width: 1px;
  }
`;
