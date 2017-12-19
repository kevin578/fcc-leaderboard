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
      Header: 'Camper Name',
      accessor: 'username',
      Cell: row => (
        <div>
          <img src={row.original.img} alt="user pic" className="table__img" />
          <span>{row.value}</span>
        </div>
      ),
    },
    {
      Header: 'Points in past 30 days',
      accessor: 'recent',
    },
    {
      Header: 'All time points',
      accessor: 'alltime',
    },
  ];

  return (
    <div>
      {props.campers.length > 1 &&
        <ReactTable
          data={props.campers}
          columns={columns}
          className="table -striped"
          defaultPageSize={10}
        />
        }
    </div>
  );
};

export default Table;

