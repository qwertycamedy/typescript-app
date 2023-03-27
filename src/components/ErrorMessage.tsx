import React from 'react'

interface ErrorMessageProps {
    error: string
}

const ErrorMessage = ({error}: ErrorMessageProps) => {
  return (
    <p className="text-red-500">{error}</p>
  )
}

export default ErrorMessage