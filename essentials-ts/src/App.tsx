import './App.css'
import { CORE_CONCEPTS } from './data';

function CoreConcepts({ title, description, image }: { title: string, description: string, image: string }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

function App() {

  return (
    <div>
      <header>
        <img src="assets/react-core-concepts.png" alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          Fundamental React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>

      <main>
        <h2>Time to get started!</h2>
        <section id="core-concepts" data-testid="core-concepts">
          <ul>
            {CORE_CONCEPTS.map((concept, index) => (
              <CoreConcepts key={index} {...concept} />
            ))}
          </ul>
        </section>
      </main>
    </div>
  )
}

export default App
