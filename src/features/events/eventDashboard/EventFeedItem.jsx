import React from 'react';
import { Feed } from 'semantic-ui-react';
import {formatDistance} from 'date-fns';
import {Link} from 'react-router-dom'

export default function EventFeedItem({ post }) {
  let summary;
  switch (post.code) {
    case 'joined-event':
      summary = (
        <>
          <Link to={`/profile/${post.userUid}`}>{post.displayName} </Link> се пријави за патување од<Link
           to={`/events/${post.eventId}`}> {post.title}</Link>
        </>
      );
      break;
    case 'left-event':
      summary = (
        <>
          <Link to={`/profile/${post.userUid}`}>{post.displayName} </Link> го откажа патувањето од{' '}
          <Link to={`/events/${post.eventId}`}> {post.title}</Link>
        </>
      );
      break;
    default:
      summary = 'Нешто се случи';
      break;
  }

  return (
      <Feed.Event>
          <Feed.Label image={post.photoURL} />
          <Feed.Content>
            <Feed.Date>{formatDistance(new Date(post.date), new Date())} ago </Feed.Date>
            <Feed.Summary>
                {summary}
            </Feed.Summary>
          </Feed.Content>
      </Feed.Event>
  )
}