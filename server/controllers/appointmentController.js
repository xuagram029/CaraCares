const db = require('../db');
const { Vonage } = require('@vonage/server-sdk');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 20, // Set the maximum file size (e.g., 5MB)
  },
  fileFilter: function (req, file, cb) {
    // Set the allowed file types
    if (
      file.mimetype === 'image/jpeg' ||
      file.mimetype === 'image/png' ||
      file.mimetype === 'application/pdf'
    ) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type'));
    }
  },
});

const vonage = new Vonage({
  apiKey: "1753cd33",
  apiSecret: "0KD7Kcq8q4HcDtCT"
  // apiKey: "d9f094ac",
  // apiSecret: "wf92sNcadp1YyRmZ"
});

const getAppointments = (req, res) => {
  db.query("SELECT * FROM appointment WHERE status = 'accepted'", (err, data) => {
    if (err) {
      console.error('Error retrieving appointments:', err);
      res.status(500).json({ error: 'Failed to retrieve appointments.' });
    } else {
      res.json(data);
    }
  });
};

const getPendingAppointments = (req, res) => {
  db.query("SELECT * FROM appointment WHERE status = 'pending'", (err, data) => {
    if (err) {
      console.error('Error retrieving pending appointments:', err);
      res.status(500).json({ error: 'Failed to retrieve pending appointments.' });
    } else {
      res.json(data);
    }
  });
};

// const makeAppointment = (req, res) => {
//   upload.single('image')(req, res, (err) => {
//     if (err) {
//       console.error('Error uploading file:', err);
//       return res.status(401).json({ error: 'Error uploading file.' });
//     }

//   const { fullName, date, type, number } = req.body;
//   const photo = req.file ? req.file.filename : null;

//   db.query("INSERT INTO appointment(`fullName`, `date_s`, `type`, `number`, `photo`) VALUES (?, ?, ?, ?, ?)", [fullName, date, type, number, photo], (err, data) => {
//     if (err) {
//       console.error('Error making appointment:', err);
//       res.status(500).json({ error: 'Failed to make appointment.' });
//     } else {
//       res.json({ message: "Appointment sent" });
//     }
//   });
// })
// };

const makeAppointment = (req, res) => {
  upload.fields([
    { name: 'image', maxCount: 1 },
    { name: 'pdf', maxCount: 1 }
  ])(req, res, (err) => {
    if (err) {
      console.error('Error uploading file:', err);
      return res.status(401).json({ error: 'Error uploading file.' });
    }

    const { fullName, date, type, number, time } = req.body;
    const photo = req.files['image'] ? req.files['image'][0].filename : null;
    const pdfFile = req.files['pdf'] ? req.files['pdf'][0].filename : null;
    
    db.query("SELECT * FROM appointment WHERE time = ? AND date_s = ?", [time, date], (err, resp) => {
      if (err) return res.status(500).json({message: "Error checking appointment availability"});
      if (resp.length > 0) {
        return res
          .status(401)
          .json({
            message:
              "The time you choose is not available, please book another time",
          });
      }
        db.query(
          "INSERT INTO appointment(`fullName`, `date_s`, `type`, `number`, `photo`, `pdf`, `time`) VALUES (?, ?, ?, ?, ?, ?, ?)",
          [fullName, date, type, number, photo, pdfFile, time],
          (err, data) => {
            if (err) {
              console.error('Error making appointment:', err);
              return res.status(500).json({ error: 'Failed to make appointment.' });
            } else {
              return res.json({ message: "Appointment sent" });
            }
          }
        );
      });
    })
};


const rejectAppointment = (req, res) => {
  const { id } = req.params;
  db.query("SELECT number FROM appointment WHERE id = ?", id, (err, result) => {
    if (err) {
      console.error('Error retrieving appointment:', err);
      res.status(500).json({ error: 'Failed to retrieve appointment.' });
    } else if (result.length > 0) {
      const number = result[0].number;
      db.query("DELETE FROM appointment WHERE id = ?", id, (err, data) => {
        if (err) {
          console.error('Error deleting appointment:', err);
          res.status(500).json({ error: 'Failed to delete appointment.' });
        } else {
          const from = "Cara Cares";
          // const to = "639429154447";
          const to = "639668425716";
          const text = 'Your appointment is rejected.';
  
          vonage.sms.send({ to, from, text })
            .then(resp => {
              console.log('Message sent successfully');
              console.log(resp);
              res.json({ message: 'Deleted successfully' });
            })
            .catch(err => {
              console.log('There was an error sending the message.');
              console.error(err);
              res.status(500).json({ error: 'Failed to send rejection message.' });
            });
        }
      });
    } else {
      res.status(404).json({ error: 'Appointment not found.' });
    }
  });
};

const acceptAppointment = (req, res) => {
  const { id } = req.params;
  db.query("UPDATE appointment SET status = 'accepted' WHERE id = ?", id, (err, data) => {
    if (err) {
      console.error('Error updating appointment:', err);
      res.status(500).json({ error: 'Failed to update appointment.' });
    } else {
      db.query("SELECT number FROM appointment WHERE id = ?", id, (err, result) => {
        if (err) {
          console.error('Error retrieving appointment:', err);
          res.status(500).json({ error: 'Failed to retrieve appointment.' });
        } else if (result.length > 0) {
          const number = result[0].number;
          const from = "Cara Cares";
          // const to = "639429154447";
          const to = "639668425716";
          const text = 'Your appointment has been accepted.';
  
          vonage.sms.send({ to, from, text })
            .then(resp => {
              console.log('Message sent successfully');
              console.log(resp);
              res.json({ message: 'Updated successfully' });
            })
            .catch(err => {
              console.log('There was an error sending the message.');
              console.error(err);
              res.status(500).json({ error: 'Failed to send acceptance message.' });
            });
        } else {
          console.log("No results found");
          res.status(404).json({ error: 'Appointment not found.' });
        }
      });
    }
  });
};

module.exports = {
  getAppointments,
  acceptAppointment,
  makeAppointment,
  getPendingAppointments,
  rejectAppointment
};