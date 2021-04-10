# Dune Quotes API

A simple API to retrieve some quotes from Dune.

![](arrakis-header.jpeg)

## Production host

[https://dune-quote-api.herokuapp.com/](https://dune-quote-api.herokuapp.com/)

## API

### `GET /quotes`

Get a random quote in this format:

> [https://dune-quote-api.herokuapp.com/quotes](https://dune-quote-api.herokuapp.com/quotes)

    [
    	{
        id: "14",
    		quote: "Fear is the mind-killer."
    	}
    ]

### `GET /quotes/{number}`

Returns an array with `{number}` quotes e.g. `GET /quotes/3`.

> [https://dune-quote-api.herokuapp.com/quotes/3](https://dune-quote-api.herokuapp.com/quotes/3)

    [
      {
        id: "10",
        "quote": "He who controls the spice controls the universe.",
      },
      {
        id: "96",
        "quote": "A man's flesh is his own; the water belongs to the tribe.",
      },
      {
        id: "24",
        "quote": "Once men turned their thinking over to machines in the hope that this would set them free. But that only permitted other men with machines to enslave them.",
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

### `GET /quote/{id}`

Get the corresponding quote from its `id` in this format:

> [https://dune-quote-api.herokuapp.com/quote/40](https://dune-quote-api.herokuapp.com/quote/40)

    [
    	{
        id: "14",
    		quote: "Fear is the mind-killer."
    	}
    ]

### `GET /books`

Get a random book in this format:

> [https://dune-quote-api.herokuapp.com/books](https://dune-quote-api.herokuapp.com/books)

    [
      {
        id: "17",
        title: "Sisterhood of Dune",
        year: "2012",
        author: "Brian Herbert/Kevin J. Anderson",
        wiki_url: "https://en.wikipedia.org/wiki/Sisterhood_of_Dune"
      }
    ]

### `GET /books/{number}`

Returns an array with `{number}` books e.g. `GET /books/3`.

> [https://dune-quote-api.herokuapp.com/books/3](https://dune-quote-api.herokuapp.com/books/3)

    [
      {
        id: "20",
        title: "Dune: The Duke of Caladan",
        year: "2020",
        author: "Brian Herbert/Kevin J. Anderson",
        wiki_url: "https://en.wikipedia.org/wiki/Dune:_The_Duke_of_Caladan"
      },
      {
        id: "15",
        title: "Paul of Dune",
        year: "2008",
        author: "Brian Herbert/Kevin J. Anderson",
        wiki_url: "https://en.wikipedia.org/wiki/Paul_of_Dune"
      },
      {
        id: "4",
        title: "God Emperor of Dune",
        year: "1981",
        author: "Frank Herbert",
        wiki_url: "https://en.wikipedia.org/wiki/God_Emperor_of_Dune"
      }
    ]

### `GET /book/{id}`

Get the corresponding book from its `id` in this format:

> [https://dune-quote-api.herokuapp.com/book/1](https://dune-quote-api.herokuapp.com/book/1)

    [
    	{
        id: "1",
        title: "Dune",
        year: "1965",
        author: "Frank Herbert",
        wiki_url: "https://en.wikipedia.org/wiki/Dune_(novel)"
    	}
    ]

## Contributing

If you want to add some quotes, just add them in the `models/quotes.js` file and make a pull request.

## Credits

Inspired by [Breaking Bad Quotes](https://github.com/shevabam/breaking-bad-quotes).
