const express=require('express')

const cors=require('cors')

const logic=require('./Services/logic')

const phoneServer =express()


phoneServer.use(cors({
    origin:'http://localhost:5173'
}))

phoneServer.use(express.json())

phoneServer.listen(8000,()=>{
    console.log('phoneServer listening on the port 8000');
})

phoneServer.get('/',(req, res)=> {
    res.send('hello world')
})

phoneServer.get('/api/get-all-contacts',(req,res)=>{
    logic.getContacts().then((response)=>{
        res.status(response.statusCode).json(response)
    })
})

phoneServer.get('/api/view-contact/:id',(req,res)=>{
    logic.viewContact(req.params.id).then((response)=>{
        res.status(response.statusCode).json(response)
    })
})

phoneServer.post('/api/add-contact',(req,res)=>{
    logic.addContact(req.body.id,req.body.name,req.body.email,req.body.address,req.body.phone).then((response)=>{
        res.status(response.statusCode).json(response)
    })
})

phoneServer.delete('/api/delete-contact/:id',(req,res)=>{
    logic.delContact(req.params.id).then((response)=>{
        res.status(response.statusCode).json(response)
    })
})

phoneServer.post('/api/update-contact/:id',(req,res)=>{
    logic.updateContact(req.body.id,req.body.name,req.body.email,req.body.address,req.body.phone).then((response)=>{
        res.status(response.statusCode).json(response)
    })
})




