const express = require('express');
require('./db/mongoose');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // Parse incoming json to an object
app.use('/', require('./routers/routers'));

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});

