function Spinner() {
  return (
    <div className="fixed  inset-0 bg-black/50 z-50 flex justify-center items-center">
      <div className="w-16 h-16 border-8 border-t-black border-x-transparent border-b-zinc-500 rounded-full animate-spin"></div>
    </div>
  );
}

export default Spinner;
