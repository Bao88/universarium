const app = require('./app');
// import { app } from "./app"

console.log(app)
let server = app.listen(process.env.SERVER_PORT, () => {
    console.info(`Listening to port ${process.env.SERVER_PORT}`);
});