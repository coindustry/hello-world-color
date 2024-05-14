const express = require('express');
const app = express();
const port = 3000;

function randomColor(text) {
    const colors = ['#FF5733', '#33FF57', '#5733FF', '#FFFF33', '#33FFFF', '#FF33FF', '#FFFFFF'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];
    return `<span style="color: ${randomColor};">${text}</span>`;
}

app.get('/', (req, res) => {
    res.send(randomColor('Hello World'));
});

// Start the server only if this is the main module
if (require.main === module) {
    app.listen(port, () => {
        console.log(`Server listening at http://localhost:${port}`);
    });
}

// Export the app instance for testing purposes
module.exports = app;
