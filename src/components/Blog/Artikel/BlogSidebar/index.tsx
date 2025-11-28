export default function BlogSidebar() {
  return (
    <aside className="w-full md:w-1/3 lg:w-1/4 space-y-6">
      {/* Search */}
      <div className="p-4 bg-white shadow rounded-xl">
        <h4 className="font-semibold mb-3">Search</h4>
        <input
          type="text"
          placeholder="Search"
          className="w-full border p-2 rounded-md"
        />
      </div>

      {/* Categories */}
      <div className="p-4 bg-white shadow rounded-xl">
        <h4 className="font-semibold mb-3">Kategori</h4>
        <ul className="space-y-2">
          <li className="p-2 border rounded-md">Kategori 1</li>
          <li className="p-2 border rounded-md">Kategori 2</li>
          <li className="p-2 border rounded-md">Kategori 3</li>
        </ul>
      </div>

      {/* Latest Blog */}
      <div className="p-4 bg-white shadow rounded-xl">
        <h4 className="font-semibold mb-3">Blog Terbaru</h4>
        <ul className="space-y-3">
          <li>
            <h5 className="font-medium text-sm">
              Cara Memilih Oli Mesin yang Tepat
            </h5>
            <p className="text-xs text-gray-500">12 Jan, 2025</p>
          </li>
          <li>
            <h5 className="font-medium text-sm">
              Tips Merawat Mesin Mobil
            </h5>
            <p className="text-xs text-gray-500">14 Jan, 2025</p>
          </li>
        </ul>
      </div>
    </aside>
  );
}
