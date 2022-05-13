import Button from '@erxes/ui/src/components/Button';
import { Form } from '@erxes/ui/src/components/form';
import FormControl from '@erxes/ui/src/components/form/Control';
import FormGroup from '@erxes/ui/src/components/form/Group';
import ControlLabel from '@erxes/ui/src/components/form/Label';
import SelectCustomers from '@erxes/ui/src/customers/containers/SelectCustomers';
import { ModalFooter } from '@erxes/ui/src/styles/main';
import { IButtonMutateProps, IFormProps } from '@erxes/ui/src/types';
import React, { useState } from 'react';
import { IParticipant } from '../../types';
import List from './List';

type Props = {
  deal?: any;
  participants: IParticipant[];
  closeModal?: () => void;
  renderButton: (props: IButtonMutateProps) => JSX.Element;
  modal?: boolean;
};

const ParticipantsForm = (props: Props) => {
  const { deal, closeModal, renderButton } = props;
  const object = deal || {};

  const renderFooter = (formProps: IFormProps) => {
    const { values, isSubmitted } = formProps;

    if (deal) {
      values.dealId = deal._id;
    }

    const updatedValues = {
      ...values
    };

    return (
      <ModalFooter>
        <Button
          btnStyle="simple"
          type="button"
          icon="times-circle"
          onClick={closeModal}
        >
          Cancel
        </Button>

        {renderButton({
          name: 'deal',
          values: updatedValues,
          isSubmitted,
          callback: closeModal,
          object
        })}
      </ModalFooter>
    );
  };

  const renderContent = (formProps: IFormProps) => {
    return (
      <>
        <FormGroup>
          <List participants={props.participants} />
        </FormGroup>

        {renderFooter({ ...formProps })}
      </>
    );
  };

  return <Form renderContent={renderContent} />;
};

export default ParticipantsForm;
