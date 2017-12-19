import React from 'react';
import ReactTable from 'react-table';

const Table = (props) => {
  const columns = [
    {
      Header: '#',
      width: 100,
      Cell: row => (
        <span>{row.viewIndex}</span>
      ),
    },
    {
      Header: 'User',
      accessor: 'username',
      Cell: row => (
        <div>
          <span>{row.value}</span>
          <img src={row.original.img} alt="user pic" className="table__img" />
        </div>
      ),
    },
    {
      Header: 'Recent',
      accessor: 'recent',
    },
    {
      Header: 'All time',
      accessor: 'alltime',
    },
  ];

  return (
    <div>
      {props.campers.length > 1 &&
        <ReactTable
          data={props.campers}
          columns={columns}
        />
        }
    </div>
  );
};

export default Table;

