import gql from 'graphql-tag';
import EmptyState from '@erxes/ui/src/components/EmptyState';
import Spinner from '@erxes/ui/src/components/Spinner';
import React from 'react';
import TripDetail from '../../components/trips/Detail';
import queries from '../../graphql/queries';
import { useQuery, useMutation } from 'react-apollo';

type Props = {
  id: string;
};

const TripDetailContainer = (props: Props) => {
  const { id } = props;

  const { data, loading } = useQuery(gql(queries.tripDetail), {
    variables: {
      _id: id
    },
    fetchPolicy: 'network-only'
  });

  if (loading) {
    return <Spinner objective={true} />;
  }

  if (!data.tripDetail) {
    return <EmptyState text="Trip not found" image="/images/actions/17.svg" />;
  }

  // const taggerRefetchQueries = [
  //   {
  //     query: gql(queries.customerDetail),
  //     variables: { _id: id }
  //   }
  // ];

  const updatedProps = {
    ...props,
    trip: data.tripDetail || ({} as any)
    // taggerRefetchQueries
  };

  return <TripDetail {...updatedProps} />;
};

export default TripDetailContainer;