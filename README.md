
# URL Shortener Microservice

This is a simple URL Shortener Microservice built for the [FreeCodeCamp Back End Development and APIs certification](https://www.freecodecamp.org/learn/back-end-development-and-apis/).

## 📌 Features

- Accepts a valid URL and returns a shortened version.
- Redirects users to the original URL using the short URL.
- No database used — URLs are stored in memory during runtime.

## 🚀 API Endpoints

### 1. `POST /api/shorturl`

Submit a URL to receive a shortened version.

**Request Body (x-www-form-urlencoded):**
```
url=https://example.com
```

**Example Response:**
```json
{
  "original_url": "https://example.com",
  "short_url": 1
}
```

### 2. `GET /api/shorturl/:short_url`

Redirects to the original URL.

**Example:**
```
GET /api/shorturl/1
```

Redirects to:
```
https://example.com
```

## 🛠️ Technologies Used

- Node.js
- Express

## ✅ How to Run Locally

1. Clone this repository:
   ```bash
   git clone https://github.com/kurogamidesuu/URL-shortener-microservice-FCC-Project.git
   cd URL-shortener-microservice-FCC-Project
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   node server.js
   ```

4. Open your browser or use a tool like Postman to interact with the API.

## 📜 License

This project is part of the [freeCodeCamp](https://www.freecodecamp.org/) Back End Development and APIs certification.

---

Created with 💻 by [kurogamidesuu](https://github.com/kurogamidesuu)
