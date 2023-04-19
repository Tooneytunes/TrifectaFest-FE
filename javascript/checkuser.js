function CheckUser() {
    if (localStorage.getItem("Person") === null) {
        document.getElementById("username").style.display = "none";
    } else {
        var person = JSON.parse(localStorage.getItem("Person"));
        if (person.role === "Artist") {
            document.getElementById("username").innerHTML = `
            <hr>
            <div class="container" id="username">
            <div style="display: inline-block;">Name: &nbsp;</div>
            <div class="pc" style="display: inline-block;">${person.name}</div>
            <div style="display: inline-block;">&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Role:&nbsp;</div>
            <div class="pc" style="display: inline-block;">${person.role}&nbsp;&nbsp;</div>
            <button type="button" class="btn btn-sm btn-outline-light" onclick="window.location.href='bookings.html';">Bookings</button>&nbsp;&nbsp;
            <button type="button" class="btn btn-sm btn-outline-light" onclick="window.location.href='account.html';">Account</button>&nbsp;&nbsp;
            </div>
            `;
            loginbtn = document.getElementById("loginbtn");
            loginbtn.onclick = function () { if (logOut()) { localStorage.removeItem("Person"); window.location.reload(); } };
            loginbtn.innerHTML = "Logout";
        } else if (person.role === "Organizer") {
            document.getElementById("username").innerHTML = `
            <hr>
            <div class="container" id="username">
            <div style="display: inline-block;">Name: &nbsp;</div>
            <div class="pc" style="display: inline-block;">${person.name}</div>
            <div style="display: inline-block;">&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Role:&nbsp;</div>
            <div class="pc" style="display: inline-block;">${person.role}&nbsp;&nbsp;</div>
            <button type="button" class="btn btn-sm btn-outline-light" onclick="window.location.href='bookings.html';">Manage Bookings</button>&nbsp;&nbsp;
            <button type="button" class="btn btn-sm btn-outline-light" onclick="window.location.href='makefestival.html';">Festival +</button>&nbsp;&nbsp;
            <button type="button" class="btn btn-sm btn-outline-light" onclick="window.location.href='bookingsreq.html';">Booking +</button>
            <button type="button" class="btn btn-sm btn-outline-light" onclick="window.location.href='account.html';">Account</button>&nbsp;&nbsp;
            </div>
            `;
            loginbtn = document.getElementById("loginbtn");
            loginbtn.onclick = function () { if (logOut()) { localStorage.removeItem("Person"); window.location.reload(); } };
            loginbtn.innerHTML = "Logout";
        } else if (person.role === "Customer") {
            document.getElementById("username").innerHTML = `
            <hr>
            <div class="container" id="username">
            <div style="display: inline-block;">Name: &nbsp;</div>
            <div class="pc" style="display: inline-block;">${person.name}</div>
            <div style="display: inline-block;">&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Role:&nbsp;</div>
            <div class="pc" style="display: inline-block;">${person.role}&nbsp;&nbsp;</div>
            <button type="button" class="btn btn-sm btn-outline-light" onclick="window.location.href='tickets.html';">Tickets</button>&nbsp;&nbsp;
            </div>
            `;
            loginbtn = document.getElementById("loginbtn");
            loginbtn.onclick = function () { if (logOut()) { localStorage.removeItem("Person"); window.location.reload(); } };
            loginbtn.innerHTML = "Logout";
        }
        
    }
}

function logOut() {
    if (confirm('Do you really want to log out?')) {
        alert('You are now logged out');
        return true;
    }
    else {
        return false;
    }
}