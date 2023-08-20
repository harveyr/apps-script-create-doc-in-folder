function onOpen() {
  DocumentApp.getUi()
    .createMenu('HUtils')
    .addItem('Create doc in this folder', 'handleCreate')
    .addToUi()
}

function handleCreate() {
  // https://developers.google.com/apps-script/reference/document/document
  const currentDoc = DocumentApp.getActiveDocument()
  const ui = DocumentApp.getUi()

  // https://developers.google.com/apps-script/reference/drive/file
  const driveFile = DriveApp.getFileById(currentDoc.getId())
  const parents = driveFile.getParents()
  if (parents.hasNext()) {
    const parent = parents.next()
    Logger.log('Found parent folder: ' + parent.getName())
  } else {
    Logger.log('No parent folder found')
  }

  return

  // https://developers.google.com/apps-script/reference/document/range
  const selection = currentDoc.getSelection()
  if (!selection) {
    ui.alert('I need a selection')
    return
  }

  // https://developers.google.com/apps-script/reference/document/range
  const elements = selection.getRangeElements()

  if (elements.length > 1) {
    ui.alert(
      `${elements.length} elements are selected. I don't know what to do here yet.`
    )
    return
  }

  const selected = elements[0].getElement().asText()
  const taskDocName = `[task] ${selected.getText()}`

  let docId: string = ''
  let docUrl: string = ''

  const existingList = DriveApp.getFilesByName(taskDocName)
  if (existingList.hasNext()) {
    const existing = existingList.next()
    docId = existing.getId()
    docUrl = existing.getUrl()
    console.log('Found existing doc', docUrl)
  } else {
    const newDoc = DocumentApp.create(taskDocName)
    docId = newDoc.getId()
    docUrl = newDoc.getUrl()
    console.log('Created new doc', newDoc.getUrl())
  }

  if (!docId) {
    throw new Error(`Failed to set docId`)
  }
  if (!docUrl) {
    throw new Error(`Failed to set docUrl`)
  }

  selected.setText(taskDocName).setLinkUrl(docUrl)

  // const destFolder = DriveApp.getFolderById(TASK_NOTES_FOLDER_ID)
  // DriveApp.getFileById(docId).moveTo(destFolder)
}