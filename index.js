//  PDF KO LOAD KARNE KA
import { PDFLoader } from '@langchain/community/document_loaders/fs/pdf';
import { RecursiveCharacterTextSplitter } from '@langchain/textsplitters';
import { GoogleGenerativeAIEmbeddings } from '@langchain/google-genai';
import { Pinecone } from '@pinecone-database/pinecone';
import { PineconeStore } from '@langchain/pinecone';

import * as dotenv from 'dotenv';
dotenv.config();

async function indexDocument() {

  // FIRST LOAD THE PDF
  const PDF_PATH = './dsa.pdf';
  const pdfLoader = new PDFLoader(PDF_PATH);
  const rawDocs = await pdfLoader.load();
  console.log("PDF Loaded.");


  // console.log(rawDocs.length);

  // CHUNKING KARO

  const textSplitter = new RecursiveCharacterTextSplitter({
    chunkSize: 1000,
    chunkOverlap: 200,
  });
  const chunkedDocs = await textSplitter.splitDocuments(rawDocs);
  console.log("Chunking Completed.");

  // console.log(chunkedDocs.length);

  // CONVERT INTO VECTOR USING VECTOR EMBEDDING MODEL
  // Embeddiing model configured.
  const embeddings = new GoogleGenerativeAIEmbeddings({
    apiKey: process.env.GEMINI_API_KEY,
    model: 'text-embedding-004', // converting word into vector
  });

  console.log("Embeddiing model configured.");

  //   DATABASE CONFIGURE KARNE
  //  INITIALIZE PINECONE CLIENT
  const pinecone = new Pinecone();
  const pineconeIndex = pinecone.Index(process.env.PINECONE_INDEX_NAME);
  console.log("Pinecone configured.");

  // LANGCHAIN (CHUNKINIG , EMBEDDING , DATABASE)
  await PineconeStore.fromDocuments(chunkedDocs, embeddings, {
    pineconeIndex,
    maxConcurrency: 5,
  });
  console.log("Data stored successfully.");
}

indexDocument();