export class ModalConfiguration {
    public headerText: string;
    public primaryButtonText: string;
    public secondaryButtonText: string;

    constructor(
        headerText: string,
        primaryButtonText: string,
        secondaryButtonText: string
    ) {
        this.headerText = headerText;
        this.primaryButtonText = primaryButtonText;
        this.secondaryButtonText = secondaryButtonText;
    }
}