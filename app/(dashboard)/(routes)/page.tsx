import { UserButton } from '@clerk/nextjs'
import React from 'react'

export default function Home() {
 return (
  <React.Fragment>
    <div>
      <UserButton
        afterSignOutUrl='/'
      />
    </div>
  </React.Fragment>
 )
}
