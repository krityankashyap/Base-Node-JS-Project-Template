const statusCode = require('http-status-codes');

const info = (req , res)=>{
  return res.status(statusCode.OK).json({
    success:true,
    message:'API is live',
    error:{},
    data:{}
  })
}
module.exports={
  info
}