import React from 'react';
import Card from '../../../components/card/card';
import './announcements.scss';
import Button from '../../../components/button/button';
import Textarea from '../../../components/textarea/textarea';

const Announcements = props => {
  return (
    <Card title="Live announcements" className="announcements">
      <p>
        This announcement will be visible for all the attendees in the event.
      </p>
      <Textarea rows={5} />
      <div className="publish">
        <Button>Publish</Button>
      </div>
    </Card>
  );
};
export default Announcements;
