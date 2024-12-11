import {useState} from "react"
import {faker} from "@faker-js/faker"

const hardcodedData = Array(1000).fill(1).map(() => ({
  id: faker.string.uuid(),
  value: faker.word.sample(1000),
  description: faker.lorem.sentence()
}))

function App() {
  const [inputValue, setInputValue] = useState('')
  const [shouldShowHints, setShouldShowHints] = useState(false)

  return (
    <div style={{
      width: '100%',
      height: '100%',
      display: 'grid',
      gridTemplateRows: 'min-content auto'
    }}>
      <input
        autoFocus
        type="text"
        value={inputValue}
        onBlur={() => setShouldShowHints(false)}
        onChange={(e) => {
          setShouldShowHints(true)
          setInputValue(e.target.value)
        }}
      />
      {
        shouldShowHints && (
          <ul>
            {
              hardcodedData
                .filter(word => word.value.startsWith(inputValue))
                .slice(0, 10)
                .map((word) => (
                  <li key={word.id}>
                    {word.value}
                  </li>
                ))
            }
          </ul>
        )
      }

    </div>
  )
}

export default App
