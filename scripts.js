const search = [
    {
        category: 'shounen',
        animes: [
           "one piece", "naruto", "bleach", "hunter x hunter", "fullmetal", "dragon ball"
        ]
    },
    {
        category: 'romance',
        animes: [
            "sakurasou", "horimiya", "kimi ni todoke", "nagatoro", "uzaki chan"
        ]
    }
]

for (let category of search) {
    console.log('animes', category.category)
    console.log(category.animes.length)
}

for (let category of search) {
    console.log('animes', category.animes)
    console.log(category.animes.length)
}





