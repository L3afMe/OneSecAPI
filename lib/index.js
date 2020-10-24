const fetch = require('node-fetch');

// noinspection JSUnusedGlobalSymbols
class OneSecMessageAttachment {
	/**
	 * Returns the attachment file name
	 * @returns string
	 */
	getFileName = () => this.fileName;
	
	/**
	 * Returns the attachment download URL
	 * @returns string
	 */
	getFileURL = () => `https://www.1secmail.com/api/v1/?action=download&login=${this.username}&domain=${this.domain}&id=${this.id}&file=${this.fileName}`;
	
	/**
	 * Returns the attachment file size
	 * @returns number
	 */
	getFileSize = () => this.fileSize;
	
	/**
	 * Returns the attachment content type
	 * @returns string
	 */
	getContentType = () => this.contentType;
	
	/**
	 * Initializes a {@link OneSecMessageAttachment} object
	 * @constructor
	 * @param mailbox {OneSecMailbox} - OneSecMailbox object used for domain, ID and username
	 * @param json {{filename: string, size: number, contentType: string}} - The username of the email
	 */
	constructor(mailbox, json) {
		this.mailbox     = mailbox;
		this.id          = id;
		this.fileName    = json.filename;
		this.fileSize    = json.size;
		this.contentType = json.contentType;
	}
}

// noinspection JSUnusedGlobalSymbols
class OneSecMessage {
	/**
	 * Returns the 1secMAIL ID
	 * @returns number
	 */
	getID = () => this.id;
	
	/**
	 * Returns the mail sender email address
	 * @returns string
	 */
	getSender = () => this.sender;
	
	/**
	 * Returns the mail subject line
	 * @returns string
	 */
	getSubject = () => this.subject;
	
	/**
	 * Returns the Date mail was received
	 * @returns Date
	 */
	getDate = () => this.date;
	
	/**
	 * Returns a list of attachments
	 * @returns OneSecMessageAttachment[]
	 */
	getAttachments = () => this.attachments;
	
	/**
	 * Returns the mail body
	 * @returns string
	 */
	getBody = () => this.body;
	
	/**
	 * Returns the mail plain text body
	 * @returns string
	 */
	getTextBody = () => this.textBody;
	
	/**
	 * Returns the mail html body
	 * @returns string
	 */
	getHtmlBody = () => this.htmlBody;
	
	/**
	 * Initializes a {@link OneSecMessage} object
	 * @constructor
	 * @param mailbox {OneSecMailbox} - OneSecMailbox object used for domain, ID and username
	 * @param json {{id: number, from: string, subject: string, date: string, attachments: [{fileName: string, contentType: string, size: number}], body: string, textBody: string, htmlBody: string}} - The username of the email
	 */
	constructor(mailbox, json) {
		this.mailbox     = mailbox;
		this.id          = json.id;
		this.sender      = json.from;
		this.subject     = json.subject;
		this.date        = new Date(json.date);
		this.attachments = json.attachments.filter(attachment => 'filename' in attachment && 'size' in attachment && 'contentType' in attachment)
							   .map(attachment => new OneSecMessageAttachment(this.mailbox, attachment));
		this.body        = json.body;
		this.textBody    = json.textBody;
		this.htmlBody    = json.htmlBody;
	}
}

// noinspection SpellCheckingInspection, JSUnusedGlobalSymbols
class OneSecMailbox {
	/**
	 * Returns list of valid domains
	 * @static
	 * @returns {[string, string, string, string, string]}
	 */
	static getDomains = () => {
		return ['1secmail.com', '1secmail.org', '1setmail.net', 'wwjmp.com', 'esiix.com'];
	}
	
	/**
	 * Fetch list of {@link OneSecMessage}
	 * @returns Promise<OneSecMessage[]>
	 */
	getMail = () => {
		return new Promise(resolve => {
			fetch(`https://www.1secmail.com/api/v1/?action=getMessages&login=${this.username}&domain=${this.domain}`)
				.then(res => res.json())
				.then(json => {
					const messageList = [];
					Promise.all(json.map(mail => {
						return new Promise(resolve => {
							if ('id' in mail) {
								fetch(`https://www.1secmail.com/api/v1/?action=readMessage&login=${this.username}&domain=${this.domain}&id=${mail.id}`)
									.then(res => res.json()).then(json => {
									if ('id' in json && 'from' in json && 'subject' in json && 'date' in json &&
										'attachments' in json && 'body' in json && 'textBody' in json && 'htmlBody' in json) {
										messageList.push(new OneSecMessage(this, json));
									}
									resolve();
								});
							} else {
								resolve();
							}
						});
					})).then(() => resolve(messageList));
				});
		});
	};
	
	/**
	 * Initializes a {@link OneSecMailbox} object
	 * @constructor
	 * @param username {string} - The username of the email
	 * @param domain {('1secmail.com'|'1secmail.org'|'1setmail.net'|'wwjmp.com'|'esiix.com')} - The email domain (Not including the '@')
	 */
	constructor(username, domain) {
		this.username = username;
		this.domain   = domain;
	}
}

module.exports = {OneSecMailbox, OneSecMessage, OneSecMessageAttachment};
