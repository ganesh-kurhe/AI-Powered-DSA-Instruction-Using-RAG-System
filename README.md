# AI-Powered DSA Instructor Using RAG System

## 📌 Overview

The **AI-Powered DSA Instructor Using RAG System** is an intelligent learning assistant designed to help students understand **Data Structures and Algorithms (DSA)** through natural language interaction. It leverages **Retrieval-Augmented Generation (RAG)** and **Large Language Models (LLMs)** to provide accurate, context-aware, and detailed explanations based on a custom DSA knowledge base.

Instead of relying solely on the LLM's pre-trained knowledge, the system retrieves relevant information from uploaded DSA documents and uses it to generate reliable responses.

---

## ✨ Features

* 🤖 AI-powered DSA question answering
* 📚 Retrieval-Augmented Generation (RAG)
* 🔍 Semantic search using vector embeddings
* 📄 Supports PDF-based DSA knowledge base
* 💬 Context-aware responses
* ⚡ Fast and accurate retrieval
* 🔗 Powered by Google Gemini API
* 📖 Easy-to-use command-line interface

---

## 🛠️ Tech Stack

* **JavaScript (Node.js)**
* **LangChain**
* **Google Gemini API**
* **Pinecone Vector Database**
* **PDF Loader**
* **Text Splitter**
* **Embedding Model**
* **Dotenv**

---

## 📂 Project Structure

```text
AI-Powered-DSA-Instruction-Using-RAG-System/
│
├── index.js
├── query.js
├── package.json
├── package-lock.json
├── dsa.pdf
├── .env
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/ganesh-kurhe/AI-Powered-DSA-Instruction-Using-RAG-System.git
```

### 2. Navigate to the project directory

```bash
cd AI-Powered-DSA-Instruction-Using-RAG-System
```

### 3. Install dependencies

```bash
npm install
```

---

## 🔑 Environment Variables

Create a `.env` file in the project root and add:

```env
GOOGLE_API_KEY=YOUR_GOOGLE_GEMINI_API_KEY
PINECONE_API_KEY=YOUR_PINECONE_API_KEY
PINECONE_INDEX_NAME=YOUR_INDEX_NAME
```

---

## ▶️ Running the Project

### Step 1: Upload the PDF to the vector database

```bash
node index.js
```

### Step 2: Ask questions

```bash
node query.js
```

Example:

```
Enter your question:
What is Dynamic Programming?
```

---

## 🔄 Workflow

1. Load the DSA PDF.
2. Split the document into chunks.
3. Generate vector embeddings.
4. Store embeddings in Pinecone.
5. Retrieve relevant chunks for a user query.
6. Send retrieved context to Google Gemini.
7. Generate an accurate and context-aware answer.

---

## 📈 Future Enhancements

* Web-based user interface
* Chat history
* Multiple document support
* Voice-based interaction
* User authentication
* Performance analytics
* Multi-language support

---

## 👨‍💻 Author

**Ganesh Kurhe**

* GitHub: https://github.com/ganesh-kurhe
* LinkedIn: [www.linkedin.com/in/ganesh-kurhe](http://www.linkedin.com/in/ganesh-kurhe)

---

## 📜 License

This project is developed for educational and learning purposes.
