// from Scrimba: Frontend Developer Career Path - React Basics


function Header() {
    return (
        <header>
                <img src="./images/doodle1.png" alt="react logo" width="40px" />
                <nav>
                    <ul className="nav-menu">
                        <li>services</li>
                        <li>about</li>
                        <li>contact</li>
                    </ul>
                </nav>
        </header>
    )

}

function MainContent() {
  return (
    <main>
      <h1>Fun facts about Goldendoodles</h1>
      <ul>
        <li>Social butterflies; great family dogs</li>
        <li>High energy; love to roam and play</li>
        <li>Ideal as service dogs</li>
        <li>May also be known as Groodles</li>
      </ul>
    </main>
  );
}

function Footer() {
    return (
        <footer>
            <small>&copy; 2022 a guy and 2 dogs web development</small>
        </footer>
    )
}

function Page(){
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById('root'));
