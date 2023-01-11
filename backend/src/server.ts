import { app } from './app'
import mongoose from 'mongoose';

const porta = process.env.PORT || 5000;

const server = app.listen(porta, () => {
    console.log(`App ouvindo na porta ${porta}`)
})

process.on('SIGINT', ()=>{
    server.close()
    console.log("App finalizado")
})

mongoose.connect(`mongodb+srv://sharenergy:sharenergy@ector-sharenergy.xnorzef.mongodb.net/?retryWrites=true&w=majority`)

