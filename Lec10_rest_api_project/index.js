const express = require('express')
const users = require('./fake_data.json')
const app = express();


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
           ${user.map(user => {
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


app.listen(4000, () => console.log("server started"));