const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3001;

// Middlewares
app.use(cors());
app.use(express.json());

// Path to C:\Users\Public (Windows)
// Fallback for non-windows if needed
const PUBLIC_DIR = process.platform === 'win32' 
  ? 'C:\\Users\\Public' 
  : '/tmp/public'; // Fallback for testing on other OS

// Ensure the target directory exists (though Public usually does)
if (!fs.existsSync(PUBLIC_DIR)) {
    try {
        fs.mkdirSync(PUBLIC_DIR, { recursive: true });
    } catch (err) {
        console.error('Error creating directory:', err);
    }
}

app.post('/api/save', (req, res) => {
    const { filename, content, folder } = req.body;
    
    if (!filename || !content) {
        return res.status(400).json({ error: 'Filename and content are required' });
    }

    let targetDir = PUBLIC_DIR;
    if (folder) {
        targetDir = path.join(PUBLIC_DIR, folder);
        if (!fs.existsSync(targetDir)) {
            fs.mkdirSync(targetDir, { recursive: true });
        }
    }

    const filePath = path.join(targetDir, filename);

    fs.writeFile(filePath, content, (err) => {
        if (err) {
            console.error('Failed to save file:', err);
            return res.status(500).json({ error: 'Failed to save file to system' });
        }
        console.log(`File saved: ${filePath}`);
        res.json({ message: 'File saved successfully', path: filePath });
    });
});

app.listen(PORT, () => {
    console.log(`Examullator Save Server running at http://localhost:${PORT}`);
    console.log(`Target directory: ${PUBLIC_DIR}`);
});
