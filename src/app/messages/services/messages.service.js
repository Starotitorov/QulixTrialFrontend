import MessageBuilderDirector from '../utils/message-builder-director';
import MessageParser from '../utils/message-parser';

export default class MessagesService {
    constructor($q, authHttpService, APP_CONFIG) {
        this._q = $q;
        this._authHttpService = authHttpService;
        this._messageBuilderDirector = new MessageBuilderDirector();
        this._messageParser = new MessageParser();

        this._baseUrl = `${APP_CONFIG.apiPath}/users/me/messages`;
    }

    list(params) {
        return this._authHttpService.get(this._baseUrl, { params: params })
            .then(response => this._parse(response));
    }

    get(id) {
        const deferred = this._q.defer();
        this._authHttpService.get(`${this._baseUrl}/${id}`)
            .then(
                response => {
                    const message = this._messageBuilderDirector.buildMessage(response.data);
                    deferred.resolve(message);
                },
                error => deferred.reject(error)
            );
        return deferred.promise;
    }

    delete(id) {
        return this._authHttpService.delete(`${this._baseUrl}/${id}`)
            .then(response => this._parse(response));
    }

    send(message) {
        return this._authHttpService.post(
            `${this._baseUrl}/send`,
            {
                raw: this._messageParser.parseMessage(message)
            }
        )
            .then(response => this._parse(response));
    }

    _parse(response) {
        return response.data;
    }
}

MessagesService.$inject = ['$q', 'authHttpService', 'APP_CONFIG'];
