function App(){
    const cards = cardsData.map(card => {
        return (<Card
                img={card.img}
                rating={card.rating}
                ratings={card.ratings}
                country={card.country}
                price={card.price}
                activity={card.activity}
                key={card.id}
                />
            )
    })

    return (
        <div className="container">
            <Navbar />
            <Hero />
            <div className="container-cards">
                {cards}
            </div>
        </div>
    )
}

