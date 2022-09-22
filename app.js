import express from 'express'
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url))
const app = express()
app.use(express.static(__dirname + '/')); 
app.listen(5001,()=>{
	console.log('server listening on port 5001')
})
