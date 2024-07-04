import CoreConcept from './CoreConcept/CoreConcept.jsx';
import { CORE_CONCEPTS } from '../data';

export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Time to get started!</h2>
      <ul>
        {CORE_CONCEPTS.map((conceptItem) => (
          <CoreConcept {...conceptItem} />
        ))}
      </ul>
    </section>
  );
}
