/**
 * 是否有权限
 *
 * @param {String} key
 * @param {Array} permissions
 * @return {Boolean}
 */
function checkArray(key, permissions) {
  let index = permissions.indexOf(key);
  if (index > -1) {
    return true; // 有权限
  }
  return false; // 无权限
}

const permission = {
  permissions: [],
  inserted: function (el, binding) {
    const value = binding.value; // 获取到 v-permission的值
    if (value) {
      const hasPermission = checkArray(value, permission.permissions);
      if (!hasPermission) {
        // 没有权限 移除Dom元素
        el.parentNode && el.parentNode.removeChild(el);
      }
    }
  },
};

export default permission;
