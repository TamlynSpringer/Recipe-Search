const app = require('./api');
require('dotenv').config();

const port = process.env.PORT || 5050
app.listen(port, () => console.log(`Server listening on port ${port}`));
