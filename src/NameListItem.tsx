import { FC, useState } from 'react';
import styled, { css } from 'styled-components/macro';
import { EditNameDialog } from './EditNameDialog';

export const NameListItem: FC<{
  onEdit?: (newName: string, index?: number) => void;
  name?: string;
  index?: number;
}> = ({ name, index, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);

  if (name == null) {
    return null;
  }

  return (
    <>
      <Host
        showPointerOnHover={onEdit != null}
        onClick={onEdit != null ? () => setIsEditing(true) : () => null}
      >
        {index == null ? (
          <>{name}</>
        ) : (
          <>
            {index < 9 && <> &nbsp; </>}
            {index + 1} &nbsp; {name}
          </>
        )}
      </Host>
      {isEditing && (
        <EditNameDialog
          hideDialog={!isEditing}
          name={name}
          onDismiss={() => setIsEditing(false)}
          onEdit={(newName) => {
            setIsEditing(false);
            onEdit?.(newName, index);
          }}
        />
      )}
    </>
  );
};

const Host = styled.div<{ showPointerOnHover?: boolean }>`
  &:hover {
    outline-style: solid;
    outline-color: rgb(16, 110, 190);
    outline-width: 1px;
    ${(p) =>
      p.showPointerOnHover &&
      css`
        cursor: pointer;
      `}
  }
`;
