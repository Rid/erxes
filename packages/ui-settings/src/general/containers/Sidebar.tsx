import gql from 'graphql-tag';
import * as compose from 'lodash.flowright';
import Spinner from '@erxes/ui/src/components/Spinner';
import { withProps } from '@erxes/ui/src/utils';
import SideBar from '../components/Sidebar';
import React from 'react';
import { graphql } from 'react-apollo';
import { queries } from '../graphql';

type FinalProps = {
  checkPremiumServiceQuery: any;
};

class SidebarContainer extends React.Component<FinalProps> {
  render() {
    const { checkPremiumServiceQuery } = this.props;

    if (checkPremiumServiceQuery.loading) {
      return <Spinner objective={true} />;
    }

    return (
      <SideBar
        isThemeEnabled={checkPremiumServiceQuery.configsCheckPremiumService}
      />
    );
  }
}

export default withProps<{}>(
  compose(
    graphql<{}>(gql(queries.configsCheckPremiumService), {
      name: 'checkPremiumServiceQuery',
      options: {
        variables: { type: 'isThemeServiceEnabled' }
      }
    })
  )(SidebarContainer)
);