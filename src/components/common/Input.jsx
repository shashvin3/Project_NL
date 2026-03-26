function Input({ label, type, value, onChange, placeholder, disabled}) {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"    
      />
    </div>
  );
}

export default Input;