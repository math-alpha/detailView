# Online Exam MVP Application

An online exam application built as a Minimum Viable Product (MVP) that supports various question types, including single-choice MCQs, multiple-answer MCQs, short-answer questions, and long-answer questions. The application focuses on subjects like Mathematics and English, rendering mathematical notation using LaTeX syntax.

## Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Sample Data](#sample-data)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Features

- **Multiple Question Types**: Supports single-choice MCQs, multiple-answer MCQs, short-answer, and long-answer questions.
- **Mathematical Notation**: Renders mathematical expressions using LaTeX syntax with MathJax.
- **Responsive Design**: Fully responsive UI optimized for both web and mobile devices.
- **Timer Functionality**: Implements a persistent countdown timer for exams with time limits.
- **Persistent State**: Preserves exam state across page refreshes using `localStorage`.
- **Custom Scrollbar**: Enhances user experience with a custom scrollbar throughout the application.
- **Exam Metadata Display**: Shows exam title, subject, passing score, and time left.
- **User Input Handling**: Captures and stores user responses for all question types.
- **Backend Integration**: Communicates with a Flask backend API for data retrieval and submission.
- **Accessibility**: Focuses on accessible design with proper contrast ratios and keyboard navigation support.

---

## Technology Stack

### Front-End

- **Framework**: Next.js (React framework)
- **Styling**: CSS Modules, Tailwind CSS
- **Mathematical Rendering**: MathJax (`better-react-mathjax` package)
- **HTTP Client**: Axios

### Back-End

- **Framework**: Flask
- **Database**: SQLite (via SQLAlchemy)
- **CORS Handling**: Flask-CORS

---

## Project Structure

```
project-root/
├── README.md
├── backend/
│   ├── app.py
│   ├── instance/
│   ├── models/
│   └── requirements.txt
├── docker-compose.yml
└── frontend/
    ├── README.md
    ├── jsconfig.json
    ├── next.config.mjs
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.mjs
    ├── tailwind.config.js
    └── src/
        ├── app/
        ├── components/
        ├── pages/
        ├── styles/
        └── utils/
```

---

## Installation

### Prerequisites

- **Node.js** (v14 or newer)
- **npm** or **yarn**
- **Python** (v3.7 or newer)
- **pip**
- **Docker** (optional, if using `docker-compose.yml`)

### Clone the Repository

```bash
git clone https://github.com/math-alpha/gceLab.git
cd gceLab
```

### Using Docker (Optional)

If you prefer using Docker to set up both the frontend and backend environments:

1. **Ensure Docker is installed and running on your system.**

2. **Run Docker Compose**

   ```bash
   docker-compose up --build
   ```

   This will build and start both the frontend and backend services as defined in `docker-compose.yml`.

3. **Access the Application**

   - Frontend: `http://localhost:3000`
   - Backend API: `http://localhost:5000`

### Manual Setup

#### Back-End Setup

1. **Navigate to Backend Directory**

   ```bash
   cd backend
   ```

2. **Create a Virtual Environment**

   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install Dependencies**

   ```bash
   pip install -r requirements.txt
   ```

#### Front-End Setup

1. **Navigate to Front-End Directory**

   ```bash
   cd ../frontend
   ```

2. **Install Dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

---

## Usage

### Running the Back-End Server

1. **Navigate to Backend Directory**

   ```bash
   cd backend
   ```

2. **Activate Virtual Environment**

   ```bash
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Run the Flask App**

   ```bash
   python app.py
   ```

   The backend server will start at `http://localhost:5000`.

### Running the Front-End Application

1. **Navigate to Front-End Directory**

   ```bash
   cd ../frontend
   ```

2. **Start the Development Server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

   The front-end application will start at `http://localhost:3000`.

3. **Access the Application**

   Open your browser and navigate to `http://localhost:3000`.

---

## API Endpoints

### `GET /api/exam`

- **Description**: Retrieves the exam data.
- **Response**: JSON object containing exam metadata and questions.

### `POST /api/submit`

- **Description**: Submits the user's responses.
- **Request Body**: JSON object with question IDs and user responses.
- **Response**: JSON object with submission confirmation and optional scoring.

---

## Sample Data

The application uses a sample exam data set focused on Mathematics. The exam includes various question types to test the application's functionality.

**Sample Exam Data Structure:**

```python
exam_data = {
    "examTitle": "Sample Mathematics Exam",
    "examMeta": {
        "duration": 90,
        "passingScore": 70,
        "subject": "Mathematics"
    },
    "questions": [
        {
            "id": "q1",
            "type": "single-choice",
            "questionText": "What is the derivative of \\( f(x) = x^2 \\)?",
            "options": [
                { "id": "a", "text": "\\( 2x \\)" },
                { "id": "b", "text": "\\( x^2 \\)" },
                { "id": "c", "text": "\\( x \\)" },
                { "id": "d", "text": "\\( 2 \\)" }
            ],
            "correctOptionIds": ["a"],
            "metadata": {
                "difficulty": "medium",
                "topic": "Calculus",
                "marks": 5
            }
        },
        # Additional questions...
    ]
}
```

---

## Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the Repository**

   Click the "Fork" button at the top right of the repository page.

2. **Clone Your Fork**

   ```bash
   git clone https://github.com/yourusername/gceLab.git
   ```

3. **Create a Branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Make Changes**

   Implement your feature or bug fix.

5. **Commit Changes**

   ```bash
   git commit -m "Description of your changes"
   ```

6. **Push to Your Fork**

   ```bash
   git push origin feature/your-feature-name
   ```

7. **Create a Pull Request**

   Go to the original repository and create a pull request from your fork.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Contact

- **Author**: Ngadou Yopa
- **Email**: yopasylvestre [.at_] gmail.com
- **GitHub**: [math-alpha](https://github.com/math-alpha)

Feel free to reach out if you have any questions or suggestions!

---

## Additional Notes

- **Environment Variables**

  - You may need to set environment variables for production deployments.
  - For development, default configurations are used.

- **Deployment**

  - Front-End: Can be deployed on platforms like Vercel or Netlify.
  - Back-End: Can be deployed on platforms like Heroku or AWS Elastic Beanstalk.

- **Testing**

  - No automated tests are included in this MVP.
  - Manual testing is recommended to ensure all features work as expected.

- **Known Issues**

  - Timer may not sync across multiple devices.
  - User authentication is not implemented in this MVP.

---

Thank you for using the Online Exam MVP Application! We hope it meets your testing and educational needs.

---

If you need further assistance or have any other questions, feel free to ask!