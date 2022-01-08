import { notification } from "antd";
// type : "error","warn","info","success"

export default function runNotification(type, title, description) {
  notification[type]({
    message: title,
    description: description,
  });
}
