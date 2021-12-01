import React, { useState } from 'react'
import Data from './data/data'


function App() {

  const [data, setData] = useState(Data)
  
  return (
    <>
      { console.log(data.member[4].progress) }

      <Nonsession data={data}/>
    </>
  )
}

function Nonsession(props) {
  if(props.data.member[4].progress.length === 0) {
    return(
      <div>
        아무것도 없엉
      </div>
    )
  } else {
    return( 
      <div>
        아니랑께
      </div>
    )
  }
}

export default App
