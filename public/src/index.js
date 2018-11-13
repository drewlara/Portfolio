window.onscroll = function () {
    handleFixed()
};

var header = document.getElementById("sections-header");
var sticky = header.offsetTop;

function handleFixed() {
    if (window.innerWidth < 1024) {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }
}

function handleClick() {
    $('.section-item').on('click', function () {
        if ($(this).text() == 'About Me') {
            showAboutMe();
        } else if ($(this).text() == 'My Projects') {
            showMyProjects();
        }
    });
    $('.content').on('click', '#about-projects', function () {
        showMyProjects();
    })
}

function showAboutMe() {
    let aboutMe = `<div class="about">
                        <p>
                        I am a <strong>Web Developer</strong> who is currently based in the Austin, Texas area. I pride myself in my <strong>Ambition</strong>, <strong>Creativity</strong>, and my <strong>Efficient</strong> work style. When not on the job, you'll typically find me running around Zilker Park or enjoying a nice brew at Lazarus. Feel free to contact me or browse some of my projects using the links below.
                        </p>
                        <a href="mailto:drewlata@gmail.com" id="email">Email Me</a>
                        <a href="#projects" id="about-projects">View Projects</a>
                    </div>`;
    $('.content').fadeOut(500, function () {
        $(this).html(aboutMe)
    }).fadeIn(500);
}

function showMyProjects() {
    let myProjects = `<div class="my-projects">
            <div class="project">
                <h2>GymNotes</h2>
                <img class="project-img" src="public/img/GymNotes.png" />
                <p class="project-tech"><i class="fab fa-react"></i><i class="fab fa-node-js"></i><i class="fab fa-js"></i></p>
                <p class="project-desc">A simple way to track and log weightlifing workouts</p>
                <p class="project-links"><a href="https://gymnotes.herokuapp.com/" target="_blank">Wesbite</a><a href="https://github.com/drewlara/GymNotes" target="_blank">Repo</a></p>
            </div>
            <div class="project">
                <h2>myQR</h2>
                <img class="project-img" src="public/img/myQR.png" />
                <p class="project-tech"><i class="fab fa-node-js"></i><i class="fab fa-js"></i></p>
                <p class="project-desc">A simple way to track and log weightlifing workouts</p>
                <p class="project-links"><a href="https://myqr.herokuapp.com/" target="_blank">Wesbite</a><a href="https://github.com/drewlara/myQR" target="_blank">Repo</a></p>
            </div>
            <div class="project">
                <h2>Find My Rep</h2>
                <img class="project-img" src="public/img/FindMyRep.png" />
                <p class="project-tech"><i class="fab fa-js"></i><i class="fab fa-html5"></i><i class="fab fa-css3-alt"></i></p>
                <p class="project-desc">A simple way to track and log weightlifing workouts</p>
                <p class="project-links"><a href="https://drewlara.github.io/Find-My-Representative/" target="_blank">Wesbite</a><a href="https://github.com/drewlara/Find-My-Representative" target="_blank">Repo</a></p>
            </div>
        </div>`
    $('.content').fadeOut(500, function () {
        $(this).html(myProjects)
    }).fadeIn(500);
}

function init() {
    handleClick();
    showAboutMe();
}

$(init);
