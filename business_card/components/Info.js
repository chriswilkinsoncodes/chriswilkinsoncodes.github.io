// Photo by 
{/* <a href="https://unsplash.com/@thenerdymillennial?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Shashwat Narkhede</a>
 on <a href="https://unsplash.com/s/photos/dog-portrait?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a> */}
  

function Info() {
    return (
        <main>
            <img src="./images/roxy.jpg" alt="roxy" className="main--image"/>
            <h1 className="main--title">Roxy</h1>
            <p className="accent-text">Full Stack Developer</p>
            <p>roxy_dev.website</p>
            <div className="main--buttons">
                <button className="btn--email"><i className="fas fa-envelope"></i>Email</button>
                <button className="btn--linkedin"><i className="fab fa-linkedin"></i>LinkedIn</button>
            </div>
        </main>
    )
}