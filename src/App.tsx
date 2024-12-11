import {useState} from "react"
import {Data, hardcodedData} from "./consts"
import {Input} from "./components/Input"
import {Link} from "./components/Link"
import {RemoveButton} from "./components/RemoveButton"
import {AllResults} from "./components/AllResults"

function App() {
  const [inputValue, setInputValue] = useState('')
  const [shouldShowHints, setShouldShowHints] = useState(false)
  const [history, setHistory] = useState<string[]>([])
  const [selectedItem, setSelectedItem] = useState<string | null>(null)
  const [hints, setHints] = useState<Data[]>([])

  return (
    <div style={{
      width: '100%',
      height: '100%',
      display: 'grid',
      gridTemplateRows: 'min-content auto'
    }}>
      <div onBlur={() => setShouldShowHints(false)}>
        <Input
          hints={hints}
          data={hardcodedData}
          inputValue={inputValue}
          setShouldShowHints={setShouldShowHints}
          setHistory={setHistory}
          setSelectedItem={setSelectedItem}
          setInputValue={setInputValue}
          setHints={setHints}
        />
        {
          shouldShowHints && (
            <ul>
              {
                hints
                  .slice(0, 10)
                  .map((word) => (
                    <li
                      style={{
                        display: 'grid',
                        gridTemplateColumns: '200px 1fr',
                        cursor: 'pointer',
                      }}
                      key={word.id}
                    >
                      <Link
                        history={history}
                        word={word}
                        setInputValue={setInputValue}
                        setHistory={setHistory}
                        setSelectedItem={setSelectedItem}
                      />
                      {
                        history.includes(word.id) && (
                          <RemoveButton setHistory={setHistory} word={word} />
                        )
                      }
                    </li>
                  ))
              }
            </ul>
          )
        }
      </div>
      {
        selectedItem && (
          <AllResults
            data={hardcodedData.filter(word => word.value.startsWith(selectedItem))}
            setSelectedItem={setSelectedItem}
          />
        )
      }
    </div >
  )
}

export default App
