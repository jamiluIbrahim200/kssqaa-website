import Swal from "sweetalert2";
export function confirm(deleteEvent, message) {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to delete ",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#34c38f",
    cancelButtonColor: "#f46a6a",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.value) {
      deleteEvent();
      Swal.fire(message);
    }
  });
}
export function errorMsg(error) {
  Swal.fire({
    title: "Error!",
    text: error,
    icon: "error",
    showCancelButton: true,
    showConfirmButton: false,
    timer: 3000,
  });
}
export function successMsg(message) {
  Swal.fire({
    position: "center",
    icon: "success",
    title: message,
    showConfirmButton: false,
    timer: 3000,
  });
}