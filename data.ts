import { Film } from "types";

export const films: Film[] = [
  {
    id: 1,
    title: "Babylon",
    slug: "babylon",
    synopsis:
      "From Damien Chazelle, BABYLON is an original epic set in 1920s Los Angeles led by Brad Pitt, Margot Robbie and Diego Calva, with an ensemble cast including Jovan Adepo, Li Jun Li and Jean Smart. A tale of outsized ambition and outrageous excess, it traces the rise and fall of multiple characters during an era of unbridled decadence and depravity in early Hollywood.",
    year: 2023,
    directors: ["Damien Chazelle"],
    cast: [
      "Brad Pitt",
      "Margot Robbie",
      "Diego Calva",
      "Jean Smart",
      "Flea",
      "Tobey Maguire",
    ],
    reviews: [
      {
        id: 1,
        user: {
          id: 1,
          username: "tyler",
          email: "email",
          password: "1234",
          avatar: "avatar.jpg",
          reviews: [],
        },
        publish_date: Date.now(),
        text: "in the name of the father (boogie nights), the son (the wolf of wall street), and the holy spirit (babylon)",
        likes: 7336,
        replies: [],
      },
    ],
    thubmnail: "babylon.jpg",
    background_thumbnail: "babylon-background.jpg",
    imdb_link: "http://www.imdb.com/title/tt10640346/maindetails",
    tmdb_link: "https://www.themoviedb.org/movie/615777/",
    runtime: 189,
  },
  {
    id: 2,
    title: "Avatar: The Way of Water",
    slug: "avatar-the-way-of-water",
    synopsis:
      "Jake Sully lives with his newfound family formed on the extrasolar moon Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Na'vi race to protect their home.",
    year: 2022,
    directors: ["James Cameron"],
    cast: [
      "Sam Worthington",
      "Zoe Saldana",
      "Sigourney Weaver",
      "Stephen Lang",
      "Kate Winslet",
    ],
    reviews: [],
    thubmnail: "avatar2.jpg",
    background_thumbnail: "avatar-the-way-of-water-background.jpg",
    imdb_link: "http://www.imdb.com/title/tt1630029/maindetails",
    tmdb_link: "https://www.themoviedb.org/movie/76600/",
    runtime: 192,
  },
  {
    id: 3,
    title: "The Menu",
    slug: "the-menu",
    synopsis:
      "A couple travels to a coastal island to eat at an exclusive restaurant where the chef has prepared a lavish menu, with some shocking surprises.",
    year: 2022,
    directors: ["Mark Mylod"],
    cast: [
      "Ralph Fiennes",
      "Anya Taylor-Joy",
      "Nicholas Hoult",
      "Hong Chau",
      "Janet McTeer",
    ],
    reviews: [],
    thubmnail: "the-menu.jpg",
    background_thumbnail: "the-menu-background.jpg",
    imdb_link: "http://www.imdb.com/title/tt9764362/maindetails",
    tmdb_link: "https://www.themoviedb.org/movie/593643/",
    runtime: 107,
  },
  {
    id: 4,
    title: "Puss In Boots: The Last Wish",
    slug: "puss-in-cat-the-last-wish",
    synopsis:
      "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
    year: 2023,
    directors: ["Joel Crawford"],
    cast: [
      "Antonio Banderas",
      "Salma Hayek",
      "Harvey Guillén",
      "Wagner Moura",
      "Florence Pugh",
    ],
    reviews: [],
    thubmnail: "puss-in-boots.jpg",
    background_thumbnail: "puss-in-boots-the-last-wish-background.jpg",
    imdb_link: "http://www.imdb.com/title/tt3915174/maindetails",
    tmdb_link: "https://www.themoviedb.org/movie/315162/",
    runtime: 103,
  },
  {
    id: 5,
    title: "Top Gun: Maverick",
    slug: "top-gun-maverik",
    synopsis:
      "After more than thirty years of service as one of the Navy’s top aviators, and dodging the advancement in rank that would ground him, Pete “Maverick” Mitchell finds himself training a detachment of TOP GUN graduates for a specialized mission the likes of which no living pilot has ever seen. Facing an uncertain future and confronting the ghosts of his past, Maverick is drawn into a confrontation with his own deepest fears, culminating in a mission that demands the ultimate sacrifice from those who will be chosen to fly it.",
    year: 2022,
    directors: ["Joseph Kosinski"],
    cast: [
      "Tom Cruise",
      "Miles Teller",
      "Jennifer Connelly",
      "Jon Hamm",
      "Glen Powell",
      "Ed Harris",
      "Val Kilmer",
    ],
    reviews: [],
    thubmnail: "top-gun-maverick.jpg",
    background_thumbnail: "top-gun-maverick-background.jpg",
    imdb_link: "http://www.imdb.com/title/tt1745960/maindetails",
    tmdb_link: "https://www.themoviedb.org/movie/361743/",
    runtime: 131,
  },
  {
    id: 6,
    title: "Knock at the Cabin",
    slug: "knock-at-the-cabin",
    synopsis:
      "While vacationing at a remote cabin, a young girl and her parents are taken hostage by four armed strangers who demand that the family make an unthinkable choice to avert the apocalypse. With limited access to the outside world, the family must decide what they believe before all is lost.",
    year: 2023,
    directors: ["M. Night Shyamalan"],
    cast: [
      "Dave Bautista",
      "Ben Aldridge",
      "Jonathan Groff",
      "Kristen Cui",
      "Nikki Amuka-Bird",
      "Abby Quinn",
      "Rupert Grint",
    ],
    reviews: [],
    thubmnail: "knock-at-the-cabin.jpg",
    background_thumbnail: "knock-at-the-cabin-background.jpg",
    imdb_link: "http://www.imdb.com/title/tt15679400/maindetails",
    tmdb_link: "https://www.themoviedb.org/movie/631842/",
    runtime: 100,
  },
];
