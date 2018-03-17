/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**
 * This sample demonstrates a simple skill built with the Amazon Alexa Skills
 * nodejs skill development kit.
 * This sample supports multiple lauguages. (en-US, en-GB, de-DE).
 * The Intent Schema, Custom Slots and Sample Utterances for this skill, as well
 * as testing instructions are located at https://github.com/alexa/skill-sample-nodejs-fact
 **/

'use strict';
const Alexa = require('alexa-sdk');

//=========================================================================================================================================
//TODO: The items below this comment need your attention.
//=========================================================================================================================================

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.
//Make sure to enclose your value in quotes, like this: const APP_ID = 'amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1';
const APP_ID = undefined;

const SKILL_NAME = 'History of Bitcoin Facts';
const GET_FACT_MESSAGE = "Here's your fact: ";
const HELP_MESSAGE = 'You can say tell me a History of Bitcoin fact, or, you can say exit... What can I help you with?';
const HELP_REPROMPT = 'What can I help you with?';
const STOP_MESSAGE = 'Goodbye!';

//=========================================================================================================================================
//TODO: Replace this data with your own.  You can find translations of this data at http://github.com/alexa/skill-sample-node-js-fact/lambda/data
//=========================================================================================================================================
const data = [
    'On August 18th of 2008 the domain named bitcoin.org was registered.'
    'On October 31st of 2008 Satoshi Nakamoto\'s paper titled Bitcoin: A Peer-to-Peer Electronic Cash System was linked to in a cryptography mail list.'
    'In January of 2009 the first open source bitcoin client was released.'
    'Satoshi Nakamoto mined the genesis block in January of 2009.'
    'The genesis block issued a reward of 50 bitcoins.'
    'Embedded in the genesis block\'s coinbase is the text \"The Times 03/Jan/2009 Chancellor on brink of second bailout for banks.\"'
    'Programmer Hal Finney received the first ever bitcoin transaction.'
    'The first bitcoin transaction was between Satoshi Nakamoto and programmer Hal Finney.  Hal Finney received 10 bitcoins.'
    'Nakamoto is estimated to have mined 1 million bitcoins before ending his involvement in bitcoin.'
    'Gavin Andersen became the lead bitcoin developer at the Bitcoin Foundation after Satoshi Nakamoto ended his involvement.'
    'The value of the first bitcoins were negotiated by individuals on the bitcoin forum.'
    'One early transaction of bit coins resulted in the indirect purchase of two Papa Johns pizzas.  The transaction cost 10,000 bitcoins.'
    'A major vulnerability in bit coin was exploited in August of 2010 which allowed 184 billion bit coins to be generated in one transaction.  Within hours this transaction was erased from the transaction log.  The vulnerability was patched and remains the only security flaw found and exploited in bitcoin\'s history.'
    'In January 2011 the Electronic Frontier Foundation started accepting bitcoins.  They stopped accepting them in June 2011 due to concerns about a lack of legal precedent around new currency systems. In May of 2013 they resumed accepting bitcoins again.'
    'In June of 2011 Wikileaks began accepting bitcoins for donations.'
    'In March of 2012 WeUseCoins published the first viral video which has over 6.4 million views.'
    'In September of 2011 Bitcoin Magazine was founded.'
    'In September of 2012 the Bitcoin Foundation was launched.'
    'In October 2012 BitPay reported having over 1,000 merchants accepting bitcoin.'
    'In February of 2013 Coinbase reported selling $1 million worth of bitcoins at over $22 per bitcoin.'
    'In November of 2012 WordPress started accepting bitcoins.'
    'In February 2013 the Internet Archive announced it would begin accepting donations in bitcoin and that it would allow employees to receive part of their salaries in bitcoin.'
    'In April of 2013 payment processors BitInstant and Mt. Gox experienced processing delays due to insufficient capacity resulting in the exchange rate to drop from 266 dollars to 76 dollars before returning to 160 dollars within 6 hours.'
    'US authorities seized accounts associated with Mt. Gox for not registering as a money transmitter with FinCEN in the United States.'
    'On the 23rd of June two thousand thirteen the US Drug Enforcement Administration listed 11.02 bitcoins as a seized asset in a United States Department of Justice seizure notice pursuant to 21 U.S.C. 881.  It was the first time any government agency has claimed to have seized bitcoin.'
    'August sixth two thousand thirteen, Federal Judge Amos Mazzant of the Eastern District of Texas of the Fifth Circuit ruled bitcoins are \"a currency or a form of money" and are subject to the court\'s jurisdiction.  Germany\'s Finance Ministry subsumed bitcoins as \"unit of account\" a classification having legal and tax implications.'
    'The FBI seized roughly twenty six thousand bitcoins from the online market Silk Road during the arrest of alleged owner Ross William Ulbricht.'
    'In October two thousand thirteen, Robocoin and Bitcoinatics launched the worlds first bitcoin ATM in Vancouver, BC Canada.  Clients could sell or purchase bitcoin currency at a downtown coffee shop.  Coffee and bitcoint anyone?'
    'Univeristy of Nicosia announced that it would accept bitcoin as payment for tuition fees in November of 2013.'
    'China based bitcoin exchange BTC China became to largest bitcoin trading exchange by trade volume in November of two thousand thirteen.  The previous largest bitcoin exchanges were Mt. Gox and Bitstamp.'
];

//=========================================================================================================================================
//Editing anything below this line might break your skill.
//=========================================================================================================================================

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.appId = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

const handlers = {
    'LaunchRequest': function () {
        this.emit('GetNewFactIntent');
    },
    'GetNewFactIntent': function () {
        const factArr = data;
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];
        const speechOutput = GET_FACT_MESSAGE + randomFact;

        this.response.cardRenderer(SKILL_NAME, randomFact);
        this.response.speak(speechOutput);
        this.emit(':responseReady');
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = HELP_MESSAGE;
        const reprompt = HELP_REPROMPT;

        this.response.speak(speechOutput).listen(reprompt);
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
};
