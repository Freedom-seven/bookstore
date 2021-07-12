import React from 'react';

const App = (props) => {
  const [bookstore, setBookstore] = useState({
    bookStore: [
      {
        title: "Programmer",
        author: "Freedom",
        description: "Discover your hidden Talent"
      },
      {
        title: "Coding",
        author: "Randy",
        description: "Lrean to CODE the right way"
      },
      {
        title: "LIFE",
        author: "Orlando",
        description: "LIFE as a DEVELOPER"
      }
    ]
  })
  return (
    <div>
      <h1>BOOKSTORE</h1>
    </div>
  );
}

export default App;
