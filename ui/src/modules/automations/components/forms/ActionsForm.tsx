import { __ } from 'modules/common/utils';
import React from 'react';
import jquery from 'jquery';
import { FlexRow } from 'modules/settings/styles';
import { IAction, ITrigger } from '../../types';
import { ModalFooter } from 'modules/common/styles/main';
import Button from 'modules/common/components/Button';

const actions: IAction[] = JSON.parse(localStorage.getItem('actions') || '[]');
const triggers: ITrigger[] = JSON.parse(
  localStorage.getItem('triggers') || '[]'
);

type Props = {
  closeModal: () => void;
};

type State = {
  activeTrigger: string;
};

class ActionsForm extends React.Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      activeTrigger: ''
    };
  }

  onSave = () => {
    for (const action of actions) {
      action.style = jquery(`#action-${action.id}`).attr('style');
    }

    localStorage.setItem('actions', JSON.stringify(actions));

    for (const trigger of triggers) {
      trigger.style = jquery(`#trigger-${trigger.id}`).attr('style');
    }

    localStorage.setItem('triggers', JSON.stringify(triggers));
  };

  render() {
    return (
      <>
        <FlexRow>hi</FlexRow>
        <ModalFooter>
          <Button
            btnStyle="simple"
            type="button"
            onClick={this.props.closeModal}
            icon="times-circle"
          >
            {__('Cancel')}
          </Button>

          <Button btnStyle="success" icon="checked-1" onClick={this.onSave}>
            Save
          </Button>
        </ModalFooter>
      </>
    );
  }
}

export default ActionsForm;
