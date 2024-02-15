// import React from 'react'
// import '../App.css'

// const Overview = () => {
//   return (
//     <div>
//       <table class="table table-bordered ">
//   <thead>
//     <tr className="table-primary">
//       <th scope="col"> <input type="checkbox"/> </th>
//       <th scope="col">Packages</th>
//       <th scope="col">Rate(in sqft)</th>
//       <th scope="col">Total</th>
//       <th scope="col"> </th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <th scope="row"><input type="checkbox"/></th>
//       <td>Civil 1</td>
//       <td>567.80</td>
//       <td>₹ 2,98,6792</td>
//       <td> + </td>
//     </tr>
//     <tr>
//       <th scope="row"><input type="checkbox"/></th>
//       <td>Civil 1</td>
//       <td>567.80</td>
//       <td>₹ 2,98,6792</td>
//       <td> + </td>
//     </tr>
//     <tr>
//       <th scope="row"><input type="checkbox"/></th>
//       <td>Civil 1</td>
//       <td>567.80</td>
//       <td>₹ 2,98,6792</td>
//       <td> + </td>
//     </tr>
//     <tr>
//       <th scope="row"><input type="checkbox"/></th>
//       <td>Civil 1</td>
//       <td>567.80</td>
//       <td>₹ 2,98,6792</td>
//       <td> + </td>
//     </tr>
//     <tr>
//       <th scope="row"><input type="checkbox"/></th>
//       <td>Civil 1</td>
//       <td>567.80</td>
//       <td>₹ 2,98,6792</td>
//       <td> + </td>
//     </tr>
    
//   </tbody>
// </table>
//     </div>
//   )
// }

// export default Overview

import { useMemo } from 'react';
import { MantineReactTable} from 'mantine-react-table';
import '../App.css'

export const data = [
  {
    Packages: 'Civil 1',
    Rate: '567.80',
    Total: '2,98,6792',
    
    subRows: [
      {
        Packages: 'Activity 1',
        Rate: '567.80',
        Total: '2,98,6792',
        subRows: [
          {
            Packages: 'Work Item 1',
            Rate: '567.80',
            Total: '2,98,6792',
          },
          {
            Packages: 'Work item 2',
            Rate: '567.80',
            Total: '2,98,6792',
          },
          {
            Packages: 'Work item 3',
            Rate: '567.80',
            Total: '2,98,6792',
          },
        ],
      },
      {
        Packages: 'Activity 2',
        Rate: '567.80',
        Total: '2,98,6792',
        subRows: [
          {
            Packages: 'Work Item 1',
            Rate: '567.80',
            Total: '2,98,6792',
          },
          {
            Packages: 'Work item 2',
            Rate: '567.80',
            Total: '2,98,6792',
          },
          {
            Packages: 'Work item 3',
            Rate: '567.80',
            Total: '2,98,6792',
          },
        ],
      },
      {
        Packages: 'Activity 3',
        Rate: '567.80',
        Total: '2,98,6792',
        subRows: [
          {
            Packages: 'Work Item 1',
            Rate: '567.80',
            Total: '2,98,6792',
          },
          {
            Packages: 'Work item 2',
            Rate: '567.80',
            Total: '2,98,6792',
          },
          {
            Packages: 'Work item 3',
            Rate: '567.80',
            Total: '2,98,6792',
          },
        ],
      },
    ],
  },
  {
    Packages: 'Civil 2',
    Rate: '567.80',
    Total: '2,98,6792',
    
    subRows: [
      {
        Packages: 'Activity 1',
        Rate: '567.80',
        Total: '2,98,6792',
        subRows: [
          {
            Packages: 'Work Item 1',
            Rate: '567.80',
            Total: '2,98,6792',
          },
          {
            Packages: 'Work item 2',
            Rate: '567.80',
            Total: '2,98,6792',
          },
          {
            Packages: 'Work item 3',
            Rate: '567.80',
            Total: '2,98,6792',
          },
        ],
      },
      {
        Packages: 'Activity 2',
        Rate: '567.80',
        Total: '2,98,6792',
        subRows: [
          {
            Packages: 'Work Item 1',
            Rate: '567.80',
            Total: '2,98,6792',
          },
          {
            Packages: 'Work item 2',
            Rate: '567.80',
            Total: '2,98,6792',
          },
          {
            Packages: 'Work item 3',
            Rate: '567.80',
            Total: '2,98,6792',
          },
        ],
      },
      {
        Packages: 'Activity 3',
        Rate: '567.80',
        Total: '2,98,6792',
        subRows: [
          {
            Packages: 'Work Item 1',
            Rate: '567.80',
            Total: '2,98,6792',
          },
          {
            Packages: 'Work item 2',
            Rate: '567.80',
            Total: '2,98,6792',
          },
          {
            Packages: 'Work item 3',
            Rate: '567.80',
            Total: '2,98,6792',
          },
        ],
      },
    ],
  },
  {
    Packages: 'Civil 3',
    Rate: '567.80',
    Total: '2,98,6792',
    
    subRows: [
      {
        Packages: 'Activity 1',
        Rate: '567.80',
        Total: '2,98,6792',
        subRows: [
          {
            Packages: 'Work Item 1',
            Rate: '567.80',
            Total: '2,98,6792',
          },
          {
            Packages: 'Work item 2',
            Rate: '567.80',
            Total: '2,98,6792',
          },
          {
            Packages: 'Work item 3',
            Rate: '567.80',
            Total: '2,98,6792',
          },
        ],
      },
      {
        Packages: 'Activity 2',
        Rate: '567.80',
        Total: '2,98,6792',
        subRows: [
          {
            Packages: 'Work Item 1',
            Rate: '567.80',
            Total: '2,98,6792',
          },
          {
            Packages: 'Work item 2',
            Rate: '567.80',
            Total: '2,98,6792',
          },
          {
            Packages: 'Work item 3',
            Rate: '567.80',
            Total: '2,98,6792',
          },
        ],
      },
      {
        Packages: 'Activity 3',
        Rate: '567.80',
        Total: '2,98,6792',
        subRows: [
          {
            Packages: 'Work Item 1',
            Rate: '567.80',
            Total: '2,98,6792',
          },
          {
            Packages: 'Work item 2',
            Rate: '567.80',
            Total: '2,98,6792',
          },
          {
            Packages: 'Work item 3',
            Rate: '567.80',
            Total: '2,98,6792',
          },
        ],
      },
    ],
  },
  {
    Packages: 'Civil 4',
    Rate: '567.80',
    Total: '2,98,6792',
    
    subRows: [
      {
        Packages: 'Activity 1',
        Rate: '567.80',
        Total: '2,98,6792',
        subRows: [
          {
            Packages: 'Work Item 1',
            Rate: '567.80',
            Total: '2,98,6792',
          },
          {
            Packages: 'Work item 2',
            Rate: '567.80',
            Total: '2,98,6792',
          },
          {
            Packages: 'Work item 3',
            Rate: '567.80',
            Total: '2,98,6792',
          },
        ],
      },
      {
        Packages: 'Activity 2',
        Rate: '567.80',
        Total: '2,98,6792',
        subRows: [
          {
            Packages: 'Work Item 1',
            Rate: '567.80',
            Total: '2,98,6792',
          },
          {
            Packages: 'Work item 2',
            Rate: '567.80',
            Total: '2,98,6792',
          },
          {
            Packages: 'Work item 3',
            Rate: '567.80',
            Total: '2,98,6792',
          },
        ],
      },
      {
        Packages: 'Activity 3',
        Rate: '567.80',
        Total: '2,98,6792',
        subRows: [
          {
            Packages: 'Work Item 1',
            Rate: '567.80',
            Total: '2,98,6792',
          },
          {
            Packages: 'Work item 2',
            Rate: '567.80',
            Total: '2,98,6792',
          },
          {
            Packages: 'Work item 3',
            Rate: '567.80',
            Total: '2,98,6792',
          },
        ],
      },
    ],
  },

];

const Overview = () => {
  const columns = useMemo(
    () => [
      
      {
        accessorKey: 'Packages',
        header: 'Packages',
      },

      {
        accessorKey: 'Rate',
        header: 'Rate (in sqft)',
      },
      {
        accessorKey: 'Total',
        header: 'Total',
      },
      
    ],
    [],
  );



  return (
    <MantineReactTable
      columns={columns}
      data={data}
      enableExpandAll={false} 
      enableExpanding

      paginateExpandedRows={false} 
      enableBottomToolbar={false}
      enableTopToolbar={false}
      enableColumnActions={false}
      enableSorting={false}
      enableRowSelection={true}
      mantineTableHeadRowProps={
        {
          sx: {
            backgroundColor: '#deeafa',
            color: '#6c757d',
            fontWeight: 'bold',
            
          }
        }
      }
      mantinePaperProps={{
        shadow: 'lg', //use a larger shadow
        //customize paper styles
        sx: {
          borderRadius: '0',
          border: '1px dashed #e0e0e0',
        },
      }}
      
      
    />
  );
};

export default Overview;
