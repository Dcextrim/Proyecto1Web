import { useEffect, useRef } from 'react'

function Display({ value }) {
  const displayRef = useRef(null)

  useEffect(() => {
    displayRef.current?.classList.add('flash')
    const t = setTimeout(() => displayRef.current?.classList.remove('flash'), 200)
    return () => clearTimeout(t)
  }, [value])

  return <div className="display" ref={displayRef}>{value}</div>
}

export default Display