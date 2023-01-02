class PlayTimeHelper {
    constructor(private time: number) {}

    getTimeString(): string {
        const hours = Math.floor(this.time / 60);
        const minutes = this.time - (hours * 60);

        return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
    }
}

export { PlayTimeHelper };