require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT || 3000; 

app.use(express.json()); 


app.get('/', (req, res) => {
    const dbName = process.env.DATABASE_NAME;
    res.send(`.env 테스트: ${dbName ? dbName : 'DATABASE_NAME 변수가 설정되지 않았습니다.'}`);
});

app.get('/health', (req, res) => {
    res.status(200).send({ status: 'OK', uptime: process.uptime() });
});

app.get('/api/posts', (req, res) => {
    const mockPosts = [
        { id: 1, title: "첫 번째 블로그 게시글", author: "관리자" },
        { id: 2, title: "배포 성공 후기", author: "관리자" }
    ];
    res.json(mockPosts);
});

app.listen(port, () => {
    console.log(`[ssblog-backend] 서버가 ${port}번 포트에서 실행 중입니다.`);
    console.log(`환경: ${process.env.NODE_ENV || 'development'}`);
});