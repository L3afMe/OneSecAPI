const { OneSecMailbox } = require("../lib");

const oneSec = new OneSecMailbox("test", "esiix.com");

oneSec.getMail().then((mailbox) => {
  mailbox.forEach((msg, i) => {
    console.log(
      `Email #${i + 1} (of ${mailbox.length})\n` +
        ` From: ${msg.getSender()}\n` +
        ` Subject: ${msg.getSubject()}\n` +
        ` Body: ${msg.getTextBody()}\n` +
        ` Date: ${msg.getDate()}\n` +
        ` Attachment Count: ${msg.getAttachments().length}`
    );
  });
});
