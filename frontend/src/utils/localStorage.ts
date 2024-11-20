export function toggleFavorite(carId: string): void {
    let favorites = JSON.parse(localStorage.getItem('favorites') as string) || [];
    if (favorites.includes(carId)) {
        favorites = favorites.filter((id: string) => id !== carId);
    } else {
        favorites.push(carId);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

export function isFavorite(carId: string): boolean {
    const favorites = JSON.parse(localStorage.getItem('favorites') as string) || [];
    return favorites.includes(carId);
}
