

export default function PetCategoryTypes({category, index}) {

  return (
    <div className="flex items-center">
        <input id={index + '_' + category} name={category} value={category}  type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
        <label htmlFor={index + '_' + category} className="ml-3 text-sm text-gray-600">{category} </label>
    </div>
  )
}
