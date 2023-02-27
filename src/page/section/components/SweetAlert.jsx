import Swal from "sweetalert2";

/**
 * Esta función se utiliza para mostrar un mensaje emergente al usuario.
 */
export function SWA(title, icon = "success", text) {
  Swal.fire({
    title: title,
    icon: icon,
    text: text,
  });
}
