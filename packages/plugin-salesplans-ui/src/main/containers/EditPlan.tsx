import React from 'react';
import { useLocation } from 'react-router-dom';
import { useMutation } from 'react-apollo';
import { mutations } from '../graphql';
import { Alert } from '@erxes/ui/src/utils';
import gql from 'graphql-tag';
import queryString from 'query-string';
import EditPlan from '../components/EditPlan';

const EditPlanContainer = () => {
  const location = useLocation();
  const query = queryString.parse(location.search);
  const salesLogId = query.salesLogId ? query.salesLogId : '';

  const [updateMutation] = useMutation(gql(mutations.updateSalesLog));

  const update = (doc: any) => {
    doc._id = salesLogId;
    updateMutation({ variables: doc })
      .then(() => Alert.success('Successfully saved!'))
      .catch((error: any) => Alert.error(error.message));
  };

  return <EditPlan update={update} />;
};

export default EditPlanContainer;
