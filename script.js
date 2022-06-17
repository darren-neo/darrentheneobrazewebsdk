
//ALL THE VARIABLES YOU WILL NEED
var userId, firstName, lastName, email, selectedGender, birthday, country, homeCity, phoneNumber, attributeName, attributeValue, eventName, eventProperties, productId, currencyCode, price, quantity;


//THIS CODE SNIPPET (WHICH IS PRESENT WITH EVERY FUNCTION) ALLOWS FOR CLICKING 'ENTER' TO SUBMIT, NO NEED TO TOUCH IT
var userr = document.getElementById("change_user_text");
userr.addEventListener("keyup", function(event){
  if (event.keyCode === 13){
    document.getElementById("change_user_button").click();
  }
});

//Change User
document.getElementById("change_user_button").addEventListener("click", function(){
  alert("Submission Attempted");
  //TIP: THE ABOVE LINE DISPLAYS AN ALERT ON THE WEBPAGE WHEN YOU HIT THE ENTER KEY OR CLICK SUBMIT FOR User ID
  //Feel free to add to other methods if you think it's helpful

  userId = document.getElementById("change_user_text").value;
  //TIP: THE ABOVE LINE IS ASSIGNING THE VALUE IN THE USER ID TEXT BOX TO THE LOCAL VARIABLE userId
  //This is done for every input field
  // TODO ADD CODE HERE.  Pass the userID variable into the change user method
  dataLayer.push({'brazeChangeUser' : userId});
  console.log("Change user attempted");
  //Displays logged-in user for current session
  document.getElementById("loggedIn").value = userId;
  document.getElementById("loggedIn").style = "color:green;fontWeight:900";
  //Display logout button after logged in
  document.getElementById("logout_button").style = "display:inline";
});

//Logout button
//Reloads the page to clear all fields
document.getElementById("logout_button").addEventListener("click", function(){
  alert("Session ended");
  appboy.wipeData();
  location.reload();
})

var first = document.getElementById("fn_text");
first.addEventListener("keyup", function(event){
  if (event.keyCode === 13){
    document.getElementById("fn_button").click();
  }
});

//First Name
document.getElementById("fn_button").addEventListener("click", function(){
  firstName = document.getElementById("fn_text").value;

  // TODO ADD CODE HERE. Pass the firstName variable into the first name set method
appboy.getUser().setFirstName(firstName);
});

var last = document.getElementById("ln_text");
last.addEventListener("keyup", function(event){
  if (event.keyCode === 13){
    document.getElementById("ln_button").click();
  }
});

//Last Name
document.getElementById("ln_button").addEventListener("click", function(){
  lastName = document.getElementById("ln_text").value;

  // TODO ADD CODE HERE. Pass the lastName variable into the last name set method
appboy.getUser().setLastName(lastName);
});

var mail = document.getElementById("email_text");
mail.addEventListener("keyup", function(event){
  if (event.keyCode === 13){
    document.getElementById("email_button").click();
  }
});

//Email Address
document.getElementById("email_button").addEventListener("click", function(){
  email = document.getElementById("email_text").value;

  // TODO ADD CODE HERE. Pass the email variable into the email set method
appboy.getUser().setEmail(email);
});

//Gender
document.getElementById("gender_button").addEventListener("click", function(){
  var x = document.getElementById("gender");
  selectedGender = x.options[x.selectedIndex].value;

  // TODO ADD CODE HERE. Pass the selectedGender variable into the gender method
appboy.getUser().setGender(selectedGender);
});

//Birthday
document.getElementById("birthday_button").addEventListener("click", function(){
  birthday = document.getElementById("birthday").value
  var month = document.getElementById("birthday").value.substring(5,7);
  var day = document.getElementById("birthday").value.substring(8,10);
  var year = document.getElementById("birthday").value.substring(0,4);

  // TODO ADD CODE HERE (FOLLOW THE DOCUMENTATION CLOSELY!)
appboy.getUser().setDateOfBirth(year, month, day);
});

var countryy = document.getElementById("country_text");
countryy.addEventListener("keyup", function(event){
  if (event.keyCode === 13){
    document.getElementById("country_button").click();
  }
});

//Country
document.getElementById("country_button").addEventListener("click", function(){
  country = document.getElementById("country_text").value;

  // TODO ADD CODE HERE
appboy.getUser().setCountry(country);
});

var city = document.getElementById("home_city_text");
city.addEventListener("keyup", function(event){
  if (event.keyCode === 13){
    document.getElementById("home_city_button").click();
  }
});

//Home City
document.getElementById("home_city_button").addEventListener("click", function(){
  homeCity = document.getElementById("home_city_text").value;

  // TODO ADD CODE HERE
appboy.getUser().setHomeCity(homeCity);
});

var number = document.getElementById("phone_number_text");
number.addEventListener("keyup", function(event){
  if (event.keyCode === 13){
    document.getElementById("phone_number_button").click();
  }
});

//Phone Number
document.getElementById("phone_number_button").addEventListener("click", function(){
  phoneNumber = document.getElementById("phone_number_text").value;

  // TODO ADD CODE HERE
appboy.getUser().setPhoneNumber(phoneNumber);
});

//CUSTOM ATTRIBUTES

document.getElementById("attribute_button").addEventListener("click", function(){
  attributeName = document.getElementById("attribute_name").value;
  attributeValue = document.getElementById("attribute_value").value;
  dataLayer.push({'brazeAttribute' : attributeName});
  dataLayer.push({'brazeAttributeValue': attributeValue});
  // TODO ADD CODE HERE
//appboy.getUser().setCustomUserAttribute(attributeName, attributeValue);
});

//CUSTOM EVENTS

document.getElementById("event_button").addEventListener("click", function(){
  eventName = document.getElementById("event_name").value;
  eventProperties = document.getElementById("properties").value;
  dataLayer.push({'brazeEvent' : eventName});
  if (eventProperties === "") {
  //  dataLayer.push({'event': eventName});
    // TODO ADD CODE HERE
  //appboy.logCustomEvent(eventName);
  } else {
	// TODO ADD CODE HERE
  //appboy.logCustomEvent(eventName,JSON.parse(eventProperties));
    dataLayer.push({'event': eventName})
  }
});

//LOG PURCHASES

document.getElementById("log_purchase_button").addEventListener("click", function(){
  productId = document.getElementById("product_id").value;
  currencyCode = document.getElementById("currency").value;
  price = document.getElementById("price").value;
  quantity = document.getElementById("quantity").value;

  // TODO ADD CODE HERE
  //appboy.logPurchase(productId, price, currencyCode, quantity);
  dataLayer.push({
    'brazeProduct': productId,
    'brazeCurrency': currencyCode,
    'brazePrice': price,
    'brazeQuantity': quantity
  })
});


//IGNORE EVERYTHING BELOW! IT IS SIMPLY RESPONSIBLE FOR BUTTON FUNCTION AND TESTING
function user()
{
  var x = document.getElementById("user");
  if (x.style.display === "none")
  {
    x.style.display = "block";
  }
  else
  {
    x.style.display = "none";
  }
}

function customA()
{
  var x = document.getElementById("customA");
  if (x.style.display === "none")
  {
    x.style.display = "block";
  }
  else
  {
    x.style.display = "none";
  }
}

function customE()
{
  var x = document.getElementById("customE");
  if (x.style.display === "none")
  {
    x.style.display = "block";
  }
  else
  {
    x.style.display = "none";
  }
}

function purchases()
{
  var x = document.getElementById("purchases");
  if (x.style.display === "none")
  {
    x.style.display = "block";
  }
  else
  {
    x.style.display = "none";
  }
}

//TESTING

var api_response;

document.getElementById("test_button").addEventListener("click", function(){
appboy.requestImmediateDataFlush()

  var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://sondheim.braze.com/users/export/ids",
  "method": "POST",
  "headers": {
    "Content-Type": "application/json",
    "Authorization": "Bearer 38a59e02ff77a28047f464fa8af90a5bc43fb3cdc5407dfe93ec138c6234803e",
    "Accept": "*/*",
    "Cache-Control": "no-cache",
    "Postman-Token": "8c754185-b32b-4bfd-ae00-3cbb0b2c8cb5,19a20133-1f63-42db-b7e1-6b206b737d90",
    "cache-control": "no-cache"
  },
  "processData": false,
  "data": `{\n    \"api_key\" : \"599808d4-b005-49fe-9b36-9e1305d11077\",\n    \"external_ids\" : [\"${userId}\"]}`

  // ,\n    \"fields_to_export\" : [\"first_name\", \"last_name\", \"email\", \"gender\", \"dob\", \"country\", \"home_city\", \"phone\", \"custom_attributes\", \"custom_events\", \"purchases\"]\n
}



$.ajax(settings).done(function (response) {
 api_response = response.users[0];
 // console.log(api_response.dob.substring(0,10))
 // console.log(birthday)
 //console.log ("res " + api_response);
 if (api_response == null)
 {
  document.getElementById("answer").innerHTML += "No active Braze user.<br />"
 }


var test = false;

 if (userId === null)
 {
  document.getElementById("answer").innerHTML = "No user inputted! Make sure to fill out user id."
 }
 else
 {
  test = true;
 }



 if (test) {
  console.log("we can start checking");
  document.getElementById("answer").innerHTML = "";
  console.log(api_response);

  var checker = true;

    //user attributes

    if (firstName)
    {
      if (api_response.first_name != firstName)
      {
        document.getElementById("answer").innerHTML += "<span style='color:#FF0000'>" + "first name doesn't match! local: " + firstName + " / dash: " + api_response.first_name + "</span><br />"
      }
      else
      {
        document.getElementById("answer").innerHTML += "all good, local: " + firstName + " / dash: " + api_response.first_name + "<br />"
      }
    }
    else
    {
      document.getElementById("answer").innerHTML += "<span style='color:#FF0000'>no first name inputted!</span><br />";
    }

    if (lastName)
    {
      if (api_response.last_name != lastName)
      {
        document.getElementById("answer").innerHTML += "<span style='color:#FF0000'>" + "last name doesn't match! local: " + lastName + " / dash: " + api_response.last_name + "</span><br />"
      }
      else
      {
        document.getElementById("answer").innerHTML += "all good, local: " + lastName + " / dash: " + api_response.last_name + "<br />"
      }
    }
    else
    {
      document.getElementById("answer").innerHTML += "<span style='color:#FF0000'>no last name inputted!</span><br />";
    }

    if (email)
    {
      if (api_response.email != email)
      {
        document.getElementById("answer").innerHTML += "<span style='color:#FF0000'>" + "email doesn't match! local: " + email + " / dash: " + api_response.email + "</span><br />"
      }
      else
      {
        document.getElementById("answer").innerHTML += "all good, local: " + email + " / dash: " + api_response.email + "<br />"
      }
    }
    else
    {
      document.getElementById("answer").innerHTML += "<span style='color:#FF0000'>no email inputted!</span><br />";
    }

    if (selectedGender)
    {
      if (api_response.gender != selectedGender.substring(0,1).toUpperCase())
      {
        document.getElementById("answer").innerHTML += "<span style='color:#FF0000'>" + "gender doesn't match! local: " + selectedGender.substring(0,1).toUpperCase() + " / dash: " + api_response.gender + "</span><br />"
      }
      else
      {
        document.getElementById("answer").innerHTML += "all good, local: " + selectedGender.substring(0,1).toUpperCase() + " / dash: " + api_response.gender + "<br />"
      }
    }
    else
    {
      document.getElementById("answer").innerHTML += "<span style='color:#FF0000'>no gender inputted!</span><br />";
    }

    if (birthday)
    {

      if (api_response.dob.substring(0,10) != birthday)
      {
        document.getElementById("answer").innerHTML += "<span style='color:#FF0000'>" + "birthday doesn't match! local: " + birthday + " / dash: " + api_response.dob.substring(0,10) + "</span><br />"
      }
      else
      {
        document.getElementById("answer").innerHTML += "all good, local: " + birthday + " / dash: " + api_response.dob.substring(0,10) + "<br />"
      }
    }
    else
    {
      document.getElementById("answer").innerHTML += "<span style='color:#FF0000'>no birthday inputted!</span><br />";
    }

    if (country)
    {

      if (api_response.country)
      {
        document.getElementById("answer").innerHTML += "all good, local: " + country + " / dash: " + api_response.country + "<br />"
      }
    }
    else
    {
      document.getElementById("answer").innerHTML += "<span style='color:#FF0000'>no country inputted!</span><br />";
    }

    if (homeCity)
    {

      if (api_response.home_city != homeCity)
      {
        document.getElementById("answer").innerHTML += "<span style='color:#FF0000'>" + "home city doesn't match! local: " + homeCity + " / dash: " + api_response.home_city + "</span><br />"
      }
      else
      {
        document.getElementById("answer").innerHTML += "all good, local: " + homeCity + " / dash: " + api_response.home_city + "<br />"
      }
    }
    else
    {
      document.getElementById("answer").innerHTML += "<span style='color:#FF0000'>no home city inputted!</span><br />";
    }

    if (phoneNumber)
    {

      if (api_response.phone != phoneNumber)
      {
        document.getElementById("answer").innerHTML += "<span style='color:#FF0000'>" + "phone number doesn't match! local: " + phoneNumber + " / dash: " + api_response.phone + "</span><br />"
      }
      else
      {
        document.getElementById("answer").innerHTML += "all good, local: " + phoneNumber + " / dash: " + api_response.phone + "<br />"
      }
    }
    else
    {
      document.getElementById("answer").innerHTML += "<span style='color:#FF0000'>no phone number inputted!</span><br />";
    }

  	//custom attributes

    if (attributeName && attributeValue)
    {
      if (api_response.custom_attributes)
      {
        document.getElementById("answer").innerHTML += "custom attributes present locally and in dashboard<br />";
      }
      else
      {
        document.getElementById("answer").innerHTML += "<span style='color:#FF0000'>no custom attributes present in dashboard!</span><br />";
      }
    }
    else
    {
      document.getElementById("answer").innerHTML += "<span style='color:#FF0000'>no custom attributes inputted!</span><br />";
    }

  	//custom events

    if (eventName)
    {
      if (api_response.custom_events)
      {
        document.getElementById("answer").innerHTML += "custom events present locally and in dashboard<br />";
      }
      else
      {
        document.getElementById("answer").innerHTML += "<span style='color:#FF0000'>no custom events present in dashboard!</span><br />";
      }
    }
    else
    {
      document.getElementById("answer").innerHTML += "<span style='color:#FF0000'>no custom events inputted!</span><br />";
    }

  	//purchases

    if (productId && price)
    {
      if (api_response.purchases)
      {
        document.getElementById("answer").innerHTML += "purchases present locally and in dashboard<br />";
      }
      else
      {
        document.getElementById("answer").innerHTML += "<span style='color:#FF0000'>no purchases present in dashboard!</span><br />";
      }
    }
    else
    {
      document.getElementById("answer").innerHTML += "<span style='color:#FF0000'>no purchases inputted!</span><br />"
    }

}
});
});
