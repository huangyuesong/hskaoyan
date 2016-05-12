export const serverUrl = DEVELOPMENT ? 'http://www.hskaoyan.com/html_php' : '/html_php';
export const userInfoUrl = DEVELOPMENT ? 'http://www.hskaoyan.com/html_php/user_info_local.php' : '/html_php/check_user.php';
export const imagePrefix = DEVELOPMENT ? 'http://www.hskaoyan.com/' : '';
export const SUCCESS = 0;
export const COMMON_ERROR = 1;
export const NEED_LOGIN = 2;
export const NEED_CAPTCHA = 3;