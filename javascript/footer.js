// backend url link voor de azure
var backendUrl = "https://trifectafest.azurewebsites.net"

function Footer() {
    if (localStorage.getItem("Person") === null) {
        document.getElementById("footer").innerHTML = `
            <div class="col-6 col-md-2 mb-3">
                    <div class="container">
                    </div>
                    <h5>Menu</h5>
                    <ul class="nav flex-column">
                        <li class="nav-item mb-2"><a href="index.html" class="nav-link p-0 text-secondary">Home</a></li>
                        <li class="nav-item mb-2"><a href="lineup.html" class="nav-link p-0 text-secondary">Lineup</a>
                        </li>
                        <li class="nav-item mb-2"><a href="festival.html"
                                class="nav-link p-0 text-secondary">Festivals</a></li>
                        <li class="nav-item mb-2"><a href="news.html" class="nav-link p-0 text-secondary">News</a></li>
                        <li class="nav-item mb-2"><a href="info.html" class="nav-link p-0 text-secondary">Info</a></li>

                    </ul>
                </div>

                <div class="col-6 col-md-2 mb-3">
                    <h5>Functions</h5>
                    <ul class="nav flex-column">
                        <li class="nav-item mb-2"><a href="artists.html" class="nav-link p-0 text-secondary">All
                                Artists</a></li>
                        <li class="nav-item mb-2"><a href="info.html" class="nav-link p-0 text-secondary">All
                                Festivals</a></li>
                        <li class="nav-item mb-2"><a href="makebookingrequest.html"
                                class="nav-link p-0 text-secondary">Booking +</a></li>
                    </ul>
                </div>

                <div class="col-6 col-md-3 mb-4">
                    <h5>Meta</h5>
                    <ul class="nav flex-column">
                        <li class="nav-item mb-2"><a href="login.html" class="nav-link p-0 text-secondary">Login</a>
                        </li>
                        <li class="nav-item mb-2"><a href="register.html"
                                class="nav-link p-0 text-secondary">Register</a></li>
                        <li class="nav-item mb-2"><a href="termsconditions.html"
                                class="nav-link p-0 text-secondary">Terms & Conditions</a></li>
                        <li class="nav-item mb-2"><a href="privacypolicy.html"
                                class="nav-link p-0 text-secondary">Privacy Policy</a>
                        <li class="nav-item mb-2"><a href="faqs.html" class="nav-link p-0 text-secondary">FAQs</a></li>
                        <li class="nav-item mb-2"><a href="contact.html" class="nav-link p-0 text-secondary">Contact
                                Us</a></li>
                        <li class="nav-item mb-2"><a href="buyticket.html"
                                class="nav-link p-0 text-secondary">Tickets</a></li>
                    </ul>
                </div>

                <div class="col-md-4 offset-md-1 mb-3">
                    <form>
                        <h5>Subscribe to our newsletter</h5>
                        <p>Monthly "What's new and exciting"</p>
                        <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                            <label for="newsletter1" class="visually-hidden">Email address</label>
                            <input id="newsletter1" type="text" class="form-control" placeholder="Email address">
                            <button class="btn btn-primary pback" type="button">+</button>
                        </div>
                    </form>
                </div>
            </div>

            <div class="d-flex flex-column flex-sm-row border-top align-items-center ">
                <img class="bi me-5" width="30" height="30" role="img" aria-label="home" src="images/logo64x64.png">
                <p class="my-4">&nbsp;&nbsp; &copy; TrifestaFest. All rights reserved.</p>
                <p class="my-4" style="font-size: 10px;">- Design by <a href="https://de-toon.com/">deToon</a>, coded by
                    YC2303, look @ <a href="credits.html">Credits</a></p>
                </ul>

            </div>
            `;
    } else {
        var person = JSON.parse(localStorage.getItem("Person"));
        if (person.role === "Artist") {
            document.getElementById("footer").innerHTML = `
            <div class="col-6 col-md-2 mb-3">
                    <div class="container">
                    </div>
                    <h5>Menu</h5>
                    <ul class="nav flex-column">
                        <li class="nav-item mb-2"><a href="index.html" class="nav-link p-0 text-secondary">Home</a></li>
                        <li class="nav-item mb-2"><a href="lineup.html" class="nav-link p-0 text-secondary">Lineup</a>
                        </li>
                        <li class="nav-item mb-2"><a href="festival.html"
                                class="nav-link p-0 text-secondary">Festivals</a></li>
                        <li class="nav-item mb-2"><a href="news.html" class="nav-link p-0 text-secondary">News</a></li>
                        <li class="nav-item mb-2"><a href="info.html" class="nav-link p-0 text-secondary">Info</a></li>

                    </ul>
                </div>

                <div class="col-6 col-md-2 mb-3">
                    <h5>Functions</h5>
                    <ul class="nav flex-column">
                        <li class="nav-item mb-2"><a href="artists.html" class="nav-link p-0 text-secondary">All
                                Artists</a></li>
                        <li class="nav-item mb-2"><a href="info.html" class="nav-link p-0 text-secondary">All
                                Festivals</a></li>
                        <li class="nav-item mb-2"><a href="bookings.html" class="nav-link p-0 text-secondary">All
                                Bookings</a></li>
                        <li class="nav-item mb-2"><a href="tickets.html" class="nav-link p-0 text-secondary">All
                                Tickets</a></li>
                        <li class="nav-item mb-2"><a href="makebookingrequest.html"
                                class="nav-link p-0 text-secondary">Booking +</a></li>
                        <li class="nav-item mb-2"><a href="bookingsreq.html" class="nav-link p-0 text-secondary">Booking
                                Actions</a></li>
                    </ul>
                </div>

                <div class="col-6 col-md-3 mb-4">
                    <h5>Meta</h5>
                    <ul class="nav flex-column">
                        <li class="nav-item mb-2"><a href="login.html" class="nav-link p-0 text-secondary">Login</a>
                        </li>
                        <li class="nav-item mb-2"><a href="register.html"
                                class="nav-link p-0 text-secondary">Register</a></li>
                        <li class="nav-item mb-2"><a href="termsconditions.html"
                                class="nav-link p-0 text-secondary">Terms & Conditions</a></li>
                        <li class="nav-item mb-2"><a href="privacypolicy.html"
                                class="nav-link p-0 text-secondary">Privacy Policy</a>
                        <li class="nav-item mb-2"><a href="faqs.html" class="nav-link p-0 text-secondary">FAQs</a></li>
                        <li class="nav-item mb-2"><a href="contact.html" class="nav-link p-0 text-secondary">Contact
                                Us</a></li>
                        <li class="nav-item mb-2"><a href="buyticket.html"
                                class="nav-link p-0 text-secondary">Tickets</a></li>
                    </ul>
                </div>

                <div class="col-md-4 offset-md-1 mb-3">
                    <form>
                        <h5>Subscribe to our newsletter</h5>
                        <p>Monthly "What's new and exciting"</p>
                        <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                            <label for="newsletter1" class="visually-hidden">Email address</label>
                            <input id="newsletter1" type="text" class="form-control" placeholder="Email address">
                            <button class="btn btn-primary pback" type="button">+</button>
                        </div>
                    </form>
                </div>
            </div>

            <div class="d-flex flex-column flex-sm-row border-top align-items-center ">
                <img class="bi me-5" width="30" height="30" role="img" aria-label="home" src="images/logo64x64.png">
                <p class="my-4">&nbsp;&nbsp; &copy; TrifestaFest. All rights reserved.</p>
                <p class="my-4" style="font-size: 10px;">- Design by <a href="https://de-toon.com/">deToon</a>, coded by
                    YC2303, look @ <a href="credits.html">Credits</a></p>
                </ul>

            </div>
            `;
        } else if (person.role === "Organizer") {
            document.getElementById("footer").innerHTML = `
            <div class="col-6 col-md-2 mb-3">
                    <div class="container">
                    </div>
                    <h5>Menu</h5>
                    <ul class="nav flex-column">
                        <li class="nav-item mb-2"><a href="index.html" class="nav-link p-0 text-secondary">Home</a></li>
                        <li class="nav-item mb-2"><a href="lineup.html" class="nav-link p-0 text-secondary">Lineup</a>
                        </li>
                        <li class="nav-item mb-2"><a href="festival.html"
                                class="nav-link p-0 text-secondary">Festivals</a></li>
                        <li class="nav-item mb-2"><a href="news.html" class="nav-link p-0 text-secondary">News</a></li>
                        <li class="nav-item mb-2"><a href="info.html" class="nav-link p-0 text-secondary">Info</a></li>

                    </ul>
                </div>

                <div class="col-6 col-md-2 mb-3">
                    <h5>Functions</h5>
                    <ul class="nav flex-column">
                        <li class="nav-item mb-2"><a href="artists.html" class="nav-link p-0 text-secondary">All
                                Artists</a></li>
                        <li class="nav-item mb-2"><a href="info.html" class="nav-link p-0 text-secondary">All
                                Festivals</a></li>
                        <li class="nav-item mb-2"><a href="bookings.html" class="nav-link p-0 text-secondary">All
                                Bookings</a></li>
                        <li class="nav-item mb-2"><a href="tickets.html" class="nav-link p-0 text-secondary">All
                                Tickets</a></li>
                        <li class="nav-item mb-2"><a href="makefestival.html"
                                class="nav-link p-0 text-secondary">Festival +</a></li>
                        <li class="nav-item mb-2"><a href="makeperson.html" class="nav-link p-0 text-secondary">Person
                                +</a></li>
                        <li class="nav-item mb-2"><a href="maketicket.html" class="nav-link p-0 text-secondary">Ticket
                                +</a></li>
                        <li class="nav-item mb-2"><a href="makebookingrequest.html"
                                class="nav-link p-0 text-secondary">Booking +</a></li>
                        <li class="nav-item mb-2"><a href="bookingsreq.html" class="nav-link p-0 text-secondary">Booking
                                Actions</a></li>
                        <li class="nav-item mb-2"><a href="costs.html" class="nav-link p-0 text-secondary">Overview
                                (Costs)</a></li>
                        <li class="nav-item mb-2"><a href="vj.html" class="nav-link p-0 text-secondary">For VJ's</a>
                        </li>
                    </ul>
                </div>

                <div class="col-6 col-md-3 mb-4">
                    <h5>Meta</h5>
                    <ul class="nav flex-column">
                        <li class="nav-item mb-2"><a href="login.html" class="nav-link p-0 text-secondary">Login</a>
                        </li>
                        <li class="nav-item mb-2"><a href="register.html"
                                class="nav-link p-0 text-secondary">Register</a></li>
                        <li class="nav-item mb-2"><a href="termsconditions.html"
                                class="nav-link p-0 text-secondary">Terms & Conditions</a></li>
                        <li class="nav-item mb-2"><a href="privacypolicy.html"
                                class="nav-link p-0 text-secondary">Privacy Policy</a>
                        <li class="nav-item mb-2"><a href="faqs.html" class="nav-link p-0 text-secondary">FAQs</a></li>
                        <li class="nav-item mb-2"><a href="contact.html" class="nav-link p-0 text-secondary">Contact
                                Us</a></li>
                        <li class="nav-item mb-2"><a href="buyticket.html"
                                class="nav-link p-0 text-secondary">Tickets</a></li>
                    </ul>
                </div>

                <div class="col-md-4 offset-md-1 mb-3">
                    <form>
                        <h5>Subscribe to our newsletter</h5>
                        <p>Monthly "What's new and exciting"</p>
                        <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                            <label for="newsletter1" class="visually-hidden">Email address</label>
                            <input id="newsletter1" type="text" class="form-control" placeholder="Email address">
                            <button class="btn btn-primary pback" type="button">+</button>
                        </div>
                    </form>
                </div>
            </div>

            <div class="d-flex flex-column flex-sm-row border-top align-items-center ">
                <img class="bi me-5" width="30" height="30" role="img" aria-label="home" src="images/logo64x64.png">
                <p class="my-4">&nbsp;&nbsp; &copy; TrifestaFest. All rights reserved.</p>
                <p class="my-4" style="font-size: 10px;">- Design by <a href="https://de-toon.com/">deToon</a>, coded by
                    YC2303, look @ <a href="credits.html">Credits</a></p>
                </ul>

            </div>
            `;
        } else if (person.role === "Customer") {
            document.getElementById("footer").innerHTML = `
            <div class="col-6 col-md-2 mb-3">
                    <div class="container">
                    </div>
                    <h5>Menu</h5>
                    <ul class="nav flex-column">
                        <li class="nav-item mb-2"><a href="index.html" class="nav-link p-0 pc">Home</a></li>
                        <li class="nav-item mb-2"><a href="lineup.html" class="nav-link p-0 text-secondary">Lineup</a>
                        </li>
                        <li class="nav-item mb-2"><a href="festival.html"
                                class="nav-link p-0 text-secondary">Festivals</a></li>
                        <li class="nav-item mb-2"><a href="news.html" class="nav-link p-0 text-secondary">News</a></li>
                        <li class="nav-item mb-2"><a href="info.html" class="nav-link p-0 text-secondary">Info</a></li>

                    </ul>
                </div>

                <div class="col-6 col-md-2 mb-3">
                    <h5>Functions</h5>
                    <ul class="nav flex-column">
                        <li class="nav-item mb-2"><a href="artists.html" class="nav-link p-0 text-secondary">All
                                Artists</a></li>
                        <li class="nav-item mb-2"><a href="info.html" class="nav-link p-0 text-secondary">All
                                Festivals</a></li>
                        <li class="nav-item mb-2"><a href="makebookingrequest.html"
                                class="nav-link p-0 text-secondary">Booking +</a></li>
                    </ul>
                </div>

                <div class="col-6 col-md-3 mb-4">
                    <h5>Meta</h5>
                    <ul class="nav flex-column">
                        <li class="nav-item mb-2"><a href="login.html" class="nav-link p-0 text-secondary">Login</a>
                        </li>
                        <li class="nav-item mb-2"><a href="register.html"
                                class="nav-link p-0 text-secondary">Register</a></li>
                        <li class="nav-item mb-2"><a href="termsconditions.html"
                                class="nav-link p-0 text-secondary">Terms & Conditions</a></li>
                        <li class="nav-item mb-2"><a href="privacypolicy.html"
                                class="nav-link p-0 text-secondary">Privacy Policy</a>
                        <li class="nav-item mb-2"><a href="faqs.html" class="nav-link p-0 text-secondary">FAQs</a></li>
                        <li class="nav-item mb-2"><a href="contact.html" class="nav-link p-0 text-secondary">Contact
                                Us</a></li>
                        <li class="nav-item mb-2"><a href="buyticket.html"
                                class="nav-link p-0 text-secondary">Tickets</a></li>
                    </ul>
                </div>

                <div class="col-md-4 offset-md-1 mb-3">
                    <form>
                        <h5>Subscribe to our newsletter</h5>
                        <p>Monthly "What's new and exciting"</p>
                        <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                            <label for="newsletter1" class="visually-hidden">Email address</label>
                            <input id="newsletter1" type="text" class="form-control" placeholder="Email address">
                            <button class="btn btn-primary pback" type="button">+</button>
                        </div>
                    </form>
                </div>
            </div>

            <div class="d-flex flex-column flex-sm-row border-top align-items-center ">
                <img class="bi me-5" width="30" height="30" role="img" aria-label="home" src="images/logo64x64.png">
                <p class="my-4">&nbsp;&nbsp; &copy; TrifestaFest. All rights reserved.</p>
                <p class="my-4" style="font-size: 10px;">- Design by <a href="https://de-toon.com/">deToon</a>, coded by
                    YC2303, look @ <a href="credits.html">Credits</a></p>
                </ul>

            </div>
            `;
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