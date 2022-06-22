import { useEffect, useState } from 'react'


export const useInfo = (value) => {
  const [infoIndex, setInfoIndex] = useState(0)

  useEffect(() => {
    Array.from(value.current.children).map(item => {
      item.style.opacity = '0'
    })
    value.current.children[infoIndex].style.opacity = '1'
  }, [infoIndex])

  const setActiveTab = (even, classSearch) => {
    if (even.target.classList.contains(classSearch)) {
      const allTabs = Array.from(even.target.parentElement.children)

      allTabs.map(tab => tab.classList.remove('show'))
      setInfoIndex(allTabs.indexOf(even.target))

      even.target.classList.add('show')
    }
  }

  return {
    infoIndex,
    setActiveTab
  }
}