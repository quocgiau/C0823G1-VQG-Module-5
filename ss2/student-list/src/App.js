import logo from './logo.svg';
import './App.css';
import './index.css';

function App() {
  let students = [
    {
      company: 'Alfreds Futterkiste',
      contact: 'Maria Anders',
      country: 'Germany'
    },
    {
      company: 'Centro comercial Moctezuma',
      contact: 'Francisco Chang',
      country: 'Mexico'
    },
    {
      company: 'Ernst Handel',
      contact: 'Roland Mendel',
      country: 'Austria'
    },
    {
      company: 'Island Trading',
      contact: 'Helen Bennett',
      country: 'UK'
    },
    {
      company: 'Laughing Bacchus Winecellars',
      contact: 'Yoshi Tannamuri',
      country: 'Canada'
    },
    {
      company: 'Magazzini Alimentari Riuniti',
      contact: 'Giovanni Rovelli',
      country: 'Italy'
    }
  ]
  return (
    <div className="App">
      <table>
        <tbody>
        <tr>
          <th>Company</th>
          <th>Contact</th>
          <th>Country</th>
        </tr>
        </tbody>
        {students.map(student => (
            <tr key={student.company}>
              <td>{student.company}</td>
              <td>{student.contact}</td>
              <td>{student.country}</td>
            </tr>
        ))}
      </table>
    </div>
  );
}

export default App;
