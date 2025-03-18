import { useEffect, useState } from "react";

const useTableController = () => { 
    
  const [rows, setRows] = useState([]);
  const [totalRowsCount, setTotalRowsCount] = useState(0);
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(5);

  const [filters, setFilters] = useState("");
  const [loading, setLoading] = useState(false);
  const pageSizeOptions = [5, 10, 20];

    useEffect(() => {
      setLoading(true);
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
        loading,
        pageSizeOptions,
        setPage,
        setPageSize,
        setFilters
    };
}

export default useTableController