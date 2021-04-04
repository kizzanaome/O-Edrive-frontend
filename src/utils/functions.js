import $ from 'jquery';

export default {
  hide(id) {
    document.getElementById(id).style.display = 'none'
  },
  closePopup(id) {
      $("#" + id).modal('hide');
  },
  openPopup(id) {
      $("#" + id).modal('show');
  }
}
