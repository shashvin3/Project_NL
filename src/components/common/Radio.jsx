function Radio({ label, name, value, checked, onChange }) {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="accent-blue-600"
      />
      <span>{label}</span>
    </label>
  );
}

export default Radio;