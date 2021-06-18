const { OneSecMailbox } = require("../lib");

let validDomains = [];
OneSecMailbox.getDomains().then(domains => {
  console.log("Available domains:\n" + domains.join('\n'));
  validDomains = domains;
}).then(() => {
  const domain = validDomains[Math.floor(Math.random() * validDomains.length)];
  const oneSec = new OneSecMailbox("test", domain);
  console.log(`Testing with random domain: test@${domain}`);

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
});
