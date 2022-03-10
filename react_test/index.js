// from Scrimba: Frontend Developer Career Path - React Basics

function PageComponent() {
  return (
    <main>
      <img src="./images/doodle1.png" alt="react logo" width="40px" />
      <h1>Fun facts about Goldendoodles</h1>
      <ul>
        <li>Social butterflies; great family dogs</li>
        <li>High energy; love to roam and play</li>
        <li>Ideal as service dogs</li>
        <li>May also be known as Groodles</li>
      </ul>
    </main>
  );
}

ReactDOM.render(<PageComponent />, document.getElementById('root'));
