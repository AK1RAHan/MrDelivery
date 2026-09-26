import express, { type Request, type Response } from 'express';
import Database from 'better-sqlite3';
import path from 'path';

const app = express();
app.use(express.json());

app.use(express.static('public'));

app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});