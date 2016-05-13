export const serverUrl = DEVELOPMENT ? 'http://www.hskaoyan.com/html_php' : '/html_php';
export const loginUrl = DEVELOPMENT ? 'http://www.hskaoyan.com/html_php/login_local.php' : '/html_php/login.php';
export const imagePrefix = DEVELOPMENT ? 'http://www.hskaoyan.com/' : '';
export const SUCCESS = 0;
export const COMMON_ERROR = 1;
export const NEED_LOGIN = 2;
export const NEED_CAPTCHA = 3;