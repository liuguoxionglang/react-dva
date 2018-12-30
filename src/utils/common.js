import numeral from 'numeral'

// export const baseurl = "http://192.168.0.150:9871/zdvsplate/"
export const baseurl = "http://192.168.0.128:9871/zdvsplate/";

export const formateNum = (data)=> {
    return numeral(data).format('0,0');
}
