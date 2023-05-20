function nemelerheto(){
    var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    document.getElementById('nem-elerheto').innerText = this.responseText;
    console.log(this.responseText);
  }
});

xhr.open("GET", "http://localhost:8000/api/nemelerheto");

xhr.send();
}

nemelerheto();

function velemenyKuldes(){
    var velemenyek = document.getElementById("velemenyInput").value;
    var data = JSON.stringify({
        velemeny: velemenyek
      });
      
      var xhr = new XMLHttpRequest();
      xhr.withCredentials = true;
      
      xhr.addEventListener("readystatechange", function() {
        if(this.readyState === 4) {
          alert("Véleménye fontos számunkra!");  
          document.getElementById("velemenyInput").value = "";
        }
      });
      
      xhr.open("POST", "http://localhost:8000/api/velemeny");
      xhr.setRequestHeader("Content-Type", "application/json");
      
      xhr.send(data);
}
