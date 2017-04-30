export default class MessageParser {
    parseMessage(message) {
        let data = '';
        for(let header in message.headers) {
            data += header += ": " + message.headers[header] + "\r\n";
        }
        data += "\r\n" + message.body;
        return btoa(data).replace(/\+/g, '-').replace(/\//g, '_');
    }
}
