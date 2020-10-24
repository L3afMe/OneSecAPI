import {OneSecMailbox} from '../lib';

const oneSec = new OneSecMailbox('test', 'esiix.com');
oneSec.getMail().then(mailbox => {
	for(let mail of mailbox){
		console.log(`Found an email from ${mail.getSender()}\n` +
			`Subject: ${mail.getSubject()}\n` +
			`Body: ${mail.getTextBody()}\n` +
			`Attachment Count: ${mail.getAttachments().length}`);
	}
});
