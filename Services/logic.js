const db=require('./db')

//Get all contacts
const getContacts =()=>{
    return db.Contact.find().then(
        (result)=>{ //all employee details
            if(result){
                return{
                    statusCode:200,
                    contacts:result  //object ayett set chyth
                }
            }
            else{
                return{
                    statusCode:404,
                    message:'No data found'  // object ayett set chyth
                }
            }

        }
    )
}


//View a contact
const viewContact =(id)=>{
    return db.Contact.findOne({id}).then(
        (result)=>{
            if(result){
                return{
                    statusCode:200,
                    contact:result
                }
            }
            else{
                return{
                    statusCode:404,
                    message:'data not found'
                }
            }
        }
    )
}


//To add contact
const addContact=(id,name,email,address,phone)=>{
    return db.Contact.findOne({id}).then((result)=>{  //Check if it exist
        if(result){
            return{
                statusCode:401,
                message:'Contact already exist'
            }
        }
        const contactData= new db.Contact({id,name,email,address,phone})  //if it doesnot already exist then save the data
        contactData.save()
        return{
            statusCode:200,
            message:'Contact details added'
        }

    })
}


//delete contact

const delContact =(id)=>{
    return db.Contact.deleteOne({id}).then(
        (result)=>{
            if(result){
                
                    return{
                    statusCode:200,
                    message:'Contact deleted' 
                }           
            }
            else{
                return{
                    statusCode:404,
                    message:'Data not found'
                }
            }
        }
    )
}



//Edit contact

const updateContact=(id,name,email,address,phone)=>{
    return db.Contact.findOne({id}).then((response)=>{   //Here on response will having the details of employee which is already exist
        if(response){
            // then update the employee details
            response.id=id;
            response.name=name;
            response.email=email;
            response.address=address;
            response.phone=phone;
            response.save() // to save the new data

            return{
                statusCode:200,
                message:'Contact details updated'
            }
        }
        else{
            return{
                statusCode:404,
                message:'No such Contact'
            }
        }
    })
}





module.exports={
    getContacts,
    viewContact,
    addContact,
    delContact,
    updateContact
}