import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    const filename = path.join(process.cwd(), 'data' ,'/main.json');
    const fileData = fs.readFileSync(filename);
    const data = JSON.parse(fileData);
    res.status(200).json(data)
}