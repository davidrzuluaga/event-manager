import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import Mainpage from './views/Main/mainpage';
import information from './helpers/sample';

let page = { page: 0, index: 0 };

const AppComp = shallow(<App />);
const MainpageComp = shallow(
  <Mainpage page={page} information={information} />
);

it('renders Mainpage', () => {
  expect(AppComp.find('Mainpage').length).toBe(1);
});

it('renders Cards', () => {
  expect(MainpageComp.find('ActiveAttendees').length).toBe(1);
  expect(MainpageComp.find('Announcements').length).toBe(1);
  expect(MainpageComp.find('LiveActivities').length).toBe(1);
  expect(MainpageComp.find('Networking').length).toBe(1);
});
