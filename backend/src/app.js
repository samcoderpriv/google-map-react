import express from 'express';
import cors from 'cors';
import Http from 'http';
import expressValidator from 'express-validator';
import bodyParser from 'body-parser';
import mapRouter from './routes/map.routes.js';

const app = express();
const server = Http.createServer(app);

const PORT = 9000;
const HOST = 'localhost';

app.use(expressValidator());

const allowOrigins = ['http://localhost:3000'];

app.use(cors({
	origin: (origin, callback) => {
		if (!origin) return callback(null, true);
		if (allowOrigins.indexOf(origin) === -1) {
			const msg = `Not allowed. ${origin}`
			return callback(new Error(msg), false);
		}
		return callback(null, true)
	}
}));

app.use(bodyParser.json());
app.use('/api', mapRouter)

server.listen(PORT, HOST, () => console.log(`API is live @ http://${HOST}:${PORT}\n`))
export default app;