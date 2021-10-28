interface TableProps {
  data: any[]
}

const RenderRow = ({ keys, data }: any) => {
  return keys.map((key: any, index: any) => {
    return (
      <td className="px-4 py-2" key={data[key]}>
        <p className=""> {data[key]}</p>
      </td>
    )
  })
}

const Table: React.FC<TableProps> = ({ data }) => {
  const getKeys = () => {
    return Object.keys(data[0])
  }
  const getHeader: any = () => {
    return getKeys().map((key: string, idx: any) => (
      <th
        className="px-6 py-4 text-sm font-semibold text-center uppercase"
        key={idx}
      >
        {key}
      </th>
    ))
  }

  const getRowData = () => {
    return data.map((row, index) => {
      return (
        <tr className="hover:bg-blue-700 hover:text-white" key={index}>
          <RenderRow key={index} data={row} keys={getKeys()} />
        </tr>
      )
    })
  }

  return (
    // <table className="w-full mt-3 overflow-y-auto border-collapse">
    //   <thead>{getHeader()}</thead>
    //   <tbody>{getRowData()}</tbody>
    // </table>

    <div className="w-full overflow-x-auto">
      <table className="w-full mx-auto overflow-hidden bg-white divide-y divide-gray-300 rounded-lg whitespace-nowrap">
        <thead className="bg-gray-900">
          <tr className="text-center text-white">{getHeader()}</tr>
        </thead>
        <tbody className="divide-y divide-gray-200">{getRowData()}</tbody>
      </table>
    </div>
  )
}

export default Table
