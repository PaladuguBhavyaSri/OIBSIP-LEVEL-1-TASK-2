# OIBSIP-LEVEL-1-TASK-2
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Personal Portfolio</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <header>
        <div class="logo">
            <img src="pic.png" alt="Open source image">
        </div>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#resume">Resume</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <section id="intro">
            <h1>Hello, I am Honey</h1>
            <p>I am a web developer with experience in HTML, CSS, and JavaScript. Take a look at my skills and portfolio below.</p>
        </section>
        <section id="skills">
            <h2>Skills</h2>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Bootstrap</li>
                <li>jQuery</li>
            </ul>
        </section>
        <section id="portfolio">

            <div class="portfolio-item">
                <img src="pic1.png" alt="Portfolio Item">
                <h3 class="second">Coding is My Passion</h3>
            </div>
            <div class="portfolio-item">
                <img src="pic2.png" alt="Portfolio Item">
            </div>
        </section>
        <section id="resume">
            <h2>Resume</h2>
            <a href="#">Download Resume</a>
        </section>
        <section id="contact">
            <h2>Contact</h2>
            <form>
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>
                <label for="message">Message:</label>
                <textarea id="message" name="message" required></textarea>
                <button type="submit">Send</button>
            </form>
        </section>
    </main>
    <footer>
        <p>&copy; My Portfolio 2023</p>
    </footer>
</body>

</html>
