# Cur - 회고 관리 플랫폼

Cur는 개인과 팀의 성장을 위한 회고 관리 플랫폼입니다.

## 프로젝트 구조

```
cur/
├── frontend/          # Remix 프론트엔드
└── backend/          # FastAPI 백엔드
```

## 기술 스택

### 프론트엔드
- Remix
- TypeScript
- TailwindCSS
- React Query

### 백엔드
- FastAPI
- PostgreSQL
- SQLAlchemy
- Pydantic

## 시작하기

### 프론트엔드 설정
```bash
cd frontend
npm install
npm run dev
```

### 백엔드 설정
```bash
cd backend
python -m venv venv
source venv/bin/activate  # Windows: .\venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload
```

## 가격 정책

### Early Bird (2024년 4월 30일까지)
- 개인: 월 9,900원
- 팀 (5인): 월 39,900원
- 팀 (10인): 월 69,900원

### 정상 가격
- 개인: 월 12,900원
- 팀 (5인): 월 49,900원
- 팀 (10인): 월 89,900원

## Waitlist 등록
현재 Waitlist 등록이 진행 중입니다. [여기](https://cur.vercel.app)에서 등록하실 수 있습니다. 