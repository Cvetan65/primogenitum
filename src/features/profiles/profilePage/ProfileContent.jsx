import React, { useState } from 'react';
import { Tab } from 'semantic-ui-react';
import AboutTab from './AboutTab';
import PhotosTab from './PhotosTab';
import EventsTab from './EventsTab';
import FollowingTab from './FollowingTab';

export default function ProfileContent({ profile, isCurrentUser }) {
  const [activeTab, setActiveTab] = useState(0);
  const panes = [
    {
      menuItem: 'За',
      render: () => (
        <AboutTab profile={profile} isCurrentUser={isCurrentUser} />
      ),
    },
    {
      menuItem: 'Фотографии',
      render: () => (
        <PhotosTab profile={profile} isCurrentUser={isCurrentUser} />
      ),
    },
    { menuItem: 'Понуди', render: () => <EventsTab profile={profile} /> },
    {
      menuItem: 'Следачи',
      render: () => <FollowingTab key={profile.id} profile={profile} activeTab={activeTab} />,
    },
    {
      menuItem: 'Следи',
      render: () => <FollowingTab key={profile.id} profile={profile} activeTab={activeTab} />,
    },
  ];

  return (
    <Tab
      menu={{ fluid: true, vertical: true }}
      menuPosition='right'
      panes={panes}
      onTabChange={(e, data) => setActiveTab(data.activeIndex)}
    />
  );
}
