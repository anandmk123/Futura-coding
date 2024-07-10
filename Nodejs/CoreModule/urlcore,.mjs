import url from 'url'
//get url details
const parse=url.parse('https://www.esynergysoft.com/')
console.log(parse)

//add a extra path
const parse2=url.parse('https://www.esynergysoft.com/sss')
console.log(parse2)

//with query
const parse3=url.parse('https://www.esynergysoft.com/sss?name=Anand&rollno=12')
console.log(parse3.query)

// query as object
const parse4=url.parse('https://www.esynergysoft.com/sss?name=Anand&rollno=12',true)
console.log(parse4.query)
console.log(parse4.query.name)

export default{
}