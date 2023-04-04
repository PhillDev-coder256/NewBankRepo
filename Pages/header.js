
const template = document.createElement('template');

template.innerHTML = `
<header>
        <nav>
            <div class="nav-left">

                <div class="logo">
                        <img class="logo-img" src="./photos/logo3.png" alt="logo">
                    </div>
        
                    <div class="search">
                        <form action="">
                            <input name="q" class="input" type="text" placeholder="Search for movies, Tv shows and people">
                            <button type="submit"> <i class="fa fa-search"></i> </button>
                        </form>
                    </div>
            </div>
            


            <ul class="navlinks">
				<div class="links-container">
					<a id="homeLink" class="myLink" href=""> <i class="fa fa-home"></i> <strong>Home</strong> </a>
					<a class="myLink" href=""> <i class="fa fa-film"></i> <strong>Movies</strong> </a>
					<a class="myLink" href=""> <i class="fa fa-tv"></i> <strong>Series</strong> </a>
					<a class="myLink" href=""> <i class="fa fa-certificate"></i> <strong>Events</strong> </a>
					<a class="myLink" href=""> <i class="fa fa-newspaper"></i> <strong>News</strong> </a>
					<a class="myLink" href=""> <i class="fa fa-briefcase"></i> <strong>Jobs</strong> </a>
					<a class="myLink" href=""> <i class="fa fa-users"></i> <strong>People</strong> </a>
					
					<a class="myLink" href=""> <i class="fa fa-edit"></i><strong>Blogs</strong> </a>
						
				</div>

                    <img class="prof-image" src="" alt="image">
                    <i style="margin-left: 5px;" id="arrow" class="fa fa-sort-down"></i>
					<div class="prof-icon">

                        <ul class="prof-board">
                            <a href=""><i class="fa fa-user"></i> My Profile</a>
                            <a href=" "><i class="fa fa-th-list"></i> Dashboard</a>
                            <a href=""><i class="fa fa-close"></i> Logout</a>
                        </ul>

                    </div>
                    <a class="logOut-button" href=""> <strong>Login</strong> </a>

            </ul>

            <div class="burger">
                <div></div>
                <div></div>
                <div></div>
            </div>

        </nav>
    </header>`;

document.body.appendChild(template.content)

// Function to display hidden links for account
function displayHiddenAccountInfoHeader() {
    var i = document.getElementById("hidden-links-header");
    if (i.style.display === "block") {
        i.style.display = "none";
    } else {
        i.style.display = "block"
    }
}

// Function to display hidden links for account
function displayHiddenAccountInfo() {
    var i = document.getElementById("hidden-links");
    if (i.style.display === "block") {
        i.style.display = "none";
    } else {
        i.style.display = "block"
    }
}

// Function to toggle menu on mobile view
function toggleMenu() {
    var i = document.getElementById("toggle");
    if (i.style.display === "block") {
        i.style.display = "none"
    } else {
        i.style.display = "block"
    }
}

