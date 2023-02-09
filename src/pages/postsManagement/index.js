import { Col, Input, Modal, Row, Table, Tooltip } from "antd";
import React, { useEffect, useRef, useState } from "react";
import SvgIcon from "../../components/svgIcon";
import { APIPOST } from "../../constant/common";
import "../../index.css";

export default function PostsManagement() {
  const [dataTable, setDataTable] = useState([]);
  const [openPopup, setOpenPopup] = useState(false);
  const searchTerm = useRef(undefined);
  const [detailPost, setDetailPost] = useState(undefined);
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "User ID",
      dataIndex: "userId",
    },
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (_, record) => {
        return (
          <span
            className="hover"
            onClick={() => {
              handleOpenPopup(record);
            }}
          >
            <Tooltip title="View detail" placement="right">
              <SvgIcon icon="detail" />
            </Tooltip>
          </span>
        );
      },
    },
  ];
  //get data table
  useEffect(() => {
    fetch(APIPOST)
      .then((response) => response.json())
      .then((data) => setDataTable(data))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  //clear set timeout when component was unmounted
  useEffect(() => {
    return () => {
      if (searchTerm.current) {
        clearTimeout(searchTerm.current);
      }
    };
  }, []);

  const handleChangeSearch = (e, searchField) => {
    const value = e.target.value;
    let url = APIPOST;
    if (value?.trim()) {
      url = url.concat(`?${searchField}=${value}`);
    }
    //clear previous setTimeout
    if (searchTerm.current) {
      clearTimeout(searchTerm.current);
    }
    searchTerm.current = setTimeout(() => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => setDataTable(data))
        .catch((error) => {
          console.error(error);
        });
    }, 300);
  };

  const handleOpenPopup = (record) => {
    setOpenPopup(true);
    fetch(APIPOST.concat(`?id=${record?.id}`))
      .then((response) => response.json())
      .then((data) => setDetailPost(data[0]))
      .catch((error) => console.error(error));
  };

  const handleClosePopup = () => {
    setOpenPopup(false);
    setDetailPost(undefined);
  };

  return (
    <div className="container">
      <h1>Posts Management</h1>
      <Row gutter={32} className="mb-20">
        <Col span={4}>
          <Input
            placeholder="Search by user id"
            onChange={(e) => handleChangeSearch(e, "userId")}
            allowClear
          />
        </Col>
        <Col span={4}>
          <Input
            placeholder="Search by title"
            onChange={(e) => handleChangeSearch(e, "title")}
            allowClear
          />
        </Col>
      </Row>
      <Table
        columns={columns}
        dataSource={dataTable}
        rowKey={(record) => record?.id}
      />
      {openPopup && (
        <Modal
          title="Detail post"
          open={openPopup}
          onCancel={handleClosePopup}
          onOk={handleClosePopup}
        >
          <h4>User ID: {detailPost?.userId}</h4>
          <h4>Title: {detailPost?.title}</h4>
          <p>{detailPost?.body}</p>
        </Modal>
      )}
    </div>
  );
}
