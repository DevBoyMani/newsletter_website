

"use client";

export default function Checkdatas() {
  const rows = [
    "Vitamins",
    "Minerals",
    "Prebiotics",
    "Probiotics",
    "Greens & Superfoods",
    "Antioxidants",
    "Stress Adaptogens",
    "Digestive Enzymes",
  ];
  const columns = ["AG1", "Probiotics", "Greens", "Multivitamins"];

  const getCellContent = (rowIndex, colIndex) => {
    const isFirstColumn = colIndex === 0;

    const greenCheckCells = [
      { row: 0, col: 1 },
      { row: 1, col: 1 },
      { row: 3, col: 2 },
      { row: 4, col: 4 },
      { row: 5, col: 4 },
      { row: 4, col: 3 },
      { row: 5, col: 3 },
    ];

    const isGreenCheck = greenCheckCells.some(
      (cell) => cell.row === rowIndex && cell.col === colIndex
    );

    if (isFirstColumn || isGreenCheck) {
      return (
        <div className="w-6 h-6 bg-[#46DE46] rounded-full flex items-center justify-center mx-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5  text-black "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
      );
    }
    return (
      <div className="w-6 h-6 flex items-center justify-center mx-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <circle cx="12" cy="12" r="10" stroke="currentColor" />
        </svg>
      </div>
    );
  };

  return (
    <>
      {/* Desktop View */}
      <div className="bg-[#ffffff] text-white px-4 md:px-16 py-20 lg:py-4 md:pb-20 lg:pb-20 mx-auto lg:min-h-[650px] hidden md:block">
        {/* Header */}
        <div className="mb-16 mt-14">
          <h2 className="text-4xl font-semibold text-black">
            AG1 is a more in one solution
          </h2>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto border-collapse border-b border-gray-300 w-full">
            <thead>
              <tr className="bg-white border-b border-gray-300">
                {/* Left Heading Column */}
                <th
                  className="border-b border-gray-300 text-center"
                  style={{ width: "246px", height: "96px" }}
                ></th>

                {/* Top Row Headings */}
                {columns.map((column, colIndex) => (
                  <th
                    key={colIndex}
                    className={`border-b border-gray-300 text-center text-black ${
                      column === "AG1"
                        ? "bg-[#0C3D3D] text-white rounded-t-xl"
                        : "bg-white"
                    }`}
                    style={{ width: "246px", height: "96px" }}
                  >
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, rowIndex) => (
                <tr key={rowIndex} className="bg-white border-b border-gray-300">
                  {/* Left column headings */}
                  <td
                    className="border-b border-gray-300 text-left text-black"
                    style={{
                      width: "246px",
                      height: "76px",
                    }}
                  >
                    <div className="flex items-center h-full px-4">{row}</div>
                  </td>

                  {/* Data cells */}
                  {columns.map((_, colIndex) => (
                    <td
                      key={colIndex}
                      className="border-b p-0 border-gray-300 text-center"
                      style={{ width: "246px", height: "77px" }}
                    >
                      {colIndex === 0 ? (
                        <div className="bg-[#0C3D3D] h-full w-full flex justify-center items-center">
                          {getCellContent(rowIndex, colIndex)}
                        </div>
                      ) : (
                        getCellContent(rowIndex, colIndex)
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile View */}
      <div className="block md:hidden bg-[#ffffff] text-white px-4 py-10">
      <div className="mb-16 mt-14">
          <h2 className="text-4xl font-semibold text-black">
            AG1 is a more in one solution
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="table-auto border-collapse border-b border-gray-300 w-full">
            <thead>
              <tr className="bg-white border-b border-gray-300">
                {/* Left Heading Column */}
                <th
                  className="border-b border-gray-300 text-center sticky left-0 bg-white"
                  style={{ width: "120px", height: "46px" }}
                ></th>

                {/* Top Row Headings */}
                {columns.map((column, colIndex) => (
                  <th
                    key={colIndex}
                    className={`border-b border-gray-300 text-center text-black ${
                      column === "AG1"
                        ? "bg-[#0C3D3D] text-white rounded-t-xl"
                        : "bg-white"
                    }`}
                    style={{
                      width: "110px",
                      height: "80px",
                      padding:"8px"
                    }}
                  >
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, rowIndex) => (
                <tr key={rowIndex} className="bg-white border-b border-gray-300">
                  {/* Left column headings */}
                  <td
                    className="border-b border-gray-300 text-left text-black sticky left-0 bg-white"
                    style={{
                      width: "120px",
                      height: row.includes(" ") ? "68px" : "46px",
                    }}
                  >
                    <div className="flex items-center h-full px-4">{row}</div>
                  </td>

                  {/* Data cells */}
                  {columns.map((_, colIndex) => (
                    <td
                      key={colIndex}
                      className="border-b p-0 border-gray-300 text-center"
                      style={{
                        width: "110px",
                        height: row.includes(" ") ? "80px" : "60px",
                      }}
                    >
                      {colIndex === 0 ? (
                        <div className="bg-[#0C3D3D] p-8 h-full w-full flex justify-center items-center">
                          {getCellContent(rowIndex, colIndex)}
                        </div>
                      ) : (
                        getCellContent(rowIndex, colIndex)
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
