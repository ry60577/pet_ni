export function checkIsMobile(state) {
  state.isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
}
export function setIsShowDialog(state, status) {
  state.isShowDialog = status;
}
