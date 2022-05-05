export interface queryData {
  [key: string]: string | undefined;

}

export const encodeQueryData = (data: queryData) => Object.entries(data).map((el) => (el.join("="))).join("&");