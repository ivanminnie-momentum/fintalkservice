const dialogflow = require('@google-cloud/dialogflow');
const credentialsConfig = require('./finbot-htbq-fb2ea690bda3.json');

const uuid = require('uuid');
const projectId = 'finbot-htbq';

/**
 * Send a query to the dialogflow agent, and return the query result.
 * @param {string} projectId The project to be used
 */
async function chat(chatMessage) {
    const sessionId = uuid.v4(); // per open window not per call

    let config = {
        credentials: {
            private_key: credentialsConfig.private_key,
            client_email: credentialsConfig.client_email
        }
    }

    const sessionClient = new dialogflow.SessionsClient(config);
    const sessionPath = sessionClient.projectAgentSessionPath(
        projectId,
        sessionId
    );

    const request = {
        session: sessionPath,
        queryInput: {
            text: {
                text: chatMessage,
                languageCode: 'en-US',
            },
        },
    };

    // Send request and log result
    const responses = await sessionClient.detectIntent(request);
    console.log('Detected intent');
    const result = responses[0].queryResult;
    console.log(`  Query: ${result.queryText}`);
    console.log(`  Response: ${result.fulfillmentText}`);
    if (result.intent) {
        console.log(`  Intent: ${result.intent.displayName}`);
    } else {
        console.log('  No intent matched.');
    }

    return result.fulfillmentText;
}

module.exports = {
    chat
};
