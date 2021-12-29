import {
  DefaultButton,
  IconButton,
  ITextField,
  Label,
  List,
  PrimaryButton,
  TextField,
} from '@fluentui/react';
import { FC, useState } from 'react';
import { toast } from 'react-toastify';
import styled from 'styled-components/macro';
import { NameListItem } from './NameListItem';
import { useFocus, useNames, validateNewName } from './utils';

export const NameSuffle: FC = () => {
  const { names, shuffledNames, clearNames, addNewName, shuffleNames, editName } =
    useNames();
  const [newName, setNewName] = useState('');
  const [inputRef, setInputFocus] = useFocus<ITextField>();

  return (
    <>
    <Host>
      <NewNameWrapper>
        <TextField
          componentRef={inputRef}
          label="Add name"
          value={newName}
          onChange={(_, v) => setNewName(v || '')}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              e.stopPropagation();

              addName();
            }
          }}
        />
        <IconButton iconProps={{ iconName: 'Add' }} onClick={addName} />
      </NewNameWrapper>

      {shuffledNames.length === 0 ? (
        <PrimaryButton
          text="Shuffle"
          onClick={shuffleNames}
          disabled={names.length === 0}
        />
      ) : (
        <ActionsHost>
          <PrimaryButton text="Re-Shuffle" onClick={shuffleNames} />
          <DefaultButton text="Clear" onClick={clearNames} />
        </ActionsHost>
      )}

      <NamesList>
        <div>
          {names.length > 0 && (
            <>
              <Label>Added names:</Label>
              <List
                items={names}
                onRenderCell={(item, index) => (
                  <NameListItem name={item} index={index} onEdit={editName} />
                )}
              />
            </>
          )}
        </div>
        <div>
          {shuffledNames.length > 0 && (
            <>
              <Label>Shuffled names:</Label>
              <List
                items={shuffledNames}
                onRenderCell={(item, _) => <NameListItem name={item} />}
              />
            </>
          )}
        </div>
      </NamesList>
    </Host>
    </>
  );

  function addName() {
    const validationMessage = validateNewName(newName);
    if (validationMessage) {
      toast(validationMessage, { position: 'top-center', type: 'warning' });
      return;
    }

    addNewName(newName);

    setNewName('');
    setInputFocus();
  }
};

const Host = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;

  & > * {
    width: 100%;
  }

  & > button {
    margin: 2px 0 4px 0;
  }
`;

const NewNameWrapper = styled.section`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-end;
  margin-bottom: 4px;

  & > div {
    width: calc(100% - 32px);
    margin-right: 4px;
  }

  & > button {
    width: 32px;
    height: 32px;
  }
`;

const NamesList = styled.section`
  display: flex;

  & > * {
    width: 50%;
  }

  [data-list-index] {
    border-top: 1px solid black;
    border-bottom: 1px solid transparent;
    height: 17px;
  }

  div.ms-List-page:first-child [data-list-index]:first-child {
    height: 18px;
    border: 0;
  }
`;

const ActionsHost = styled.div`
  display: flex;
  flex-wrap: nowrap;
  margin: 2px 0 4px 0;

  & > * {
    width: calc(50% - 4px);

    &:first-child {
      margin-right: 4px;
    }
  }
`;
