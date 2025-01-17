import gql from 'graphql-tag';
import * as compose from 'lodash.flowright';
import { IUser } from 'modules/auth/types';
import { queries, subscriptions } from 'modules/inbox/graphql';
import { UnreadConversationsTotalCountQueryResponse } from 'modules/inbox/types';
import React from 'react';
import { graphql } from 'react-apollo';
import strip from 'strip';
import { sendDesktopNotification, withProps } from '../../common/utils';
import Navigation from '../components/Navigation';

type Props = {
  collapsed: boolean;
  currentUser: IUser;
  onCollapseNavigation: () => void;
};

type FinalProps = {
  unreadConversationsCountQuery: UnreadConversationsTotalCountQueryResponse;
} & Props;

class NavigationContainer extends React.Component<FinalProps> {
  componentWillMount() {
    const { unreadConversationsCountQuery, currentUser } = this.props;

    unreadConversationsCountQuery.subscribeToMore({
      // listen for all conversation changes
      document: gql(subscriptions.conversationClientMessageInserted),
      variables: { userId: currentUser._id },
      updateQuery: (prev, { subscriptionData: { data } }) => {
        const { conversationClientMessageInserted } = data;
        const { content } = conversationClientMessageInserted;

        this.props.unreadConversationsCountQuery.refetch();

        // no need to send notification for bot message
        sendDesktopNotification({
          title: 'You have a new message',
          content: strip(content || '')
        });
      }
    });
  }

  render() {
    const { unreadConversationsCountQuery } = this.props;
    const unreadConversationsCount =
      unreadConversationsCountQuery.conversationsTotalUnreadCount || 0;

    const props = {
      ...this.props,
      unreadConversationsCount
    };

    return <Navigation {...props} />;
  }
}

export default withProps<Props>(
  compose(
    graphql<{}, UnreadConversationsTotalCountQueryResponse>(
      gql(queries.unreadConversationsCount),
      {
        name: 'unreadConversationsCountQuery',
        options: () => ({
          fetchPolicy: 'network-only',
          notifyOnNetworkStatusChange: true
        })
      }
    )
  )(NavigationContainer)
);
