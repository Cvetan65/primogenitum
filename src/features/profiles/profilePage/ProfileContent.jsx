import React from 'react';
import { Tab } from 'semantic-ui-react';
import AboutTab from './AboutTab';
import PhotosTab from './PhotosTab';
import EventsTab from './EventsTab';

export default function ProfileContent({profile, isCurrentUser}) {
    const panes = [
        {menuItem: 'За', render: () => <AboutTab profile={profile} isCurrentUser={isCurrentUser} />},
        {menuItem: 'Фотографии', render: () => <PhotosTab profile={profile} isCurrentUser={isCurrentUser} />},
        {menuItem: 'Понуди', render: () => <EventsTab profile={profile} />},
        {menuItem: 'Следачи', render: () => <Tab.Pane>Followers</Tab.Pane>},
        {menuItem: 'Следи', render: () => <Tab.Pane>Following</Tab.Pane>},
    ]

    return (
        <Tab 
            menu={{fluid: true, vertical: true}}
            menuPosition='right'
            panes={panes}
        />
    )
}