function App(){
    const cards = cardsData.map(card => {
        return (<Card
                key={card.id}
                card={card}
                // img={card.img}
                // rating={card.rating}
                // ratings={card.ratings}
                // country={card.country}
                // price={card.price}
                // activity={card.activity}
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

