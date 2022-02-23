import { TopHeader } from '@erxes/ui/src/styles/main';
import Sidebar from '@erxes/ui/src/layout/components/Sidebar';
import { SidebarList as List } from '@erxes/ui/src/layout/styles';
import React from 'react';
import { Link } from 'react-router-dom';
import { BoardItem } from '@erxes/ui-settings/src/boards/styles';
import { ICalendar } from '../../types';

type Props = {
  accountId?: string;
  calendars: ICalendar[];
};

class Calendars extends React.Component<Props, {}> {
  renderItems = () => {
    const { calendars, accountId } = this.props;

    return calendars.map(calendar => (
      <BoardItem key={calendar._id} isActive={calendar.accountId === accountId}>
        <Link to={`?accountId=${calendar.accountId}`}>{calendar.name}</Link>
      </BoardItem>
    ));
  };

  render() {
    return (
      <Sidebar
        wide={true}
        header={<TopHeader>Calendars</TopHeader>}
        full={true}
      >
        <List>{this.renderItems()}</List>
      </Sidebar>
    );
  }
}

export default Calendars;