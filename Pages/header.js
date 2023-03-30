
const template = document.createElement('template');

template.innerHTML = `
<div class="header">
<div class="logo">
    <img src="./photos/logo3.png" alt="TAIM AFRICA LOGO">
</div>
<div class="search">
    <input type="search" value="" placeholder="Search for Movies, TV Shows, and People ">
    <i class="fa fa-search" aria-hidden="true"></i>
    
</div>
<div class="nav-links hide">
    <ul>
        <li>
            
        <a href="#">Movies</a></li>
        <li><a href="#">Series</a></li>
        <li><a href="#">People</a></li>
        <li><a href="#">News</a></li>
        <li><a href="#">Wallet</a></li>
        <li><a href="#">Jobs</a></li>
        <div class="account-info">
            <div onclick="displayHiddenAccountInfoHeader()" class="tggl-icon">
                <img src="./photos/bg.jpg" alt="Profile">
                <div class="toggle-dropdown">
                    <i class="fa fa-sort-desc" aria-hidden="true"></i>
                </div>
            </div>
            <br><br><br>
            <div id="hidden-links-header"> 
                <ul>
                    <li>
                        <i class="fa fa-user" aria-hidden="true"></i>
                        <a href="./profile.html">My Profile</a></li>
                    <li>
                        <i class="fa fa-tachometer" aria-hidden="true"></i>
                        <a href="">Dashboard</a></li>
                    <li>
                        <i class="fa fa-sign-out" aria-hidden="true"></i>
                        <a href="">Logout</a></li>
                </ul>
            </div>
        </div>
    </ul>
</div>

<div class="toggle-menu">
    
    <div class="visible">
        <i onclick="toggleMenu()" class="fa fa-bars" aria-hidden="true"></i>

    </div>
    <div id="toggle">
        
        <div class="nav-links">
            <ul class="left-links">
                
                <li>
                    <i  class="fa fa-file-video-o" aria-hidden="true"></i>
                    <a id="link" href="#">Movies</a></li>
                <li>
                    <i  class="fa fa-video-camera" aria-hidden="true"></i>
                    <a id="link" href="#">Series</a></li>
                <li>
                    <i class="fa fa-users" aria-hidden="true"></i>
                    <a id="link" href="#">People</a></li>
                <li>
                    <i class="fa fa-newspaper-o" aria-hidden="true"></i>
                    <a id="link" href="#">News</a></li>
                <li>
                    <i class="fa fa-money" aria-hidden="true"></i>
                    <a id="link" href="#">Wallet</a></li>
                <li>
                    <i class="fa fa-briefcase" aria-hidden="true"></i>
                    <a id="link" href="#">Jobs</a></li>
                    <div class="account">
                        <div onclick="displayHiddenAccountInfo()" class="tggl-icon">
                            <img src="./photos/bg.jpg" alt="Profile">
                            <div class="toggle-dropdown">
                                <i class="fa fa-sort-desc" aria-hidden="true"></i>
                            </div>
                        </div>
                        <br><br><br>
                        <div id="hidden-links"> 
                            <ul>
                                <li>
                                    <i class="fa fa-user" aria-hidden="true"></i>
                                    <a href="./profile.html">My Profile</a></li>
                                <li>
                                    <i class="fa fa-tachometer" aria-hidden="true"></i>
                                    <a href="">Dashboard</a></li>
                                <li>
                                    <i class="fa fa-sign-out" aria-hidden="true"></i>
                                    <a href="">Logout</a></li>
                            </ul>
                        </div> 
                        
                    </div>
            </ul>
            
        </div>
    </div>
</div>
    
    <div class="logout-btn">
        <button type="button">LogOut</button>
    </div>
</div>
`;

 
// Function to display hidden links for account
    function displayHiddenAccountInfoHeader(){
        var i = document.getElementById("hidden-links-header");
        if(i.style.display === "block"){
            i.style.display = "none";
        }else{
            i.style.display = "block"
        }
    }

// Function to display hidden links for account
                            function displayHiddenAccountInfo(){
                                var i = document.getElementById("hidden-links");
                                if(i.style.display === "block"){
                                    i.style.display = "none";
                                }else{
                                    i.style.display = "block"
                                }
                            }

// Function to toggle menu on mobile view
        function toggleMenu(){
            var i = document.getElementById("toggle");
            if(i.style.display === "block"){
                i.style.display = "none"
            }else{
                i.style.display = "block"
        }
        }

document.body.appendChild(template.content)