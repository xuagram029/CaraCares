const db = require('../db')
const { Vonage } = require('@vonage/server-sdk')
// rits 
// const vonage = new Vonage({
//   apiKey: "2903bef3",
//   apiSecret: "NaNmqglKA08QkM0J"
// })

//mervs

const vonage = new Vonage({
  apiKey: "d9f094ac",
  apiSecret: "wf92sNcadp1YyRmZ"
})

const getAppointments = (req, res) => {
    db.query("SELECT * FROM appointment WHERE status = 'accepted'", (err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
}

const acceptAppointment = (req, res) => {
    const { id } = req.params
    db.query("UPDATE appointment SET status = 'accepted' WHERE id = ?", id, (err, data) => {
        if(err) return res.json(err)

        const from = "Cara Cares"
        // const to = "639917326715"
        const to = "639429154447"
        // const to = "639453061364"
        const text = 'Your appointment has been accepted.'

        vonage.sms.send({to, from, text})
        .then(resp => { console.log('Message sent successfully'); console.log(resp); })
        .catch(err => { console.log('There was an error sending the messages.'); console.error(err); });

        return res.json({message: 'Updated successfully'})
    })
}

module.exports = { getAppointments, acceptAppointment }