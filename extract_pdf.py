import os
import sys

pdf_path = r"c:\Users\zakar\portfolio\public\cv\Zakaria Kassemi Ingénieur d'Etat en Data Science.pdf"
output_path = r"c:\Users\zakar\portfolio\public\cv\cv_text.txt"

print(f"Checking for PDF at: {pdf_path}")
if not os.path.exists(pdf_path):
    print("PDF file does not exist!")
    sys.exit(1)

extracted = False

# Try pypdf
if not extracted:
    try:
        import pypdf
        print("Using pypdf...")
        reader = pypdf.PdfReader(pdf_path)
        text = ""
        for page in reader.pages:
            text += page.extract_text() + "\n"
        with open(output_path, "w", encoding="utf-8") as f:
            f.write(text)
        print("Success with pypdf!")
        extracted = True
    except ImportError:
        print("pypdf not available.")

# Try PyPDF2
if not extracted:
    try:
        import PyPDF2
        print("Using PyPDF2...")
        reader = PyPDF2.PdfReader(pdf_path)
        text = ""
        for page in reader.pages:
            text += page.extract_text() + "\n"
        with open(output_path, "w", encoding="utf-8") as f:
            f.write(text)
        print("Success with PyPDF2!")
        extracted = True
    except ImportError:
        print("PyPDF2 not available.")

# Try pdfplumber
if not extracted:
    try:
        import pdfplumber
        print("Using pdfplumber...")
        with pdfplumber.open(pdf_path) as pdf:
            text = ""
            for page in pdf.pages:
                text += page.extract_text() + "\n"
        with open(output_path, "w", encoding="utf-8") as f:
            f.write(text)
        print("Success with pdfplumber!")
        extracted = True
    except ImportError:
        print("pdfplumber not available.")

# Try fitz (PyMuPDF)
if not extracted:
    try:
        import fitz
        print("Using PyMuPDF (fitz)...")
        doc = fitz.open(pdf_path)
        text = ""
        for page in doc:
            text += page.get_text()
        with open(output_path, "w", encoding="utf-8") as f:
            f.write(text)
        print("Success with fitz!")
        extracted = True
    except ImportError:
        print("fitz not available.")

if not extracted:
    print("Could not import any PDF library. Trying to install pypdf via pip...")
    # We will let the caller install it or run standard python scripts.
