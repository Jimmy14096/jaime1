//https://www.eclipse.org/paho/clients/js/

function historial1(){	
	//alert("led off");
	console.log("Obteniendo historial 2 .....");
	message = new Paho.MQTT.Message("historial");
    	message.destinationName = "jfjacome.fie@unach.edu.ec/historial";
    	client.send(message);
	//document.getElementById("sensor").innerHTML="led off";
}






// Create a client instance
  //client = new Paho.MQTT.Client("postman.cloudmqtt.com", 14970);
  
  client = new Paho.MQTT.Client("maqiatto.com", 8883, "web_" + parseInt(Math.random() * 100, 10));

  // set callback handlers
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
  var options = {
   useSSL: false,
    userName: "jfjacome.fie@unach.edu.ec",
    password: "jimmy1996",
    onSuccess:onConnect,
    onFailure:doFail
  }

  // connect the client
  client.connect(options);
   
  // called when the client connects
  function onConnect() {
    // Once a connection has been made, make a subscription and send a message.
    console.log("Conectado...");
	
 
    client.subscribe("jfjacome.fie@unach.edu.ec/historial");
    message = new Paho.MQTT.Message("hola desde la web");
    message.destinationName = "jfjacome.fie@unach.edu.ec/historial";
 
    client.send(message);
  
	
  }

  function doFail(e){
    console.log(e);
	
  }

  // called when the client loses its connection
  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
    }
  }

  // called when a message arrives
  function onMessageArrived(message) {
    console.log("onMessageArrived:"+message.payloadString);
	  sms=message.payloadString;
	
	    if(sms[7]=="1"){
	   document.getElementById("historial1").innerHTML=sms;
	  }
	  
	  if(sms[7]=="2"){
	   document.getElementById("historial2").innerHTML=sms;
	  }
	
		  
  }
  
