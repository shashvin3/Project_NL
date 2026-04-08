function Input({ label,error, ...props}) {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium">
        {label}
      </label>
      <input
        {...props}
        className={`w-full border rounded-lg px-3 py-2 outline-none focus:ring ${error? 'border-red-500 focus:ring-red-400' : 'border-gray-500 focus:ring-blue-500'}`}    
      />
      {error && <p className="text-xs text-red-500 mt-1 font-medium">{error}</p>}
    </div>
  );
}

export default Input;