// from Scrimba: Frontend Developer Career Path - React Basics

function App(){
    return (
        <div className="container">
            <Info />
            <About />
            <Interests />
            <Footer />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));