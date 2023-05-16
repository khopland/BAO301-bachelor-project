export function ListFormElement(props: {
  label: string
  list: [string, string][] | undefined
  onChange: (value: string) => void
}) {
  return (
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={props.label}
      >
        {props.label}
      </label>
      <select
        id={props.label}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        onChange={(e) => props.onChange(e.target.value)}
        defaultValue=""
      >
        <option value="">Choose a {props.label}</option>
        {props.list?.map((val, i) => (
          <option key={i} value={val[0]}>
            {val[1]}
          </option>
        ))}
      </select>
    </div>
  )
}
