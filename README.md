![arrakis-header2](https://user-images.githubusercontent.com/48391286/115104563-fcbaf400-9f76-11eb-912d-5d2b7a9f4933.jpg)

# Dune API

A simple API which provides you with book, character, movie and quotes JSON data

## Production host

[https://the-dune-api.herokuapp.com/](https://the-dune-api.herokuapp.com/)

## API

### `GET /quotes`

Get a random quote in this format:

> [https://the-dune-api.herokuapp.com/quotes](https://the-dune-api.herokuapp.com/quotes)

    [
        {
            id: "14",
            quote: "Fear is the mind-killer."
        }
    ]

### `GET /quotes/{number}`

Returns an array with `{number}` quotes e.g. `GET /quotes/3`.

> [https://the-dune-api.herokuapp.com/quotes/3](https://the-dune-api.herokuapp.com/quotes/3)

    [
        {
            id: "10",
            "quote": "He who controls the spice controls the universe.",
        },
        {
            id: "3",
            "quote": "The mystery of life isn't a problem to solve, but a reality to experience.",
        },
        {
            id: "11",
            "quote": "Without change something sleeps inside us, and seldom awakens. The sleeper must awaken."
        }
    ]

### `GET /quotes/id/{id}`

Get the corresponding quote from its `id` in this format:

> [https://the-dune-api.herokuapp.com/quotes/id/66](https://the-dune-api.herokuapp.com/quotes/id/66)

    [
        {
            id: "66",
            "quote": "A man's flesh is his own; the water belongs to the tribe.",
        }
    ]

### `GET /books`

Get a random book in this format:

> [https://the-dune-api.herokuapp.com/books](https://the-dune-api.herokuapp.com/books)

    [
        {
            id: "17",
            title: "Sisterhood of Dune",
            year: "2012",
            author: ["Brian Herbert", "Kevin J. Anderson"],
            wiki_url: "https:/en.wikipedia.org/wiki/Sisterhood_of_Dune"
        }
    ]

### `GET /books/{number}`

Returns an array with `{number}` books e.g. `GET /books/3`.

> [https://the-dune-api.herokuapp.com/books/3](https://the-dune-api.herokuapp.com/books/3)

    [
        {
            id: "20",
            title: "Dune: The Duke of Caladan",
            year: "2020",
            author: ["Brian Herbert", "Kevin J. Anderson"],
            wiki_url: "https:/en.wikipedia.org/wiki/Dune:_The_Duke_of_Caladan"
        },
        {
            id: "15",
            title: "Paul of Dune",
            year: "2008",
            author: ["Brian Herbert", "Kevin J. Anderson"],
            wiki_url: "https:/en.wikipedia.org/wiki/Paul_of_Dune"
        },
        {
            id: "4",
            title: "God Emperor of Dune",
            year: "1981",
            author: "Frank Herbert",
            wiki_url: "https:/en.wikipedia.org/wiki/God_Emperor_of_Dune"
        }
    ]

### `GET /books/id/{id}`

Get the corresponding book from its `id` in this format:

> [https://the-dune-api.herokuapp.com/books/id/1](https://the-dune-api.herokuapp.com/books/id/1)

    [
        {
            id: "1",
            title: "Dune",
            year: "1965",
            author: "Frank Herbert",
            wiki_url: "https:/en.wikipedia.org/wiki/Dune_(novel)"
        }
    ]

## Contributing

If you want to add some quotes, just add them in the `models/quotes.js` file and make a pull request.

## Credits

Inspired by [Breaking Bad Quotes](https://github.com/shevabam/breaking-bad-quotes).
