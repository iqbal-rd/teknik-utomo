export default function Pagination() {
  return (
    <div className="flex justify-center mt-6 gap-2">
      <button className="px-3 py-1 border rounded-md">Prev</button>
      <button className="px-3 py-1 border rounded-md bg-blue-600 text-white">
        1
      </button>
      <button className="px-3 py-1 border rounded-md">2</button>
      <button className="px-3 py-1 border rounded-md">Next</button>
    </div>
  );
}
