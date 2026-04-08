import { useEffect } from "react";
import greentick from "../../assets/greentick.png";

function Toast({ message, type = "error", onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const styles = {
    error: "bg-red-500",
    success: "bg-green-500",
    warning: "bg-yellow-400 text-blue-900",
  };

  return (
    <div className={`fixed top-5 left-1/2 -translate-x-1/2 z-50 flex items-start gap-3 px-5 py-4 rounded-xl shadow-xl text-white max-w-sm animate-in slide-in-from-top-2 duration-300 ${styles[type]}`}>
      <span className="text-lg">
        {type === "error" && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth={3} strokeLinecap="butt" strokeLinejoin="miter" className="w-8 h-8"><path d="M5 5l14 14" /><path d="M19 5L5 19" /></svg>}
        {type === "warning" && "⚠️"} 
        {type === "success" && <img src={greentick} alt="Success" className="w-6 h-6" />}
      </span>
      <p className="text-sm font-medium flex-1">{message}</p>
      <button onClick={onClose} className="text-white opacity-70 hover:opacity-100 text-lg leading-none">✕</button>
    </div>
  );
}

export default Toast;