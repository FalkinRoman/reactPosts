import axios from 'axios';


export class FormService {


    //Отправить форму на телеграмм
    static async sendFormToTelegram(formData) {
        const botToken = '5886546930:AAFbwo3GQkztX6WhgqJjwbtl8GRy1GvTFP8';
        const chatId = '1346484314'
        const response = await axios.post(
            `https://api.telegram.org/bot${botToken}/sendMessage`,
            {
                chat_id: chatId,
                text: JSON.stringify(formData), // Просто пример, вы можете передать данные в нужном формате
            })
            return response;
    }
}


