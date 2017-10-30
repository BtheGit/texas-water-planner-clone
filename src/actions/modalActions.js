export const SHOW_MODAL  = 'SHOW_MODAL';
export const HIDE_MODAL  = 'HIDE_MODAL';

export function showModal(modalType) {
  return {
    type: SHOW_MODAL,
    payload: modalType
  }
};

export function hideModal() {
  return {
    type: HIDE_MODAL
  }
};
