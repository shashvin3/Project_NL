function Input({ label,error,icon, ...props}) {
  return (
    <div className="w-full">
      <div className="flex items-center gap-2">
      {icon && <span className="text-[#1e3a8a]">{icon}</span>}
      <label className="block mb-2 text-sm font-medium">{label}</label>
      </div>
      <input
        {...props}
        className={`w-full border rounded-lg px-3 py-2 outline-none focus:ring ${error? 'border-red-500 focus:ring-red-400':'border-gray-500 focus:ring-blue-500'}`}    
      />
      {error && <p className="text-xs text-red-500 mt-1 font-medium">{error}</p>}
    </div>
  );
}

export default Input;