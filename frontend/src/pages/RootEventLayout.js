import { Outlet } from 'react-router-dom'
import EventsNavigation from '../components/EventsNavigation.js';

export function RootEventLayout(){
    return (
        <>
            <EventsNavigation />
            <Outlet />
        </>
    );
}