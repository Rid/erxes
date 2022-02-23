import gql from 'graphql-tag';
import * as compose from 'lodash.flowright';
import Spinner from '@erxes/ui/src/components/Spinner';
import { IButtonMutateProps } from '@erxes/ui/src/types';
import { queries as kbQueries } from '@erxes/ui-knowledgebase/src/graphql';
import { TopicsQueryResponse } from '@erxes/ui-knowledgebase/src/types';
import { queries as integrationQueries } from '../../integrations/graphql';
import { IntegrationsQueryResponse } from '../../integrations/types';
import React from 'react';
import { graphql } from 'react-apollo';
import { withProps } from '@erxes/ui/src/utils';
import { ICommonFormProps } from '../../common/types';
import Form from '../components/Form';

type Props = {
  integrationsQuery: IntegrationsQueryResponse;
  kbTopicsQuery: TopicsQueryResponse;
  renderButton: (props: IButtonMutateProps) => JSX.Element;
};

const FormContainer = (props: Props & ICommonFormProps) => {
  const { integrationsQuery, kbTopicsQuery } = props;

  if (integrationsQuery.loading || kbTopicsQuery.loading) {
    return <Spinner objective={true} />;
  }

  const integrations = integrationsQuery.integrations;

  const kbTopics = kbTopicsQuery.knowledgeBaseTopics;

  const updatedProps = {
    ...props,
    messengers: integrations.filter(i => i.kind === 'messenger'),
    leads: integrations.filter(i => i.kind === 'lead'),
    kbTopics
  };

  return <Form {...updatedProps} />;
};

export default withProps<ICommonFormProps>(
  compose(
    graphql(gql(integrationQueries.integrations), {
      name: 'integrationsQuery'
    }),
    graphql(gql(kbQueries.knowledgeBaseTopics), { name: 'kbTopicsQuery' })
  )(FormContainer)
);