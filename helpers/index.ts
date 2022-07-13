export const userAgent = typeof navigator === 'undefined' ? 'SSR' : navigator.userAgent;
export const isAndroid = (): boolean => Boolean(userAgent.match(/Android/i));
export const isIos = (): boolean => Boolean(userAgent.match(/iPhone|iPad|iPod/i));
export const isOpera = (): boolean => Boolean(userAgent.match(/Opera Mini/i));
export const isWindows = (): boolean => Boolean(userAgent.match(/IEMobile/i));
export const isSSR = (): boolean => Boolean(userAgent.match(/SSR/i));
export const isMobile = (): boolean => Boolean(isAndroid() || isIos() || isOpera() || isWindows());
export const isDesktop = (): boolean => Boolean(!isMobile() && !isSSR());
