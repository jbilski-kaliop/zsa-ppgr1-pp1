export function getIntValueFromInputById(id: string): number {
    const element = document.getElementById(id) as HTMLInputElement;
    const value : number = element instanceof HTMLInputElement ? parseInt(element.value.trim()) : NaN;

    return value;
}

export function clearInput(...id : string[]): void {
    id.forEach((idVal) => {
        const element = document.getElementById(idVal) as HTMLInputElement;
        if (element instanceof HTMLInputElement) {
            element.value = '';
        };
    });
}
