import express from 'express';
import cors from 'cors';
import { addToWaitlist, getWaitlist } from './db';

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

// 대기자 명단 등록 API
app.post('/api/waitlist', async (req, res) => {
  try {
    const { email, plan, feedback } = req.body;
    await addToWaitlist(email, plan, feedback);
    res.status(201).json({ 
      success: true, 
      message: '대기자 명단 등록이 완료되었습니다.' 
    });
  } catch (error: any) {
    if (error.message === '이미 등록된 이메일입니다.') {
      res.status(409).json({ 
        success: false, 
        message: error.message 
      });
    } else {
      console.error('Server error:', error);
      res.status(500).json({ 
        success: false, 
        message: '서버 오류가 발생했습니다.' 
      });
    }
  }
});

// 대기자 명단 조회 API
app.get('/api/waitlist', async (req, res) => {
  try {
    const entries = await getWaitlist();
    res.json(entries);
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ 
      success: false, 
      message: '서버 오류가 발생했습니다.' 
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 