import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import TableHeader from "../components/TableHeader";
import TableContent from "../components/TableContent";
const TablePage = () => {
  const BASEURL = "https://dataneuron-server.onrender.com";

  const [item, setItem] = useState("");
  const [id, setId] = useState("");
  const [data, setData] = useState([]);
  const [counts, setCounts] = useState({
    addCount: 0,
    updateCount: 0,
  });

  const handleAddBtn = async (e) => {
    e.preventDefault();

    if (item) {
      await axios.post(`${BASEURL}/api/addItem`, {
        itemName: item,
      });
      getData();
      setItem("");
    }

    console.log(item);
  };

  const handleUpdateBtn = async (e) => {
    e.preventDefault();
    if (item) {
      let data = {
        name: item,
        _id: id,
      };
      let resp = await axios.post(`${BASEURL}/api/updateItem`, data);
      console.log(resp.data);
      getData();
      setItem("");
      setId("");
    }

    console.log(item);
  };

  const getData = async () => {
    let response = (await axios.get(`${BASEURL}/api/item`)).data;
    console.log(response);
    setData(response.data.itemName);
    setCounts({
      addCount: response?.data?.addCount,
      updateCount: response?.data?.updateCount,
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div>
        <TableHeader counts={counts} />
      </div>
      <Box>
        <TableContent
          data={data}
          item={item}
          setItem={setItem}
          handleAddBtn={handleAddBtn}
          handleUpdateBtn={handleUpdateBtn}
          id={id}
          setId={setId}
        />
      </Box>
    </>
  );
};

export default TablePage;
