function newKanji(){
    fetch('https://kanjiapi.dev/v1/kanji/grade-1')
        .then((response) => response.json())
        .then(
            (data) => {
                const kanji = data[Math.floor(Math.random() * data.length)];
                document.querySelector('.kanji').innerHTML = kanji
                fetch(`https://kanjiapi.dev/v1/kanji/${kanji}`)
                    .then((response) => response.json())
                    .then((data) => {
                        document.querySelector('.english').innerHTML = data.heisig_en
                    })
            }
        );
}    
