module.exports.send = async function (req, res) {
    try {
      return req.ipInfo

    } catch (error) {
      console.log(error)
    }
  
  }