import React from 'react'
import GetAccessTokenBtn from './GetAccessTokenBtn';

const TokenCTA = () => {

    
  
    return (
    <section>
      <GetAccessTokenBtn/>
       {/*  <button
          onClick={async () => {
            let claim = await getIdTokenClaims();
            //get all details
            console.log(claim);
            localStorage.setItem('token_claim', JSON.stringify(claim));
          }}
        >
          Get ID Token Claims
        </button> */}
      </section>
  )
}

export default TokenCTA