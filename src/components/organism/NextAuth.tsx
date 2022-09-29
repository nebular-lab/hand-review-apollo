import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'

const NextAuth = () => {
  const { data: session } = useSession()
  return (
    <div>
      <p>
        {!session && (
          <div>
            <span>You are not signed in</span>
            <a
              href={`/api/auth/signin`}
              onClick={(e) => {
                e.preventDefault()
                signIn()
              }}
            >
              Sign in
            </a>
          </div>
        )}
        {session?.user && (
          <div>
            {session.user.image && <span />}
            <span>
              <small>Signed in as</small>
              <br />
              <strong>{session.user.email ?? session.user.name}</strong>
            </span>
            <a
              href={`/api/auth/signout`}
              onClick={(e) => {
                e.preventDefault()
                signOut()
              }}
            >
              Sign out
            </a>
          </div>
        )}
      </p>
    </div>
  )
}

export default NextAuth
