import express, { Request, Response } from 'express';
import compression from 'compression';
import morgan from 'morgan';
import { createRequestHandler } from '@remix-run/express';
import * as build from '@remix-run/dev/server-build';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import sqlite3 from 'sqlite3';
import { Database, open } from 'sqlite';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

interface WaitlistEntry {
  id: number;
  email: string;
  plan: string;
  created_at: string;
}

// Database setup
const dbPromise = open({
  filename: join(__dirname, 'cur.db'),
  driver: sqlite3.Database
});

// Initialize database
async function initDb() {
  const db = await dbPromise;
  await db.exec(`
    CREATE TABLE IF NOT EXISTS waitlist_entries (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT UNIQUE,
      plan TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);
}

initDb().catch(console.error);

app.use(compression());
app.use(morgan('tiny'));
app.use(express.json());

// API Routes
app.post('/api/waitlist', async (req: Request, res: Response) => {
  try {
    const { email, plan } = req.body as { email: string; plan: string };
    const db = await dbPromise;
    
    // Check if email already exists
    const existing = await db.get<WaitlistEntry>('SELECT * FROM waitlist_entries WHERE email = ?', email);
    if (existing) {
      return res.status(400).json({ error: 'Email already registered' });
    }

    // Create new entry
    const result = await db.run(
      'INSERT INTO waitlist_entries (email, plan) VALUES (?, ?)',
      [email, plan]
    );

    const entry = await db.get<WaitlistEntry>('SELECT * FROM waitlist_entries WHERE id = ?', result.lastID);
    res.json(entry);
  } catch (error) {
    console.error('Error creating waitlist entry:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/waitlist', async (req: Request, res: Response) => {
  try {
    const db = await dbPromise;
    const entries = await db.all<WaitlistEntry[]>('SELECT * FROM waitlist_entries');
    res.json(entries);
  } catch (error) {
    console.error('Error fetching waitlist entries:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Remix handler
app.all(
  '*',
  createRequestHandler({
    build,
    mode: process.env.NODE_ENV,
  })
);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
}); 