var autenticazione = function (xhr) {
  var key64 = 'SVlJNk0zNU1MQjhVVlczOFk5OVJZM1lQUVdSWDVYOEg6'; //codifica 64 della API key
  var token = 'Basic '.concat(key64);
  xhr.setRequestHeader('Authorization', token);
}

var chiamataAjax = function () {
  var mail = document.getElementById("_email").value;
  console.log(mail + " <- questa è una prova");
  $.ajax({
    url: 'http://192.168.56.101/loveitaly/api/customers/?io_format=JSON&filter[email]=[' + mail + ']&display=[passwd]',
    async: true,
    type: "GET",
    dataType: 'json',
    beforeSend: autenticazione,
 
    success: function (result) {
        var password = document.getElementById("password").value;
        var MD5 = md5('7j3EQiXxwscCNaOIORd8YqmvkjfEmDVxs4EcihNJNVNyCG4bHA3ThTnk'+password);
        /*var hash = md5(password,'7j3EQiXxwscCNaOIORd8YqmvkjfEmDVxs4EcihNJNVNyCG4bHA3ThTnk');*/

        /*console.log(MD5);
        console.log(result);
        console.log(result.customers[0].passwd + " <- Email");*/

         
         	if (MD5 == result.customers[0].passwd){
        	alert ("Login corretto");
        	        }
        	else{
        		alert("credenziali non valide");
        	}
     },

    error: function (XMLHttpRequest, textStatus, errorThrown) {
      console.log('Errore chiamata ajax!' +
                  '\nReponseText: ' + XMLHttpRequest.responseText +
                  '\nStatus: ' + textStatus +
                  '\nError: ' + errorThrown);
    }
})
}