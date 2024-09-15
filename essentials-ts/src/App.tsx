import './App.css'

export const userData = {
  firstName: 'Maximilian', // feel free to replace the name value
  lastName: 'Schwarzmüller', // feel free to replace the name value
  title: 'Instructor', // feel free to replace the title value
};

export function User() {
  return (
    <div id="user" data-testid="user">
      <h2>{userData.firstName} {userData.lastName}</h2>
      <p>{userData.title}</p>
    </div>
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
        <User />
      </main>
    </div>
  )
}

export default App
