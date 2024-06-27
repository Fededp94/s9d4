import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const CommentArea = () => {
  const comments = [
    { id: 1, text: "Great book!" },
    { id: 2, text: "I found it very interesting." },
    { id: 3, text: "Would definitely recommend." },
  ];

  return (
    <div>
      <h5>Comments</h5>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.text}</li>
        ))}
      </ul>
    </div>
  );
};

const SingleBook = ({ book }) => {
  const [selected, setSelected] = useState(false);

  return (
    <Card
      style={{ width: "18rem", cursor: "pointer", marginBottom: "1rem" }}
      onClick={() => setSelected(!selected)}>
      <Card.Img variant="top" src={book.img} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        {selected && <CommentArea />}
      </Card.Body>
    </Card>
  );
};

const BookList = ({ books }) => {
  return (
    <Row>
      {books.map((book) => (
        <Col key={book.asin} md={4}>
          <SingleBook book={book} />
        </Col>
      ))}
    </Row>
  );
};

const App = () => {
  const books = [
    {
      asin: "0786966246",
      title: "D&D MORDENKAINEN'S TOME OF FOES (Dungeons & Dragons)",
      img: "https://images-na.ssl-images-amazon.com/images/I/8147MOLG%2BoL.jpg",
      price: 27.94,
      category: "fantasy",
    },
    {
      asin: "1945683694",
      title: "Destiny Grimoire Anthology, Volume II: Fallen Kingdoms",
      img: "https://images-na.ssl-images-amazon.com/images/I/91IHwcEy2DL.jpg",
      price: 19.92,
      category: "fantasy",
    },
    {
      asin: "0316228028",
      title: "Stiletto: A Novel (The Rook Files)",
      img: "https://images-na.ssl-images-amazon.com/images/I/51whAHbBsDL.jpg",
      price: 10.37,
      category: "fantasy",
    },
    {
      asin: "0008288798",
      title: "A Reaper at the Gates (Ember Quartet, Book 3)",
      img: "https://images-na.ssl-images-amazon.com/images/I/91vFU0KCm9L.jpg",
      price: 12.6,
      category: "fantasy",
    },
    {
      asin: "1250222060",
      title:
        "A Gathering of Shadows Collector's Edition: A Novel (Shades of Magic)",
      img: "https://images-na.ssl-images-amazon.com/images/I/81Jw33fmYzL.jpg",
      price: 18.85,
      category: "fantasy",
    },
    {
      asin: "0345548531",
      title: "Staked: The Iron Druid Chronicles, Book Eight",
      img: "https://images-na.ssl-images-amazon.com/images/I/91eMFXdhM0L.jpg",
      price: 7.59,
      category: "fantasy",
    },
    {
      asin: "1597808709",
      title: "A Second Chance: The Chronicles of St. Mary's Book Three",
      img: "https://images-na.ssl-images-amazon.com/images/I/714wSBJshRL.jpg",
      price: 9.86,
      category: "fantasy",
    },
    {
      asin: "0062678108",
      title: "The City of Brass: A Novel (The Daevabad Trilogy)",
      img: "https://images-na.ssl-images-amazon.com/images/I/51AiOrm56BL.jpg",
      price: 18.37,
      category: "fantasy",
    },
    {
      asin: "0316434604",
      title: "Strange Practice (A Dr. Greta Helsing Novel)",
      img: "https://images-na.ssl-images-amazon.com/images/I/61WMUVR7PWL.jpg",
      price: 12.67,
      category: "fantasy",
    },
    {
      asin: "0765319233",
      title: "Chronicles of the Black Company",
      img: "https://images-na.ssl-images-amazon.com/images/I/511RvCsDsTL.jpg",
      price: 17.94,
      category: "fantasy",
    },
    {
      asin: "0345461533",
      title: "The Conquering Sword of Conan (Conan of Cimmeria, Book 3)",
      img: "https://images-na.ssl-images-amazon.com/images/I/81MoomxPd3L.jpg",
      price: 17.79,
      category: "fantasy",
    },
    {
      asin: "0316452211",
      title: "The Night Angel Trilogy: 10th Anniversary Edition",
      img: "https://images-na.ssl-images-amazon.com/images/I/71vON1PofOL.jpg",
      price: 30.28,
      category: "fantasy",
    },
    {
      asin: "1943407355",
      title: "The Dark Truth (The Dark Passage Series) (Volume 1)",
      img: "https://images-na.ssl-images-amazon.com/images/I/51pm0mSSzwL.jpg",
      price: 1.77,
      category: "fantasy",
    },
    {
      asin: "1524799556",
      title: "A Song of Ice and Fire 2020 Calendar: Illustrations by John Howe",
      img: "https://images-na.ssl-images-amazon.com/images/I/91JJwFLoOsL.jpg",
      price: 15.3,
      category: "fantasy",
    },
    {
      asin: "0399177574",
      title: "Illidan: World of Warcraft: A Novel",
      img: "https://images-na.ssl-images-amazon.com/images/I/81khLUoMKaL.jpg",
      price: 6.12,
      category: "fantasy",
    },
    {
      asin: "0316274119",
      title: "An Echo of Things to Come (The Licanius Trilogy)",
      img: "https://images-na.ssl-images-amazon.com/images/I/51xWXICigiL.jpg",
      price: 18.73,
      category: "fantasy",
    },
    {
      asin: "1578562953",
      title: "Edge of Eternity",
      img: "https://images-na.ssl-images-amazon.com/images/I/91Ft%2BN5q0sL.jpg",
      price: 15.19,
      category: "fantasy",
    },
    {
      asin: "0756408997",
      title: "Closer to Home (Valdemar: The Herald Spy)",
      img: "https://images-na.ssl-images-amazon.com/images/I/A1qDmoiER6L.jpg",
      price: 21.19,
      category: "fantasy",
    },
    {
      asin: "110188603X",
      title:
        "A Dance with Dragons (HBO Tie-in Edition): A Song of Ice and Fire: Book Five: A Novel",
      img: "https://images-na.ssl-images-amazon.com/images/I/813bxDL2PPL.jpg",
      price: 9.1,
      category: "fantasy",
    },
    {
      asin: "0451414888",
      title: "Dragon Fate: Book Six of The Age of Fire",
      img: "https://images-na.ssl-images-amazon.com/images/I/81qAK72OCYL.jpg",
      price: 8.53,
      category: "fantasy",
    },
    {
      asin: "0765327740",
      title: "Severed Souls: A Richard and Kahlan Novel",
      img: "https://images-na.ssl-images-amazon.com/images/I/51pXmun9LfL.jpg",
      price: 17.84,
      category: "fantasy",
    },
    {
      asin: "0345430441",
      title: "Transcendence (The Second DemonWars Saga, Book 2)",
      img: "https://images-na.ssl-images-amazon.com/images/I/71e1SKEZQOL.jpg",
      price: 8.76,
      category: "fantasy",
    },
    {
      asin: "4805310812",
      title:
        "The Tale of Genji: The Arthur Waley Translation of Lady Murasaki's Masterpiece with a new foreword by Dennis Washburn (Tuttle Classics)",
      img: "https://images-na.ssl-images-amazon.com/images/I/918dqgtXhdL.jpg",
      price: 22.21,
      category: "fantasy",
    },
    {
      asin: "0425262227",
      title: "The Tower (Guardians of Destiny)",
      img: "https://images-na.ssl-images-amazon.com/images/I/91qzAwU5wcL.jpg",
      price: 9.52,
      category: "fantasy",
    },
    {
      asin: "0345430816",
      title: "The Drawing of the Dark: A Novel (Del Rey Impact)",
      img: "https://images-na.ssl-images-amazon.com/images/I/81UHbZbNLvL.jpg",
      price: 13.73,
      category: "fantasy",
    },
    {
      asin: "0062068687",
      title: "The Long Earth",
      img: "https://images-na.ssl-images-amazon.com/images/I/517wycdvwBL.jpg",
      price: 8.77,
      category: "fantasy",
    },
    {
      asin: "0756413842",
      title: "The Master of Dreams (The Dreamscape Trilogy)",
      img: "https://images-na.ssl-images-amazon.com/images/I/91Ciw5J0wXL.jpg",
      price: 11.6,
      category: "fantasy",
    },
    {
      asin: "0765316544",
      title: "Toll the Hounds: Book Eight of The Malazan Book of the Fallen",
      img: "https://images-na.ssl-images-amazon.com/images/I/71gHp0g9ihL.jpg",
      price: 23.55,
      category: "fantasy",
    },
    {
      asin: "0765375079",
      title:
        "A Natural History of Dragons: A Memoir by Lady Trent (The Lady Trent Memoirs)",
      img: "https://images-na.ssl-images-amazon.com/images/I/81mOMXgOdkL.jpg",
      price: 10.37,
      category: "fantasy",
    },
    {
      asin: "0385349947",
      title: "Lean In: Women, Work, and the Will to Lead",
      img: "https://images-na.ssl-images-amazon.com/images/I/81coZ37EmxL.jpg",
      price: 14.3,
      category: "history",
    },
    {
      asin: "0062363603",
      title:
        "Hidden Figures: The American Dream and the Untold Story of the Black Women Mathematicians Who Helped Win the Space Race",
      img: "https://images-na.ssl-images-amazon.com/images/I/71O3WN6oyzL.jpg",
      price: 9.75,
      category: "history",
    },
    {
      asin: "1476794146",
      title:
        "Five Presidents: My Extraordinary Journey with Eisenhower, Kennedy, Johnson, Nixon, and Ford",
      img: "https://images-na.ssl-images-amazon.com/images/I/81XDguZCJgL.jpg",
      price: 7.78,
      category: "history",
    },
    {
      asin: "0393635244",
      title: "These Truths: A History of the United States",
      img: "https://images-na.ssl-images-amazon.com/images/I/91NZ5Cw-4TL.jpg",
      price: 29.27,
      category: "history",
    },
    {
      asin: "0316067601",
      title:
        "Lone Survivor: The Eyewitness Account of Operation Redwing and the Lost Heroes of SEAL Team 10",
      img: "https://images-na.ssl-images-amazon.com/images/I/411nhI-kPYL.jpg",
      price: 9.86,
      category: "history",
    },
    {
      asin: "0743270754",
      title: "Team of Rivals: The Political Genius of Abraham Lincoln",
      img: "https://images-na.ssl-images-amazon.com/images/I/51bpOR8qigL.jpg",
      price: 13.14,
      category: "history",
    },
    {
      asin: "1455566675",
      title: "The Plaza: The Secret Life of America's Most Famous Hotel",
      img: "https://images-na.ssl-images-amazon.com/images/I/41v0b001ouL.jpg",
      price: 17.1,
      category: "history",
    },
    {
      asin: "0385534248",
      title:
        "Killers of the Flower Moon: The Osage Murders and the Birth of the FBI",
      img: "https://images-na.ssl-images-amazon.com/images/I/81XMxzljGaL.jpg",
      price: 16.29,
      category: "history",
    },
    {
      asin: "1933782048",
      title:
        "This Fleeting World: A Short History of Humanity (AP World History & Teachers' Edition)",
      img: "https://images-na.ssl-images-amazon.com/images/I/81dMjTpUMnL.jpg",
      price: 14.11,
      category: "history",
    },
    {
      asin: "0316743003",
      title: "Skunk Works: A Personal Memoir of My Years at Lockheed",
      img: "https://images-na.ssl-images-amazon.com/images/I/514RGQ3bURL.jpg",
      price: 12.74,
      category: "history",
    },
    {
      asin: "0316202304",
      title:
        "Area 51: An Uncensored History of America's Top Secret Military Base",
      img: "https://images-na.ssl-images-amazon.com/images/I/71QPBFYW0eL.jpg",
      price: 11.59,
      category: "history",
    },
    {
      asin: "1977052304",
      title: "Helmet for My Pillow: From Parris Island to the Pacific",
      img: "https://images-na.ssl-images-amazon.com/images/I/511sLO4dtwL.jpg",
      price: 5.66,
      category: "history",
    },
    {
      asin: "1465475850",
      title: "History of the World Map by Map",
      img: "https://images-na.ssl-images-amazon.com/images/I/811X5Rx5atL.jpg",
      price: 42.28,
      category: "history",
    },
    {
      asin: "1627790640",
      title:
        "Killing England: The Brutal Struggle for American Independence (Bill O'Reilly's Killing Series)",
      img: "https://images-na.ssl-images-amazon.com/images/I/91g9OsxMUUL.jpg",
      price: 16.67,
      category: "history",
    },
    {
      asin: "1938895223",
      title:
        "The Know Your Bill of Rights Book: Don't Lose Your Constitutional Rights--Learn Them!",
      img: "https://images-na.ssl-images-amazon.com/images/I/51aBg4cHcUL.jpg",
      price: 11.87,
      category: "history",
    },
    {
      asin: "1455586625",
      title: "End Game (Will Robie Series)",
      img: "https://images-na.ssl-images-amazon.com/images/I/516ykejOh0L.jpg",
      price: 8.77,
      category: "horror",
    },
    {
      asin: "0316405345",
      title: "Invisible",
      img: "https://images-na.ssl-images-amazon.com/images/I/61rnkCg2iYL.jpg",
      price: 25.48,
      category: "horror",
    },
    {
      asin: "0525542264",
      title: "The Lost Ones (A Quinn Colson Novel)",
      img: "https://images-na.ssl-images-amazon.com/images/I/61ZJTk%2BkoGL.jpg",
      price: 6.79,
      category: "horror",
    },
    {
      asin: "1455559822",
      title: "Memory Man (Amos Decker)",
      img: "https://images-na.ssl-images-amazon.com/images/I/81sIePWJQwL.jpg",
      price: 13.99,
      category: "horror",
    },
    {
      asin: "1455586609",
      title: "End Game (Will Robie Series)",
      img: "https://images-na.ssl-images-amazon.com/images/I/515wWsW%2BWkL.jpg",
      price: 15.8,
      category: "horror",
    },
    {
      asin: "006113922X",
      title: "Florida Roadkill: A Novel (Serge Storms)",
      img: "https://images-na.ssl-images-amazon.com/images/I/51Xg-CTAszL.jpg",
      price: 13.52,
      category: "horror",
    },
    {
      asin: "0062381652",
      title: "The Bone Labyrinth: A Sigma Force Novel (Sigma Force Novels)",
      img: "https://images-na.ssl-images-amazon.com/images/I/51SxxMdEk8L.jpg",
      price: 6.54,
      category: "horror",
    },
    {
      asin: "0399575545",
      title: "The Romanov Ransom (A Sam and Remi Fargo Adventure)",
      img: "https://images-na.ssl-images-amazon.com/images/I/914x%2Buf40qL.jpg",
      price: 18.34,
      category: "horror",
    },
    {
      asin: "0345548531",
      title: "Staked: The Iron Druid Chronicles, Book Eight",
      img: "https://images-na.ssl-images-amazon.com/images/I/91eMFXdhM0L.jpg",
      price: 7.59,
      category: "horror",
    },
    {
      asin: "156975599X",
      title: "Patriots: A Novel of Survival in the Coming Collapse",
      img: "https://images-na.ssl-images-amazon.com/images/I/51REczj2RJL.jpg",
      price: 14.0,
      category: "horror",
    },
    {
      asin: "0735219257",
      title: "A Delicate Touch (A Stone Barrington Novel)",
      img: "https://images-na.ssl-images-amazon.com/images/I/91FAwkAWvRL.jpg",
      price: 14.94,
      category: "horror",
    },
    {
      asin: "1597808709",
      title: "A Second Chance: The Chronicles of St. Mary's Book Three",
      img: "https://images-na.ssl-images-amazon.com/images/I/714wSBJshRL.jpg",
      price: 9.86,
      category: "horror",
    },
    {
      asin: "0804178801",
      title: "Night School",
      img: "https://images-na.ssl-images-amazon.com/images/I/51nRytR2rbL.jpg",
      price: 13.25,
      category: "horror",
    },
    {
      asin: "045120865X",
      title: "Blaze Wyndham",
      img: "https://images-na.ssl-images-amazon.com/images/I/71Ul8Eoz09L.jpg",
      price: 22.32,
      category: "romance",
    },
    {
      asin: "1499860846",
      title: "The Seventh Scroll (2) (The Egyptian Series)",
      img: "https://images-na.ssl-images-amazon.com/images/I/81j3E4E4lyL.jpg",
      price: 13.49,
      category: "romance",
    },
    {
      asin: "1524762474",
      title: "The Mountain Between Us (Movie Tie-In): A Novel",
      img: "https://images-na.ssl-images-amazon.com/images/I/91oO1lRHkaL.jpg",
      price: 10.3,
      category: "romance",
    },
    {
      asin: "0804192499",
      title: "Utah Blaine",
      img: "https://images-na.ssl-images-amazon.com/images/I/816d9nB7r5L.jpg",
      price: 22.14,
      category: "romance",
    },
    {
      asin: "1524783358",
      title: "North to the Rails: A Novel (Talon and Chantry)",
      img: "https://images-na.ssl-images-amazon.com/images/I/71r0NaakVfL.jpg",
      price: 25.71,
      category: "romance",
    },
    {
      asin: "0345511433",
      title: "Crucible: Star Wars Legends",
      img: "https://images-na.ssl-images-amazon.com/images/I/81cOWVjJWFL.jpg",
      price: 7.59,
      category: "romance",
    },
    {
      asin: "0739323741",
      title:
        "The Collected Bowdrie Dramatizations: Volume III (Chuck Bowdrie's Adventures)",
      img: "https://images-na.ssl-images-amazon.com/images/I/912EUMHHMgL.jpg",
      price: 27.27,
      category: "romance",
    },
    {
      asin: "0553804529",
      title:
        "The Collected Short Stories of Louis L'Amour, Volume 3: The Frontier Stories",
      img: "https://images-na.ssl-images-amazon.com/images/I/71p8msuFWAL.jpg",
      price: 17.38,
      category: "romance",
    },
    {
      asin: "0307737543",
      title: "Last of the Breed",
      img: "https://images-na.ssl-images-amazon.com/images/I/81lFpMN9uXL.jpg",
      price: 22.09,
      category: "romance",
    },
    {
      asin: "0735286124",
      title: "Radigan: A Novel",
      img: "https://images-na.ssl-images-amazon.com/images/I/81yNX5v5uAL.jpg",
      price: 20.44,
      category: "romance",
    },
    {
      asin: "1489713921",
      title: "River Divided",
      img: "https://images-na.ssl-images-amazon.com/images/I/71nt4jhGwUL.jpg",
      price: 3.23,
      category: "romance",
    },
    {
      asin: "0804127093",
      title: "The Quick and the Dead",
      img: "https://images-na.ssl-images-amazon.com/images/I/71EfTDy1sgL.jpg",
      price: 27.62,
      category: "romance",
    },
    {
      asin: "0990846105",
      title: "Apparition Island (4) (The Windjammer Mystery Series)",
      img: "https://images-na.ssl-images-amazon.com/images/I/51yDJ5TgDbL.jpg",
      price: 12.72,
      category: "romance",
    },
    {
      asin: "0875654282",
      title: "Sins of the Younger Sons",
      img: "https://images-na.ssl-images-amazon.com/images/I/81sC1XaM7XL.jpg",
      price: 24.89,
      category: "romance",
    },
    {
      asin: "0307737500",
      title: "The Walking Drum",
      img: "https://images-na.ssl-images-amazon.com/images/I/81OzqN3T0FL.jpg",
      price: 25.86,
      category: "romance",
    },
    {
      asin: "0525531491",
      title: "The Mountain Between Us (Movie Tie-In): A Novel",
      img: "https://images-na.ssl-images-amazon.com/images/I/91DyWHD5eAL.jpg",
      price: 19.36,
      category: "romance",
    },
    {
      asin: "0441017851",
      title: "The Devil's Eye (An Alex Benedict Novel)",
      img: "https://images-na.ssl-images-amazon.com/images/I/91-z5E-Y8QL.jpg",
      price: 7.99,
      category: "romance",
    },
    {
      asin: "045146799X",
      title: "Gameboard of the Gods",
      img: "https://images-na.ssl-images-amazon.com/images/I/81-vppSolJL.jpg",
      price: 7.59,
      category: "scifi",
    },
    {
      asin: "1101987790",
      title: "Silver Silence (Psy-Changeling Trinity)",
      img: "https://images-na.ssl-images-amazon.com/images/I/91eGxsWGH7L.jpg",
      price: 17.6,
      category: "scifi",
    },
    {
      asin: "0987575422",
      title:
        "The Battle of Evernight - Special Edition: The Bitterbynde Book #3 (The Bitterbynde Trilogy)",
      img: "https://images-na.ssl-images-amazon.com/images/I/51vw%2Bn7xZCL.jpg",
      price: 9.6,
      category: "scifi",
    },
    {
      asin: "1492667137",
      title: "Nightchaser",
      img: "https://images-na.ssl-images-amazon.com/images/I/514%2BSppz8AL.jpg",
      price: 4.84,
      category: "scifi",
    },
    {
      asin: "1635551226",
      title: "Proxima Five",
      img: "https://images-na.ssl-images-amazon.com/images/I/61pDS5vOIdL.jpg",
      price: 16.34,
      category: "scifi",
    },
    {
      asin: "1773840509",
      title: "The Cyborg's Stowaway: In the Stars Romance (Gypsy Moth)",
      img: "https://images-na.ssl-images-amazon.com/images/I/51mV63NrjdL.jpg",
      price: 3.73,
      category: "scifi",
    },
    {
      asin: "1732587035",
      title: "Apparent Power: Diazem Trilogy, Book One",
      img: "https://images-na.ssl-images-amazon.com/images/I/61Q5NcIAeaL.jpg",
      price: 8.65,
      category: "scifi",
    },
  ];

  return (
    <div className="App" style={{ padding: "1rem" }}>
      <h1>Lista dei Libri</h1>
      <BookList books={books} />
    </div>
  );
};

export default App;
