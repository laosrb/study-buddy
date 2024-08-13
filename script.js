document.addEventListener('DOMContentLoaded', function() {
    const calendarEl = document.getElementById('calendar');
    const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        events: [
            // Sample events
            { title: 'Assignment 1', start: '2024-08-15' },
            { title: 'Study Session', start: '2024-08-20' }
        ]
    });
    calendar.render();
});

// Example notification
if (Notification.permission === "granted") {
    new Notification("Don't forget to study!");
} else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(permission => {
        if (permission === "granted") {
            new Notification("Don't forget to study!");
        }
    });
}