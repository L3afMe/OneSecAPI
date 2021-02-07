# OneSecAPI

---

## Installation

Using `npm`
> npm install onesec-api

Using `yarn`
> yarn add onesec-api

---

## Example

> npm run test

```javascript
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
```

---

## Documentation

* **[OneSecMailbox](#onesecmailbox)**
    * [Constructor](#new-onesecmailboxusername-string-domain-string-onesecmailboxonesecmailbox)
    * [OneSecMailbox~getMail](#onesecmailboxonesecmailboxgetmail-promisehttpsdevelopermozillaorgen-usdocswebjavascriptreferenceglobal_objectspromiseonesecmessageonesecmessage)
    * [OneSecMailbox.getDomains](#onesecmailboxonesecmailboxgetdomains-string)
* **[OneSecMessage](#onesecmessage)**
    * [OneSecMessage~getID](#onesecmessageonesecmessagegetid-number)
    * [OneSecMessage~getSender](#onesecmessageonesecmessagegetsender-string)
    * [OneSecMessage~getSubject](#onesecmessageonesecmessagegetsubject-string)
    * [OneSecMessage~getDate](#onesecmessageonesecmessagegetdate-datehttpsdevelopermozillaorgen-usdocswebjavascriptreferenceglobal_objectsdate)
    * [OneSecMessage~getAttachments](#onesecmessageonesecmessagegetattachments-onesecmessageattachmentonesecmessageattachment)
    * [OneSecMessage~getBody](#onesecmessageonesecmessagegetbody-string)
    * [OneSecMessage~getTextBody](#onesecmessageonesecmessagegettextbody-string)
    * [OneSecMessage~getHtmlBody](#onesecmessageonesecmessagegethtmlbody-string)
* **[OneSecMessageAttachment](#onesecmessageattachment)**
    * [OneSecMessageAttachment~getFileName](#onesecmessageattachmentonesecmessageattachmentgetfilename-string)
    * [OneSecMessageAttachment~getFileURL](#onesecmessageattachmentonesecmessageattachmentgetfileurl-string)
    * [OneSecMessageAttachment~getFileSize](#onesecmessageattachmentonesecmessageattachmentgetfilesize-number)
    * [OneSecMessageAttachment~getContentType](#onesecmessageattachmentonesecmessageattachmentgetcontenttype-string)

## OneSecMailbox

---
<details><summary>Methods</summary>

### new OneSecMailbox(username: string, domain: string): [OneSecMailbox](#onesecmailbox);

**Arguments**

* **Username** - The username of the email
* **Domain** - The email domain (Not including the '@')
    * **Valid Domains:** `1secmail.com` `1secmail.org` `1secmail.net` `wwjmp.com` `esiix.com`

**Description**

* Initializes a [OneSecMailbox](#onesecmailbox) object

---

### [OneSecMailbox](#onesecmailbox)~getMail(): [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[OneSecMessage](#onesecmessage)[]>

**Description**

* Fetch list of [OneSecMessage](#onesecmessage)

---

### [OneSecMailbox](#onesecmailbox).getDomains(): string[]

**Description**

* Returns list of valid domains

</details>

## OneSecMessage

---

<details><summary>Methods</summary>

### [OneSecMessage](#onesecmessage)~getID(): number

**Description**

* Returns the 1secMAIL ID

---

### [OneSecMessage](#onesecmessage)~getSender(): string

**Description**

* Returns the mail body

---

### [OneSecMessage](#onesecmessage)~getSubject(): string

**Description**

* Returns the mail plain text body

---

### [OneSecMessage](#onesecmessage)~getDate(): [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)

**Description**

* Returns the [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) mail was
  received

---

### [OneSecMessage](#onesecmessage)~getAttachments(): [OneSecMessageAttachment](#onesecmessageattachment)[]

**Description**

* Returns a list of attachments

---

### [OneSecMessage](#onesecmessage)~getBody(): string

**Description**

* Returns the mail body

---

### [OneSecMessage](#onesecmessage)~getTextBody(): string

**Description**

* Returns the mail plain text body

---

### [OneSecMessage](#onesecmessage)~getHtmlBody(): string

**Description**

* Returns the mail html body

</details>

---

## OneSecMessageAttachment

<details><summary>Methods</summary>

### [OneSecMessageAttachment](#onesecmessageattachment)~getFileName(): string

**Description**

* Returns the attachment file name

---

### [OneSecMessageAttachment](#onesecmessageattachment)~getFileURL(): string

**Description**

* Returns the attachment download URL

---

### [OneSecMessageAttachment](#onesecmessageattachment)~getFileSize(): number

**Description**

* Returns the attachment file size

---

### [OneSecMessageAttachment](#onesecmessageattachment)~getContentType(): string

**Description**

* Returns the attachment content type

</details>
