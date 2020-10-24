// noinspection JSUnusedGlobalSymbols
export class OneSecMessageAttachment {
	private mailbox: OneSecMailbox;
	private id: number;
	private fileName: string;
	private fileSize: number;
	private contentType: string;
	
	/**
	 * Returns the attachment file name
	 * @returns string
	 */
	getFileName: () => string;
	
	/**
	 * Returns the attachment download URL
	 * @returns string
	 */
	getFileURL: () => string;
	
	/**
	 * Returns the attachment file size
	 * @returns number
	 */
	getFileSize: () => number;
	
	/**
	 * Returns the attachment content type
	 * @returns string
	 */
	getContentType: () => string;
	
	/**
	 * Initializes a {@link OneSecMessageAttachment} object
	 * @constructor
	 * @param mailbox {OneSecMailbox} - OneSecMailbox object used for domain, ID and username
	 * @param json {{filename: string, size: number, contentType: string}} - The username of
	 *     the email
	 */
	constructor(mailbox: OneSecMailbox, json: {
		filename: string;
		size: number;
		contentType: string;
	});
}

// noinspection JSUnusedGlobalSymbols
export class OneSecMessage {
	private mailbox: OneSecMailbox;
	private id: number;
	private sender: string;
	private subject: string;
	private date: Date;
	private attachments: OneSecMessageAttachment[];
	private body: string;
	private textBody: string;
	private htmlBody: string;
	
	/**
	 * Returns the 1secMAIL ID
	 * @returns number
	 */
	getID: () => number;
	
	/**
	 * Returns the mail sender email address
	 * @returns string
	 */
	getSender: () => string;
	
	/**
	 * Returns the mail subject line
	 * @returns string
	 */
	getSubject: () => string;
	
	/**
	 * Returns the Date mail was received
	 * @returns Date
	 */
	getDate: () => Date;
	
	/**
	 * Returns a list of attachments
	 * @returns OneSecMessageAttachment[]
	 */
	getAttachments: () => OneSecMessageAttachment[];
	
	/**
	 * Returns the mail body
	 * @returns string
	 */
	getBody: () => string;
	
	/**
	 * Returns the mail plain text body
	 * @returns string
	 */
	getTextBody: () => string;
	
	/**
	 * Returns the mail html body
	 * @returns string
	 */
	getHtmlBody: () => string;
	
	/**
	 * Initializes a {@link OneSecMessage} object
	 * @constructor
	 * @param mailbox {OneSecMailbox} - OneSecMailbox object used for domain, ID and username
	 * @param json {{id: number, from: string, subject: string, date: string, attachments: [{fileName: string,
	 *     contentType: string, size: number}], body: string, textBody: string, htmlBody: string}} - The username of
	 *     the email
	 */
	constructor(mailbox: OneSecMailbox, json: {
		id: number;
		from: string;
		subject: string;
		date: string;
		attachments: [
			{
				fileName: string;
				contentType: string;
				size: number;
			}
		];
		body: string;
		textBody: string;
		htmlBody: string;
	});
}

// noinspection SpellCheckingInspection, JSUnusedGlobalSymbols
export class OneSecMailbox {
	private username: string;
	private domain: '1secmail.com' | '1secmail.org' | '1setmail.net' | 'wwjmp.com' | 'esiix.com';
	
	/**
	 * Returns list of valid domains
	 * @returns {[string, string, string, string, string]}
	 */
	static getDomains: () => string[];
	
	/**
	 * Fetch list of {@link OneSecMessage}
	 * @returns Promise<OneSecMessage[]>
	 */
	getMail: () => Promise<OneSecMessage[]>;
	
	/**
	 * Initializes a {@link OneSecMailbox} object
	 * @constructor
	 * @param username {string} - The username of the email
	 * @param domain {('1secmail.com'|'1secmail.org'|'1setmail.net'|'wwjmp.com'|'esiix.com')} - The email domain (Not
	 *     including the '@')
	 */
	constructor(username: string, domain: ('1secmail.com' | '1secmail.org' | '1setmail.net' | 'wwjmp.com' | 'esiix.com'));
}
