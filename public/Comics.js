var request = require('request')
    , util    = require('util')
    , Q       = require('q');

module.exports = function(options, utils) {
    var pubkey    = options.publicKey
        , privkey   = options.privateKey
        , internals = {};

    // Pega a lista de comics no limite de 20
    internals.findAll = function(limit, offset, fn) {
        var deferred = Q.defer()
            , ts = utils.timestamp();

        if (typeof limit === 'function') {
            fn = limit;
            limit = 20;
        }

        if (typeof offset === 'function') {
            fn = offset;
            offset = 0;
        }

        request({
            url: 'http://gateway.marvel.com/v1/public/comics'
            , json: true
            , qs: {
                ts: ts
                , apikey: pubkey
                , hash: utils.createHash(ts, privkey, pubkey)
                , limit: limit || 20
                , offset: offset || 0
            }
        }, function(err, response) {
            if (err) {
                return deferred.reject(err);
            }

            if (response.statusCode !== 200) {
                return deferred.reject(new Error(response.body));
            }

            deferred.resolve(utils.formatResponse(response.body));

        });

        return deferred.promise.nodeify(fn);
    };

    // Pega uma comic usando um ID específico
    internals.find = function(id, fn) {
        var deferred = Q.defer()
            , ts = utils.timestamp();

        request({
            url: 'http://gateway.marvel.com/v1/public/comics/' + id
            , json: true
            , qs: {
                ts: ts
                , apikey: pubkey
                , hash: utils.createHash(ts, privkey, pubkey)
            }
        }, function(err, response) {
            if (err) {
                return deferred.reject(err);
            }

            if (response.statusCode !== 200) {
                return deferred.reject(new Error(response.body));
            }

            deferred.resolve(utils.formatResponse(response.body));

        });

        return deferred.promise.nodeify(fn);
    };


    // Pega uma lista de HQs filtradas por ID
    internals.stories = function(id, limit, offset, fn) {
        if (typeof limit === 'function') {
            fn = limit;
            limit = 20;
        }

        if (typeof offset === 'function') {
            fn = offset;
            offset = 0;
        }

        var deferred = Q.defer()
            , ts = utils.timestamp();

        request({
            url: util.format('http://gateway.marvel.com/v1/public/comics/%s/stories', id)
            , json: true
            , qs: {
                ts: ts
                , apikey: pubkey
                , hash: utils.createHash(ts, privkey, pubkey)
                , limit: limit || 20
                , offset: offset || 0
            }
        }, function(err, response) {
            if (err) {
                return deferred.reject(err);
            }

            if (response.statusCode !== 200) {
                return deferred.reject(new Error(response.body));
            }

            deferred.resolve(utils.formatResponse(response.body));

        });

        return deferred.promise.nodeify(fn);
    };

    return internals;
};