import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

// DB 연결 및 초기화
export async function initDB() {
  const db = await open({
    filename: './waitlist.db',
    driver: sqlite3.Database
  });

  // waitlist 테이블 생성
  await db.exec(`
    CREATE TABLE IF NOT EXISTS waitlist (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT UNIQUE NOT NULL,
      plan TEXT NOT NULL,
      feedback TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  return db;
}

// 대기자 명단 추가
export async function addToWaitlist(email: string, plan: string, feedback?: string) {
  const db = await initDB();
  try {
    await db.run(
      'INSERT INTO waitlist (email, plan, feedback) VALUES (?, ?, ?)',
      [email, plan, feedback]
    );
    return { success: true };
  } catch (error: any) {
    if (error.code === 'SQLITE_CONSTRAINT') {
      throw new Error('이미 등록된 이메일입니다.');
    }
    throw error;
  }
}

// 대기자 명단 조회
export async function getWaitlist() {
  const db = await initDB();
  return await db.all('SELECT * FROM waitlist ORDER BY created_at DESC');
} 