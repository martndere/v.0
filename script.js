document.addEventListener("DOMContentLoaded", function() {
    fetch('http://localhost:3000/events')
     .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        const eventsList = document.getElementById('events-list');


        data.forEach(event => {
            const eventDiv = document.createElement('div');
            eventDiv.classList.add('event');


            // Ensure that each property is accessed properly and check for undefined values
            const date = event.date;
            const genre = event.genre || 'Unknown Genre';
            const connoisseur = event.connoisseur || 'Unknown Director';
            const image = event.image || 'placeholder.jpg'; // Provide a default image path if not available
            const youtubeVideoID = event.youtubeVideoID;
       


            eventDiv.innerHTML = `
                <h2>${date}</h2>
                <img src="${image}" alt="${date}" class="event-image">
                <p>Genre: ${genre}</p>
                <p>Connoisseur: ${connoisseur}</p>
                <button onclick="chooseEvent('${date}')">Choose</button>
               
            `;


            eventsList.appendChild(eventDiv);
        });
        // Adding the YouTube link dynamically
        const youtubeLink = document.createElement('a');
        youtubeLink.href = 'https://youtu.be/p5QOQprcXmA';
        youtubeLink.textContent = 'Check out this YouTube video';
        document.body.appendChild(youtubeLink);
    })
    })
    .event.appendChild(youtubeLink)
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });



