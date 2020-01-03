function addActivity() {
    document.getElementById("mainContent").innerHTML = `
    <table>
         <tr>
                <td>Date</td>
                <td><input id="eventDate" type="date" /></td>
         </tr>
         <tr>
                <td>Description</td>
                <td><input id="eventDesc" type="text" /></td>
         </tr>
         
    </table>
    <button onclick = "newActivity()">Register changes</button>
    
    `;
}

function newActivity() {
    var date = document.getElementById("eventDate").value;
    var description = document.getElementById("eventDesc").value;
        document.getElementById("mainContent").innerHTML =  `
               <table>
                    <tr>
                        <th>Date</th>
                        <th>Desctiption</th>
                        <th>Number of signed up</th>
                    </tr>
                    <tr>
                        <td>1.12.20</td>
                        <td>Fake desc</td>
                        <td>5</td>
                    </tr>
                    <tr>
                       <td>1.12.20</td>
                       <td>Fdasdasd</td>
                       <td>30</td>
                   </tr>
                   <tr>
                       <td>${date}</td>
                       <td>${description}</td>
                       <td>30</td>
                   </tr>
   
               </table>
     
     
     `
   
}