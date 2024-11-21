export function toggleFavorite(carId: string): void {
    let favorites: string[] = JSON.parse(localStorage.getItem('favorites') || '[]');
    if (favorites.includes(carId)) {
      favorites = favorites.filter(id => id !== carId);
    } else {
      favorites.push(carId);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }
  
  export function isFavorite(carId: string): boolean {
    const favorites: string[] = JSON.parse(localStorage.getItem('favorites') || '[]');
    return favorites.includes(carId);
  }
  