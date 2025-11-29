# 📚 Book Management API (Node.js + Express)

도서 정보를 조회, 추가, 삭제할 수 있는 간단한 **Node.js 기반 REST API**입니다.
GitHub 업로드 및 클라우드 배포(Render / Railway)에 최적화되어 있습니다.

---

## 🚀 Features
- 도서 전체 조회 (GET /books)
- 특정 도서 조회 (GET /books/:id)
- 도서 추가 (POST /books)
- 도서 삭제 (DELETE /books/:id)
- Express + CORS 기본 세팅
- ES Module 구조 (`type: "module"`)

---

## 📦 Installation
```bash
npm install
```

---

## ▶️ Run Server
```bash
npm start
```
서버는 다음 주소에서 실행됩니다:
```
http://localhost:3000
```

---

## 📘 API Endpoints

### 🔹 1) 모든 도서 조회
**GET /books**
```json
[
  { "id": 1, "title": "Harry Potter", "author": "J.K. Rowling" }
]
```

---

### 🔹 2) 특정 도서 조회
**GET /books/:id**
```json
{ "id": 1, "title": "Harry Potter", "author": "J.K. Rowling" }
```

---

### 🔹 3) 도서 추가
**POST /books**
```json
{
  "title": "New Book",
  "author": "Unknown"
}
```

Response:
```json
{
  "id": 1700000000000,
  "title": "New Book",
  "author": "Unknown"
}
```

---

### 🔹 4) 도서 삭제
**DELETE /books/:id**
```json
{ "success": true }
```

---

## 🌐 Deploy Guide (Render)

1. GitHub Repository 업로드
2. Render → New Web Service
3. Build Command:
```
npm install
```
4. Start Command:
```
node server.js
```
5. Deploy!

---

## 📄 Project Structure
```
book-api/
 ├─ package.json
 ├─ server.js
```

---

## 🙌 Author
Book API Project — for assignment & deployment
