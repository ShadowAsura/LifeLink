Here is the backend server url: <https://mayitakeyourorder.user5829.repl.co>

All endpoints return JSON. If error, returned JSON will be `{error: true}`

## Endpoints:

- GET `/user/<user_id>`: Given the uuid user_id, get the user's info (see schema), excluding the hashed `password` property

- POST `/add_user`: Post JSON data of user info (see schema). If user id already exists, it is considered a password, and the password must matched with the hashed password stored in db, or action will fail. Otherwise, will insert the data to db.

- POST `/delete_user`: Post JSON data (`{ user_id: string uuid, password: string unhashed password user gives }`). If password given does not match with hashed password in db, action will fail. Otherwise, delete the user info in the db.

## Schema:

```json
{
  "user_id": string uuid,
  "name": string,
  "password": string hashed password,
  "emergency_contacts": [
    {
      "name": string,
      "phone": string,
      "notes": string
    }
    ...
  ],
  "conditions": string[],
  "current_meds": string[],
  "allergies": [
    {
      "name": string,
      "type": string (food or drug)
    }
    ...
  ],
  "dnr": boolean,
  "notes": string
}
```
