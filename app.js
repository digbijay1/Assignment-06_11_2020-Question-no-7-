function findCountryFlag() {
    
    let req1 = new XMLHttpRequest(); // 1. Create a new XMLHttpRequest object
    let getData;
    req1.open("GET", "https://restcountries.eu/rest/v2/all"); // 2. Initialize it: GET-request1 for the URL
  
    req1.send(); // 3. Send the request req1
  
    req1.onload = function () {
      // 4. This will be called after the response is received
      if (req1.status != 200) {
        console.log(`Error ${req1.status}: ${req1.statusText}`);
      } else {
       
        getData = JSON.parse(req1.response);
        //console.log(getData)
        for(var i=0;i<getData.length;i++){
            console.log(getData[i].flag)
        }
       
        //console.log(`Done, got ${req1.response.length} bytes`);
      }
    };
  
    req1.onerror = function () {
      console.log("request1 failed");
    };
  }
  findCountryFlag()