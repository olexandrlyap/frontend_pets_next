import { useState, useEffect } from "react"

export default function PetCategoryTags({tag,  handleTagSelect}) {

  const tagStyle = 'inline-flex items-center px-2.5 py-0.5 m-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800'
  const selectedTagStyle= 'inline-flex items-center px-2.5 py-0.5 m-0.5 rounded-full text-xs font-medium bg-indigo-600 text-white'

  
  return (
    <p onClick={() => handleTagSelect(tag) } className={tag?.isSelected ? selectedTagStyle : tagStyle}>
      {tag.name}
    </p>
  )
}
