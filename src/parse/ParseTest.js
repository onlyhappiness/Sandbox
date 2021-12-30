import React from 'react'

// import Parse from 'parse/dist/parse.min.js';

import Parse from 'parse';

import { initializeParse } from '@parse/react';
import PasConfig from '../pasConfig';
import { useParseQuery } from '@parse/react';
const { parseAppId, parseJavascriptKey, parseServerURL } = PasConfig;

initializeParse(
  parseServerURL,
  parseAppId,
  parseJavascriptKey
);


// import initializeParse from '../../ParseReact'



function ParseTest() {
  // const parseQuery = new Parse.Query('User');
  async function doit() {
    const parseTrainer = Parse.Object.extend("Trainer");
  // console.log('parseTrainer', parseTrainer);
  const query = new Parse.Query(parseTrainer);
  query.include("agency");
  const trainer = await query.find();
    console.log('trainer', trainer)
  }


  // const {
  //   isLive,
  //   isLoading,
  //   isSyncing,
  //   results,
  //   count,
  //   error,
  //   reload
  // } = useParseQuery(parseQuery, {
  //   enableLocalDatastore: true, 
  //   enableLiveQuery: true
  // })

  return (
    <div>
    {/* {isLoading && (
      <p>Loading...</p>
    )}
    {isLive && (
      <p>Live!</p>
    )}
    {isSyncing && (
      <p>Syncing...</p>
    )}
    {results && (
      <ul>
        {results.map(result => (
          <li key={result.id}>
            어떻게 나옴?
          </li>
        ))}
      </ul>
    )}
    <p>{count}</p>
    {error && (
      <p>{error.message}</p>
    )}
    <button
      onClick={reload}
    >
      Reload
    </button> */}
    <button onClick={() => {
      doit();
    }}>눌러</button>
  </div>

  )
}

export default ParseTest
