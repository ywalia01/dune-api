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
    		"quote": "Fear is the mind-killer."
    	}
    ]

### `GET /quotes/{number}`

Returns an array with `{number}` quotes e.g. `GET /quotes/5`.

> [https://dune-quote-api.herokuapp.com/quotes/5](https://dune-quote-api.herokuapp.com/quotes/5)

    [
      {
        "quote": "He who controls the spice controls the universe."
      },
      {
        "quote": "A man's flesh is his own; the water belongs to the tribe."
      },
      {
        "quote": "Once men turned their thinking over to machines in the hope that this would set them free. But that only permitted other men with machines to enslave them."
      },
      {
        "quote": "The mystery of life isn't a problem to solve, but a reality to experience."
      },
      {
        "quote": "Without change something sleeps inside us, and seldom awakens. The sleeper must awaken."
      }
    ]

## Contributing

If you want to add some quotes, just add them in the `models/quotes.js` file and make a pull request.

## Credits

Inspired by [Breaking Bad Quotes](https://github.com/shevabam/breaking-bad-quotes).
