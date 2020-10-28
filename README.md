# The Movie Database API

Super simple GraphQL server example using Express and Axios.

## Requirements

- NodeJS
- Node Package Manager (NPM)

## How to use

1. Clone this repo `git clone https://github.com/nocturaf/themoviedb-api-graphql.git`
2. Run `npm install` to grab the dependencies
3. Create `.env` file on root dir which consists of :
```
PORT=5000
MOVIE_DB_API_KEY= // your private api key from https://www.themoviedb.org
```
4. Run `npm run server` to serve on `localhost:5000/graphql`

## GraphQL usage examples

1. Get movies :
- Request
```
{
  movies {
    id
    item_count
    items {
      id
      title
      vote_average
    	poster_path
      overview
      release_date
    }
  }
}
```
- Response
```
{
  "data": {
    "movies": {
      "id": "1",
      "item_count": 49,
      "items": [
        {
          "id": 284053,
          "title": "Thor: Ragnarok",
          "vote_average": 7.6,
          "poster_path": "/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg",
          "overview": "Thor is imprisoned on the other side of the universe and finds himself in a race against time to get back to Asgard to stop Ragnarok, the destruction of his home-world and the end of Asgardian civilization, at the hands of an all-powerful new threat, the ruthless Hela.",
          "release_date": "2017-10-25"
        },
        {
          "id": 315635,
          "title": "Spider-Man: Homecoming",
          "vote_average": 7.4,
          "poster_path": "/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg",
          "overview": "Following the events of Captain America: Civil War, Peter Parker, with the help of his mentor Tony Stark, tries to balance his life as an ordinary high school student in Queens, New York City, with fighting crime as his superhero alter ego Spider-Man as a new threat, the Vulture, emerges.",
          "release_date": "2017-07-05"
        },
        {
          "id": 283995,
          "title": "Guardians of the Galaxy Vol. 2",
          "vote_average": 7.6,
          "poster_path": "/y4MBh0EjBlMuOzv9axM4qJlmhzz.jpg",
          "overview": "The Guardians must fight to keep their newfound family together as they unravel the mysteries of Peter Quill's true parentage.",
          "release_date": "2017-04-19"
        },
        {
          "id": 263115,
          "title": "Logan",
          "vote_average": 7.8,
          "poster_path": "/fnbjcRDYn6YviCcePDnGdyAkYsB.jpg",
          "overview": "In the near future, a weary Logan cares for an ailing Professor X in a hideout on the Mexican border. But Logan's attempts to hide from the world and his legacy are upended when a young mutant arrives, pursued by dark forces.",
          "release_date": "2017-02-28"
        },
        {
          "id": 284052,
          "title": "Doctor Strange",
          "vote_average": 7.4,
          "poster_path": "/uZpmwyfL6sIq0yzn5Dbar8QXRNa.jpg",
          "overview": "After his career is destroyed, a brilliant but arrogant surgeon gets a new lease on life when a sorcerer takes him under her wing and trains him to defend the world against evil.",
          "release_date": "2016-10-25"
        },
        {
          "id": 246655,
          "title": "X-Men: Apocalypse",
          "vote_average": 6.5,
          "poster_path": "/2mtQwJKVKQrZgTz49Dizb25eOQQ.jpg",
          "overview": "After the re-emergence of the world's first mutant, world-destroyer Apocalypse, the X-Men must unite to defeat his extinction level plan.",
          "release_date": "2016-05-18"
        }
      ]
    }
  }
}
```
