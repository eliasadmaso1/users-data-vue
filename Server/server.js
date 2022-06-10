const express = require('express');
const app = express();
const db = require('./models');
const PORT = 3000;
const cors = require('cors');

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());

const apiRoutes = require('./routes/apiRoutes');
app.use('/api',apiRoutes);

db.sequelize.sync().then(()=>{
    app.listen(PORT,()=>{
        console.log(`listen to port ${PORT}`);
    })
})