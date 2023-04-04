
const templateFooter = document.createElement('templateFooter');

templateFooter.innerHTML = `

<div class="footer">
		<div class="social-links">
			<div class="logo" style="border: none; height: 80%;">
				<img  class="logo-img2" src="logo3.png" alt="logo">

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
							<li><a href="../HomePage/AboutUs/index-about.html">About Us</a></li>
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
							<li><a href="../HomePage/ContactUs-TaimAfrica/index-contact.html">Contact Us</a></li>
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
				<div class="left">
					<span id="mytogglebtn" >
						Dark mode
					</span>

					<span id="ightmytogglebtn" class="light-btn">
						Light mode
					</span>
				</div>
				<div class="right">
					<select class="lngs" name="lang" id="">
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
			<script>
				const showNav = ()=>{
					const burger = document.querySelector('.burger');
					const links = document.querySelector('.navlinks');
		
					burger.addEventListener('click', (e)=>{
						e.preventDefault();
						burger.classList.toggle('.burger-active')
						links.classList.toggle('links-active');
					})
				}
		
				showNav();
			</script>
			
			
		</div>
	</div>
`;

document.body.appendChild(templateFooter)

// Function to toggle dark and light modes 

					
					
					const changeMode = () =>{
						const toggleBtn = document.getElementById('mytogglebtn');
						const lighttoggleBtn = document.getElementById('ightmytogglebtn');
						const container = document.querySelector('body');
						// const logo = document.querySelector('.logo-img')
						// const logo2 = document.querySelector('.logo-img2')


						toggleBtn.addEventListener('click', ()=>{
							localStorage.setItem('mode', 'dark');

							container.classList.add('dark-mode');
							toggleBtn.style.display = 'none';
							lighttoggleBtn.style.display = 'block';
							// logo.src = "{% static 'movies/images/primULogoblack.png' %}"
							// logo2.src = "{% static 'movies/images/primULogoblack2.png' %}"
						});

						lighttoggleBtn.addEventListener('click', ()=>{
							localStorage.setItem('mode', 'light');

							container.classList.remove('dark-mode');
							toggleBtn.style.display = 'block';
							lighttoggleBtn.style.display = 'none';
							// logo.src = "{% static 'movies/images/primULogo.png' %}"
							// logo2.src = "{% static 'movies/images/primULogo.png' %}"

						});
					}

					changeMode();
					

					const checkMode = () =>{
						var mode_status = localStorage.getItem('mode');
						const container = document.querySelector('body');
						const lighttoggleBtn = document.getElementById('ightmytogglebtn');
						const toggleBtn = document.getElementById('mytogglebtn');
						// const logo = document.querySelector('.logo-img')
						// const logo2 = document.querySelector('.logo-img2')

						if(mode_status == 'dark'){
							container.classList.add('dark-mode');
							toggleBtn.style.display = 'none';
							lighttoggleBtn.style.display = 'block';
							
							// logo.src = "{% static 'movies/images/primULogoblack.png' %}"
							// logo2.src = "{% static 'movies/images/primULogoblack2.png' %}"
						}else{
							container.classList.remove('dark-mode');
							toggleBtn.style.display = 'block';
							lighttoggleBtn.style.display = 'none';
							// logo.src = "{% static 'movies/images/primULogo.png' %}"
							// logo2.src = "{% static 'movies/images/primULogo.png' %}"

						}

						console.log(mode_status)
						
					}

					checkMode();


