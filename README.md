# FCC Image Search

Image Search Abstraction Layer @FreeCodeCamp, required for Back End Developer Certification.

This is a A [FreeCodeCamp](https://www.freecodecamp.com/challenges/image-search-abstraction-layer) exercice.

## API Documentation

### Endpoint
  `http://zapimages.herokuapp.com/`

### Routes

Route                 | Method | Description
----------------------|--------|------------
/search/:term         | GET    | Searches for :term images
/search/:term/:page   | GET    | Searches for :term images with pagination through response
/latest               | GET    | Returns latest 10 searches
/top                  | GET    | Returns top 10 searches

### Responses

All routes returns an array of objects (limited by 10)

* `/search/:term` and `/search/:term/:page`
```javascript
[
  {
    imageLink:  [String], //image link
    pageLink:   [String], //page link
    snippet:    [String]  //image's descriptive text
  }
]
```

* `/latest` and `/top`
```javascript
[
  {
    term:       [String], //searched term
    count:      [Number], //number of times this term was searched
    createdAt:	[String], //first time <Timestamp> this term was searched
    updatedAt:  [String]  //last time <Timestamp> this term was searched
  }
]
```

* If something went wrong
```javascript
{
  error:        [String]  //error description
}
```

## Examples

Address               | Description | Result
----------------------|--------|------------
`http://zapimages.herokuapp.com/search/mongodb` | Searches for 'mongodb' | [See result](http://zapimages.herokuapp.com/search/mongodb)
`http://zapimages.herokuapp.com/search/mongodb/3` | Paginate throught 'mongodb' results | [See result](http://zapimages.herokuapp.com/search/mongodb/3)
`http://zapimages.herokuapp.com/search/roger%20federer/ff` | Try to search for 'roger federer' but with an invalid page number. An error is shown | [See result](http://zapimages.herokuapp.com/search/roger%20federer/ff)
`http://zapimages.herokuapp.com/latest` | Shows the most 10 recent searches | [See result](http://zapimages.herokuapp.com/latest)
`http://zapimages.herokuapp.com/top` | Shows the 10 most popular searches | [See result](http://zapimages.herokuapp.com/top)

## TODO

* An API test page, similar with what I did with [Request Header App](https://fcc-requestheader.herokuapp.com/test)
* Separate [GoogleCS](https://github.com/lbpinheiro/fcc-imagesearch/blob/master/app/api/googlecs.js) into a different package
* Tweak [GoogleCS](https://github.com/lbpinheiro/fcc-imagesearch/blob/master/app/api/googlecs.js)

## Author

**Lucas Batochi Pinheiro**

## License

Copyright (c) 2016,
Lucas B. Pinheiro pinheiro.lucas@gmail.com

Permission to use, copy, modify, and distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.