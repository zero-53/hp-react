import Swal from "sweetalert2";
export function SWA(title, icon = "success", text) {
    Swal.fire({
      title: title,
      icon: icon,
      text: text,
    });
  }