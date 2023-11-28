import React from 'react';

interface TimelineEvent {
    year: number;
    title: string;
    description: string;
}

interface TimelineProps {
    events: TimelineEvent[];
}

const Timeline: React.FC<TimelineProps> = ({ events }) => {
    return (
        <div className="timeline-section">
            <h2>キャリア</h2>
            <div className="timeline">
                {events.map((event, index) => (
                    <div key={index} className="timeline-event">
                        <div className="timeline-year">{event.year}</div>
                        <div className="timeline-content">
                            <h3>{event.title}</h3>
                            <p>{event.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Timeline;
