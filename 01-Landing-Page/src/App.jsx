import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from './components/Examples.jsx';

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts></CoreConcepts>
        <Examples></Examples>
      </main>
    </>
  );
}

export default App;

// Learned ///////////////////
// importing images and css files is possible in jsx files
// public vs src/assets folders for images
// styles in css files are not restricted for a specific component, later on we will learn how to scope it
// dynamic css
// outputing list of data:           <ul>
// {CORE_CONCEPTS.map((conceptItem) => (
//   <CoreConcept {...conceptItem} />
// ))}
// </ul>

///////////////////////
// using js instead of jsx will require using React.createElement()... lec 61

//setIsEditing((isEditing) => !isEditing); => change instantly
//setIsEditing(!isEditing); => change is scheduled
//<input type="text" required defaultValue={name} />

// when setting the state of an object or an array, we make a new copy and set the value of the copy. because setting the value of the original will change it in the memory before react would execute it
// minimize the number of states as much as possible and maximize the derived data from states
