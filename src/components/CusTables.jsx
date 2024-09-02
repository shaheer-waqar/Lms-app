import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { collection, getDocs } from 'firebase/firestore';
import { db, storage } from '../config/Firebase-config';
import { getDownloadURL, ref } from 'firebase/storage';


export default function CusTables({data=[],columns=[],showDownload = false}) {
  let [studentsData, setStudentsData] = React.useState([]);

  React.useEffect(() => {
    getData();
  },[]);
  
  const getData = async () => {
    let arr = [];
    const querySnapshot = await getDocs(collection(db, data));
    // console.log(querySnapshot.docs)
    const promises = querySnapshot.docs.map(async(doc)=>{
      let docdta = doc.data();

      if(docdta.file){
        const filepath = docdta.file;
        // console.log(filepath);
        const downloadUrl = await getDownloadURL(ref(storage,filepath));
        arr.push({ ...docdta, id: doc.id, file: downloadUrl }); 

      }else{
        arr.push({ ...docdta, id: doc.id }); // Add document without URL if no file
      }
    })
    await Promise.all(promises);

    setStudentsData(arr);
  };
  const buttonColumn = showDownload
  ? [
      {
        field: 'file',
        headerName: 'Download',
        width: 160,
        renderCell: (params) => (
          <div className='flex items-center h-full'>
          <a
            className="bg-blue-500 text-white px-3 h-[30px] flex items-center rounded-md "
            href={params.row.file}
            download={true}
          >
            Download
          </a>
          </div>
        ),
      },
    ]
  : [];

  const allColumns = [...columns, ...buttonColumn];


  const rows = studentsData
  return (
    <>
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={allColumns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
    </>
  );
}
