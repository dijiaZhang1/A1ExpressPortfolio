console.log('This goes to client side.');


if(getTitle == "Contacts List"){
    let deleteButtons = document.querySelectorAll('.btn-danger');
        
    for(button of deleteButtons)
    {
        button.addEventListener('click', (event)=>{
            if(!confirm("Are you sure?")) 
            {
                event.preventDefault(); //not complete the request
            }
        });
    }
}
