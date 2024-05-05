const express = require('express')
const users = require('./fake_data.json')
const app = express();
const fs = require('fs')

//middleware
app.use(express.urlencoded({extended:false}));

app.use((req,res,next) =>{
    console.log("hello from middleware");
    req.name='mandy';
    // return res.json({msg:'hello from middleware'})
    next();

})

app.use((req,res,next) =>{
    console.log("hello from middleware 2 ",req.name);
    // return res.json({msg:'hello from middleware'})
    next();

})

app.get('/api/users', (req, res) => {
    return res.json(users);
})

app.get('/users', (req, res) => {
    const html = `
        <table border="2">

            <tr>
                <th>ID</th>
                <th>first_name</th>
                <th>last_name</th>
                <th>email</th>
                <th>gender</th>
            </tr>
           ${users.map(user => {
                    return (`<tr>
                    <td>${user.id}</td>
                    <td>${user.first_name}</td>
                    <td>${user.last_name}</td>
                    <td>${user.email}</td>
                    <td>${user.gender}</td>
                </tr>`)

            })
           }
        </table>
    `;

    res.send(html);
})

app.get('/api/users/:id',(req,res) => {
    const id = Number(req.params.id); // type casting
    const user = users.find((user) => user.id === id);
    return res.json(user);
})

app.delete('/api/users/:id',(req,res) => {
    const id = Number(req.params.id); // type casting
    const updated_user = users.filter((user) => user.id !== id);
    fs.writeFile('./fake_data.json',JSON.stringify(updated_user),(err)=>{
        if(err)
                res.status(500).json({ error: 'Error writing to file' });
        else
        return res.json({ message: 'User deleted successfully', users: updated_user });
    })
    
})


app.post('/api/users',(req,res) =>{
    const body = req.body;
    // console.log(body);
    users.push({id:users.length+1,...body});
    fs.writeFile('./fake_data.json',JSON.stringify(users), (err,data) =>{
        return res.json({status:"success"});
    })
    // return res.json({status:'pending'})
});

app.listen(4000, () => console.log("server started"));


// uses of middleware
//      - execute any code
//      - make chages to req  and res
//      - end the req/res cycle
//      - call next middleware function in the stack
