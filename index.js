function validateForm(){
    
    var firstName= document.getElementById("firstName").value;
    console.log(firstName);
    var lastName=document.getElementById("lastName").value;

    if( (firstName.length < 2) || (lastName.length<2)){
        alert("Not a valid name");
        return false;
    } 
    
        //Password validation
    var password=document.getElementById("password").value;
    var confirmPassword=document.getElementById("confirm password").value;
    if(password==""){
        alert("Password cannot be empty");
        return false;
    }
    else if(password.length<5 || password.length>20){
        alert("Password must be of length greater than 5 an less than 20");
        return false;
    }
    else if(password!=confirmPassword){
        alert("Password is incorrect");
        return false;
    }
    else{
         //Email validation
        var email=document.getElementById("email").value;
        var pattern= /^[A-Za-z._]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z]{2,6}$/;
        if(!pattern.test(email)){
            alert("Enter a valid email");
            return false;
    
        }else{
             //Phone number validation
            var phonenumber=document.getElementById("number").value;
            var numberPattern=/^[789]{1}[0-9]{9}$/;
            if(phonenumber==""){
                alert("Phone number cannot be empty");
                return false;
            }
            if(isNaN(phonenumber)){
                alert("Enter a valid phone number");
                return false;
            }
            if(phonenumber.length!=10){
                alert("Phone nnumber can only be of 10 digits");
                return false;
            }
            if(!numberPattern.test(phonenumber)){
                alert("Enter a valid phone number");
                return false;
        
            }else{
                console.log(`First Name is ${firstName} last name is ${lastName} my email is ${email} my password is ${password}`);
                alert("Congratilations !! Your data is saved");
                return false;

            }

        }

    }

    
    
   
   
   
   
   
    
   

}
