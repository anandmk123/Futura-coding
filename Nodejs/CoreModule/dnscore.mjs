//dns-->provide all dns related information

import dns from 'dns'
//return public ip of a host
dns.lookup('www.esynergysoft.com',(err,res)=>{
    console.log(res)
})

//return host name if ip is given
dns.reverse("51.81.56.212",(err,res)=>{
    console.log(res)
})

export default{
}