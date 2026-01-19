# HealthConnect API

This is a Node.js API for a healthcare website where patients can view doctors, book appointments, and chat with doctors using Socket.IO.

## Features

- View list of doctors with specialization filter
- Book appointments
- Doctors can view their appointments
- Real-time chat between patients and doctors

## Installation

1. Clone the repository
2. Run `npm install`
3. Run `npm start` or `node index.js`

## APIs

### GET /doctors
Get list of doctors. Optional query parameter: `specialization`

Example: `GET /doctors?specialization=Cardiology`

### POST /appointments
Create a new appointment.

Body:
```json
{
  "patientId": 1,
  "doctorId": 1,
  "date": "2023-10-01",
  "time": "10:00"
}
```

### GET /appointments
Get appointments for a doctor. Query parameter: `doctorId`

Example: `GET /appointments?doctorId=1`

## Chat

Use Socket.IO to connect to the server.

Events:
- `join-chat`: Join chat room for a doctor. Data: `{ doctorId, userType, userId }`
- `send-message`: Send message. Data: `{ doctorId, message, senderId }`
- `receive-message`: Receive message. Data: `{ message, senderId, timestamp }`

## Notes

- This uses in-memory data. In production, use a database.
- No authentication implemented. Add JWT or similar for security.
- Patients and doctors data is hardcoded.