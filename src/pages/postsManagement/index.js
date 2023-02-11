import { Col, Input, Modal, Row, Table, Tooltip } from "antd";
import { useEffect, useRef, useState } from "react";
import postApi from "api/postApi";
import SvgIcon from "components/svgIcon";
import "index.css";

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
    const getPostsList = async () => {
      try {
        const respone = await postApi.getAll();
        setDataTable(respone);
      } catch (error) {
        console.log(error);
      }
    };
    getPostsList();
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
    const params = {
      [searchField]: !!e.target.value.trim()
        ? e.target.value.trim()
        : undefined,
    };
    //Clear previous timeout id
    if (searchTerm.current) {
      clearTimeout(searchTerm.current);
    }
    searchTerm.current = setTimeout(() => {
      const getListFiltered = async () => {
        try {
          const response = await postApi.getAll(params);
          setDataTable(response);
        } catch (error) {
          console.log(error);
        }
      };
      getListFiltered();
    }, 300);
  };

  const handleOpenPopup = (record) => {
    setOpenPopup(true);
    const getDetailPost = async () => {
      try {
        const response = await postApi.getPost(record.id);
        setDetailPost(response);
      } catch (error) {
        console.log(error);
      }
    };
    getDetailPost();
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
