import MessageBuilder from './message-builder';

export default class MessageBuilderDirector {
    buildMessage(data) {
        const builder = new MessageBuilder(data);
        return builder
            .buildHeader('from')
            .buildHeader('to')
            .buildHeader('subject')
            .buildHeader('date')
            .buildBody()
            .getMessage();
    }
}
