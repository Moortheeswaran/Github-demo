
// this function going to add the record
function addata(){

    ZOHO.CREATOR.init()
    .then(function(data) {
      
     
      var title = document.getElementById("title").value;
      var Odate = document.getElementById("Order date").value;
      var Cust = document.getElementById("Customer").value;
      var Stat = document.getElementById("Order Status").value;
      var Ddate = document.getElementById("delivery date").value;
      // var prod = document.getElementById("Products").value;
      // var quan = document.getElementById("Quantity").value;
      // var ppu = document.getElementById("Priceperunit").value;
      // var cos = document.getElementById("Cost").value;
   
   
      formData = {
          "data" : {
            "Title": title,
            "Order_Date1": Odate,
            "Customers": Cust,
            "Order_Status": Stat,
            "Expected_Delivery_Date1": Ddate
           // "O_Products": prod,
            // "O_Quantity" : quan,
            // "O_Price" : ppu,
            // "O_Cost" : cos        
          }} 
   
          
      var config = { 
          appName : "moorthi-ordermanagement",
          formName : "Orders", 
          data : formData 
          } 
         console.log(formData);
      ZOHO.CREATOR.API.addRecord(config).then(function(response){ 
        
            if(response.code == 3000){
                console.log("Record added successfully");
                }
      });
   
    });
   
   }
   
   //  secod api fetching record
//    function viewCustomers(){

   
   ZOHO.CREATOR.init()
    .then(function(data) {
   
      // var Cust = document.getElementById("Customer").value;
   
      // formData = {
      //   "Customers": Cust
      // }
      // console.log(formData);
   
      var config = {
        appName : "moorthi-ordermanagement",
        reportName : "Customers_Report"
      
        }
   
        ZOHO.CREATOR.API.getAllRecords(config).then(function(response){
          var recordArr = response.data;
        console.log(recordArr);
        for(var index in recordArr){
          var custname = recordArr[index]; 
              console.log(custname.Name.first_name );
          var check = '<option CustID="'+recordArr[index].ID+'">'+recordArr[index].Customer_ID+'</option>';
          $("#Customer").append(check);
          }	
   
        });
    });
   
//   }
    // api call for subform
   
   
    ZOHO.CREATOR.init()
    .then(function(data) {
   
   
      var config = {
        appName : "moorthi-ordermanagement",
        reportName : "Products_Report",
      }
   
      ZOHO.CREATOR.API.getAllRecords(config)
          .then(function(response){
            var recordArr = response.data;
            console.log(recordArr);
            for(var index in recordArr){
              var prodname = recordArr[index];
              console.log(prodname.Product_Name1.display_value);
              var check = '<option class="test" prodID="'+recordArr[index].Sales_price+'  class= "pro">'+recordArr[index].Product_Name1.display_value+'</option>';
              $("#Products").append(check);
            }
          });
   
          //populate price
          $("#Products").change(function(){
            var proprice = $('select[class= "pro"]:selected').attr('Sales_price');
            console.log(proprice);
            console.log("test");
            document.querySelector(".test").innerHTML = proprice;
          });
   
         
    });   