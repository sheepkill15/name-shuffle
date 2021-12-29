import {
  Dialog,
  DialogFooter,
  PrimaryButton,
  DefaultButton,
  DialogType,
  TextField,
} from '@fluentui/react';
import { FC, useState } from 'react';
import { toast } from 'react-toastify';
import { validateNewName } from './utils';

export const EditNameDialog: FC<{
  name?: string;
  hideDialog?: boolean;
  onDismiss?: () => void;
  onEdit: (newName: string) => void;
}> = ({ name, hideDialog, onDismiss, onEdit }) => {
  const [newName, setNewName] = useState('');

  return (
    <Dialog
      hidden={hideDialog}
      onDismiss={onDismiss}
      dialogContentProps={{
        type: DialogType.normal,
        title: 'Edit Name',
        subText: `Currently editing: ${name}`,
      }}
      modalProps={{ styles: { main: { maxWidth: 450 } }, isBlocking: true }}
    >
      <TextField label='New Name:' value={newName} onChange={(_, v) => setNewName(v || '')} />

      <DialogFooter>
        <PrimaryButton onClick={editName} text="Edit" />
        <DefaultButton onClick={onDismiss} text="Cancel" />
      </DialogFooter>
    </Dialog>
  );

  function editName() {
    const validationMessage = validateNewName(newName);
    if (validationMessage) {
      toast(validationMessage, { position: 'top-center', type: 'warning' });
      return;
    }

    onEdit(newName);
  }
};
