// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - <some-id> => EventDetailPage
//    - new => NewEventPage
//    - <some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {HomePage} from './pages/HomePage.js';
import {EventPage} from './pages/EventPage.js';
import {EventDetailPage} from './pages/EventDetailPage.js';
import {NewEventPage} from './pages/NewEventPage.js';
import {EditEventPage} from './pages/EditEventPage.js';
import { RootLayout } from './pages/RootLayout.js';
import { RootEventLayout } from './pages/RootEventLayout.js';

const router = createBrowserRouter([{
  path: '/',
  element: <RootLayout />,
  children: [
    { path: '/', element: <HomePage /> },
    {
      path: '/events',
      element: <RootEventLayout />,
      children: [
        { path: '/events', element: <EventPage />} ,
        { path: ':eventId', element: <EventDetailPage /> },
        { path: 'new', element: <NewEventPage /> },
        { path: ':eventId/edit', element: <EditEventPage /> }
      ]},
  ]
}]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
