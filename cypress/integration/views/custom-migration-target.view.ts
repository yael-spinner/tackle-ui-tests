export enum CustomMigrationTargetView {
    createSubmitButton = "button[id='identity-form-submit']:contains('Create')",
    editSubmitButton = "button[id='identity-form-submit']:contains('Save')",
    actionsButton = "button[aria-label=Actions]",
    nameInput = "#name",
    descriptionInput = "#description",
    imageInput = "#custom-migration-target-upload-image-filename",
    ruleInput = "div[name='customRulesFiles'] > input[accept='.xml']",
    takeMeThereNotification = "Take me there",
    repositoryTypeDropdown = "#repo-type-select-toggle",
    repositoryUrl = "#sourceRepository",
    branch = "#branch",
    rootPath = "#rootPath",
    credentialsDropdown = "#associated-credentials-select-toggle",
    retrieveFromARepositoryRadio = "#repository",
}