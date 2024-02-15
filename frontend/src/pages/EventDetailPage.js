import { useParams } from 'react-router-dom';

export function EventDetailPage(){
    const { eventId } = useParams();
    
    return (
        <div>
            <h1>Welcome to the Event Detail page.</h1>
            <p>Event ID: { eventId }</p>
        </div>
    );
}