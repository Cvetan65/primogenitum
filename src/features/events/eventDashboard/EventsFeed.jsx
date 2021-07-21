import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Header, Segment, Feed } from 'semantic-ui-react';
import { getUserFeedRef, firebaseObjectToArray } from '../../../app/firestore/firebaseService';
import { listenToFeed } from '../../profiles/profileActions';
import EventFeedItem from './EventFeedItem';

export default function EventsFeed() {
const dispatch = useDispatch();
const {feed} = useSelector(state => state.profile);

useEffect(() => {
    getUserFeedRef().on('value', snapshot => {
        if(!snapshot.exists()) {
            return;
        }
        const feed = firebaseObjectToArray(snapshot.val()).reverse();
        dispatch(listenToFeed(feed))
    })
    return () => {
        getUserFeedRef().off()
    }
}, [dispatch])

    return (
        <>
        <Header attached color='teal' icon='newspaper' content='Новости' />
        <Segment attached='bottom' >
            <Feed>
               {feed.map(post => (
                   <EventFeedItem post={post} key={post.id} />
               ))}
            </Feed>
        </Segment>
        </>
    );
}
