import React from 'react';

// DEFINE YOUR COMPONENT HERE
// IMPORTANT: Add "export" in front of your component - otherwise the automated tests won't work
// ...

// DO NOT EDIT THE APP COMPONENT NAME OR CONTENT
// Except for outputting your custom component

export function MainGoal() {
    return <p>My main goal: Learn React in great detail</p>;
}

function App() {
    return (
        <div id="app">
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
                <h1>Time to Practice!</h1>
                <p>
                    Build a <code>&lt;MainGoal&gt;</code> component and insert it below this
                    text.
                </p>
                <p>
                    Your <code>&lt;MainGoal&gt;</code> component should simply output some
                    text that describes your main course goal (e.g., &quot;My main goal:
                    Learn React in great detail&quot;).
                </p>
                <p>
                    <strong>Important:</strong> You custom component must contain the text
                    &quot;My main goal:&quot;
                </p>
                <p>
                    <strong>Also important:</strong> For the automatic checks to succeed,
                    you <strong>must export</strong> your custom component function! Not as
                    a default but simply by adding the <code>export</code> keyword in front
                    of your function (e.g., <code>export function YOUR_COMPONENT_NAME</code>
                    ).
                </p>
                <MainGoal></MainGoal>
                {/* DON'T CHANGE THE TEXT / CONTENT ABOVE */}
                {/* OUTPUT YOUR COMPONENT HERE */}
            </main>
        </div>
    );
}

export default App;
