// "use client";
// export default function Checkdatas(){
//     return(
//         <div className="bg-[#ffffff] text-white px-4 md:px-16 py-20 lg:py-4 md:pb-20 lg:pb-20 mx-auto lg:min-h-[650px]">
//             {/* Header */}
//             <div className="mb-16 mt-14">
//                 <h2 className="text-4xl font-semibold text-black">
//                 AG1 is a more in one solution
//                 </h2>
//             </div>

//             {/* table */}
//             <div>

//             </div>
//         </div>
//     )
// }

"use client";

export default function Checkdatas() {

  const rows = ["Vitamins", "Minerals", "Prebiotics", "Probiotics", "Greens & Superfoods","Antioxidants","Stress Adaptogens","Digestive Enzymes"];
  const columns = ["AG1", "Probiotics", "Greens", "Multivitamins"];

  const getCellContent = (rowIndex, colIndex) => {
    // Alternate content based on cell index
    if ((rowIndex + colIndex) % 2 === 0) {
      // Green radio with check symbol
      return (
        <div className="w-6 h-6 bg-[#46DE46] rounded-full mx-auto flex items-center justify-center">
          <span className="text-black text-xs font-bold">✔</span>
        </div>
      );
    } else {
      // Empty radio with black border
      return (
        <div className="w-6 h-6 border border-black rounded-full mx-auto"></div>
      );
    }
  };

  return (
    <div className="bg-[#ffffff] text-white px-4 md:px-16 py-20 lg:py-4 md:pb-20 lg:pb-20 mx-auto lg:min-h-[650px]">
      {/* Header */}
      <div className="mb-16 mt-14">
        <h2 className="text-4xl font-semibold text-black">
          AG1 is a more in one solution
        </h2>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="table-auto border-collapse border border-gray-300 w-full">
          <thead>
            <tr className="bg-white border-b-2 border-gray-300">
              {/* Top row headings */}
              <th className="border border-gray-300 p-4 text-left "></th>
              {columns.map((column, colIndex) => (
                <th key={colIndex} className="border border-gray-300 p-4 text-left text-black">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex} className="bg-white border-b border-gray-300">
                {/* Left column headings */}
                <td className="border border-gray-300 p-4 text-left text-black">{row}</td>

                {/* Table cells with dynamic content */}
                {columns.map((_, colIndex) => (
                  <td key={colIndex} className="border border-black p-4 text-center">
                    {getCellContent(rowIndex, colIndex)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

