import React from "react";
import { Modal, Button } from "react-bootstrap";

export default function ThongBaoDatVe({ show, handleClose, maVe }) {
  return (
    <Modal show={show} onHide={handleClose} centered size="md">
      <Modal.Header
        closeButton
        style={{
          backgroundColor: "rgb(27, 78, 26)",
          color: "white",
          borderBottom: "none",
        }}
      >
        <Modal.Title>Đặt Vé Thành Công</Modal.Title>
      </Modal.Header>

      <Modal.Body className="text-center">
        <p style={{ fontSize: "18px" }}>
          🎉 Cảm ơn bạn đã đặt vé tham quan Tràng An!
        </p>

        <p className="text-muted">
          Chúng tôi đã tiếp nhận thông tin và tạo mã vé cho bạn:
        </p>

        <div
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            background: "#e8fdfb",
            padding: "10px",
            borderRadius: "10px",
            margin: "10px 0",
            color: "rgb(27, 78, 26)",
            border: "1px solid rgb(27, 78, 26)",
          }}
        >
          {maVe}
        </div>

        <p className="text-secondary" style={{ fontSize: "14px" }}>
          Admin sẽ sớm liên hệ để xác nhận thông tin đặt vé và hướng dẫn chi
          tiết.
          <br />
          Chúc bạn có một hành trình tuyệt vời tại Tràng An! 🌿
        </p>
      </Modal.Body>

      <Modal.Footer>
        <Button
          variant="success"
          className="btn-thongbao"
          style={{ marginLeft: "auto", marginRight: "auto", width: "85px" }}
          onClick={handleClose}
        >
          Đóng
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
