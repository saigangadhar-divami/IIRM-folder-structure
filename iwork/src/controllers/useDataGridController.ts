import { useEffect, useState } from "react";

const useTableController = () => { 
    
  const [rows, setRows] = useState([]);
  const [totalRowsCount, setTotalRowsCount] = useState(0);
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(5);

  const [filters, setFilters] = useState("");
  const [loader, setLoader] = useState(false);

    useEffect(() => {
      setLoader(true);
    // fetchStudents(page, pageSize, filters).then((data) => {
    //   setRows(data.students);
    //   setTotalRowsCount(data.totalCount);
    //   setLoader(false);
    // });
  }, [page, pageSize, filters]);
    
    return {
        rows,
        totalRowsCount,
        page,
        pageSize,
        filters,
        loader,
        setPage,
        setPageSize,
        setFilters
    };
}

export default useTableController