import FormControl from '@erxes/ui/src/components/form/Control';
import Form from '@erxes/ui/src/components/form/Form';
import FormGroup from '@erxes/ui/src/components/form/Group';
import ControlLabel from '@erxes/ui/src/components/form/Label';
import Spinner from '@erxes/ui/src/components/Spinner';
import { ModalFooter } from '@erxes/ui/src/styles/main';
import { IButtonMutateProps, IFormProps } from '@erxes/ui/src/types';
import * as React from 'react';
import Accounts from '../../containers/Accounts';
import SelectBrand from '../../containers/SelectBrand';

type Props = {
  renderButton: (props: IButtonMutateProps) => JSX.Element;
  onAccountSelect: (accountId?: string) => void;
  onRemoveAccount: (accountId: string) => void;
  closeModal: () => void;
  accountId: string;
  twitterAccountId: string;
};

class Twitter extends React.Component<Props, { loading: boolean }> {
  constructor(props: Props) {
    super(props);

    this.state = {
      loading: false
    };
  }

  generateDoc = (values: { name: string; brandId: string }) => {
    const { accountId, twitterAccountId } = this.props;

    return {
      ...values,
      kind: 'twitter-dm',
      accountId,
      data: { twitterAccountId }
    };
  };

  renderContent = (formProps: IFormProps) => {
    const { onRemoveAccount, onAccountSelect, renderButton } = this.props;
    const { values, isSubmitted } = formProps;

    return (
      <>
        {this.state.loading && <Spinner />}
        <FormGroup>
          <ControlLabel required={true}>Name</ControlLabel>
          <FormControl {...formProps} name='name' required={true} />
        </FormGroup>

        <SelectBrand isRequired={true} formProps={formProps} />

        <Accounts
          kind='twitter'
          addLink='twitter/login'
          onSelect={onAccountSelect}
          onRemove={onRemoveAccount}
          formProps={formProps}
        />

        <ModalFooter>
          {renderButton({
            name: 'integration',
            values: this.generateDoc(values),
            isSubmitted,
            callback: this.props.closeModal
          })}
        </ModalFooter>
      </>
    );
  };

  render() {
    return <Form renderContent={this.renderContent} />;
  }
}

export default Twitter;
