import React from 'react'

export default function NewRelease({ latestIssue }) {
  return (
    <div>
      {latestIssue.contents.map((issue, index) => (
        <p key={index}>{issue.title}</p>
      ))}
    </div>
  )
}
