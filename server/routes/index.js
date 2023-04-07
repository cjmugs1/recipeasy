//entry way to server-side routes
const { donationRoute } = require('./routes');

app.use('/api', donationRoute);

