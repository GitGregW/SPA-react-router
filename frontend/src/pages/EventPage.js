import EventList from '../components/EventsList';

export function EventPage(){

    const events = [
        {
            id: 'e1',
            image: 'foo.png',
            title: 'Event 1',
            date: '15-Feb-2024',
            description: 'My First Event'
        },
        {
            id: 'e2',
            image: 'foo.png',
            title: 'Event 2',
            date: '14-Feb-2024',
            description: 'My Second Event'
        },
        {
            id: 'e3',
            image: 'foo.png',
            title: 'Event 3',
            date: '24-Jan-2024',
            description: 'My Third Event'
        },
        {
            id: 'e4',
            image: 'foo.png',
            title: 'Event 4',
            date: '31-Nov-2023',
            description: 'My Fourth Event'
        }
    ];
    return (
        <div>
            <h1>Welcome to the Event List page.</h1>
            { <EventList events={events} /> }
        </div>
    );
}