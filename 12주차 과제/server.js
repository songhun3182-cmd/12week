import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

let books=[
 {id:1,title:'Harry Potter',author:'J.K. Rowling'},
 {id:2,title:'The Hobbit',author:'J.R.R. Tolkien'}
];

app.get('/books',(req,res)=>res.json(books));
app.get('/books/:id',(req,res)=>{
 const b=books.find(x=>x.id==req.params.id);
 if(!b)return res.status(404).json({error:'Not found'});
 res.json(b);
});
app.post('/books',(req,res)=>{
 const {title,author}=req.body;
 if(!title||!author)return res.status(400).json({error:'Missing fields'});
 const bk={id:Date.now(),title,author};
 books.push(bk);
 res.json(bk);
});
app.delete('/books/:id',(req,res)=>{
 books=books.filter(x=>x.id!=req.params.id);
 res.json({success:true});
});

app.listen(3000,()=>console.log('Running on http://localhost:3000'));
