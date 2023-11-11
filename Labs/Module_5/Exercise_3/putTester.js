fetch('http://localhost:3000/friends/1', {
    method: "PUT",
    headers: {
        'Content-Type': 'application/json', // Set the content type header
    },
    body: JSON.stringify({
        name: 'nick',
        gender: 'male'
    })
})
.then(response => response.json())
.then(
    data => {
        console.log(data)
    }
)
.catch(error => {
    console.error('Error:', error);
});