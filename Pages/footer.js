
const templateFooter = document.createElement('templateFooter');

templateFooter.innerHTML = `
<!-- Footer -->
<div class="footer">
    <div class="social-links-footer">
        <div class="logo">
            <img src="./photos/logo3.png" alt="">
        </div>
        <div class="icon">
            <ul>
                <li>
                    <a href="">
                        <i class="fa fa-facebook-official" aria-hidden="true"></i>
                    <span>facebook</span>
                    </a>
                    
                </li>
                <li>
                    <a href="">
                        <i class="fa fa-twitter" aria-hidden="true"></i>
                    <span>twitter</span>
                    </a>
                    
                </li>
                <li>
                    <a href="">
                        <i class="fa fa-linkedin" aria-hidden="true"></i>
                    <span>LinkedIn</span>
                    </a>
                    
                </li>
                <li>
                    <a href="">
                        <i class="fa fa-youtube-play" aria-hidden="true"></i>
                        <span>YouTube</span>
                    </a>
                    
                </li>
            </ul>
            
        </div>

    </div>
    <hr>
    <div class="other-links">
        <div class="columns">
            <div class="row1">
                <div class="col">
                    <h4>THE AGENCY</h4>
                    <ul>
                        <li><a href="">About Us</a></li>
                        <li><a href="">Our Partners</a></li>
                        <li><a href="">Work With Us</a></li>
                        <li><a href="">Our Programs</a></li>
                    </ul>
    
                </div>
                <div class="col">
                    <h4>EXPLORE</h4>
                    <ul>
                        <li><a href="">	Recently Added</a></li>
                        <li><a href="">Trending Series</a></li>
                        <li><a href="">Trending Movies</a></li>
                        <li><a href="">Recommended Films</a></li>
                    </ul>
    
                </div>
            </div>

            <div class="row1">
                <div class="col">
                    <h4>GENRES</h4>
                    <ul>
                        <li><a href="">Action</a></li>
                        <li><a href="">Comedy</a></li>
                        <li><a href="">Love</a></li>
                        <li><a href="">Horror</a></li>
                    </ul>
    
                </div>
    
                <div class="col">
                    <h4>QUICK LINKS</h4>
                    <ul>
                        <li><a href="">My Account</a></li>
                        <li><a href="">FAQ</a></li>
                        <li><a href="">Help Centre</a></li>
                        <li><a href="">Contact Us</a></li>
                    </ul>
    
                </div>
            </div>
        </div>
    </div>
    <div class="copyright">
        <p>Copyright &copy; 2023 TAIM AFRICA [One Film Spot For All]
            <br>
            <br>
            
        </p>
        <div class="buttons">
            <button id="mytogglebtn" >
                Dark mode
            </button>
           
            <select name="lang" id="">
                <option value="">English</option>
                <option value="">Luganda</option>
                <option value="">Kiswahili</option>
                <option value="">Germany</option>
                <option value="">French</option>
                <option value="">Arabic</option>
                <option value="">Chinese</option>
            </select>
            
        </div>

        
        
    </div>
</div>
`;

document.body.appendChild(templateFooter)

// Function to toggle dark and light modes

    const toggleBtn = document.getElementById('mytogglebtn');
    const container = document.querySelector('body');
    
    toggleBtn.addEventListener('click', function(){
        if (mytogglebtn.textContent === 'Light mode') {
            mytogglebtn.textContent = 'Dark mode';
        } else {
            mytogglebtn.textContent = 'Light mode';
        }
        container.classList.toggle('dark-mode');
    });
