/*
 * @Author: luciano 
 * @Date: 2022-03-06 23:57:19 
 * @Last Modified by: luciano
 * @Last Modified time: 2022-03-07 21:17:12
 */
function remSize() {
 // 获取设备的宽度

  var deviceWidth = document.documentElement.clientWidth || window.innerWidth;
    if (deviceWidth > 750) deviceWidth = 750;
    if(deviceWidth <= 320) deviceWidth = 320;
    // 设置根元素字体大小
    document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px';
    document.querySelector('body').style.fontSize=0.3+'rem';
}

remSize();
window.onresize = remSize;