# API DESIGN

## Auth

POST/register-student: Registration of students on the platform ✅
POST/register-school: Registration of schools on the platform ✅
POST/login: Shared endpoints for the two roles to gain an access token from ✅
POST/req-forgot-password: Request an OTP to be sent to your email, to allow for password reset
POST/verify-otp: Verify if the otp sent to your email is the same as the one in your user model
POST/reset-password: This should be protected with a new token, meant specifically for resetting passwords, allows user to update the password on their account

## User

GET/get-details: Returns all the information about the user ✅
PUT/update-details: Allows user to update some fields in their profile ✅

## Student

GET/view-attended-schools: Returns all the schools that the student has attended
GET/view-transcripts: Returns all the transcripts that a student has been awarded

## School

POST/add-student: Adds Student to the array of students in under the school model ✅
GET/view-students: Returns all the students that currently attend your school
GET/view-student/id: Returns information about a particular student that attends your school
POST/add-transcript/id: Allow you to award transcript "result data" to student attendiing your school
