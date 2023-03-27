interface CheckboxProps {
  label: string
}

export const Checkbox: React.FC<CheckboxProps> = ({ label }) => {
  return (
    <>
      <label className="checkbox m-0">
        <input type="checkbox"></input>
        <span className="">{label}</span>
      </label>
    </>
  )
}
