import React from "react";
import { Row, Col } from "antd";
import { useNavigate } from "react-router-dom";


function EmployeeHome() {
  const navigate = useNavigate();
  return (
    <div className="h-100 d-flex justify-content-center align-items-center">
      <Row gutter={[20, 20]}>
        <Col span={12}>
          <div
            className="p-5 primary-border card w-300 cursor-pointer align-items-center justify-content-center gap-3"
            onClick={() => {
              navigate("/employee/students");
            }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135810.png"
              alt=""
              height={50}
              width={50}
            />
            <h1>Students</h1>
          </div>
        </Col>
        <Col span={12}>
          <div
            className="p-5 primary-border card w-300 cursor-pointer d-flex align-items-center justify-content-center gap-3"
            onClick={() => {
              navigate("/employee/results");
            }}
          >
            <img
              src="data:image/png;base64,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"
              alt=""
              height={50}
              width={50}
            />
            <h1>Results</h1>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default EmployeeHome;
